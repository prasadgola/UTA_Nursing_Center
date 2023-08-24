## 🚀 How to use

- Install packages with `yarn` or `npm install`.
- Run `yarn start` or `npm run start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser
- When it's time to customize your runtime, refer to the ["Adding custom native code"](https://docs.expo.dev/workflow/customizing/) guide!

## Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.dev/distribution/app-stores/).
- Deploy the website using this guide: [Web deployment](https://docs.expo.dev/distribution/publishing-websites/).

## 📝 Notes

- Learn more about [Universal React](https://docs.expo.dev/).
- See what API and components are [available in the React runtimes](https://docs.expo.dev/versions/latest/).
- Find out more about developing apps and websites: [Official guides](https://docs.expo.dev/guides/).

# UTA_Nursing_Center

#You should have android studios
#you should have xcode

#select expo template while creating react native app
npx create-react-native-app my-app

#try if any error
npm install -g eas-cli

#in project folder
react-native doctor, this will diognizes error, check the missing errors

#npx/expo needs package-lock.json - node models to run

#There 3 package manager, they are NPM, React-native, Expo

#expo workes for android, ios and web to me

#for web pls install
npx expo install @expo/webpack-config@^18.0.1
npm start
npm run ios
npm run android
npm run web

# for menu bar
npm install react-native-dropdown-picker

# If expo is displaying something went wrong network issue
expo start --tunnel
