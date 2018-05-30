import { createStackNavigator } from 'react-navigation';
import NavigationLayout, { Speaker } from './NavigationLayout';

export default createStackNavigator(
    {
        Layout: NavigationLayout,
        Speaker: Speaker
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
