import React, {useRef, useState, useEffect} from 'react';
import {View, Image, Dimensions, StyleSheet, Animated} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

interface CarouselItem {
  id: string;
  image: number;
}

interface AutoScrollCarouselProps {
  data: CarouselItem[];
}

const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({data}) => {
  const carouselRef = useRef<Carousel<CarouselItem>>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const newIndex = (activeSlide + 1) % data.length;
        setActiveSlide(newIndex);
        carouselRef.current.snapToItem(newIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide, data.length]);

  const renderItem = ({item}: {item: CarouselItem}) => (
    <Image
      source={item.image}
      style={{width, height: 200}}
      resizeMode="cover"
    />
  );

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.paginationDot,
              {opacity: activeSlide === index ? 1 : 0.5},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue', // Change the color to your preference
    marginHorizontal: 4,
  },
});

export default AutoScrollCarousel;
