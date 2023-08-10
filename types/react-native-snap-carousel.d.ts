declare module 'react-native-snap-carousel' {
    import { PureComponent } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
  
    interface CarouselProps<T> {
      data: T[];
      renderItem: (item: { item: T; index: number }) => React.ReactNode;
      sliderWidth: number;
      itemWidth: number;
      containerCustomStyle?: StyleProp<ViewStyle>;
      onSnapToItem?: (index: number) => void;
    }
  
    export default class Carousel<T> extends PureComponent<CarouselProps<T>> {
        [x: string]: any;
}
  }
  