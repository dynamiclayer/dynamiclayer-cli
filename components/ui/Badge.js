import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { colors, paddings, textStyles, rounded } from '../../styles/style';

const BADGE_CONFIGS = {
  types: {
    default: {
      background: colors.grey100,
      text: colors.grey600,
    },
    warning: {
      background: colors.yellow300,
      text: colors.yellow700,
    },
    success: {
      background: colors.green100,
      text: colors.green700,
    },
    error: {
      background: colors.red100,
      text: colors.red600,
    },
  },
  sizes: {
    lg: {
      height: 28,
      text: textStyles.text_base_semibold,
      padding: {
        horizontal: paddings.p_8,
        vertical: paddings.p_2,
      },
    },
    md: {
      height: 24,
      text: textStyles.text_sm_semibold,
      padding: {
        horizontal: paddings.p_8,
        vertical: paddings.p_2,
      },
    },
    sm: {
      height: 20,
      text: textStyles.text_xs_semibold,
      padding: {
        horizontal: paddings.p_4,
        vertical: paddings.p_2,
      },
    },
  },
};

const Badge = ({
  type = 'default', // 'default' | 'warning' | 'success' | 'error'
  size = 'md',      // 'sm' | 'md' | 'lg'
  text,             // optional
  style,            // optional
  textStyle,        // optional
  children,         // support <Badge>content</Badge>
}) => {
  const typeConfig = BADGE_CONFIGS.types[type] || BADGE_CONFIGS.types.default;
  const sizeConfig = BADGE_CONFIGS.sizes[size] || BADGE_CONFIGS.sizes.md;

  const content = children ?? text ?? 'Badge'; // fallback priority

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: typeConfig.background,
          height: sizeConfig.height,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.badgeText,
          { color: typeConfig.text },
          sizeConfig.text,
          {
            paddingHorizontal: sizeConfig.padding.horizontal,
            paddingVertical: sizeConfig.padding.vertical,
          },
          textStyle,
        ]}
      >
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rounded.rounded,
    flexDirection: 'row',
  },
  badgeText: {
    textAlign: 'center',
  },
});

export default Badge;
