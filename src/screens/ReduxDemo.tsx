// src/screens/LoginScreen.tsx
import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { login, logout } from '../features/auth/authSlice';
import UserCard from '../components/UserCard';
import { getUsersAction } from '../features/test/testSlice';
import CustomHeader from '../components/CustomHeader';

export default function ReduxDemo() {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector(state => state.auth);
  const {
    users,
    loading: uLoading,
    error: uError,
  } = useAppSelector(state => state.users);

  console.log(users);

  return (
    <>
      <CustomHeader title="ReduxDemo" />
      <View className=" flex-1 items-center justify-center  gap-y-5">
        <TouchableOpacity
          className=" w-40 bg-[#2196f3] rounded-lg"
          onPress={() =>
            dispatch(login({ email: 'test@mail.com', password: '1234' }))
          }
        >
          <Text className="text-2xl font-bold text-white text-center">
            Login
          </Text>
        </TouchableOpacity>
        <View>
          {loading && <ActivityIndicator size={30} color="#2196f3" />}
          {user && <Text>Welcome {user.email}</Text>}
        </View>
        <TouchableOpacity
          className=" w-40 bg-[#2196f3] rounded-lg"
          onPress={() => dispatch(logout())}
        >
          <Text className="text-2xl font-bold text-white text-center ">
            Logout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className=" w-40 bg-[#2196f3] rounded-lg"
          onPress={() => dispatch(getUsersAction())}
        >
          <Text className="text-2xl font-bold text-white text-center ">
            Get Users
          </Text>
        </TouchableOpacity>

        {uLoading && <ActivityIndicator size={30} color="#2196f3" />}
        {users && <Text>{users.length}</Text>}

        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </>
  );
}
