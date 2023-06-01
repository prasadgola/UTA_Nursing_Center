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