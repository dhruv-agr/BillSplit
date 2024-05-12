import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Friends from '../components/Friends';
import Activity from '../components/Activity';
import Profile from '../components/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import GroupStackScreen from '../components/GroupStackScreen';
import LoginForm from '../screens/LoginForm';
import { PropsGroupStackScreen, RootTabParamList } from './Types';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootTabParamList>();
const HomeScreen = () => {
    return (<Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let highlight;
                let iconName='';
                highlight = focused? 'cyan': 'gray';
                if (route.name === 'Groups') {
                    iconName = 'group';
                } else if (route.name === 'Friends') {
                    iconName='user';
                }
                else if (route.name === 'Activity') {
                    iconName='fire';
                }
                else if (route.name === 'Profile') {
                    iconName='user-circle';
                }
                

                
                return <Icon name={iconName} size={size} color={highlight} />;
                },
                tabBarActiveTintColor: 'cyan',
                tabBarInactiveTintColor: 'gray',
                headerShown:false,
                tabBarStyle: { backgroundColor: '#2F363F'},
                initialRouteName: "Friends"
            })} >

            <Tab.Screen name="Friends" component={Friends} />
            <Tab.Screen name="Groups" component={GroupStackScreen} />

            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Profile" component={Profile} />
            {/* <Tab.Screen name="LoginForm" component={LoginForm}/> */}
        </Tab.Navigator>
    )
}
export default HomeScreen;