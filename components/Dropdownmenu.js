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
  const [iButton, setIButton] = useState(false)
  // const



  useEffect(() => {
    const index = options.findIndex((item) => item.value === selectedValue);
    // you can make the conditions based on indexs would be clearner
    // still home condition yet to work for asyncronous storage. As of now, both the conditions here are same
    if (selectedValue === "Home") {
      setLink(options[index].links);
      setImage(options[index].images);
      setTitle(options[index].titles);
      // setIButton(true)
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
    {/* zIndex will make the drowpdown window overlay on top of all the elements */}
      <View style={styles.dropDownPicker} zIndex={100}>
        <DropDownPicker
          items={options}
          open={isOpen}
          value={selectedValue}
          setOpen={setIsOpen}
          setValue={setSelectedValue}
        />
      </View>
      <Cards inHome={() => setIButton(!iButton)} oldoptions={options} updateoption={setOptions} style={styles.cards} images={image} links={link} titles={title} />
      {
        if (iButton) {
          <Text>hello</Text>
        }
      }
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
    // backgroundColor:'black',
  },
  cards: {
    top: 100,
  }
});



export default Dropdownmenu;