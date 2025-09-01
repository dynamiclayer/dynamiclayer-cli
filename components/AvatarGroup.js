// AvatarGroup.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, textStyles } from "../styles/style";
import Avatar from "./ui/Avatar";

const SIZE_MAP = {
  lg: 56,
  md: 48,
  sm: 40,
  xs: 32,
};

const COUNT_TEXT_STYLE_MAP = {
  lg: { ...textStyles.text_xl_semibold },
  md: { ...textStyles.text_lg_semibold },
  sm: { ...textStyles.text_sm_semibold },
  xs: { ...textStyles.text_xs_semibold },
};

const OFFSET = 16;

const AvatarGroup = ({ avatars = [], size = "sm", max = 2, style }) => {
  const diameter = SIZE_MAP[size];
  const countTextStyle = COUNT_TEXT_STYLE_MAP[size];

  const total = avatars.length;
  const first = avatars[0];
  const second = avatars[1]; // nur genutzt, wenn total === 2
  const remainingCount = Math.max(0, total - 1); // für Kreis-Zahl bei total >= 3

  const showSecondAsNumber = total >= 3;
  const showSecondAsAvatar = total === 2;

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
      {/* Slot 1: erster Avatar (falls vorhanden) */}
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

      {/* Slot 2: zweiter Avatar (wenn genau 2) ODER Zahl im Kreis (wenn >=3) */}
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
