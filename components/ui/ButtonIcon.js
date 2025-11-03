// ButtonIcon.js
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors, paddings, rounded } from "../../styles/style";

const TYPE_STYLES = {
  primary: { backgroundColor: colors.violet500, textColor: colors.white },
  secondary: { backgroundColor: colors.grey800, textColor: colors.white },
  tertiary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey200,
    textColor: colors.black,
  },
};

const INTERACTION_STYLES = {
  hover: {
    primary: { backgroundColor: colors.violet600 },
    secondary: { backgroundColor: colors.grey900 },
    tertiary: { backgroundColor: colors.grey50 },
  },
  pressed: {
    primary: { backgroundColor: colors.violet700 },
    secondary: { backgroundColor: colors.black },
    tertiary: { backgroundColor: colors.grey100 },
  },
  disabled: {
    primary: { backgroundColor: colors.grey100, textColor: colors.grey600 },
    secondary: { backgroundColor: colors.grey100, textColor: colors.grey600 },
    tertiary: {
      backgroundColor: colors.white,
      textColor: colors.grey500,
      borderColor: colors.grey500,
      borderWidth: 1,
    },
  },
};

const SIZE_STYLES = {
  xs: { height: 32, padding: paddings.p_4 },
  sm: { height: 40, padding: paddings.p_8 },
  md: { height: 48, padding: paddings.p_12 },
  lg: { height: 56, padding: paddings.p_16 },
};

const ButtonIcon = ({
  containerStyle,
  onPress,
  type = "secondary",
  size = "lg",
  icon,
  state = "default",
}) => {
  const [pressState, setPressState] = useState("default");
  const derivedState = state === "default" ? pressState : state;
  const isInteractive = state === "default";
  const isDisabled = state === "disabled";

  const combinedStyles = useMemo(() => {
    const base = TYPE_STYLES[type];
    const sizeStyle = SIZE_STYLES[size];
    const interaction = INTERACTION_STYLES[derivedState]?.[type] || {};
    return {
      ...base,
      ...sizeStyle,
      ...interaction,
    };
  }, [type, size, derivedState]);

  const handlePressIn = () => {
    if (!isInteractive) return;
    setPressState("pressed");
  };

  const handlePressOut = () => {
    if (!isInteractive) return;
    setPressState("default");
  };

  const handlePress = () => {
    if (!isInteractive || !onPress) return;
    onPress();
  };

  return (
    <Pressable
      style={[
        {
          backgroundColor: combinedStyles.backgroundColor,
          height: combinedStyles.height,
          borderWidth: combinedStyles.borderWidth || 0,
          borderColor: combinedStyles.borderColor || "transparent",
          padding: combinedStyles.padding,
          borderRadius: rounded.rounded_md,
          alignItems: "center",
          justifyContent: "center",
          maxHeight: combinedStyles.height,
          maxWidth: combinedStyles.height,
        },
        containerStyle,
      ]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={isDisabled}
    >
      <View style={styles.contentContainer}>
        {icon && <View style={styles.icon}>{icon}</View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  icon: {},
});

export default ButtonIcon;
