import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../../constants/icons';

const Profile = () => {
  return (
    <View className="flex justify-center items-center   flex-1 flex-col gap-5 bg-primary px-10">
      <Image source={icons.person} className="size-10" tintColor="#fff" />
      <Text className="text-gray-500 text-base">Profile</Text>
    </View>
  );
};

export default Profile;
