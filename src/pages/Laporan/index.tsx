import React, { useEffect, useState } from 'react';
import { TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View, ToastAndroid, Alert, ScrollView, SafeAreaView, PermissionsAndroid, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faEye, faUserGroup, faUser, faFile, faList } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '@env'

import { Buffer } from 'buffer';

import RNFetchBlob from 'rn-fetch-blob';

import axios from 'axios';

function Laporan({ navigation, route }): JSX.Element {

    const [loading, setLoading] = useState(false);


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

    const downloadPDF = async (type) => {

        setLoading(true)

        console.log("TYPE", type);


        const resultPermission = await Permission();
        let date = new Date()
        console.log("datae", date);

        let subURL = ''

        if (type == "PENDUDUK") {
            subURL = 'download-penduduk'
        } else if (type == "SUBSIDI") {
            subURL = 'download-subsidi'
        } else if (type == "PENGAJUAN") {
            subURL = 'download-pengajuan'
        } else {
            subURL = 'download-petugas'
        }

        await axios({
            url: `${API_URL + subURL}`,
            method: 'POST',
            data: '',
            responseType: 'arraybuffer',
        })
            .then((res) => {
                console.log("res", res);

                if (resultPermission === PermissionsAndroid.RESULTS.GRANTED) {
                    const base64Image = Buffer.from(res.data, 'binary').toString('base64')
                    RNFetchBlob.fs.createFile(`${RNFetchBlob.fs.dirs.DownloadDir}/${type + date}.pdf`, base64Image, 'base64')
                    setLoading(false)

                } else {
                    console.log("ERORRR");

                }


            })
            .catch((err) => {
                console.log(err);


            })
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            {loading == true ? (
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <ActivityIndicator size="large" color="#00ff00" />
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 14, color: 'red' }}>Sedang mengunduh berkas, harap tunggu.</Text>
                </View>

            ) : (
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>

                        <View>
                            <Text style={{ color: '#0081C9', fontWeight: 'bold', marginTop: 50, fontSize: 14, marginLeft: 30 }}>Download Laporan</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', marginTop: 20 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center'
                            }}
                                onPress={() =>
                                    downloadPDF('PENDUDUK')
                                }
                            >
                                <FontAwesomeIcon icon={faUser} style={{ color: '#8062D6', marginLeft: 60, textAlign: 'center' }} size={30} />
                                <Text
                                    style={{ color: '#8062D6', fontWeight: 'bold', textAlign: 'center' }}>Laporan Penduduk</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>
                                downloadPDF('SUBSIDI')
                            } style={{
                                backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                            }}>
                                <FontAwesomeIcon icon={faFile} style={{ color: '#F11A7B', marginLeft: 60, textAlign: 'center' }} size={30} />
                                <Text
                                    style={{ color: '#F11A7B', fontWeight: 'bold', textAlign: 'center' }}>Laporan Penduduk Miskin</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', marginTop: 40 }}>
                            <TouchableOpacity onPress={() =>
                                downloadPDF('PENGAJUAN')
                            } style={{
                                backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                            }}>
                                <FontAwesomeIcon icon={faList} style={{ color: '#F2BE22', marginLeft: 60, textAlign: 'center' }} size={30} />
                                <Text
                                    style={{ color: '#F2BE22', fontWeight: 'bold', textAlign: 'center' }}>Laporan Pengajuan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>
                                downloadPDF('PETUGAS')
                            } style={{
                                backgroundColor: '#fff', width: 150, height: 100, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1, justifyContent: 'center',
                            }}>
                                <FontAwesomeIcon icon={faUserGroup} style={{ color: '#27E1C1', marginLeft: 60, textAlign: 'center' }} size={30} />
                                <Text
                                    style={{ color: '#27E1C1', fontWeight: 'bold', textAlign: 'center' }}>Laporan Data Petugas</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </ScrollView>
            )}


        </SafeAreaView>
    );
}

export default Laporan;
