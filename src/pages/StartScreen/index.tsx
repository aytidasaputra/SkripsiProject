import React from 'react';
import { Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

function StartScreen({ navigation }): JSX.Element {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ flex: 1 }}>


                <View style={{ marginTop: 150 }}>
                    <Text style={{ color: '#0081C9', fontSize: 20, marginLeft: 10 }}>Cara mudah </Text>
                </View>
                <View>
                    <Text style={{ color: '#0081C9', fontWeight: 'bold', fontSize: 25, marginLeft: 10 }}>BIKIN SURAT SURAT </Text>
                </View>
                <View>
                    <Text style={{ color: '#0081C9', marginLeft: 10 }}>Buat surat surat izin cukup dari rumah,</Text>
                </View>
                <View>
                    <Text style={{ color: '#0081C9', marginLeft: 10 }}>tidak perlu lagi ke rumah rt malam malam</Text>
                </View>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('Login')
                } style={{ width: 100, height: 30, marginTop: 10, backgroundColor: '#0081C9', marginLeft: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Masuk</Text>
                </TouchableOpacity>

            </View>
            <Image
                style={{ alignSelf: 'center' }}
                source={require('../../assets/images/tiny.png')}
            />
        </View>
    );
}

export default StartScreen;
