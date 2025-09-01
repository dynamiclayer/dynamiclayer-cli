// AvatarGroup.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, textStyles } from "../../styles/style";
import Avatar from "./Avatar";

const SIZE_MAP = {
  lg: 56,
  xs: 32,
};

const COUNT_TEXT_STYLE_MAP = {
  lg: { ...textStyles.text_xl_semibold },
  xs: { ...textStyles.text_xs_semibold },
};

const OFFSET = 16;

const AvatarGroup = ({ avatars = [], size = "lg", max = 2, style }) => {
  const diameter = SIZE_MAP[size];
  const countTextStyle = COUNT_TEXT_STYLE_MAP[size];

  const total = avatars.length;
  const first = avatars[0];
  const second = avatars[1];
  const remainingCount = Math.max(0, total - 1);
  
  const showSecondAsNumber = total >= max + 1;
  const showSecondAsAvatar = total === max;

  const containerSize =
    total >= 2 ? diameter + OFFSET : diameter;

  return (
    <View
      style={[
        styles.root,
        { width: containerSize, height: containerSize },
        style,
      ]}
      accessibilityRole="group"
    >

      {first && (
        <View
          style={[
            styles.slot,
            { top: 0, left: 0, width: diameter, height: diameter, zIndex: 1 },
          ]}
        >
          <Avatar
            type={first.type || "icon"}
            state={first.state || "default"}
            size={size}
            initials={first.initials}
            source={first.source}
          />
        </View>
      )}

      {(showSecondAsAvatar || showSecondAsNumber) && (
        <View
          style={[
            styles.slot,
            { top: OFFSET, left: OFFSET, width: diameter, height: diameter, zIndex: 2 },
          ]}
        >
          {showSecondAsAvatar ? (
            <Avatar
              type={second?.type || "icon"}
              state={second?.state || "default"}
              size={size}
              initials={second?.initials}
              source={second?.source}
            />
          ) : (
            <View
              style={[
                styles.countCircle,
                { width: diameter, height: diameter, borderRadius: diameter / 2 },
              ]}
            >
              <Text
                style={[
                  styles.countText,
                  {
                    fontSize: countTextStyle.fontSize,
                    lineHeight: countTextStyle.lineHeight,
                    ...(countTextStyle.letterSpacing !== undefined
                      ? { letterSpacing: countTextStyle.letterSpacing }
                      : null),
                  },
                ]}
              >
                {remainingCount}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "relative",
  },
  slot: {
    position: "absolute",
  },
  countCircle: {
    backgroundColor: colors.grey100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  countText: {
    ...textStyles.text_sm_semibold,
    color: colors.grey500,
    textAlign: "center",
  },
});

export default AvatarGroup;
