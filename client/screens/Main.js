import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Main({navigation}) {
  const navi = useNavigation();
  const handleLogout = () => {
    navi.reset({index: 0, routes: [{name: 'Login'}]});
  };
  return (
    <View>
      <Text>"Main"</Text>
      <Button
        title="인증하기"
        onPress={() => {
          navigation.navigate('Certification');
        }}
      />
      <Button title="로그아웃" onPress={handleLogout} />
    </View>
  );
}

export default Main;
