import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
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
  const [isLoading, setIsLoading] = useState(true);
  

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


  return (
    <>
      {/* zIndex will make the drowpdown window overlay on top of all the elements */}
      <View zIndex={100}>
        <DropDownPicker
          style={styles.dropDownPicker}
          items={options}
          open={isOpen}
          Value={options[0]}
          setOpen={setIsOpen}
          setValue={setSelectedValue}
          onSelectItem = {handleValueChange}
          // containerStyle={styles.dropDownPicker}
          placeholder={selectedValue}
          placeholderStyle={styles.placeOption}
          listItemLabelStyle={styles.options}
          arrowIconContainerStyle = {styles.arrowcontainer}
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
    height: Platform.select({ios:55,android:56}),
    borderRadius: 9,
    borderWidth: 1.4,
    borderColor: 'black',
    top: Platform.select({ios:2,android:1}),
    backgroundColor: 'white',
    shadowColor: '#0A3657',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .4,
    shadowRadius: 5,
    elevation: 30,
  },
  placeOption: {
    color: 'black',
    fontWeight: '500',
    marginLeft: 20,
    fontSize: 18,
  },
  arrowcontainer: {
    // backgroundColor: '#0A3657',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: "center",
    marginRight: 21,
    color:'white',
    borderColor: "black",
    borderWidth: Platform.select({ios:1,android:2}),
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  dropDownContainer: {
    backgroundColor:"black",
  },
  options: {
    color: 'black',
    fontStyle:'normal',
    fontSize: Platform.select({ios:16,android:17}),
    marginLeft: 21,
    fontWeight: '500',
    
  },
});




export default Dropdownmenu;