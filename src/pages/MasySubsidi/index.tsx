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
import { min } from 'moment';

function MasySubsidi({ navigation, route }): JSX.Element {

    console.log("masuk navigate pengajuan", route.params);

    let rt_2 = route.params.rt ? route.params.rt : null
    let no_pengajuan = route.params ? route.params : null
    let kd_users = route.params.nik ? route.params.nik : null
    let user = route.params.nama ? route.params.nama : null
    console.log("kd_users", user);
    console.log("route.params", route.params);


    const [nama, setNama] = useState('');
    const [dinding, setDinding] = useState('');
    const [wc, setWC] = useState('');
    const [air, setAir] = useState('');
    const [masak, setMasak] = useState('');
    const [makan, setMakan] = useState('');
    const [minum, setMinum] = useState('');
    const [obat, setObat] = useState('');
    const [jual, setJual] = useState('');
    const [luasLantai, setluasLantai] = useState('');
    const [jenisLantai, setjenisLantai] = useState('');
    const [status, setstatus] = useState('');

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

    }, []);


    const save = async () => {
        let params = {
            nik: kd_users,
            nama: user,
            luas_lantai: luasLantai,
            jenis_lantai: jenisLantai,
            jenis_dinding: dinding,
            fasilitas_wc: wc,
            sum_air_minum: minum,
            bahan_bakar_masak: masak,
            jumlah_makan: makan,
            biaya_pengobatan: obat,
            aset_jual: jual,
            status: status
        }

        console.log("PARAMS", params);


        let url = `${API_URL}pengajuan`

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
                console.log("ress", res);

                // console.log("RESSS", res.data.data[0]);
                // if (res.data.data.length == 0) {
                //     showToast()

                // } else {
                // navigation.navigate('ListPengajuan', data)

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
                        <Text style={{ marginVertical: 20, fontWeight: 'bold', fontSize: 14, color: 'black' }}>
                            Kategori Masyrakat Miskin
                        </Text>

                    </View>
                </View>

                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="NIK"
                    value={kd_users}
                    editable={false} selectTextOnFocus={false}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Nama"
                    value={user}
                    editable={false} selectTextOnFocus={false}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Jenis Dinding"
                    value={dinding}
                    onChangeText={value => {
                        setDinding(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Fasilitas WC"
                    value={wc}
                    onChangeText={value => {
                        setWC(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Sumber Air Minum"
                    value={minum}
                    onChangeText={value => {
                        setMinum(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Luas Lantai"
                    value={luasLantai}
                    onChangeText={value => {
                        setluasLantai(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Jenis Lantai"
                    value={jenisLantai}
                    onChangeText={value => {
                        setjenisLantai(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Bahan Bakar Masak"
                    value={masak}
                    onChangeText={value => {
                        setMasak(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Jumlah Makan"
                    value={makan}
                    onChangeText={value => {
                        setMakan(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Biaya Pengobatan"
                    value={obat}
                    onChangeText={value => {
                        setObat(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Aset Jual"
                    value={jual}
                    onChangeText={value => {
                        setJual(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />

                <Picker
                    selectedValue={status}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setstatus(itemValue)
                        console.log(status)
                    }}
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                >
                    <Picker.Item label="Pilih Status" value="" />
                    <Picker.Item label="MISKIN" value="YA" />
                    <Picker.Item label="TIDAK MISKIN" value="TIDAK" />
                </Picker>

                <TouchableOpacity onPress={() => save()} style={{ marginHorizontal: 30, height: 30, marginTop: 10, backgroundColor: '#0081C9', borderRadius: 5, marginBottom: 50 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Simpan</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
}

export default MasySubsidi;
