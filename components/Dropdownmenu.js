import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Cards from './Cards';
import opt from './Options';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [link, setLink] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [iButton, setIButton] = useState(false);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  

  const updateOptions = async (newOptions) => {
    setOptions(newOptions);
    try {
      await AsyncStorage.setItem('options', JSON.stringify(options));
    } catch (error) {
      console.log(error);
    }
  };



  useEffect (() => {
    const fetchOptions = async () => {
      let storedOptions = await AsyncStorage.getItem('options');
      if (storedOptions != null) {
        setOptions(JSON.parse(storedOptions));
      } else {
        try {
          await AsyncStorage.setItem('options', JSON.stringify(opt));
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchOptions();
  },[]);


  const handleValueChange = async (item) => {

    if (item.value === "Home") {
      setLink(item.links);
      setImage(item.images);
      setTitle(item.titles);
      setIButton(true);
    } else if (item) {
      setLink(item.links);
      setImage(item.images);
      setTitle(item.titles);
      setIButton(false);
  } else {
    setLink("");
  }
  }

  console.log(selectedValue)



  return (
    <>
      {/* zIndex will make the drowpdown window overlay on top of all the elements */}
      <View style={styles.dropDownPicker} zIndex={100}>
        <DropDownPicker
          items={options}
          open={isOpen}
          defaultValue={"Home"}
          setOpen={setIsOpen}
          setValue={setSelectedValue}
          onSelectItem = {handleValueChange}
        />
      </View>
      <Cards
        oldoptions={options}
        updateOptions={updateOptions}
        inHome={iButton}
        style={styles.cards}
        images={image}
        links={link}
        titles={title}
      />
    </>
  );
};


const styles = StyleSheet.create({
  dropDownPicker: {
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderRadius: 5,
    top: 50,
    // backgroundColor:'black',
  },
  cards: {
    top: 100,
  }
});



export default Dropdownmenu;