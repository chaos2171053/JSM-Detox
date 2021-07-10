/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Button } from '../components/Button';

export const DemoScreen = () => {
  const [answer, setAnswer] = useState(undefined);

  return (
    <SafeAreaView testID="demo-screen">
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.text}>1加1等于几?</Text>
          <Text style={[styles.text, { marginTop: 10 }]}>答案：</Text>
          <Text style={[styles.text, { color: 'red' }]} testID="answerText">
            {answer}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 50,
            alignItems: 'center',
          }}>
          <Button
            text="回答"
            testID="answerBtn"
            buttonStyles={styles.btn}
            onPress={() => setAnswer(2)}
          />
          <Button
            text="重置"
            buttonStyles={styles.btn}
            onPress={() => setAnswer(undefined)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  btn: {
    borderRadius: 10,
    width: 100,
  },
});
