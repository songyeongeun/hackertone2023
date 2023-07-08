import React from 'react';
import {View, TextInput, Button} from 'react-native';

function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onEmailHandler = text => {
    setEmail(text);
  };
  const onPasswordHandler = text => {
    setPassword(text);
  };
  return (
    <View>
      <TextInput
        onChangeText={onEmailHandler}
        value={email}
        placeholder="EMAIL"
      />
      <TextInput
        onChangeText={onPasswordHandler}
        value={password}
        placeholder="PASSWORD"
      />
      <Button
        title="로그인"
        onPress={() => {
          // if 챌린지 시작 전이면
          navigation.replace('ChallengeStack');
          // else if 챌린지 시작 후면
          // navigation.replace('Tab');
        }}
      />
      <Button
        title="회원가입"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
}

export default Login;
