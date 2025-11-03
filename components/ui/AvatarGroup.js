// AvatarGroup.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, textStyles } from "../../styles/style";
import Avatar from "./Avatar";

const SIZE_MAP = {
  xs: 32,
  sm: 40,
  md: 48,
  lg: 56,
};

const COUNT_TEXT_STYLE_MAP = {
  xs: { ...textStyles.text_xs_semibold },
  sm: { ...textStyles.text_sm_semibold },
  md: { ...textStyles.text_base_semibold },
  lg: { ...textStyles.text_xl_semibold },
};

const OFFSET = 16;

const normalizeSizeKey = (size) => (SIZE_MAP[size] ? size : "lg");

const mapAvatarProps = (item, sizeKey) => ({
  type: item?.type || "icon",
  state: item?.state || item?.status || "default",
  size: sizeKey,
  image: item?.image ?? item?.source ?? null,
});

const AvatarGroup = ({ avatars = [], size = "lg", max = 2, style }) => {
  const sizeKey = normalizeSizeKey(size);
  const diameter = SIZE_MAP[sizeKey];
  const countTextStyle =
    COUNT_TEXT_STYLE_MAP[sizeKey] || COUNT_TEXT_STYLE_MAP.lg;

  const total = avatars.length;
  const clampedMax = Math.max(1, Math.min(2, max));
  const visibleLimit = Math.min(clampedMax, total);
  const visibleAvatars = avatars.slice(0, visibleLimit);
  const remainingCount = Math.max(0, total - visibleLimit);

  const first = visibleAvatars[0];
  const second = visibleAvatars[1];

  const showCounter = remainingCount > 0;
  const showSecondAvatar = !!second && !showCounter && clampedMax > 1;
  const hasSecondSlot = showCounter || showSecondAvatar;

  const containerSize = hasSecondSlot ? diameter + OFFSET : diameter;

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
          <Avatar {...mapAvatarProps(first, sizeKey)} />
        </View>
      )}

      {hasSecondSlot && (
        <View
          style={[
            styles.slot,
            {
              top: OFFSET,
              left: OFFSET,
              width: diameter,
              height: diameter,
              zIndex: 2,
            },
          ]}
        >
          {showSecondAvatar ? (
            <Avatar {...mapAvatarProps(second, sizeKey)} />
          ) : (
            <View
              style={[
                styles.countCircle,
                {
                  width: diameter,
                  height: diameter,
                  borderRadius: diameter / 2,
                },
              ]}
            >
              <Text
                style={[
                  styles.countText,
                  {
                    fontSize: countTextStyle?.fontSize,
                    lineHeight: countTextStyle?.lineHeight,
                    ...(countTextStyle?.letterSpacing !== undefined
                      ? { letterSpacing: countTextStyle.letterSpacing }
                      : null),
                  },
                ]}
                numberOfLines={1}
              >
                +{remainingCount}
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
