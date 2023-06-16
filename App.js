import BrandingBar from './components/branding';
import Dropdownmenu from './components/Dropdownmenu';
import React, { View, StatusBar } from 'react-native';

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
    backgroundColor: '#F9FAFD',
    height: '100%',
  },
}

export default App;