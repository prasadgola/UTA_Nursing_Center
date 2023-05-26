import { color } from 'react-native-reanimated';
import { useState, useEffect } from 'react';
import Card from './card';
import Ibutton from './Ibutton';
import React, { Text, View, StyleSheet, Alert, TouchableOpacity, Linking} from 'react-native';


const Cards = ({ oldoptions, updateoption,images, links, titles, inHome }) => {
  const [information, setInformation] = useState('')

  // adding an element at the beginning of the array
  const updatehome = (i, oldoptions) => {
    oldoptions[0].links.unshift(links[i]);
    oldoptions[0].images.unshift(images[i]);
    oldoptions[0].titles.unshift(titles[i]);
    updateoption(oldoptions);
  }

  openTwoButtonAlert=(i, oldoptions)=>{
    // when home screen, longpress fucntions changes.
    // bring setoldoptions instead of oldoptions because as soon as removing the card, it should reflect on screen
    if (inHome) {
      Alert.alert(
        'Remove from the Home Screen?',
        'Add some text here',
        [
          {text: 'Ok', onPress: () => {
            oldoptions[0].links.splice(i, 1);
            oldoptions[0].images.splice(i, 1);
            oldoptions[0].titles.splice(i, 1);
          }},
          {text: 'Cancel', onPress: () => console.log('No button clicked'), style: 'cancel'},
        ],
        { 
          cancelable: true 
        }
      );
    } else {Alert.alert(
      'Add to the Home Screen?',
      'Add some text here',
      [
        {text: 'Ok', onPress: () => updatehome(i, oldoptions)},
        {text: 'Cancel', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );}
  }
// this for when home is on or off
  useEffect(() => {
    if (!inHome) {
      setInformation('')
    }
  },[inHome])

  // this is because when home make on and last element in the list is click
  const informationButton=(inHome,i)=>{
    if (inHome && i===images.length - 1) {
      if (information === '') {
        setInformation('please choose options from the dropdownoption')
      } else {
        setInformation('')
      }
    } else {
      Linking.openURL(links[i])
    }
  }


  return (
    <>
      <View style={styles.row}>
        {images.map((image, i) => (
          <TouchableOpacity
            onPress={() => { 
              informationButton(inHome, i)
            }}
            onLongPress={() => {
              this.openTwoButtonAlert(i,oldoptions)
            }}
            delayLongPress={1000}
          >
            <Card key={image}  image={image} title={titles[i]} />
          </TouchableOpacity>
        ))}
      </View >
      <Text style={{top:190, left:70}}>{information}</Text>
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
    // backgroundColor: 'black',
  },
});

export default Cards;