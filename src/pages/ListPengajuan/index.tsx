import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View, ToastAndroid, Alert, ScrollView, SafeAreaView, SectionList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { API_URL } from '@env'
import axios from 'axios';
import moment from 'moment'

function ListPengajuan({ navigation, route }): JSX.Element {

    // console.log("masuk navigate profil", route.params);
    let users = route.params
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [list, setList] = useState([]);
    const [kd_user, setkd_user] = useState(users.nik);
    const [date, setDate] = useState(new Date())

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Get data pengajuan gagal.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
        );
    };

    useEffect(() => {
        getDataPengajuan()
    }, []);


    const getDataPengajuan = async () => {
        // console.log("MASUK SISNI");

        // console.log("PARAMS", kd_user);

        let params = {
            kd_user: kd_user
        }


        let url = `${API_URL}list-pengajuan`
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
                // console.log("RESS", res.data.data);
                setList(res.data.data)
            })
            .catch((err) => {
                // Error handling
                console.log("ERRR", err);

                showToast()
                return null;
            });
    };


    console.log("list", list);



    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <SectionList
                    sections={[
                        {
                            title: '',
                            data: list,
                        },
                    ]}
                    renderItem={({ item }) => <TouchableOpacity onPress={() =>
                        navigation.navigate('Pengajuan', item.no_pengajuan)
                    } style={{ flex: 1, backgroundColor: '#fff', padding: 10, marginHorizontal: 20, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: '#0081C9' }}>
                        <View style={{ justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#0081C9' }}>{item.deskripsi}</Text>
                                <Text>{moment(item.tanggal_pengajuan).format('l')}</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                {item.status == 'terima' ? (
                                    <Text style={{ backgroundColor: '#77D77B', color: '#fff', padding: 5, borderRadius: 5, fontWeight: 'bold', textAlign: 'center' }}>{item.status}</Text>
                                ) : item.status == 'pending' ? (
                                    <Text style={{ backgroundColor: '#FC3B3B', color: '#fff', padding: 5, borderRadius: 5, fontWeight: 'bold', textAlign: 'center' }}>{item.status}</Text>
                                ) : ''}

                            </View>
                        </View>
                    </TouchableOpacity>}
                    renderSectionHeader={({ section }) => (
                        <Text style={{}}>{section.title}</Text>
                    )}
                    keyExtractor={item => `basicListEntry-${item}`}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ListPengajuan;
