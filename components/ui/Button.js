// Button.js
import React, { useState, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, paddings, rounded, textStyles } from "../../styles/style";
import LoadingDots from "./LoadingDots";

const TYPE_STYLES = {
  primary: { backgroundColor: colors.violet500, textColor: colors.white },
  secondary: { backgroundColor: colors.grey800, textColor: colors.white },
  tertiary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey200,
    textColor: colors.black,
  },
  ghost: {
    backgroundColor: colors.transparent,
    textColor: colors.violet500,
    textDecorationLine: "underline",
  },
};

const INTERACTION_STYLES = {
  hover: {
    primary: { backgroundColor: colors.violet600 },
    secondary: { backgroundColor: colors.grey900 },
    tertiary: { backgroundColor: colors.grey50 },
    ghost: { textColor: colors.violet600 },
  },
  pressed: {
    primary: { backgroundColor: colors.violet700 },
    secondary: { backgroundColor: colors.black },
    tertiary: { backgroundColor: colors.grey100 },
    ghost: { textColor: colors.violet700 },
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
    ghost: { textColor: colors.grey500 },
  },
  loading: {},
};

const SIZE_STYLES = {
  xs: { height: 32, paddingHorizontal: paddings.p_12 },
  sm: { height: 40, paddingHorizontal: paddings.p_16 },
  md: { height: 48, paddingHorizontal: paddings.p_16 },
  lg: { height: 56, paddingHorizontal: paddings.p_24 },
};

const Button = ({
  onPress,
  text = "",
  type = "primary",
  size = "lg",
  iconLeft,
  iconRight,
  state = "default",
  scaling = "full",
  containerStyle,
}) => {
  const [pressState, setPressState] = useState("default");
  const derivedState = state === "default" ? pressState : state;
  const isInteractive = state === "default";
  const isDisabled = state === "disabled" || state === "loading";

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

  const handlePress = () => {
    if (!isInteractive || !onPress) return;
    onPress();
  };

  const handlePressIn = () => {
    if (!isInteractive) return;
    setPressState("pressed");
  };

  const handlePressOut = () => {
    if (!isInteractive) return;
    setPressState("default");
  };

  const resolvedLoadingColor =
    type === "ghost"
      ? colors.violet500
      : type === "tertiary"
      ? colors.black
      : combinedStyles.textColor;

  return (
    <Pressable
      style={[
        styles.button,
        scaling === "full" ? styles.fullWidth : styles.autoWidth,
        {
          backgroundColor: combinedStyles.backgroundColor,
          borderWidth: combinedStyles.borderWidth || 0,
          borderColor: combinedStyles.borderColor || "transparent",
          paddingHorizontal: combinedStyles.paddingHorizontal,
          height: combinedStyles.height,
          maxHeight: combinedStyles.height,
        },
        containerStyle,
      ]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={isDisabled}
    >
      <View style={styles.contentContainer}>
        {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}

        {state === "loading" ? (
          <View style={styles.loadingContainer}>
            <LoadingDots color={resolvedLoadingColor} />
          </View>
        ) : (
          <Text
            style={[
              styles.text,
              {
                color: combinedStyles.textColor,
                textDecorationLine:
                  combinedStyles.textDecorationLine || "none",
              },
            ]}
          >
            {text}
          </Text>
        )}

        {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: rounded.rounded_md,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    ...textStyles.text_base_bold,
    textAlign: "center",
  },
  fullWidth: {
    alignSelf: "stretch",
    flexGrow: 1,
  },
  autoWidth: {
    alignSelf: "flex-start",
  },
  iconLeft: {
    marginRight: paddings.p_8,
  },
  iconRight: {
    marginLeft: paddings.p_8,
  },
});

export default Button;
