import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import ProductReducer from './store/reducers/products';
import ShowNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: ProductReducer
})
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ShowNavigator></ShowNavigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
