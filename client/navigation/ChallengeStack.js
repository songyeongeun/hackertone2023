import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChallengeInput from '../screens/ChallengeInput';
import ChallengeGo from '../screens/ChallengeGo';
import MyTab from './Tab';

const Stack = createNativeStackNavigator();

function ChallengeStack() {
  return (
    <Stack.Navigator initialRouteName="ChallengeGo">
      <Stack.Screen
        name="ChallengeGo"
        component={ChallengeGo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChallengeInput"
        component={ChallengeInput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab"
        component={MyTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default ChallengeStack;
