// this will run only when app is installed new
  // if (newApp) {
  //   // store options array in local storage when app is installed new
  //   AsyncStorage.setItem('options', JSON.stringify(opt));

  //   //set Options value to local storage
  //   async function getOptions () {
  //     const localOptions = await AsyncStorage.getItem('options');
  //     if (localOptions !== null) {
  //       setOptions(JSON.parse(localOptions));
  //     } else {
  //       console.log('error')
  //     }
  //   }
  //   getOptions()
  //   setNewApp(false)
  // }


// Save the array to local storage
// const saveAndUpdateOptionsToLocal = async () => {
//   try {
//     await AsyncStorage.setItem('options', JSON.stringify(opt));
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Read the array from local storage
// const setOptionsFromStorage = async () => {
//   try {
//     const value = await AsyncStorage.getItem('options');
//     if (value) {
//       setOptions(JSON.parse(value));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// if (newApp) {
//   saveAndUpdateOptionsToLocal()
//   setOptionsFromStorage()
//   setNewApp(false)
// }



  // async function getAllKeys() {
  //   const keysFromStorage = await AsyncStorage.getAllKeys();
  //   // await AsyncStorage.multiRemove(["myarray", "options"]);
  //   console.log(keysFromStorage);
  // }

  // getAllKeys()
  






//  // addOptions()
//   async function addOptions() {
//     AsyncStorage.setItem('options', JSON.stringify(opt));
//   }
//   // addOptions()


  

  // useEffect (() => {
  //   console.log(options)
  // },[options])


  // getOptions()
  // console.log(options)
  // useEffect(() => {
  //   getOptions()
  // },[options])

  // 
  
  // const value = AsyncStorage.getItem('options');
  // setOptions(JSON.parse(value));
  
  // console.log(newApp)


 
  
  // async function getGreeting() {
  //   const myArray = await AsyncStorage.getItem('options');
  //   if (myArray !== null) {
  //     console.log(JSON.parse(myArray));
  //   } else {
  //     console.log('error')
  //   }
  // }
  
  // getGreeting();




  // console.log('HELL')


  // const addItem = (item) => {
  //   setOptions([...options, item]);
  //   AsyncStorage.setItem('options', JSON.stringify(opt));
  // };

  // const removeItem = (index) => {
  //   setOptions(options.slice(0, index).concat(options.slice(index + 1)));
  //   AsyncStorage.setItem('options', JSON.stringify(options));
  // };

  // const getoptions = () => {
  //   const value = AsyncStorage.getItem('options');
  //   if (value !== null) {
  //     setOptions(JSON.parse(value));
  //   }
  // };

  // getoptions();
  // console.log(options)
  // useEffect(() => {
  //   getoptions();
  // }, []);







  // if (newApp) {
  //   const value = AsyncStorage.getItem('options2');
  //   console.log('hell');
  //   setOptions(value);
  //   setNewApp(false);
  // }

  useEffect(() => {
    const getOptions = async () => {
      const value = await AsyncStorage.getItem('options2');
      console.log('hell')
      setOptions(value);
    }
  },[newApp])

  // function getItem(key) {
  //   // Return a promise that will resolve with the value of the item
  //   return AsyncStorage.getItem(key);
  // }

  // getItem('options').then((value) => {
  //   console.log(value);
  // })

  // const [options, setOptions] = useState( () => {
  //   try {

  //     const getOptions = async () => {
  //       const value = await AsyncStorage.getItem('options');
  //       console.log('inside getoptions')
  //       return value;
  //     }
  //     const hello = getOptions();
  //     return (JSON.parse(hello));
  //   } catch {
  //     const getOpt = async () => {
  //       await AsyncStorage.setItem('options', opt);
  //       const value = await AsyncStorage.getItem('options');
  //       console.log('inside catch');
  //       return value;
  //     }
  //     const hello = getOpt();
  //     return (JSON.parse(hello));
  //   }
  // })


  // const getGreeting = async() => {
  //   const myArray = await AsyncStorage.getItem('options');
  //   if (myArray !== null) {
  //     // console.log(myArray)
  //     const value = JSON.parse(myArray)
  //     return(value);
  //   } else {
  //     console.log('error')
  //   }
  // }
  // console.log('iam here');
  // const greeting = getGreeting();
  // console.log(greeting);


  // useEffect(() => {
  //   if (newApp) {
  //     // const [options,setOptions] = useState(opt);
  //     setNewApp(false);
  //     console.log('hell')
  //   }
  // },[])




 // const getItems = async () => {
  //   const data = await AsyncStorage.getItem('options2');
  //   if (data) {
  //     console.log('hello')
  //     setItems(JSON.parse(data));
  //   }
  // };


    // const storagearray = async () => {
  //   return (JSON.parse(await AsyncStorage.getItem('options')))
  // }


  
  // Save the array to local storage
// const saveAndUpdateOptionsToLocal = async () => {
//   try {
//     await AsyncStorage.setItem('options2', JSON.stringify(opt));
//   } catch (error) {
//     console.log(error);
//   }
// };

// saveAndUpdateOptionsToLocal()

  // async function getAllKeys() {
  // const keysFromStorage = await AsyncStorage.getAllKeys();
  // // await AsyncStorage.multiRemove(["myarray", "options"]);
  // console.log(keysFromStorage);
  // }

  // getAllKeys()

  function Component () {
    const [data, setData] = useState (); // state variable for data
    const [isLoading, setIsLoading] = useState (true); // state variable for loading status
  
    // load the data
    useEffect ( () => {
      const asyncAction = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem ('@1629349495937');
          if (jsonValue != null) {
            setData (JSON.parse (jsonValue)); // set the data
          }
          setIsLoading (false); // set loading status to false
        } catch (e) {
          // set the options to local storage and then set the options
        }
      };
      asyncAction (); // call the async function
    }, []); // run only once on app open
  






      //  // When different options are clicked
  // useEffect(() => {

  //   const index = options.findIndex((item) => item.value === selectedValue);
      
  //   // you can make the conditions based on indexs would be clearner
  //   // still home condition yet to work for asyncronous storage. As of now, both the conditions here are same
  //   if (selectedValue === "Home") {
  //     setLink(options[index].links);
  //     setImage(options[index].images);
  //     setTitle(options[index].titles);
  //     setIButton(true)
  //   } else if (index !== -1 && options[index].links) {
  //     setLink(options[index].links);
  //     setImage(options[index].images);
  //     setTitle(options[index].titles);
  //     setIButton(false)
  //   } else {
  //     setLink("")
  //   }

  // }, [selectedValue]);














  






//Dropdownmeanu ---------------------------------------





import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Cards from './Cards';
import opt from './Options';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Extra from './extra';
import { set } from 'react-native-reanimated';



const Dropdownmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Home");
  const [link, setLink] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [iButton, setIButton] = useState(false);
  const [options,setOptions] = useState(null)
  const [count, setCount] = useState(0)

  
  


  // const [options, setOptions] = useState();
  const [isLoading, setIsLoading] = useState (true); // state variable for loading 




// this function is for updating the state of options when remove button is clicked
const updateOptions = (newOptions) => {
  setOptions(newOptions);
};


  // // run only once on app open
  // useEffect ( () => {
  //   const asyncAction = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem ('options2');
  //       if (jsonValue != null) {
  //         console.log('I am setting optins')
  //         setOptions(JSON.parse (jsonValue));

  //       }
  //       console.log('I am setload to false')
  //       setIsLoading (false); // set loading status to false
  //     } catch (e) {
  //       console.log(e)
  //       //set the options to local storage and then set the options
  //     }
  //   };
  //   asyncAction (); // call the async function
  // }, []);


  // When different options are clicked
  useEffect(() => {






      console.log(' I am outside of async')
      const index = options.findIndex((item) => item.value === selectedValue);

      // you can make the conditions based on indexs would be clearner
      // still home condition yet to work for asyncronous storage. As of now, both the conditions here are same
      if (selectedValue === "Home") {
        setLink(options[index].links);
        setImage(options[index].images);
        setTitle(options[index].titles);
        setIButton(true);
      } else if (index !== -1 && options[index].links) {
        setLink(options[index].links);
        setImage(options[index].images);
        setTitle(options[index].titles);
        setIButton(false)
      } else {
        setLink("")
      }


    console.log(' I am outside of async but after home options')
  }, [selectedValue]);










  // if app is loading, then this line executes
  if (isLoading) {
    console.log('I am loading');
    const asyncAction = async (setOptions) => {
      console.log(' inside async')
      console.log(options)
      try {
        const jsonValue = await AsyncStorage.getItem('options2');
        if (jsonValue != null) {
          console.log('   I am setting options')
          setOptions(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log(e)
        //set the options to local storage and then set the options
      }
    
    };
    
    console.log(count)
    if (count === 0) {
      asyncAction(setOptions)
    } else if (count === 1) {
      setIsLoading(false); // set loading status to false
      console.log('loading is set to false')
    } else {
      setCount(count + 1);
    }
    return (
      <>
        <View>
            <ActivityIndicator size="large" color="black" animating={isLoading} />
        </View>
      </>
    );
  } else {

  // when app is not loading, then compiler will come here
  return (
    <>
      {/* zIndex will make the drowpdown window overlay on top of all the elements */}
      <View style={styles.dropDownPicker} zIndex={100}>
        {/* <extra/> */}
        <DropDownPicker
          items={options}
          open={isOpen}
          value={selectedValue}
          setOpen={setIsOpen}
          setValue={setSelectedValue}
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
  )
}
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












//Dropdownmeanu ---------------------------------------