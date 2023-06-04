import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Cards from './Cards';
import opt from './Options';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Home");
  const [link, setLink] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [iButton, setIButton] = useState(false);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  

  const updateOptions = (newOptions) => {
    setOptions(newOptions);
  };


  useEffect (() => {
    const fetchOptions = async () => {
      let storedOptions = await AsyncStorage.getItem('options2');
      if (storedOptions != null) {
        setOptions(JSON.parse(storedOptions));
      }
    };
    fetchOptions();
  },[]);



  const handleValueChange = async (item) => {
    //SelectedValue is just for displaying!!
    setSelectedValue(item.value);

    const index = options.findIndex((item) => item.value === selectedValue);

    let newOptions = [...options];

    if (index === 0) {
      setLink(newOptions[index].links);
      setImage(newOptions[index].images);
      setTitle(newOptions[index].titles);
      setIButton(true);
    } else if (index !== -1) {
      setLink(newOptions[index].links);
      setImage(newOptions[index].images);
      setTitle(newOptions[index].titles);
      setIButton(false)
    } else {
      setLink("")
    }

    setOptions(newOptions);
    // await AsyncStorage.setItem('options2', JSON.stringify(newOptions));
  }




  // if (isLoading) {
  //   handleValueChange();
  //   setIsLoading(false);
  //   return (
  //     <>
  //       <View>
  //           <ActivityIndicator size="large" color="black" animating={isLoading} />
  //       </View>
  //     </>
  //   );
  // }


  return (
    <>
      {/* zIndex will make the drowpdown window overlay on top of all the elements */}
      <View style={styles.dropDownPicker} zIndex={100}>
        <DropDownPicker
          items={options}
          open={isOpen}
          Value={selectedValue}
          setOpen={setIsOpen}
          setValue={setSelectedValue}
          onChangeValue = {handleValueChange}
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