import React, { useState } from "react";
import { AsyncStorage } from "react-native";

const App = () => {
  const [array, setArray] = useState([]);

  const addItem = () => {
    setArray([...array, "New Item"]);
  };

  const getArray = async () => {
    const value = await AsyncStorage.getItem("array");
    setArray(JSON.parse(value));
  };

  useEffect(() => {
    getArray();
  }, []);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};



const images = [
  {
    image: "https://i.imgur.com/a.jpg",
    title: "Image 1",
  },
  {
    image: "https://i.imgur.com/b.jpg",
    title: "Image 2",
  },
];

const variable = 4

const updatehome = (index) => {
  // Do something with the index
};

const App = () => {
  return (
    <div>
      {images.map((image, i) => (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(links[i])
          }}
          onLongPress={() => {
            updatehome(i)
          }}
          delayLongPress={1000}
        >
          <Card key={i} image={image} title={titles[i]} />
        </TouchableOpacity>
      ))}
    </div>
  );
};