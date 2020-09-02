import fetchRequest from '../utils/request'
const baseUrl = '/iot-service-course/api/course'

export function doLogin(code) {
	const query = {
		code: code
	}
	return fetchRequest({
		url: `${baseUrl}/list`,
    method: 'GET',
    params: query
	})
}