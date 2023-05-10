import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import React, { View, Text } from 'react-native';


const PickerComponent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const items = [
    { label: "Option 1", value: "apple" },
    { label: "Option 2", value: "banana" },
    { label: "Option 3", value: "orange" },
    { label: "Option 4", value: "grape" },
    { label: "Option 5", value: "mango" },
  ];

  return (
    <>
      <View style={styles.container}>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
          />
      </View>
    </>
  );
};


const styles = {
  container: {
    width: "100%",
    top: 80,
    left: 0,

  },
}

export default PickerComponent;