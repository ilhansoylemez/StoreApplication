import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Pages/Products';
import ProductsDetail from './Pages/Detail';
const Stack = createNativeStackNavigator();
const navigationOptions = {
  headerTitleStyle: { alignSelf: 'center' },
  title: 'Center Title',
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true,headerTitleAlign: 'center'}}>
        <Stack.Screen name="Products" component={Products} options={
          {title: 'Mağaza', 
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white'}} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetail} options={
          {title: 'Ürün Detayı', 
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;