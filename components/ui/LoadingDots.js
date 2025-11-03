// LoadingDots.js
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { colors } from "../../styles/style";

const DOT_SIZE = 10;
const DOT_SPACING = 5;
const RISE_DISTANCE = 10;
const UP_DURATION = 500;
const DOWN_DURATION = 600;
const DOT_COUNT = 3;
const DOT_DELAY = 300;

const Dot = ({ delay, color }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: -RISE_DISTANCE,
            duration: UP_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: DOWN_DURATION,
            useNativeDriver: true,
          }),
        ])
      ),
    ]);

    animation.start();
    return () => animation.stop();
  }, [delay, translateY]);

  return (
    <Animated.View
      style={[
        styles.dot,
        { backgroundColor: color || styles.dot.backgroundColor },
        { transform: [{ translateY }] },
      ]}
    />
  );
};

const LoadingDots = ({ color = colors.white }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: DOT_COUNT }).map((_, index) => (
        <Dot key={index} delay={DOT_DELAY * index} color={color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: colors.white,
    marginHorizontal: DOT_SPACING,
    alignSelf: "center",
    top: 5,
  },
});

export default LoadingDots;
