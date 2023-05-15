import React, { useState } from "react";
import DropdownPicker from "react-native-dropdown-picker";
import { FlatList, View } from "react-native";


const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [links, setLinks] = useState()

  const options = [
    {
      label: "Option 1",
      links: [
        "https://www.google.com",
        "https://www.facebook.com",
        "https://www.twitter.com",
      ],
    },
    {
      label: "Option 2",
      links: [
        "https://www.amazon.com",
        "https://www.ebay.com",
        "https://www.etsy.com",
      ],
    },
    {
      label: "Option 3",
      links: [
        "https://www.netflix.com",
        "https://www.hulu.com",
        "https://www.disneyplus.com",
      ],
    },
  ];

  return (
    <>
      <View>
        <DropdownPicker 
          items = {options}
          open = {isOpen}
          value = {links}
          setOpen = {() => setIsOpen(!isOpen)} 
          setValue = {setLinks}
        />
      </View>
    </>
  )
}


export default Dropdownmenu;