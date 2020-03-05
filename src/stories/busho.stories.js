import React from 'react';
import { Provider } from 'react-redux'

// Containerをインポート
import Busho from '../containers/Busho';

// Reducerをインポート
import BushoReducer from '../reducers/Busho'

// Storeをインポート
import { createStore } from 'redux'
const store = createStore(BushoReducer)

export default {
  title: '部署Select',
  component: Busho,
}

export const BushoStory = () => 
    <Provider store={store}>
        <Busho />
    </Provider>
