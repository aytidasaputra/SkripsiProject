import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View, ToastAndroid, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

function Register({ navigation }): JSX.Element {

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
        <View style={{ backgroundColor: '#fff', flex: 1 }}>

            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Login')
                }>

                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#0081C9', marginTop: 100, marginLeft: 30 }} size={30} />
                </TouchableOpacity>

                <View style={{}}>
                    <Text style={{ color: '#0081C9', fontSize: 20, marginLeft: 30, marginTop: 40 }}>Buat pengguna </Text>
                    <Text style={{ color: '#0081C9', fontSize: 20, marginLeft: 30 }}>baru </Text>
                </View>

                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 100 }}
                    label="Nama Lengkap"
                    onChangeText={value => {
                        setNama(value)
                        console.log(nama);
                    }}
                    variant="outlined"
                />

                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="NIK"
                    onChangeText={value => {
                        setNik(value)
                        console.log(nik)
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
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                >
                    <Picker.Item label="Status Penduduk" value="warga" />
                    <Picker.Item label="Warga" value="warga" />
                    <Picker.Item label="Ketua RT" value="rt" />
                    <Picker.Item label="Ketua RW" value="rw" />
                </Picker>
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    onChangeText={value => {
                        setEmail(value)
                        console.log(email)
                    }}
                    label="Email"
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Password"
                    onChangeText={value => {
                        setPassword(value)
                        console.log(password)
                    }}
                    variant="outlined"
                />

                <TouchableOpacity onPress={() =>
                    save()
                } style={{ marginHorizontal: 30, height: 30, marginTop: 10, backgroundColor: '#0081C9', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Daftar</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default Register;
