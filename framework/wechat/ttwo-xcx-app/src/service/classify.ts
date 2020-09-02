import fetch from '../utils/request'
const baseUrl = '/iot-service-course/api/course';

export function getGoodsList(query:{id: string}) {
	return fetch({
		url: `${baseUrl}/list`,
    method: 'GET',
    params: query
	})
}

export function getCollection(data) {
	return fetch({
		url: `${baseUrl}/collection`,
    method: 'POST',
    data
	})
}