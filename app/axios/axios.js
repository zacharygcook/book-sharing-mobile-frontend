import axios from 'react-native-axios';

var customAxios = axios.create({
	baseURL: 'http://192.168.0.71:1337/',
	timeout: 1000
});

// Axios docs - https://github.com/mzabriskie/axios

export default customAxios;