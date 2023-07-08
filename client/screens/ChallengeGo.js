import React from 'react';
import {View, Button} from 'react-native';

function Challenge({navigation}) {
  return (
    <View>
      <Button
        title="챌린지 시작하기"
        onPress={() => {
          navigation.navigate('ChallengeInput');
        }}
      />
    </View>
  );
}

export default Challenge;
