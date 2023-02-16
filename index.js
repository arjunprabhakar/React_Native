/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Container from './Container';
import Flexbox from './src/Flexbox';
import Webview from './src/Webview';
import Registration from './src/Registration';
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => Container);
