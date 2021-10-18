import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Home from "./app/screens/Home";
import RestaurantDetail from "./app/screens/RestaurantDetail";
import { Provider } from "react-redux";
// import { store } from "../DoneWithIt/store";
import OrderCompleted from "./app/screens/OrderCompleted";
import { store } from "./store";

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    //@ts-ignore
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default RootNavigation;
