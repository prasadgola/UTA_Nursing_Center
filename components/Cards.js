import { color } from 'react-native-reanimated';
import { useState, useEffect } from 'react';
import Card from './card';
import Ibutton from './Ibutton';
import React, { Text, View, StyleSheet,ScrollView, Alert, TouchableOpacity, Linking} from 'react-native';
// import Linking from 'react-native-linking';


const Cards = ({ oldoptions, updateOptions,images, links, titles, inHome }) => {
  const [information, setInformation] = useState('')

  // adding an element at the beginning of the array
  const updatehome = (i, oldoptions) => {
    let newOptions = [...oldoptions];
    newOptions[0].links.unshift(links[i]);
    newOptions[0].images.unshift(images[i]);
    newOptions[0].titles.unshift(titles[i]);
    updateOptions(newOptions);
  }

  openTwoButtonAlert=(i, oldoptions)=>{
    // when home screen, longpress functions changes.
    // bring setoldoptions instead of oldoptions because as soon as removing the card, it should reflect on screen
    if (inHome) {
      Alert.alert(
        'Remove from the Home Screen?',
        '',
        [
          {text: 'Ok', onPress: () => {
            let newOptions = [...oldoptions];
            newOptions[0].links.splice(i, 1);
            newOptions[0].images.splice(i, 1);
            newOptions[0].titles.splice(i, 1);
            updateOptions(newOptions);
          }},
          {text: 'Cancel', onPress: () => console.log('No button clicked'), style: 'cancel'},
        ],
        {
          cancelable: true 
        }
      );
    } else {Alert.alert(
      'Add to the Home Screen?',
      '',
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
        setInformation('Please add your preferences to the home screen')
      } else {
        setInformation('')
      }
    } else {
      // if (i === 4 && Linking.isAppInstalled('com.mdaware.mdcalc')) {
      //     Linking.openURL('medcalc://calculator?id=calculator_id')
      // } else {
        Linking.openURL(links[i])
      // }
    }
  }

  const displayInfo = (information) => {
    if (information) {
      return <View style={styles.information}><Text style={styles.itext}>{information}</Text></View>
    }
  }


  return (
    <>
    <ScrollView>
      <View style={styles.row}>
        {images.map((image, i) => (
          <TouchableOpacity
            onPress={() => { 
              informationButton(inHome, i)
            }}
            onLongPress={() => {
              this.openTwoButtonAlert(i,oldoptions)
            }}
            // delayLongPress={1000}
          >
            <Card key={images.i}  image={image} title={titles[i]} />
          </TouchableOpacity>
        ))}
      </View >
      </ScrollView>
      {displayInfo(information)}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  row: {
    top: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "space-between",
    margin: Platform.select({ios:11,android:10}),
    bottom: 0,
    // margin: 20,
  },

  information: {
    top:Platform.select({ios:-440,android:-356}),
    width: 380,
    height: 50,
    marginLeft: Platform.select({ios:25,android:16}),
    marginRight: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#CC4A13',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0A3657',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .6,
    shadowRadius: 15,
    elevation: 30,
  },
  itext: {
    fontSize:15,
    color: 'white',
    fontWeight: '600',
    
  },
});

export default Cards;