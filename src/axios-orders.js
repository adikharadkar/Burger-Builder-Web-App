import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-b5a40.firebaseio.com/',
	config: {
		headers: {
		  'Access-Control-Allow-Origin': '*',
		}
	}
});

export default instance;