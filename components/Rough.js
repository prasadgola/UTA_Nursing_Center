import React, { useState } from "react";
import { DropdownPicker } from "react-native-dropdown-picker";
import { FlatList } from "react-native";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [cards, setCards] = useState([]);

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

  const onOptionChange = (option) => {
    setSelectedOption(option);
    setCards(option.links);
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => {
      // Redirect to the browser with the link
      const url = item;
      const { useLinking } = React;
      useLinking((url) => {
        if (url) {
          Linking.openURL(url);
        }
      });
    }}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <DropdownPicker
        value={selectedOption}
        onChangeText={onOptionChange}
        options={options}
      />
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

var images = { UTA: require(“…/assets/images/UTA.jpg”) };
var image = “UTA”;
return ( <Image source={images[image]} /> );

export default App;



import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [links, setLinks] = useState([])

  const options = [
    {
      label: "Option 1",
      value: "Option 1",
      links: [
        "https://www.google.com",
        "https://www.facebook.com",
        "https://www.twitter.com",
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
    },
    {
      label: "Option 3",
      value: "Option 3",
      links: [
        "https://www.netflix.com",
        "https://www.hulu.com",
        "https://www.disneyplus.com",
      ],
    },
  ];

  const onOptionChange = (option) => {
    const selectedOption = options.find(opt => opt.value === option);
    if (selectedOption) {
      setLinks(selectedOption.links);
    }
  };

  return (
    <>
      <View>
        <DropDownPicker 
          items={options}
          open={isOpen}
          value={links}
          setOpen={setIsOpen} 
          setValue={setLinks}
          onChangeValue={(option) => onOptionChange(option)}
        />
        {links.map(link => (
          <Text key={link}>{link}</Text>
        ))}
      </View>
    </>
  )
}


const onOptionChange = (option) => {
    const selectedOption = options.find(opt => opt.value === option);
    if (selectedOption) {
      setLinks(selectedOption.links);
    }
    console.log(links)
  };


  import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [links, setLinks] = useState([])

  const options = [
    {
      label: "Option 1",
      value: "Option 1",
      links: [
        "https://www.google.com",
        "https://www.facebook.com",
        "https://www.twitter.com",
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
    },
    {
      label: "Option 3",
      value: "Option 3",
      links: [
        "https://www.netflix.com",
        "https://www.hulu.com",
        "https://www.disneyplus.com",
      ],
    },
  ];

  const onOptionChange = (option) => {
    const selectedOption = options.find(opt => opt.value === option);
    if (selectedOption) {
      setLinks(selectedOption.links);
    }
  };

  useEffect(() => {
    console.log(links);
  }, [links]);

  return (
    <>
      <View>
        <DropDownPicker 
          items={options}
          open={isOpen}
          value={links}
          setOpen={setIsOpen} 
          setValue={setLinks}
          onChangeValue={(option) => onOptionChange(option)}
        />
      </View>
    </>
  )
}



const index = options.findIndex((item) => item.value === newValue);
              if (index !== -1 && options[index].links) {
                // console.log(options[index].links)
                setArray(options[index].links);
              } else {
                setArray("")
              }


<DropDownPicker
  items={[
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Orange', value: 'orange'},
  ]}
  defaultValue={selectedValue}
  containerStyle={{height: 40}}
  style={{backgroundColor: '#fafafa'}}
  itemStyle={{
    justifyContent: 'flex-start'
  }}
  dropDownStyle={{backgroundColor: '#fafafa'}}
  onChangeItem={item => setSelectedValue(item.value)}
/>

// <TouchableOpacity

                    // key={i}

                    // onPress={() => {
                    //     Linking.openURL(links[i]);
                    // }}

                    // onLongPress={() => {
                    //     // Do something when the card is long pressed.
                    //     }}

                    // >

                    // <Card key={index} image={image} title={titles[i]} />
                    // </TouchableOpacity>





const onDropdownClick = () => {
    const cards = items[value].links.map((link, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
          Linking.openURL(link);
        }}
        onLongPress={() => {
          // Do something when the card is long pressed.
        }}
      >
        <Card key={index} image={card.image} title={card.title} description={card.description} />
      </TouchableOpacity>
    ));
    return cards;
  };


  {items.map((card, index) => (

    <TouchableOpacity
        key={index}
        onPress={() => {
            // Do something when the card is clicked.
            Linking.openURL(card.link);
        }}
        onLongPress={() => {
            // Do something when the card is long pressed.
            }}
    >

    <Card key={index} image={card.image} title={card.title} description={card.description} />


    </TouchableOpacity>


  ))}