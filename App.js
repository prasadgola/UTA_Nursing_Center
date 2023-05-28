import BrandingBar from './components/branding';
import Dropdownmenu from './components/Dropdownmenu';
import React, { View, Appearance } from 'react-native';
import opt from './components/Options';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage.init();



const App = () => {
  const colorScheme = Appearance.getColorScheme();

  

  return (
    <>
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <BrandingBar />
        <Dropdownmenu />
      </View>
    </>
  );
}


export default App;