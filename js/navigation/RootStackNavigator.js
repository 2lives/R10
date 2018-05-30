import { createStackNavigator } from 'react-navigation';
import NavigationLayout, { SpeakerScreen } from './NavigationLayout';

export default createStackNavigator(
    {
        Layout: NavigationLayout,
        Speaker: SpeakerScreen
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
