import Card from './card';
import React, { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

  
const Cards = ({images, links, titles}) => {

    return (
        <>
            <View style={styles.row}> 
                {images.map((image, i) => (
                    <TouchableOpacity

                    key={i}

                    onPress={() => {
                        Linking.openURL(links[i]);
                    }}

                    onLongPress={() => {
                        // Do something when the card is long pressed.
                        }}

                    >

                    <Card key={i} image={image} title={titles[i]} />
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
      top: 300,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
});

export default Cards;