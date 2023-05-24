import Card from './card';
import React, { View, StyleSheet, Alert, TouchableOpacity, Linking} from 'react-native';


const Cards = ({ oldoptions, updateoption,images, links, titles }) => {

  const updatehome = (i, oldoptions) => {
    oldoptions[0].links.unshift(links[i])
    oldoptions[0].images.unshift(images[i])
    oldoptions[0].titles.unshift(titles[i])
    updateoption(oldoptions)
  }

  openTwoButtonAlert=(i, oldoptions)=>{
    Alert.alert(
      'Add to the Home Screen?',
      'Add some text here',
      [
        {text: 'Yes', onPress: () => updatehome(i, oldoptions)},
        {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }


  return (
    <>
      <View style={styles.row}>
        {images.map((image, i) => (
          <TouchableOpacity
            onPress={() => { Linking.openURL(links[i]) }}
            onLongPress={() => {
              openTwoButtonAlert(i,oldoptions)
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
});

export default Cards;