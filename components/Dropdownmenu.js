import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Cards from './Cards';

const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const [link, setLink] = useState([])
  const [image, setImage] = useState([])
  const [title, setTitle] = useState([])

  const options = [
    {
      label: "Option 1",
      value: "Option 1",
      links: [
        "https://www.google.com",
        "https://www.facebook.com",
        "https://www.twitter.com",
      ],
      images: [
        require('../assets/images/UTA.webp'),
        require('../assets/images/UTA.webp'),
        require('../assets/images/UTA.webp'),
      ],
      titles: [
        "HR",
        "Library",
        "CONHI",
      ],
    },
    {
      label: "Option 2",
      value: "Option 2",
      links: [
        "https://www.amazon.com",
        "https://www.ebay.com",
        "https://www.etsy.com",
      ],
      images: [
        require('../assets/images/UTA.webp'),
        require('../assets/images/UTA.webp'),
        require('../assets/images/UTA.webp'),
      ],
      titles: [
        "SRS",
        "SWSH",
        "CENT",
      ],
    },
    {
      label: "Option 3",
      value: "Option 3",
      links: [
        "https://www.netflix.com",
        "https://www.hulu.com",
        "https://www.disneyplus.com",
        "https://www.disneyplus.com",
      ],
      images: [
        require('../assets/images/UTA.webp'),
        require('../assets/images/UTA.webp'),
        require('../assets/images/UTA.webp'),
        require('../assets/images/UTA.webp'),
      ],
      titles: [
        "CS",
        "Nursing",
        "Meta",
        "Quest 4"
      ],
    },
  ];


  useEffect(() => {
    const index = options.findIndex((item) => item.value === selectedValue);
    if (index !== -1 && options[index].links) {
      setLink(options[index].links);
      setImage(options[index].images);
      setTitle(options[index].titles);
    } else {
      setLink("")
    }
  }, [selectedValue]);


  return (
    <>
        <View style={styles.dropDownPicker}>
            <DropDownPicker 
              items={options}
              open={isOpen}
              value={selectedValue}
              setOpen={setIsOpen} 
              setValue={setSelectedValue}
            />
          </View>
        <Cards style={styles.cards} images={image} links={link} titles={title} />
    </>
  )
}

const styles = StyleSheet.create({
  dropDownPicker: {
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    top: 110,
  },
  cards:{
    top:100,
  }
});



export default Dropdownmenu;