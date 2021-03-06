/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Toolbar } from 'react-native-material-ui';

const schoolName = 'Santa Teresa'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} style={{ width: "100%" }} >
        <Toolbar
            style={styles.toolbar}
            leftElement="menu"
            centerElement=schoolName
          />
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </ScrollView>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
