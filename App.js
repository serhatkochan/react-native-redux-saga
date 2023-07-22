// App.js
import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import actions from './src/redux/actions';
import selectors from "./src/redux/selectors";
import {dispatch} from "./src/redux";

const {
    user: {getUser}
} = actions;
const {
    user: {selectUserLoading, selectUserFirstName}
} = selectors;
const UserDetails = () => {
  const userFirstName = useSelector(selectUserFirstName);
  const loading = useSelector(selectUserLoading)

  useEffect(() => {
      handleGetUser();
  }, []);

  const handleGetUser = () => {
      dispatch(getUser());
  }

  return (
      <View style={{marginTop: 50, marginLeft: 10}}>
        <Text>{loading ? 'Loading...' : userFirstName}</Text>
          <Button title="Get User" onPress={handleGetUser} />
      </View>
  );
};

export default function App() {
  return (
      <Provider store={store}>
        <UserDetails />
      </Provider>
  );
}
