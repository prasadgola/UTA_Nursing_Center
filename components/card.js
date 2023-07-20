import React, { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ image, title }) => {

  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 175,
    width: 110,
    // alignItems: "center",
    margin: Platform.select({ios:13,android:10}),
    justifyContent: "center",
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0,
    shadowColor: '#0A3657',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    borderColor: 'black',
    // borderWidth: Platform.select({ios:1,android:1}),
    top: -3,
    marginLeft: 10.5,
    

  },
  title: {
    top:8,
    fontSize: 15,
    color: "black",
    height: 55,
    marginLeft: 0,
    marginLeft: 12,
    marginRight: 12,
  },
});


export default Card;