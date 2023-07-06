import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function Signup({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [valid, setValid] = React.useState(true);

  const onEmailHandler = text => {
    setEmail(text);
  };
  const onPasswordHandler = text => {
    setPassword(text);
  };
  const onPasswordConfirmHandler = text => {
    setPasswordConfirm(text);
  };
  const onNicknameHandler = text => {
    setNickname(text);
  };
  const onClick = () => {
    if (password !== passwordConfirm) {
      setValid(false);
    } else {
      setValid(true);
      // 서버에 회원가입 정보 보내주기
      //
      //
      //
      navigation.navigate('Login');
    }
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
      <TextInput
        onChangeText={onPasswordConfirmHandler}
        value={passwordConfirm}
        placeholder="PASSWORD CONFIRM"
      />
      {valid ? null : <Text>"비밀번호가 다릅니다."</Text>}
      <TextInput
        onChangeText={onNicknameHandler}
        value={nickname}
        placeholder="NICKNAME"
      />
      <Button title="회원가입" onPress={onClick} />
    </View>
  );
}

export default Signup;
