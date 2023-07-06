import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Community from '../screens/Community';
import Information from '../screens/Information';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // 뒤로가기 표시 숨기기
      }}
      initialRouteName="Main">
      <Tab.Screen name="Information" component={Information} />
      <Tab.Screen options={{headerLeft: null}} name="Main" component={Main} />
      <Tab.Screen name="Comunity" component={Community} />
    </Tab.Navigator>
  );
};

export default MyTab;
