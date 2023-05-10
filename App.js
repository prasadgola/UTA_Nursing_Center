import BrandingBar from './components/branding';
import PickerComponent from './components/DropdownPickerComponent';
import React, { View } from 'react-native';


const App = () => {
  return (
      <>
        <View>
          <BrandingBar />
          <PickerComponent />
        </View>
      </>
    );
  }

export default App;
