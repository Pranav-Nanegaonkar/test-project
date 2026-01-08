📦 What are React Native Vector Icons?

react-native-vector-icons provides icon fonts like:

Ionicons

MaterialIcons

FontAwesome

AntDesign

Feather

Entypo

Octicons

EvilIcons

Used for:

Buttons

Tab bar icons

Headers

Forms

Drawer menus


1️⃣ Install the Package
      
      npm install react-native-vector-icons

2️⃣ Link Fonts (React Native CLI)
🔹 RN ≥ 0.60 (Auto-linking)

No manual linking needed 👍

But Android needs one extra step.

3️⃣ Android Setup (VERY IMPORTANT)
📄 android/app/build.gradle

Make sure this line exists:

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

📍 Full example:

apply plugin: "com.android.application"
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

android {
...
}

4️⃣ iOS Setup
📱 Run Pods
cd ios
pod install
cd ..

No other config needed.

5️⃣ Rebuild App (MANDATORY)
npx react-native run-android

# or

npx react-native run-ios

6️⃣ Basic Usage Example
✔ Using Ionicons
import Icon from 'react-native-vector-icons/Ionicons';

<Icon name="home-outline" size={26} color="#000" />

7️⃣ Common Icon Libraries & Imports
Icon Set Import
Ionicons react-native-vector-icons/Ionicons
MaterialIcons react-native-vector-icons/MaterialIcons
FontAwesome react-native-vector-icons/FontAwesome
AntDesign react-native-vector-icons/AntDesign
Feather react-native-vector-icons/Feather
8️⃣ Icon Button Example
import Icon from 'react-native-vector-icons/Feather';

<Pressable style={styles.btn}>
  <Icon name="camera" size={20} color="#fff" />
  <Text style={styles.text}>Upload</Text>
</Pressable>

9️⃣ Icons in Bottom Tabs (Very Common)
<Tab.Screen
name="Home"
component={Home}
options={{
    tabBarIcon: ({ color, size }) => (
      <Icon name="home" color={color} size={size} />
    ),
  }}
/>

🔟 Icons in Header (Menu / Back)
options={({ navigation }) => ({
headerLeft: () => (
<Icon
name="menu"
size={26}
onPress={() => navigation.openDrawer()}
/>
),
})}

1️⃣1️⃣ Icons with TextInput
<View style={styles.inputBox}>
<Icon name="mail" size={20} />
<TextInput placeholder="Email" />
</View>

1️⃣2️⃣ Common Problems & Fixes
❌ Icon not showing (Android)

✔ Rebuild app
✔ Ensure fonts.gradle is applied

❌ Red screen: font not found

✔ Clean build:

cd android
gradlew clean
cd ..
npx react-native run-android

❌ White boxes instead of icons

✔ App not rebuilt after install

🧠 Pro Tips

Use Ionicons for modern UI

Keep icon size between 20–28

Match icon color with theme

Avoid mixing too many icon packs

🏁 Final Checklist

✔ Package installed
✔ Fonts linked
✔ App rebuilt
✔ Correct icon name
✔ Correct import
