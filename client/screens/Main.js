import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Main() {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };
  return (
    <View>
      <Button title="로그아웃" onPress={handleLogout} />
      <Text>"Main"</Text>
    </View>
  );
}

export default Main;
