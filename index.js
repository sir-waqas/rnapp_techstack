/**
 * @format
 */

import { AppRegistry } from "react-native";
// import App from './App'; We will change this to our custom App Root Component
import App from "./src/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
