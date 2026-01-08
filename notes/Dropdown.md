📦 What is react-native-element-dropdown?

A fully customizable dropdown component for React Native with:

✅ Single select

✅ Multi select

✅ Search inside dropdown

✅ Custom label/value keys

✅ API-driven data

✅ Form-friendly

✅ Lightweight & fast

4
1️⃣ Installation
npm i react-native-element-dropdown

No linking required.
Works with React Native CLI & Expo.

2️⃣ Basic Single Select Dropdown
✅ Use case

Country selector

Gender selector

Status selector

🔹 Example
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
{ label: 'Male', value: 'male' },
{ label: 'Female', value: 'female' },
{ label: 'Other', value: 'other' },
];

export default function BasicDropdown() {
const [value, setValue] = useState<string | null>(null);

return (
<View style={styles.container}>
<Text style={styles.label}>Gender</Text>

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

3️⃣ Searchable Dropdown (MOST USED)
✅ Use case

City selector

College selector

Company selector

Long lists

<Dropdown
data={data}
labelField="label"
valueField="value"
placeholder="Select city"
search
searchPlaceholder="Search..."
value={value}
onChange={item => setValue(item.value)}
/>

✔ Built-in search
✔ No extra code

4️⃣ Multi Select Dropdown
✅ Use case

Skills

Tags

Interests

Filters

import { MultiSelect } from 'react-native-element-dropdown';

const skills = [
{ label: 'React', value: 'react' },
{ label: 'Node', value: 'node' },
{ label: 'Python', value: 'python' },
];

const [selected, setSelected] = useState<string[]>([]);

<MultiSelect
data={skills}
labelField="label"
valueField="value"
placeholder="Select skills"
value={selected}
search
onChange={items => setSelected(items)}
/>;

Returned value:

["react", "node"]

5️⃣ Dropdown with API Data
✅ Use case

Backend-driven lists

Dynamic dropdowns

const [data, setData] = useState([]);

useEffect(() => {
fetch('https://api.example.com/countries')
.then(res => res.json())
.then(json =>
setData(
json.map(item => ({
label: item.name,
value: item.id,
}))
)
);
}, []);

Then use normally in <Dropdown />.

6️⃣ Controlled + Form Usage (Login / Register)
const [form, setForm] = useState({
country: '',
gender: '',
});

<Dropdown
data={countries}
labelField="label"
valueField="value"
value={form.country}
onChange={item =>
setForm(prev => ({ ...prev, country: item.value }))
}
/>;

✔ Works perfectly with:

Formik

React Hook Form

Custom validation

7️⃣ Custom Item Rendering (Advanced UI)
<Dropdown
data={data}
labelField="label"
valueField="value"
renderItem={item => (
<View style={{ padding: 12 }}>
<Text style={{ fontWeight: '600' }}>{item.label}</Text>
<Text style={{ fontSize: 12, color: '#666' }}>
Extra description
</Text>
</View>
)}
/>

8️⃣ Disable Dropdown
<Dropdown
  disabled
  placeholder="Disabled"
/>

9️⃣ Error State (Validation)
<Dropdown
style={[
styles.dropdown,
hasError && { borderColor: 'red' },
]}
/>

🔟 Full Feature Comparison
Feature Supported
Single select ✅
Multi select ✅
Search ✅
API data ✅
Custom UI ✅
Validation ✅
Controlled state ✅
Performance ✅
❌ Common Mistakes

❌ Forgetting labelField / valueField
❌ Passing raw API response without mapping
❌ Using objects instead of primitive value
❌ Not controlling state

🧠 Best Practices

✔ Always normalize API data
✔ Use search for lists > 10 items
✔ Use MultiSelect only when necessary
✔ Memoize data if large

🏁 When to Use This Library

✔ Forms
✔ Filters
✔ Profile screens
✔ Admin panels
✔ Mobile dashboards

🚀 Want More?

I can:

Combine dropdown + bottom sheet

Integrate with Formik

Add icons

Create dependent dropdowns (Country → State)

Add floating labels

Just tell me 👌
