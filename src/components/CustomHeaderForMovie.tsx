import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from '../utils/Icon';

export default function CustomHeaderForMovie({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.header]}>
      {/* Drawer Menu Icon */}
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Icon
          type="AntDesign"
          name="menu-fold"
          size={24}
          color={title === 'MovieHeader' ? 'white' : ''}
        />
      </Pressable>

      {/* <Text style={styles.title}>{title}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    // position: 'absolute',
    zIndex: 1,
    // backgroundColor: 'transparent',
  },
  title: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },
});
