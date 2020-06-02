 {/*  

  Henri Mobile Interview Project 
  V.1.0
  3 Screen with botton navigation using React Native

  Init Library ...

  Use Yarn and update Packages

  ---------------------------------------------------------
  XCODE : Project Settings -> Build System -> Legacy Build
  ---------------------------------------------------------
  
  yarn install
  cd ios && pod install cd ..
  react-native link react-native-safe-area-context
  react-native run-ios --simulator="iPhone 11"

  ---------------------------------------------------------

*/} 

 {/* Import Core List */}

import 'react-native-gesture-handler'
import * as React from 'react'

 {/* Import Navigation Items */}

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

 {/* Import Custom Screens */}

import HomeScreen from './src/screens/HomeScreen'
import UserListScreen from './src/screens/UserListScreen'
import FeedListScreen from './src/screens/FeedListScreen'
import ToDoListScreen from './src/screens/ToDoListScreen'

 {/* Init Navigation */}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

 {/* Custom Colors */}

const HenriGreenColor = '#67c8ba';
const HeaderTintColorDefault = '#fff';

 {/* Home Screen */}

const HomeScreenNavigation = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: HenriGreenColor },
          headerTintColor: HeaderTintColorDefault,
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
      </Stack.Navigator>
  );
}

 {/* User List */}

const UserListScreenNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerStyle: { backgroundColor: HenriGreenColor },
        headerTintColor: HeaderTintColorDefault,
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Users" component={UserListScreen} options={{ title: 'Users' }} />
    </Stack.Navigator>
  );
}

 {/* Feed List */}

const FeedListScreenNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerStyle: { backgroundColor: HenriGreenColor },
        headerTintColor: HeaderTintColorDefault,
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Feed" component={FeedListScreen} options={{ title: 'Feed' }} />
    </Stack.Navigator>
  );
}

 {/* To Do List */}

const ToDoListScreenNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="To Do"
      screenOptions={{
        headerStyle: { backgroundColor: HenriGreenColor },
        headerTintColor: HeaderTintColorDefault,
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="ToDo" component={ToDoListScreen} options={{ title: 'ToDo' }} />
    </Stack.Navigator>
  );
}

 {/* Run App */}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NagivationRouter"
        tabBarOptions={{
          activeTintColor: HenriGreenColor,
        }}>
        <Tab.Screen
          name="HomeScreenNavigation"
          component={HomeScreenNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}  />
          <Tab.Screen
          name="UserListScreenNavigation"
          component={UserListScreenNavigation}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-details" color={color} size={size} />
            ),
          }} />
          <Tab.Screen
          name="FeedListScreenNavigation"
          component={FeedListScreenNavigation}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="apps" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="ToDoListScreenNavigation"
          component={ToDoListScreenNavigation}
          options={{
            tabBarLabel: 'ToDo',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-star-outline" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App