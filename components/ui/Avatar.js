// Avatar.tsx
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors, textStyles } from "../../styles/style";
import AvatarIcon from "../../assets/icons/avatarIcon";
import OnlineIcon from '../../assets/icons/onlineIcon';
import OfflineIcon from '../../assets/icons/offlineIcon';

const SIZE_MAP = {
  lg: 56,
  md: 48,
  sm: 40,
  xs: 32,
};

const STATUS_MAP = {
  lg: { dotSize: 18, offsetLeft: 40, offsetTop: 40 },
  md: { dotSize: 16, offsetLeft: 34, offsetTop: 34 },
  sm: { dotSize: 14, offsetLeft: 28, offsetTop: 32 },
  xs: { dotSize: 12, offsetLeft: 22, offsetTop: 30 },
};

// Typography per size
const TEXT_STYLE_MAP = {
  lg: { ...textStyles.text_xl_semibold },
  md: { ...textStyles.text_lg_semibold  },
  sm: { ...textStyles.text_sm_semibold },
  xs: { ...textStyles.text_xs_semibold },
};

const DEFAULT_IMAGE = "https://picsum.photos/seed/a/200";
const DEFAULT_INITIALS = "Aa";

const Avatar = ({ type = "icon", state = "default", size = "md", image = null }) => {
  const diameter = SIZE_MAP[size];
  const { dotSize, offsetLeft, offsetTop } = STATUS_MAP[size];
  const textStyleForSize = TEXT_STYLE_MAP[size];
  const iconSize = Math.round(diameter * 0.5);

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.avatar,
          {
            width: diameter,
            height: diameter,
            borderRadius: 9999,
          },
          type === "image" ? styles.bgWhite : styles.bgGray,
        ]}
      >
        {type === "icon" && (
          <View style={[styles.iconCenter, { transform: [{ translateX: -iconSize/2 }, { translateY: -iconSize/2 }] }]}>
            <AvatarIcon width={iconSize} height={iconSize} />
          </View>
        )}

        {type === "initials" && (
          <View style={styles.centerContent}>
            <Text
              style={[
                styles.initials,
                { 
                  fontSize: textStyleForSize.fontSize,
                  lineHeight: textStyleForSize.lineHeight,
                  ...(textStyleForSize.letterSpacing !== undefined
                    ? { letterSpacing: textStyleForSize.letterSpacing }
                    : null),
                },
              ]}
            >
              {DEFAULT_INITIALS}
            </Text>
          </View>
        )}

        {type === "image" && (
          <Image
            source={image || DEFAULT_IMAGE}
            resizeMode="cover"
            style={styles.imageFill}
          />
        )}
      </View>

      {/* State dot (none for 'default') */}
      {state !== "default" && (
        <View
          style={[
            styles.statusDot,
            {
              width: dotSize,
              height: dotSize,
              left: offsetLeft,
              top: offsetTop,
            },
          ]}
        >
          {state === "online" ? (
            <OnlineIcon width={dotSize} height={dotSize} />
          ) : (
            <OfflineIcon width={dotSize} height={dotSize} />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    overflow: "hidden",
  },
  bgGray: {
    backgroundColor: colors.grey100,
  },
  bgWhite: {
    backgroundColor: colors.white,
  },
  iconCenter: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    textAlign: "center",
    color: colors.grey500,
  },
  imageFill: {
    width: "100%",
    height: "100%",
  },
  statusDot: {
    position: "absolute",
    zIndex: 2,
  },
});

export default Avatar;