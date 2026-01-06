import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { Typography } from '../../theme/typography';

export function AppText({ style, ...props }: TextProps) {
  return <Text {...props} style={[styles.text, style]} />;
}

const styles = StyleSheet.create({
  text: Typography.default,
});
