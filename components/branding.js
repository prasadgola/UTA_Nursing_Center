import React, { Text, View, Image } from 'react-native';

const BrandingBar = () => {
  return (
    <>
      <View style={styles.brandingBar}>
        <View style={styles.container}>
          <View style={styles.orange}>
            <Text style={styles.brandingText}>Text</Text>
          </View>
          {/* <Text style={styles.brandingLogo}>LOGO</Text> */}
          <Image source={require('../assets/images/uta-logo.png')} style={styles.brandingLogo} />
        </View>
      </View>
    </>
  );
};

const styles = {
  brandingBar: {
    top: Platform.select({ios:0,android:0,}),
    width: "100%",
    height: Platform.select({ios:130,android:75,}),
    backgroundColor: '#0061AC',
  },
  container: {
    top: Platform.select({ios:70,android:20,}),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  orange: {
    backgroundColor: '#CC4A13',
    marginLeft: 20,
    // borderRadius: 5,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandingText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    // marginLeft: 5,
  },
  brandingLogo: {
    width: 80,
    height: 30,
    marginRight: 30,
    fontSize: 28,
  },
};


export default BrandingBar;