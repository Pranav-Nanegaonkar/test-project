import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from '../utils/Icon';

export default function CustomHeader({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, title === 'Test' && styles.black]}>
      {/* Drawer Menu Icon */}
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Icon
          type="AntDesign"
          name="menu-fold"
          size={24}
          color={title === 'Test' ? 'white' : ''}
        />
      </Pressable>

      {/* <Text style={styles.title}>{title}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  black: {
    backgroundColor: 'black',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },
});
