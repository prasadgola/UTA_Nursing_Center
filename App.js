import BrandingBar from './components/branding';
import Dropdownmenu from './components/Dropdownmenu';
import React, { View,StyleSheet,Image, Text } from 'react-native';


const App = () => {
  return (
      <>
        <View>
          <BrandingBar />
          <Dropdownmenu />
        </View>
      </>
    );
  }


export default App;