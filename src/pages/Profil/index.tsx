import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View, ToastAndroid, Alert, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { API_URL } from '@env'
import axios from 'axios';

function Profil({ navigation, route }): JSX.Element {

    let users = route.params

    const [nik, setNik] = useState('');
    const [nama, setNama] = useState('');
    const [tempatLahir, setTempatLahir] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState('');
    const [rt, setRt] = useState('');
    const [rw, setRw] = useState('');
    const [namart, setNamaRt] = useState('');
    const [namarw, setNamaRw] = useState('');
    const [nomorRumah, setNomorRumah] = useState('');
    const [alamat, setAlamat] = useState('');
    const [alamatAsal, setAlamatAsal] = useState('');
    const [pendapatan, setPendapatan] = useState('');
    const [pekerjaan, setPekerjaan] = useState('');
    const [statusKawin, setStatusKawin] = useState('');
    const [jumlahAnak, setJumlahAnak] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [agama, setAgama] = useState('');
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
        if (nik != null) {
            getProfil()
        }
    }, []);

    const save = async () => {

        let params = {
            kd_users: nik,
            nama: nama,
            tempat_lahir: tempatLahir,
            tanggal_lahir: tanggalLahir,
            rt: rt,
            rw: rw,
            nama_rt: namart,
            nama_rw: namarw,
            nomor_rumah: nomorRumah,
            alamat: alamat,
            alamat_asal: alamatAsal,
            pendapatan: pendapatan,
            pekerjaan: pekerjaan,
            status_perkawinan: statusKawin,
            jumlah_anak: jumlahAnak,
            jenis_kelamin: jenisKelamin,
            agama: agama
        }



        let url = `${API_URL}profil`

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

                Alert.alert('Berhasil daftar', '', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => navigation.navigate('HomeUser', users) },
                ]);

            })
            .catch((err) => {
                // Error handling
                // console.log("ERRR", err);

                return null;
            });
    };

    const getProfil = async () => {

        let params = {
            kd_users: users.nik
        }


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

                const data = res.data.data[0]

                setNik(data.kd_users)
                setNama(data.nama)
                setTanggalLahir(data.tanggal_lahir)
                setTempatLahir(data.tempat_lahir)
                setRt(data.rt)
                setRw(data.rw)
                setNamaRt(data.nama_rt)
                setNamaRw(data.nama_rw)
                setNomorRumah(data.nomor_rumah)
                setAlamat(data.alamat)
                setAlamatAsal(data.alamat_asal)
                setPendapatan(data.pendapatan)
                setPekerjaan(data.pekerjaan)
                setStatusKawin(data.status_perkawinan)
                setJumlahAnak(data.jumlah_anak)
                setJenisKelamin(data.jenis_kelamin)
                setAgama(data.agama)

            })
            .catch((err) => {
                // Error handling
                // console.log("ERRR", err);

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
                    value={nik}
                    onChangeText={value => {
                        setNik(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Nama Lengkap"
                    value={nama}
                    onChangeText={value => {
                        setNama(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Tempat Lahir"
                    value={tempatLahir}
                    onChangeText={value => {
                        setTempatLahir(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Tanggal Lahir"
                    value={tanggalLahir}
                    onChangeText={value => {
                        setTanggalLahir(value)
                    }}
                    variant="outlined"
                />
                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Pilih RT</Text>
                <Picker
                    selectedValue={rt}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setRt(itemValue)
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
                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Pilih RW</Text>
                <Picker
                    selectedValue={rw}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setRw(itemValue)
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
                    label="Nama RT"
                    value={namart}
                    onChangeText={value => {
                        setNamaRt(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Nama RW"
                    value={namarw}
                    onChangeText={value => {
                        setNamaRw(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Nomor Rumah"
                    value={nomorRumah}
                    onChangeText={value => {
                        setNomorRumah(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    value={alamat}
                    onChangeText={value => {
                        setAlamat(value)
                    }}
                    label="Alamat"
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Alamat Asal"
                    value={alamatAsal}
                    onChangeText={value => {
                        setAlamatAsal(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Pendapatan (Gaji)"
                    value={pendapatan}
                    onChangeText={value => {
                        setPendapatan(value)
                    }}
                    variant="outlined"
                />
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Pekerjaan"
                    value={pekerjaan}
                    onChangeText={value => {
                        setPekerjaan(value)
                    }}
                    variant="outlined"
                />
                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Status Kawin</Text>
                <Picker
                    selectedValue={statusKawin}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setStatusKawin(itemValue)
                    }}
                    style={{ marginHorizontal: 30, marginTop: 10, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1 }}
                >
                    <Picker.Item label="Kawin" value="M" />
                    <Picker.Item label="Belum Kawin" value="LJ" />
                    <Picker.Item label="Cerai Hidup" value="DJ" />
                    <Picker.Item label="Cerai Mati" value="CM" />
                </Picker>
                <TextInput
                    style={{ marginHorizontal: 30, marginTop: 10 }}
                    label="Jumlah Anak"
                    value={jumlahAnak}
                    onChangeText={value => {
                        setJumlahAnak(value)
                    }}
                    variant="outlined"
                />
                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Jenis Kelamin</Text>
                <Picker
                    selectedValue={jenisKelamin}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setJenisKelamin(itemValue)
                    }}
                    style={{ marginHorizontal: 30, marginTop: 10, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1 }}
                >
                    <Picker.Item label="Laki - laki" value="M" />
                    <Picker.Item label="Perempuan" value="LJ" />
                </Picker>

                <Text style={{ marginHorizontal: 30, marginTop: 10, fontWeight: 'bold' }}>Agama</Text>
                <Picker
                    selectedValue={agama}
                    onValueChange={(itemValue, itemIndex) => {
                        setAgama(itemValue)
                    }}
                    style={{ marginHorizontal: 30, marginTop: 10, borderRadius: 10, borderColor: '#0081C9', borderStyle: 'solid', borderWidth: 1 }}
                >
                    <Picker.Item label="Islam" value="ISLAM" />
                    <Picker.Item label="Kristen Protestan" value="KP" />
                    <Picker.Item label="Kristen Katolik" value="KK" />
                    <Picker.Item label="Hindu" value="HINDU" />
                    <Picker.Item label="Buddha" value="BUDDHA" />
                    <Picker.Item label="Konghucu" value="KONGHUCU" />
                </Picker>


                <TouchableOpacity onPress={() =>
                    save()
                } style={{ marginHorizontal: 30, height: 30, marginTop: 30, backgroundColor: '#0081C9', borderRadius: 5, marginBottom: 50 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 3 }}>Simpan</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
}

export default Profil;
