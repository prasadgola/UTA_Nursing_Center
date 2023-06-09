import React, { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ image, title }) => {

    return (
        <View style={styles.card}>
          
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
    );
  };


const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 90,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 1,
    borderColor: 'black',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B3454",
  },
  description: {
    fontSize: 16,
  },
  moreCards: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});


export default Card;