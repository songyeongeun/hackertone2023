import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigation/Stack';
import Loading from './screens/Loading';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    simulateLoading();
  }, []);

  const simulateLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return isLoading ? (
    <Loading />
  ) : (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
