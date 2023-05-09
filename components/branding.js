import React, { Text, View, Image } from 'react-native';

const BrandingBar = () => {
  return (
    <>
      <View style={styles.brandingBar}>
        <Text style={styles.brandingText}>Text</Text>
        <Image source={require('../assets/images/UTA.webp')} style={styles.brandingLogo}/>
      </View>
    </>
  );
};

const styles = {
  brandingBar: {
    top: 60,
    width: "100%",
    height: 70,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandingText: {
    color: '#000000',
    fontSize: 20,
    marginLeft: 20,
  },
  brandingLogo: {
    width: 80,
    height: 30,
    marginRight: 10,
  },
};


export default BrandingBar;