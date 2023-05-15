import BrandingBar from './components/branding';
import Dropdownmenu from './components/Dropdownmenu';
// import Cards from './components/Cards';
import React, { View } from 'react-native';


const App = () => {
  return (
      <>
        <View>
          <BrandingBar />
          <Dropdownmenu />
          {/* <Cards /> */}
        </View>
      </>
    );
  }


export default App;