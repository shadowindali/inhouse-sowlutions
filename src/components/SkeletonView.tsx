/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { View, Animated, DimensionValue } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface SkeletonViewProps {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: number;
  isRTL?: boolean;
}

const SkeletonView: React.FC<SkeletonViewProps> = ({
  width,
  height,
  borderRadius,
}) => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Skeleton Loader animation
    const startShimmerAnimation = () => {
      Animated.loop(
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    };

    startShimmerAnimation();

    return () => {
      shimmerAnimation.stopAnimation();
    };
  }, []);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-350, 350],
  });

  return (
    <View
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: '#EFEFEF',
        overflow: 'hidden',
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX }],
        }}
      >
        <LinearGradient
          colors={['#EFEFEF', '#F7F7F7', '#EFEFEF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1, width: '200%' }}
        />
      </Animated.View>
    </View>
  );
};

export default SkeletonView;
