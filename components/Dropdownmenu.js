import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Cards from './Cards';
import opt from './Options'

const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("Home")
  const [link, setLink] = useState([])
  const [image, setImage] = useState([])
  const [title, setTitle] = useState([])
  const [options,setOptions] = useState(opt)



  useEffect(() => {
    const index = options.findIndex((item) => item.value === selectedValue);
    if (selectedValue === "Home") {
      setLink(options[index].links);
      setImage(options[index].images);
      setTitle(options[index].titles);
    } else if (index !== -1 && options[index].links) {
      setLink(options[index].links);
      setImage(options[index].images);
      setTitle(options[index].titles);
    } else {
      setLink("")
    }
  }, [selectedValue]);


  return (
    <>
      <View style={styles.dropDownPicker} zIndex={100}>
        <DropDownPicker
          items={options}
          open={isOpen}
          value={selectedValue}
          setOpen={setIsOpen}
          setValue={setSelectedValue}
        />
      </View>
      <Cards oldoptions={options} updateoption={setOptions} style={styles.cards} images={image} links={link} titles={title} />
    </>
  )
}

const styles = StyleSheet.create({
  dropDownPicker: {
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderRadius: 5,
    top: 50,
  },
  cards: {
    top: 100,
  }
});



export default Dropdownmenu;