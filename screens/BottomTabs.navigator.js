/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home.screen';
import {Search} from './Search.screen';
import {Download} from './Download.screen';
import {Profile} from './Profile.screen';

import {
  HomeIcon,
  SearchIcon,
  DownloadIcon,
} from '../constants/icons/Icons';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
        tabBarStyle: { 
          backgroundColor: '#1A1D29',
          height: 60,
        },
      }}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <HomeIcon fill="#fff" size={35}/>;
            }
            return <HomeIcon fill="#474A53" size={35}/>;
          },
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <SearchIcon  fill="#fff" size={35} />;
            }
            return <SearchIcon name="home" fill="#474A53" size={35} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="Download"
        component={Download}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <DownloadIcon fill="#fff" size={35} />;
            }
            return <DownloadIcon size="35" fill="#474A53"  />;
          },
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          /* tabBarIcon: ({color, focused}) => {
            if (focused) {
              return (
                <Image
                  source={'https://dummyimage.com/600x400/000/fff'}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 50,
                    backgroundColor: 'gray',
                    borderColor: '#000',
                    borderStyle: 'solid',
                    borderWidth: 1,
                  }}
                />
              );
            }
            return (
              <Image
                source={'https://dummyimage.com/600x400/000/fff'}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 50,
                  backgroundColor: 'gray',
                }}
              />
            );
          }, */
        }}
      />
    </BottomTabs.Navigator>
  );
};
