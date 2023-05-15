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

export default App;








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