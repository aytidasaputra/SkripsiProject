import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View, ToastAndroid, Alert, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

function Profil({ navigation, route }): JSX.Element {

    console.log("masuk navigate profil", route.params);
    let users = route.params
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [nik, setNik] = useState('');

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Simpan gagal.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
        );
    };


    const save = async () => {
        let params = {
            nama: nama,
            nik: nik,
            password: password,
            role: status,
            email: email
        }

        console.log("PARAMS", params);


        let url = 'http://192.168.1.8:3000/register'

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
                Alert.alert('Berhasil daftar, silahkan login', '', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => navigation.navigate('Login') },
                ]);

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
                <Text style={{ marginVertical: 20, fontWeight: 'bold', fontSize: 16, textAlign: 'center', color: 'red' }}>
                    Untuk kepentingan bersama, diharapkan untuk mengisi semua formulir dibawah ini
                </Text>
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="NIK"
                    onChangeText={value => {
                        setNik(value)
                        console.log(nik)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Nama Lengkap"
                    onChangeText={value => {
                        setNama(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />

                <Picker
                    selectedValue={status}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setStatus(itemValue)
                        console.log(status)
                    }}
                    style={{ marginHorizontal: 30, marginTop: 10, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1 }}
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
                <Picker
                    selectedValue={status}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setStatus(itemValue)
                        console.log(status)
                    }}
                    style={{ marginHorizontal: 30, marginTop: 10, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1 }}
                >
                    <Picker.Item label="RW 01" value="01" />
                    <Picker.Item label="RW 02" value="02" />
                    <Picker.Item label="RW 03" value="03" />
                    <Picker.Item label="RW 04" value="04" />
                    <Picker.Item label="RW 05" value="05" />
                    <Picker.Item label="RW 06" value="06" />
                    <Picker.Item label="RW 07" value="07" />
                    <Picker.Item label="RW 08" value="08" />
                    <Picker.Item label="RW 09" value="09" />
                    <Picker.Item label="RW 10" value="10" />
                    <Picker.Item label="RW 11" value="11" />
                    <Picker.Item label="RW 12" value="12" />
                </Picker>
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    onChangeText={value => {
                        setEmail(value)
                        console.log(email)
                    }}
                    label="Alamat"
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Alamat Asal"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Pendapatan (Gaji)"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Pekerjaan"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Status Perkawinan"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Jumlah Anak"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Jenis Kelamin"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Tempat Lahir"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Agama"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Tanggal Lahir"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />


                <TouchableOpacity onPress={() =>
                    save()
                } style={{ marginHorizontal: 30, height: 30, marginTop: 30, backgroundColor: '#0081C9', borderRadius: 5, marginBottom: 50 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Daftar</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
}

export default Profil;
