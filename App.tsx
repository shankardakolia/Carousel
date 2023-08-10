import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AutoScrollCarousel from './AutoScrollCarousel'; // Adjust the path

const carouselData = [
  {
    id: '01',
    image: require('./assets/slider_1.jpg'),
  },
  {
    id: '02',
    image: require('./assets/slider_2.jpg'),
  },
  {
    id: '03',
    image: require('./assets/slider_3.jpg'),
  },
];

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AutoScrollCarousel data={carouselData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
