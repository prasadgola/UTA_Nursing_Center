import Card from './card';
import React, { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useState } from "react";

  
const Cards = () => {
    const [cards, setCards] = useState([
        {
        image: require("../assets/images/UTA.webp"),
        title: "Library",
        link: "https://www.google.com/",
        },
        {
        image: require("../assets/images/UTA.webp"),
        title: "CONHI",
        link: "https://www.google.com/",
        },
        {
        image: require("../assets/images/UTA.webp"),
        title: "HR",
        link: "https://www.google.com/",
        },
        {
        image: require("../assets/images/UTA.webp"),
        title: "HR",
        link: "https://www.google.com/",
        },
        {
        image: require("../assets/images/UTA.webp"),
        title: "HR",
        link: "https://www.google.com/",
        },
        {
        image: require("../assets/images/UTA.webp"),
        title: "HR",
        link: "https://www.google.com/",
        },
    ]);

    return (
        <>
            <View style={styles.row}>
                {cards.map((card, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            // Do something when the card is clicked.
                            Linking.openURL(card.link);
                        }}
                        onLongPress={() => {
                            // Do something when the card is long pressed.
                            }}
                    >
                        <Card key={index} image={card.image} title={card.title} description={card.description} />
                    </TouchableOpacity>
                ))}
            </View>
        </>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      top: 90,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
});

export default Cards;
  