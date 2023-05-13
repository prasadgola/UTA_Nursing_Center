import React, { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ image, title, description }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.titleAndDescription}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
  };



const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 90,
    margin: 20,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
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