import { createTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TabAnnouncement from "./Announcement";
import TabHome from "./MainScreen/homeshop";
import TabTracking from "./Tracking";
import TabProfile from "./Profile";


const Tabs = createBottomTabNavigator();

const TabMainScreen = ()=> {
  return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#1a33b5',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { height: 100, paddingBottom: 10 },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Tracking') iconName = 'cube-outline';
            else if (route.name === 'Announcement') iconName = 'megaphone-outline';
            else if (route.name === 'Profile') iconName = 'person-outline';
          return <Ionicons name={iconName} size={30} color={color}/>;
          },
        })}
      >
        <Tabs.Screen name="Home" component={TabHome} />
        <Tabs.Screen name="Tracking" component={TabTracking} />
        <Tabs.Screen name="Announcement" component={TabAnnouncement} />
        <Tabs.Screen name="Profile" component={TabProfile} />
      </Tabs.Navigator>
  );

}
export default TabMainScreen ;