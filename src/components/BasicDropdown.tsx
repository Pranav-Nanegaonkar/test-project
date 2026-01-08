import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import DropdownComponent from './DropdownComponent';

const data = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];
const skills = [
  { label: 'React', value: 'react' },
  { label: 'Node', value: 'node' },
  { label: 'Python', value: 'python' },
];
export default function BasicDropdown() {
  const [value, setValue] = useState<string | null>(null);

  const [selected, setSelected] = useState<string[]>([]);

  return (
    <>
      <View>
        <DropdownComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Basic</Text>

        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select gender"
          value={value}
          onChange={item => setValue(item.value)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>With Search</Text>

        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select city"
          search
          searchPlaceholder="Search..."
          value={value}
          onChange={item => setValue(item.value)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Multiselect</Text>
        <MultiSelect
          style={styles.dropdown}
          data={skills}
          labelField="label"
          valueField="value"
          placeholder="Select skills"
          value={selected}
          search
          onChange={items => setSelected(items)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginBottom: 8, fontWeight: '600' },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
