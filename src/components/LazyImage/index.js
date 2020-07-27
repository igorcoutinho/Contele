import React, {useState, useEffect} from 'react';
import {Animated, Dimensions} from 'react-native';
import {Small, Original} from './styles';
const OriginalAnimated = Animated.createAnimatedComponent(Original);

export default function LazyImage({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
  size,
  imageRadius,
  useDimensionsDevice,
}) {
  const opacity = new Animated.Value(0);
  const {width} = Dimensions.get('window');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      setLoaded(true);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small
      source={smallSource || require('../../resources/images/imageDefault.jpg')}
      ratio={aspectRatio}
      resizeMode="cover"
      blurRadius={1}
      size={useDimensionsDevice ? width : size}>
      {loaded && (
        <OriginalAnimated
          style={{opacity, borderRadius: imageRadius || 0}}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
          size={useDimensionsDevice ? width : size}
        />
      )}
    </Small>
  );
}
