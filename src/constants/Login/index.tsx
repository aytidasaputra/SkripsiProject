import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { API_URL } from '@env'

function Login({ navigation }): JSX.Element {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Email atau password salah.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
        );
    };

    const getUsers = async () => {
        let params = {
            email: email,
            password: password
        }

        let url = `${API_URL}login`

        console.log("URL", url);


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
                setUsers(res.data.data[0]);

                console.log("res.data.data[0]", res.data.data[0]);


                if (res.data.data.length == 0) {
                    showToast()

                } else {

                    if (res.data.data[0].role == 'warga') {
                        navigation.navigate('HomeUser', res.data.data[0])

                    } else if (res.data.data[0].role == 'rt') {
                        navigation.navigate('HomeAdmin', res.data.data[0])
                    }

                }

            })
            .catch((err) => {
                // Error handling
                showToast()
                return null;
            });
    };

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>

            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('StartScreen')
                }>
                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#0081C9', marginTop: 100, marginLeft: 30 }} size={30} />
                </TouchableOpacity>

                <View style={{}}>
                    <Text style={{ color: '#0081C9', fontSize: 20, marginLeft: 30, marginTop: 40 }}>SELAMAT DATANG </Text>
                    <Text style={{ color: '#0081C9', fontSize: 20, marginLeft: 30 }}>KEMBALI </Text>
                </View>

                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 100 }}
                    label="Email"
                    onChangeText={value => setEmail(value)}
                    variant="outlined"
                />

                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 20 }}
                    label="Password"
                    variant="outlined"
                    onChangeText={value => setPassword(value)}
                    trailing={props => (
                        <IconButton icon={props => <FontAwesomeIcon icon={faEye} {...props} />} {...props} />
                    )}
                />

                <TouchableOpacity onPress={() =>
                    getUsers()
                } style={{ marginHorizontal: 30, height: 30, marginTop: 10, backgroundColor: '#0081C9', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Masuk</Text>
                </TouchableOpacity>

            </View>

            <View style={{ marginBottom: 10, alignSelf: 'center' }}>
                <Text style={{ color: '#0081C9' }}>
                    Belum punya akun?
                    <Text onPress={() =>
                        navigation.navigate('Register')
                    } style={{ fontWeight: 'bold' }} > Silahkan daftar baru</Text>
                </Text>
            </View>

        </View>
    );
}

export default Login;
