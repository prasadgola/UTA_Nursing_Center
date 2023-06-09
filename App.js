import BrandingBar from './components/branding';
import Dropdownmenu from './components/Dropdownmenu';
import React, { View, Appearance, StatusBar, PlatformColor } from 'react-native';
import opt from './components/Options';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import type {StatusBarStyle} from 'react-native';

// AsyncStorage.init();



const App = () => {

  
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#0A3657"
      />
      <View style={styles.app}>
        <BrandingBar />
        <Dropdownmenu />
      </View>
    </>
  );
};


const styles = {
  statusbar: {
    // ‘default’, ‘light-content’, or ‘dark-content’
    barStyle: "light-content",
  },
  app: {
    backgroundColor: '#F5F5F5',
    height: '100%',
  },
}

export default App;