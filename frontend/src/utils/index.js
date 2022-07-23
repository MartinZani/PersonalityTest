import axios from 'axios'

export function postRequest (path, data={}) {

	return axios({
		method: 'post',
		url: (process.env.VUE_APP_SERVER_HOST || '') + '/api' + path,
		data,
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

export function getRequest (path) {
	return axios({
		method: 'get',
		url: (process.env.VUE_APP_SERVER_HOST || '') + '/api' + path
	})
}
