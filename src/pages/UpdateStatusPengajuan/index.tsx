import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View, ToastAndroid, Alert, ScrollView, SafeAreaView, PermissionsAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { API_URL } from '@env'

import { Buffer } from 'buffer';

import RNFetchBlob from 'rn-fetch-blob';

import axios from 'axios';

function UpdateStatusPengajuan({ navigation, route }): JSX.Element {

    console.log("masuk navigate pengajuan", route.params);

    let no_pengajuan = route.params.no_pengajuan ? route.params.no_pengajuan : null
    let kd_users = route.params.nik ? route.params.nik : null
    let user = route.params.nama ? route.params.nama : null
    console.log("kd_users", user);
    console.log("route.params", route.params);


    const [nama, setNama] = useState('');
    const [rt, setRt] = useState('');
    const [rw, setRw] = useState('');
    const [keperluan, setKeperluan] = useState('');
    const [status, setStatus] = useState('');
    const [desc, setDesc] = useState('');
    const [statusPengajuan, setStatusPengajuan] = useState('');
    const [nik, setNik] = useState('');
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState(new Date())

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Simpan gagal.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
        );
    };

    useEffect(() => {


        if (no_pengajuan != null) {
            getPengajuanDetail()

        }

        if (kd_users != null) {
            getListPengajuan()
        }
    }, []);


    const Permission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'My App Storage Permission',
                    message:
                        'App needs access to your storage ' +
                        'So you can download pdf',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            return granted
        } catch (error) {
            console.log(error);

            return null
        }

    }

    const downloadPDF = async () => {

        const resultPermission = await Permission();

        let params = {
            no_pengajuan: no_pengajuan
        }

        await axios({
            url: `${API_URL}download-surat`,
            method: 'POST',
            data: params,
            responseType: 'arraybuffer',
        })
            .then((res) => {
                console.log("res", res);

                if (resultPermission === PermissionsAndroid.RESULTS.GRANTED) {
                    const base64Image = Buffer.from(res.data, 'binary').toString('base64')
                    RNFetchBlob.fs.createFile(`${RNFetchBlob.fs.dirs.DownloadDir}/${no_pengajuan}`, base64Image, 'base64')

                } else {
                    console.log("ERORRR");

                }


            })
            .catch((err) => {
                console.log(err);


            })
    }

    const getPengajuanDetail = async () => {
        let params = {
            no_pengajuan: no_pengajuan
        }

        console.log("PARAMS", params);


        let url = `${API_URL}pengajuan-detail`

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
                console.log("RESSS", res.data.data[0]);
                // setData(res.data.data[0])
                setRt(res.data.data[0].rt)
                setRw(res.data.data[0].rw)
                setKeperluan(res.data.data[0].keperluan)
                setDesc(res.data.data[0].deskripsi)
                setStatus(res.data.data[0].status)


            })
            .catch((err) => {
                // Error handling
                console.log("ERRR", err);

                // showToast()
                return null;
            });
    };

    const getListPengajuan = async () => {
        let params = {
            kd_users: kd_users
        }

        console.log("PARAMS", params);


        let url = `${API_URL}list-users-detail`

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
                console.log("RESSS", res.data.data[0]);
                // setData(res.data.data[0])
                setRt(res.data.data[0].rt)
                setRw(res.data.data[0].rw)


            })
            .catch((err) => {
                // Error handling
                console.log("ERRR", err);

                // showToast()
                return null;
            });
    };

    const save = async () => {
        let params = {
            no_pengajuan: no_pengajuan,
            status: statusPengajuan
        }

        console.log("PARAMS", params);


        let url = `${API_URL}update-status`

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
                const data = route.params
                // console.log("RESSS", res.data.data[0]);
                // if (res.data.data.length == 0) {
                //     showToast()

                // } else {
                navigation.navigate('ListPengajuanAdmin', data)

                // }


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
                <View style={{ flexDirection: 'row', marginHorizontal: 30, marginTop: 10 }}>
                    <View>
                        <Text style={{ marginVertical: 20, fontWeight: 'bold', fontSize: 14, color: 'black', marginRight: 164 }}>
                            Pengajuan
                        </Text>

                    </View>
                    <View>
                        {
                            status == 'terima' ? (
                                <Text style={{ marginVertical: 20, fontWeight: 'bold', fontSize: 14, backgroundColor: '#77D77B', color: '#fff', paddingVertical: 5, borderRadius: 6, width: 100, textAlign: 'center' }}>
                                    Terima
                                </Text>
                            ) : status == 'pending' ? (
                                <Text style={{ marginVertical: 20, fontWeight: 'bold', fontSize: 14, backgroundColor: '#FC3B3B', color: '#fff', paddingVertical: 5, borderRadius: 6, width: 100, textAlign: 'center' }}>
                                    Dalam Proses
                                </Text>

                            ) : (
                                <Text>
                                </Text>
                            )
                        }


                    </View>
                </View>
                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Checker</Text>
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="RT"
                    value={rt}
                    editable={false} selectTextOnFocus={false}
                    onChangeText={value => {
                        setRt(value)
                        console.log(nik)
                    }}
                    variant="outlined"
                />
                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Signer</Text>
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="RW"
                    value={rw}
                    editable={false} selectTextOnFocus={false}
                    onChangeText={value => {
                        setRw(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Keperluan"
                    value={keperluan}
                    onChangeText={value => {
                        setKeperluan(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Deskripsi"
                    value={desc}
                    onChangeText={value => {
                        setDesc(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Approv</Text>
                <Picker
                    selectedValue={statusPengajuan}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setStatusPengajuan(itemValue)
                    }}
                    style={{ marginHorizontal: 30, marginTop: 10, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1 }}
                >
                    <Picker.Item label="Pilih Status" value="terima" />
                    <Picker.Item label="Terima" value="terima" />
                </Picker>




                {status == 'terima' ? (
                    ''
                ) : (
                    <TouchableOpacity onPress={() =>
                        save()
                    } style={{ marginHorizontal: 30, height: 30, marginTop: 30, backgroundColor: '#0081C9', borderRadius: 5, marginBottom: 50 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Simpan</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>

        </SafeAreaView>
    );
}

export default UpdateStatusPengajuan;
