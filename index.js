import { AppRegistry, YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader'
]);
import App from './js/App';

AppRegistry.registerComponent('R10', () => App);
