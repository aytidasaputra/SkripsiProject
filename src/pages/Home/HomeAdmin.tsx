import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ToastAndroid, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faEye, faUserGroup, faUser, faFile, faList } from '@fortawesome/free-solid-svg-icons';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    PieChart
} from "react-native-chart-kit";
import { API_URL } from '@env'
import axios from 'axios';

function HomeAdmin({ navigation, route }): JSX.Element {

    const [list, setList] = useState([]);

    console.log("masuk navigate baruu home", route.params);
    let users = route.params;


    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Get data gagal.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
        );
    };

    useEffect(() => {
        console.log("masuk use effect");

        getDataGrafis()
    }, []);


    const getDataGrafis = async () => {
        console.log("MASUKK HIT API");
        let params = {
            data: ''
        }

        let url = `${API_URL}jumlah-penduduk`

        await axios({
            url: url,
            method: 'POST',
            data: params,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                console.log("RESSSSSS", res.data.data);
                setList(res.data.data)
            })
            .catch((err) => {
                // Error handling
                console.log("ERRR", err);

                showToast()
                return;
            });
    };

    console.log("MASUKK SINI");


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <View style={{ marginTop: 50 }}>
                        <Text style={{ color: '#0081C9', fontSize: 16, marginLeft: 30 }}>Halo Pak RT, </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#0081C9', fontWeight: 'bold', fontSize: 16, marginLeft: 30 }}>{users.nama}</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#0081C9', fontWeight: 'bold', marginTop: 50, fontSize: 14, marginLeft: 30 }}>Menu</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center'
                        }}
                            onPress={() =>
                                navigation.navigate('Profil', users)
                            }
                        >
                            <FontAwesomeIcon icon={faUser} style={{ color: '#8062D6', marginLeft: 60, textAlign: 'center' }} size={30} />
                            <Text
                                style={{ color: '#8062D6', fontWeight: 'bold', textAlign: 'center' }}>Profil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Laporan', users)
                        } style={{
                            backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                        }}>
                            <FontAwesomeIcon icon={faFile} style={{ color: '#F11A7B', marginLeft: 60, textAlign: 'center' }} size={30} />
                            <Text
                                style={{ color: '#F11A7B', fontWeight: 'bold', textAlign: 'center' }}>Laporan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', marginTop: 40 }}>
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('ListPengajuanAdmin', users)
                        } style={{
                            backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                        }}>
                            <FontAwesomeIcon icon={faList} style={{ color: '#F2BE22', marginLeft: 60, textAlign: 'center' }} size={30} />
                            <Text
                                style={{ color: '#F2BE22', fontWeight: 'bold', textAlign: 'center' }}>List Pengajuan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('ListPendudukAdmin', users)
                        } style={{
                            backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                        }}>
                            <FontAwesomeIcon icon={faUserGroup} style={{ color: '#27E1C1', marginLeft: 60, textAlign: 'center' }} size={30} />
                            <Text
                                style={{ color: '#27E1C1', fontWeight: 'bold', textAlign: 'center' }}>Penduduk</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={{ color: '#0081C9', fontSize: 16, marginLeft: 30, marginTop: 40, marginBottom: 20, fontWeight: 'bold' }}>Grafis Jumlah Penduduk</Text>
                <PieChart
                    data={list}
                    width={Dimensions.get("window").width - 50} // from react-native
                    height={220}
                    chartConfig={{
                        color: (opacity = 1) => `white`,
                        labelColor: (opacity = 1) => `white`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    paddingLeft='20'
                    backgroundColor="#78C1F3"
                    accessor="population"
                    style={{ marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, borderRadius: 16, marginBottom: 40, }}
                    absolute

                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeAdmin;
