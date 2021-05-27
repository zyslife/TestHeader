/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import ExampleCustomTabbar from './Example';
import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native';



const App: () => Node = () => {
  const [show, setShow] = React.useState(false)
  const onPressBtn = () => {
    setShow(true)
  }

  console.log('render==>', show);
  return (

    <View style={{flex:1}}>
      {show ?
        <ExampleCustomTabbar/>
        :
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <TouchableHighlight onPress={onPressBtn}>
            <Text>show tabs</Text>
          </TouchableHighlight>
        </View>
      }
    </View>
  );
};

export default App;
