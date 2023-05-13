import BrandingBar from './components/branding';
import PickerComponent from './components/DropdownPickerComponent';
import Cards from './components/Cards';
import React, { View } from 'react-native';


const App = () => {
  return (
      <>
        <View>
          <BrandingBar />
          <PickerComponent />
          <Cards />
        </View>
      </>
    );
  }


export default App;
