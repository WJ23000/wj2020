import fetch from '../utils/request'
const baseUrl = '/iot-service-course/api/course';

export function doLogin(query:{code: string}) {
	return fetch({
		url: `${baseUrl}/list`,
    method: 'GET',
    params: query
	})
}