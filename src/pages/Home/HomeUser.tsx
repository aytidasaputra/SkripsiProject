import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeUser({ navigation, route }): JSX.Element {

    console.log("masuk navigate baruu home", route.params);
    let users = route.params

    // const {params} = this.props.navigation.state
    // console.log("MASUKK NAVIGATE", params);

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ flex: 1 }}>


                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: '#0081C9', fontSize: 16, marginLeft: 30 }}>Halo, </Text>
                </View>
                <View>
                    <Text style={{ color: '#0081C9', fontWeight: 'bold', fontSize: 16, marginLeft: 30 }}>{users.nama}</Text>
                </View>
                <View>
                    <Text style={{ color: '#0081C9', fontWeight: 'bold', marginTop: 120, fontSize: 14, marginLeft: 30 }}>Menu</Text>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', marginTop: 100 }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                    }}
                        onPress={() =>
                            navigation.navigate('Profil', users)
                        }
                    >
                        <Text style={{ textAlign: 'center' }}>Profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                    }}>
                        <Text style={{ textAlign: 'center' }}>Pengajuan</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', marginTop: 40 }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                    }}>
                        <Text style={{ textAlign: 'center' }}>List Pengajuan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                    }}>
                        <Text style={{ textAlign: 'center' }}>Penduduk</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default HomeUser;
