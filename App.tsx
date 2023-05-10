import { StatusBar, StyleSheet } from "react-native"
import CategoriesScreen from "./screens/CaterogiesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import FavoritesContextProvider from "./store/context/favorites-context"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#24180f'}></StatusBar>
      <FavoritesContextProvider>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#24180f' }
          }}>
            <Stack.Screen name="MealsCategoties" component={CategoriesScreen} options={{
              title: 'All Categories'
            }} />
            <Stack.Screen name="MealsOverViewScreen" component={MealsOverViewScreen} />
            <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#24180f'
  }
})