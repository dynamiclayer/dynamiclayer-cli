// Badge.js
import React, { memo, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, paddings, rounded, textStyles } from '../../styles/style';

const Badge = memo(({
  size = 'md',
  notifications,
  showZero = false,
  maxCount = 99,
  absolute = true,
  offsetX = 0,
  offsetY = 0,
  style,
  badgeStyle,
  textStyle,
  ...rest
}) => {
  const value = notifications;

  if (!showZero && (!value || value <= 0)) return null;

  const isDot = size === 'sm';
  const displayText = useMemo(() => {
    if (isDot) return '';
    if (typeof value !== 'number') return '';
    if (value > maxCount) return `${maxCount}+`;
    return String(value);
  }, [isDot, value, maxCount]);

  const containerStyle = useMemo(
    () => [
      absolute ? styles.absoluteContainer : null,
      absolute ? { top: offsetY, right: offsetX } : null,
      style,
    ],
    [absolute, offsetX, offsetY, style]
  );

  return (
    <View pointerEvents="none" style={containerStyle} {...rest}>
      <View
        style={[
          isDot ? styles.badgeDot : styles.badgePill,
          badgeStyle,
        ]}
      >
        {!isDot && (
          <Text style={[styles.badgeText, textStyle]} numberOfLines={1}>
            {displayText}
          </Text>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  absoluteContainer: {
    position: 'absolute',
  },
  badgeDot: {
    height: 8,
    width: 8,
    borderRadius: rounded.rounded_full,
    backgroundColor: colors.red500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgePill: {
    minWidth: 16,
    height: 16,
    paddingHorizontal: paddings.p_8,
    paddingVertical: paddings.p_0,
    borderRadius: rounded.rounded_full,
    backgroundColor: colors.red500,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  badgeText: {
    ...textStyles.text_xs_semibold,
    color: colors.white,
    textAlign: 'center',
    includeFontPadding: false,
  },
});

export default Badge;