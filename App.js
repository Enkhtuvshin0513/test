import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import CustomerScreen from "./src/screens/CustomerScreen";
import InventoryScreen from "./src/screens/InventoryScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import OrderScreen from "./src/screens/OrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import InquiryScreen from "./src/screens/InquiryScreen";
import OrderItemScreen from "./src/screens/OrderItemScreen";
import OrderConfirmScreen from "./src/screens/OrderConfirmScreen";
import DeliveryItemScreen from "./src/screens/DeliveryItemScreen";
import DeliveryReturnScreen from "./src/screens/DeliveryReturnScreen";
import CustomerInformationScreen from "./src/screens/CustomerInformationScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#40a8c4",
          },

          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "SALES" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="Customer"
          component={CustomerScreen}
          options={{ title: "Харилцагчид" }}
        />
        <Stack.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{ title: "Бараа" }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ title: "Мэдээ" }}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ title: "Захиалгын жагсаалт" }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{ title: "Түгээлтүүд" }}
        />
        <Stack.Screen
          name="Inquiry"
          component={InquiryScreen}
          options={{ title: "Лавлагаа" }}
        />
        <Stack.Screen
          name="OrderItem"
          component={OrderItemScreen}
          options={{ title: "Бараа" }}
        />
        <Stack.Screen
          name="OrderConfirm"
          component={OrderConfirmScreen}
          options={{ title: "Захиалга" }}
        />
        <Stack.Screen
          name="DeliveryItem"
          component={DeliveryItemScreen}
          options={{ title: "Түгээлт" }}
        />
        <Stack.Screen
          name="DeliveryReturn"
          component={DeliveryReturnScreen}
          options={{ title: "Бараа буцаалт" }}
        />
        <Stack.Screen
          name="CustomerInformation"
          component={CustomerInformationScreen}
          options={{ title: "Харилцагчийн мэдээлэл" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
