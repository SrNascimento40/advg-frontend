import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import Dashboard from "../screens/Dashboard";
import Processes from "../screens/Processes";
import EditProfile from "../screens/EditProfile";
import Settings from "../screens/Settings";
import Chat from "../screens/Chat";
import Messages from "../screens/Messages";
import Invoices from "../screens/Invoices";
import Schedule from "../screens/Schedule";
import ProcessDetails from "../screens/ProcessDetails";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Processes" component={Processes} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Invoices" component={Invoices} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="ProcessDetails" component={ProcessDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
