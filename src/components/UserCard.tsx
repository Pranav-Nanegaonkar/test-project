import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: any;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
};

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{user.phone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Website</Text>
        <Text style={styles.value}>{user.website}</Text>
      </View>

      {/* Address */}
      <View style={styles.section}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>
          {user.address.street}, {user.address.suite}
        </Text>
        <Text style={styles.value}>
          {user.address.city} - {user.address.zipcode}
        </Text>
      </View>

      {/* Company */}
      <View style={styles.section}>
        <Text style={styles.label}>Company</Text>
        <Text style={styles.value}>{user.company.name}</Text>
        <Text style={styles.muted}>{user.company.catchPhrase}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  header: {
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginTop: 10,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 14,
    color: '#222',
  },
  muted: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
