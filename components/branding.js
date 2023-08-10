import React, { Text, View, Image } from 'react-native';

const BrandingBar = () => {
  return (
    <>
      <View style={styles.brandingBar}>
        <View style={styles.container}>
          {/* <Text style={styles.brandingLogo}>LOGO</Text> */}
          <Image source={require('../assets/images/uta-logo.png')} style={styles.brandingLogo} />
          <View style={styles.orange}>
            <Text style={styles.brandingText}>College of Nursing and Health Innovation</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = {
  brandingBar: {
    top: Platform.select({ios:0,android:0,}),
    width: "100%",
    height: Platform.select({ios:130,android:85}),
    backgroundColor: '#0A3657',
  },
  container: {
    top: Platform.select({ios:70,android:30,}),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orange: {
    backgroundColor: '#CC4A13',
    marginRight: 30,
    width: 180,
    height: 43,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    // marginLeft: 5,
  },
  brandingLogo: {
    width: 80,
    height: 30,
    marginLeft: 30,
    fontSize: 28,
  },
};


export default BrandingBar;