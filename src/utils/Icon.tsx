import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
 
export type IconType =
  | 'MaterialIcons'
  | 'Ionicons'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Entypo'
  | 'AntDesign'
  | 'Feather'
  | 'EvilIcons'
  | 'Octicons';
 
export interface IconProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
}
 
const Icon: React.FC<IconProps> = ({
  type,
  name,
  size = 24,
  color = '#000',
  style,
  onPress,
  disabled = false,
  testID,
}) => {
  
  const renderIcon = () => {
    try {
      switch (type) {
        case 'MaterialIcons':
          return <MaterialIcons name={name} size={size} color={color} testID={testID} />;
        case 'Ionicons':
          return <Ionicons name={name} size={size} color={color} testID={testID} />;
        case 'FontAwesome':
          return <FontAwesome name={name} size={size} color={color} testID={testID} />;
        case 'FontAwesome5':
          return <FontAwesome5 name={name} size={size} color={color} testID={testID} />;
        case 'Entypo':
          return <Entypo name={name} size={size} color={color} testID={testID} />;
        case 'AntDesign':
          return <AntDesign name={name} size={size} color={color} testID={testID} />;
        case 'Feather':
          return <Feather name={name} size={size} color={color} testID={testID} />;
        case 'EvilIcons':
          return <EvilIcons name={name} size={size} color={color} testID={testID} />;
        case 'Octicons':
          return <Octicons name={name} size={size} color={color} testID={testID} />;
        default:
          // Fallback for unknown icon type
          return (
            <View style={[styles.fallbackIcon, { width: size, height: size }]}>
              <Text style={[styles.fallbackText, { fontSize: size * 0.5, color }]}>?</Text>
            </View>
          );
      }
    } catch (error) {
      // Error handling for invalid icon names
      console.warn(`Icon error: ${type} - ${name}`, error);
      return (
        <View style={[styles.fallbackIcon, { width: size, height: size }]}>
          <Text style={[styles.fallbackText, { fontSize: size * 0.5, color }]}>!</Text>
        </View>
      );
    }
  };
 
  if (onPress) {
    return (
      <View
        style={[
          styles.touchableContainer,
          style,
          disabled && styles.disabled,
        ]}
        onTouchEnd={disabled ? undefined : onPress}
      >
        {renderIcon()}
      </View>
    );
  }
 
  return (
    <View style={style}>
      {renderIcon()}
    </View>
  );
};
 
const styles = StyleSheet.create({
  touchableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  fallbackIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  fallbackText: {
    fontWeight: 'bold',
  },
});
 
export default Icon;