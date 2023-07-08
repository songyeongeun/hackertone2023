import React from 'react';
import {View, TextInput, Button} from 'react-native';

function ChallengeInput({navigation}) {
  const [smokingSycle, setSmokingSycle] = React.useState('');
  const [money, setMoney] = React.useState('');

  const onSmokingSycleHandler = text => {
    setSmokingSycle(text);
  };
  const onMoneyHandler = text => {
    setMoney(text);
  };

  return (
    <View>
      <TextInput
        onChangeText={onSmokingSycleHandler}
        value={smokingSycle}
        placeholder="흡연 주기를 적어주세요."
      />
      <TextInput
        onChangeText={onMoneyHandler}
        value={money}
        placeholder="얼마를 거시겠습니까?"
      />
      <Button
        title="시작하기"
        onPress={() => {
          navigation.replace('Tab');
        }}
      />
    </View>
  );
}

export default ChallengeInput;
