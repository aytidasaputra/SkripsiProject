import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from "@react-native-material/core";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function Register({ navigation }): JSX.Element {
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
                    variant="outlined"
                />

                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="NIK"
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Status Warga"
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Password"
                    variant="outlined"
                />

                <TouchableOpacity onPress={() =>
                    navigation.navigate('Login')
                } style={{ marginHorizontal: 30, height: 30, marginTop: 10, backgroundColor: '#0081C9', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Daftar</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default Register;
