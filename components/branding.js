import React, { Text, View, Image } from 'react-native';

const BrandingBar = () => {
  return (
    <>
      <View style={styles.brandingBar}>
        <Text style={styles.brandingText}>Text</Text>
        <Text style={styles.brandingLogo}>LOGO</Text>
        {/* <Image source={require('../assets/images/UTA.webp')} style={styles.brandingLogo}/> */}
      </View>
    </>
  );
};

const styles = {
  brandingBar: {
    top: 45,
    width: "100%",
    height: 70,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandingText: {
    color: '#000000',
    fontSize: 28,
    marginLeft: 20,
  },
  brandingLogo: {
    width: 80,
    height: 30,
    marginRight: 10,
    fontSize: 28,
  },
};


export default BrandingBar;