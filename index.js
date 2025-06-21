// index.js
//import 'expo-dev-client';           // only if you’re using the dev-client
import { registerRootComponent } from 'expo';
import App from './App';

// This will ensure your App is the entry point,
// and ties into Expo’s AppRegistry under the name “main.”
registerRootComponent(App);
