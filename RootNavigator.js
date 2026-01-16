import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from 'react-native';

import MainScreen from "./Screens/MainscreenSuccess";

import HomeShop from './Screens/MainScreen/homeshop';
import AnnouncementScreen from "./Screens/Announcement";
import ProfileScreen from "./Screens/Profile";
import TrackingScreen from "./Screens/Tracking";



import DetailListScreen from "./Screens/MainScreen/detailList" ;
import ServiceScreen from "./Screens/MainScreen/service" ;
import TransactionScreen from "./Screens/MainScreen/transaction" ;


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
 return (
   <Stack.Navigator
     initialRouteName="SUCCESS"
     screenOptions={{ headerTitleAlign: "center",headerTitleStyle:{fontSize: 30,
     fontFamily: 'Prompt_600SemiBold',
     headerStyle: {
          height: 90,// **ลองปรับความสูงตรงนี้ (เช่น 80, 90, 100)**
        },
     textAlign: 'center',
     color: '#1a33b5',
     fontWeight: 'bold',}
     }}
   >
     <Stack.Screen name="SUCCESS" component={MainScreen} options={{ title: "Main",headerTitle: () => (<Image source={{ uri: 'https://i.postimg.cc/FRGTZLH4/Gemini-Generated-Image-ex9m7kex9m7kex9m-Edited.png' }} style={{ width: 180, height: 45, resizeMode: 'contain'}} />) }}/>
     <Stack.Screen name="Home" component={HomeShop} options={{ title: "Home" }}/>
     <Stack.Screen name="Announcement" component={AnnouncementScreen} options={{ title: "Annoucement" }}/>
     <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }}/>
     <Stack.Screen name="Tracking" component={TrackingScreen} options={{ title: "MY List" }}/>
     <Stack.Screen name="DetailList" component={DetailListScreen} options={{ title: "MY List" }}/>
     <Stack.Screen name="Service" component={ServiceScreen} options={{ title: "Service" , headerBackVisible: false }}/>
     <Stack.Screen name="Transaction" component={TransactionScreen} options={{ title: "Transaction" }}/>
   </Stack.Navigator>
 );
}