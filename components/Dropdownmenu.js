import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Platform } from 'react-native';
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


  const [press, setPress] = useState(false);

  let backgroundColor;
  // Use if else condition to assign it
  if (press) {
    backgroundColor = '#0061AC';
  } else {
    backgroundColor = '#fff';
  }

  const handleResponderStart = () => {
    setPress(!press); // change press state to true
  };

  const handleResponderRelease = () => {
    setPress(false); // change press state to false
  };

  const styles = StyleSheet.create({
    dropDownPicker: {
      width: '100%',
      height: Platform.select({ios:70,android:70,}),
      borderColor: '#000000',
      borderRadius: 5,
      borderWidth: 2,
      backgroundColor: backgroundColor,
      borderColor: 'black',
      top: Platform.select({ios:0,android:0,}),
    },
    scrollview:{
      // width: '50%',
      bottom: 0,
    },
    containerStyle:{
      fontWeight: 'bold',
    },
  });


  return (
    <>
      {/* zIndex will make the drowpdown window overlay on top of all the elements */}
      <View zIndex={100}>
        <DropDownPicker
          style={styles.dropDownPicker}
          items={options}
          open={isOpen}
          defaultValue={"Home"}
          setOpen={setIsOpen}
          setValue={setSelectedValue}
          onSelectItem = {handleValueChange}
          containerStyle = {styles.containerStyle}
          dropDownStyle={{backgroundColor: backgroundColor}} // use the variable here
          onResponderStart={handleResponderStart} // handle responder start event
          onResponderRelease={handleResponderRelease} // handle responder release event
          onStartShouldSetResponder={() => true}
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









export default Dropdownmenu;