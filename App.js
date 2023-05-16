import BrandingBar from './components/branding';
import Dropdownmenu from './components/Dropdownmenu';
import React, { View } from 'react-native';


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