// Alert.js
import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { colors, paddings, rounded, textStyles } from "../../styles/style";
import SuccessIcon from "../../assets/icons/successIcon";
import ErrorIcon from "../../assets/icons/errorIcon";
import InformationIcon from "../../assets/icons/informationIcon";
import DisabledIcon from "../../assets/icons/disabledIcon";
import CloseIcon from "../../assets/icons/closeIcon";

const DISPLAY_DURATION_MS = 6000;
const ICON_SIZE = 24;

const Alert = ({ type = "information", title, description, closeIcon = true, stay = false }) => {
  const BG = colors.white;
  const BORDER = colors.grey200;

  const renderIcon = () => {
    switch (type) {
      case "success":
        return <SuccessIcon width={ICON_SIZE} height={ICON_SIZE} />;
      case "error":
        return <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />;
      case "warning":
        return <DisabledIcon width={ICON_SIZE} height={ICON_SIZE} />;
      case "information":
      default:
        return <InformationIcon width={ICON_SIZE} height={ICON_SIZE} fill={colors.violet500} />;
    }
  };

  // Reanimated
  const translateY = useSharedValue(-24);
  const opacity = useSharedValue(0);
  const iconScale = useSharedValue(0.9);
  const collapsed = useSharedValue(0);

  const bannerStyle = useAnimatedStyle(() => {
    const collapse = collapsed.value;
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
      height: collapse ? 0 : undefined,
      marginTop: collapse ? 0 : undefined,
      marginBottom: collapse ? 0 : undefined,
      paddingTop: collapse ? 0 : paddings.p_16,
      paddingBottom: collapse ? 0 : paddings.p_16,
      borderWidth: collapse ? 0 : 1,
    };
  });

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: iconScale.value }],
  }));

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 200 });
    translateY.value = withSpring(0, { damping: 18, stiffness: 180 });
    iconScale.value = withSpring(1, { damping: 18, stiffness: 220 });
  }, [opacity, translateY, iconScale]);

  const dismiss = useCallback(() => {
    opacity.value = withTiming(0, { duration: 160 });
    translateY.value = withTiming(-20, { duration: 180 }, (finished) => {
      if (finished) collapsed.value = withTiming(1, { duration: 120 });
    });
  }, [opacity, translateY, collapsed]);

  useEffect(() => {
    if (stay) return;
    const id = setTimeout(dismiss, DISPLAY_DURATION_MS);
    return () => clearTimeout(id);
  }, [stay, dismiss]);

  return (
    <View pointerEvents="box-none" style={styles.host}>
      <SafeAreaView pointerEvents="box-none" style={styles.safe}>
        <Animated.View
          style={[
            styles.banner,
            { backgroundColor: BG, borderColor: BORDER },
            bannerStyle,
          ]}
          accessibilityRole="alert"
          pointerEvents="auto"
        >
          <Animated.View style={[styles.iconContainer, iconStyle]}>
            {renderIcon()}
          </Animated.View>

          <View style={styles.contentContainer}>
            {!!title && <Text style={styles.title}>{title}</Text>}
            {!!description && <Text style={styles.description}>{description}</Text>}
          </View>

          {closeIcon && (
          <TouchableOpacity
            onPress={dismiss}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={styles.closeButton}
            accessibilityLabel="Close notification"
            accessibilityRole="button"
          >
            <CloseIcon width={ICON_SIZE} height={ICON_SIZE} />
          </TouchableOpacity>
          )}
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  host: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    zIndex: 9999,
  },
  safe: {
    paddingHorizontal: paddings.p_16,
  },
  banner: {
    borderRadius: rounded.rounded_lg,
    borderStyle: "solid",
    borderColor: colors.grey200,
    borderWidth: 1,
    flexDirection: "row",
    gap: paddings.p_8,
    paddingHorizontal: paddings.p_16,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginRight: paddings.p_8,
  },
  contentContainer: {
    flex: 1,
    gap: paddings.p_8,
  },
  title: {
    ...textStyles.text_base_semibold,
    color: colors.black,
    alignSelf: "stretch",
  },
  description: {
    ...textStyles.text_base_regular,
    color: colors.black,
    alignSelf: "stretch",
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});

export default Alert;
