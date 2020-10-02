/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Text from '../components/Text';
import {signOut} from '../helpers/AppStorage';
import {dashboardStyle} from '../styles';
import colors from '../styles/colors';

const Dashboard = () => {
  const data = [
    {
      name: 'Grace Avril',
      role: 'Super Fan',
      image:
        'https://images.pexels.com/photos/5257881/pexels-photo-5257881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Neil Armstrong',
      role: 'Class Captain ',
      image:
        'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Buzz Aldrin',
      role: 'Asst. Class Captain',
      image:
        'https://images.pexels.com/photos/5259412/pexels-photo-5259412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Jim Bridenstine',
      role: 'Supreme Leader',
      image:
        'https://images.pexels.com/photos/5259421/pexels-photo-5259421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Bob Benkhen',
      role: 'Asst. Class Captain',
      image:
        'https://images.pexels.com/photos/5257883/pexels-photo-5257883.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Doug Hurley',
      role: 'Supreme Leader',
      image:
        'https://images.pexels.com/photos/5259408/pexels-photo-5259408.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
  ];

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[
        dashboardStyle.userItem,
        {
          marginRight: index % 2 === 0 ? '3%' : 0,
          marginLeft: index % 2 !== 0 ? '3%' : 0,
        },
      ]}>
      <Image
        source={{
          uri: item.image,
        }}
        style={dashboardStyle.itemImage}
      />
      <View style={dashboardStyle.itemDetails}>
        <Text color={colors.primary}>{item.name}</Text>
        <Text color={colors.greyAA} fontSize={12}>
          {item.role}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={dashboardStyle.container}>
      <View style={[dashboardStyle.content, {marginTop: 50}]}>
        <Text color={colors.primary} bold fontSize={22}>
          Discover
        </Text>
      </View>
      <TouchableOpacity
        style={dashboardStyle.profileIcon}
        onPress={() => signOut()}>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/5258200/pexels-photo-5258200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
          style={dashboardStyle.icon}
        />
      </TouchableOpacity>
      <SafeAreaView>
        <View style={dashboardStyle.content}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
            numColumns={2}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
