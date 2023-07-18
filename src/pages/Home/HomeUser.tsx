import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeUser({ navigation }): JSX.Element {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

export default HomeUser;
