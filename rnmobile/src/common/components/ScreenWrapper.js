import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

const ScreenWrapper = ({ children }) =>
  <View style={styles.component}>
    {children}
  </View>;

ScreenWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  component: {
    flexGrow: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
