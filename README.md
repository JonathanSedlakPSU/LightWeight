LightWeight is a mobile fitness app.


# Install dependencies:
- npm install
- npm install @react-native-async-storage/async-storage@1.23.1
- npm install react-native-safe-area-context@4.10.5
- npm install react-native-screens@3.31.1
- npm install @react-navigation/bottom-tabs
- npm install @expo/vector-icons
-  npm install react-native-svg@15.2.0
- npm install react-native-linear-gradient
- npm install expo@51.0.39
- npm install @react-native-google-signin/google-signin
- npm install react-native-svg
- npm install moment-timezone --legacy-peer-deps


# Install expo dev: 
- npm install -g eas-cli
- eas build --profile development --platform android
- eas init --id 64217525-fabc-4d5d-84b1-771a2f2c513d

#####

To run the app with Expo:
- npx expo start
- Press 'a' to open android

# To clear cache:
- npx expo start --clear

# eas commands
- eas whoami
- eas build --profile development --platform android
- eas logout
- eas login
- eas project:info
- eas project:unlink
- eas project:init

