import Card from './card';
import React, { View, StyleSheet, TouchableOpacity, AsyncStorage, Dimensions, Text, Linking, Button, Modal } from 'react-native';
import { useStates } from "react";


const Cards = ({ oldoptions, updateoption,images, links, titles }) => {

  const updatehome = (i, oldoptions) => {
    oldoptions[0].links.unshift(links[i])
    oldoptions[0].images.unshift(images[i])
    oldoptions[0].titles.unshift(titles[i])
    updateoption(oldoptions)
    // console.log(oldoptions);
  }


  return (
    <>
      <View style={styles.row}>
        {images.map((image, i) => (
          <TouchableOpacity
            onPress={() => { Linking.openURL(links[i]) }}
            onLongPress={() => {
              updatehome(i, oldoptions)
            }}
            delayLongPress={1000}
          >
            <Card key={image}  image={image} title={titles[i]} />
          </TouchableOpacity>
        ))}
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    top: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "space-between",
    margin: 10,
  },
  modal: {
    width: 180,
    height: 74,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 330,
    marginLeft: 120,
  },

  button: {
    backgroundColor: "red",
    // bottom:0
  },
});

export default Cards;