import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
});

export default props => {
  return (
    <View style={style.display}>
      <Text style={style.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
};
