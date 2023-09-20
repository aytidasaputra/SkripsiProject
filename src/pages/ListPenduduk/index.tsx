import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View, ToastAndroid, Alert, ScrollView, SafeAreaView, SectionList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { API_URL } from '@env'
import axios from 'axios';
import moment from 'moment'

function ListPenduduk({ navigation, route }): JSX.Element {

    // console.log("masuk navigate profil", route.params);
    let users = route.params
    const [rt, setRt] = useState('');
    const [list, setList] = useState([]);

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Get data pengajuan gagal.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
        );
    };

    const getDataPenduduk = async (value) => {
        console.log("value", value);

        // console.log("MASUK SISNI");

        // console.log("PARAMS", kd_user);

        let params = {
            rt: rt
        }


        let url = `${API_URL}list-rt`
        console.log("url", url);


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
                console.log("RESS", res.data.data);
                setList(res.data.data)
            })
            .catch((err) => {
                // Error handling
                console.log("ERRR", err);

                showToast()
                return null;
            });
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>

                    <Picker
                        selectedValue={rt}
                        // style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => {
                            setRt(itemValue)
                        }}
                        style={{ marginLeft: 20, marginTop: 10, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, width: 280 }}
                    >
                        <Picker.Item label="RT 01" value="01" />
                        <Picker.Item label="RT 02" value="02" />
                        <Picker.Item label="RT 03" value="03" />
                        <Picker.Item label="RT 04" value="04" />
                        <Picker.Item label="RT 05" value="05" />
                        <Picker.Item label="RT 06" value="06" />
                        <Picker.Item label="RT 07" value="07" />
                        <Picker.Item label="RT 08" value="08" />
                        <Picker.Item label="RT 09" value="09" />
                        <Picker.Item label="RT 10" value="10" />
                        <Picker.Item label="RT 11" value="11" />
                        <Picker.Item label="RT 12" value="12" />
                    </Picker>
                    <TouchableOpacity onPress={(value) =>
                        getDataPenduduk(value)
                    } style={{ marginRight: 20, height: 30, marginTop: 25, backgroundColor: '#0081C9', borderRadius: 5, width: 50 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Cari</Text>
                    </TouchableOpacity>

                </View>
                <SectionList
                    sections={[
                        {
                            title: '',
                            data: list,
                        },
                    ]}
                    renderItem={({ item }) => <View style={{ flex: 1, backgroundColor: '#fff', padding: 10, marginHorizontal: 20, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: '#0081C9' }}>
                        <View style={{ justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#0081C9' }}>{item.nama}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'grey' }}>{item.pekerjaan}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'grey' }}>{item.alamat_asal}</Text>
                                {/* <Text style={{ fontWeight: 'bold', color: 'grey', marginLeft: '70%' }}>{item.subsidi == 'YA' ? 'MISKIN' : 'TIDAK MISKIN'}</Text> */}
                            </View>
                            <View style={{ marginTop: 20 }}>
                                {item.status == 'terima' ? (
                                    <Text style={{ backgroundColor: '#77D77B', color: '#fff', padding: 5, borderRadius: 5, fontWeight: 'bold', textAlign: 'center' }}>{item.status}</Text>
                                ) : item.status == 'pending' ? (
                                    <Text style={{ backgroundColor: '#FC3B3B', color: '#fff', padding: 5, borderRadius: 5, fontWeight: 'bold', textAlign: 'center' }}>{item.status}</Text>
                                ) : ''}

                            </View>
                        </View>
                    </View>}
                    renderSectionHeader={({ section }) => (
                        <Text style={{}}>{section.title}</Text>
                    )}
                    keyExtractor={item => `basicListEntry-${item}`}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ListPenduduk;
