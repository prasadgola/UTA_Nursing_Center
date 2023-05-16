import React, { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ key, image, title }) => {
    return (
        <View style={styles.card}>
          {/* source={image} */}
          <Image  style={styles.image} />
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
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
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