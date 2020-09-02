export function getStorageSync(key) {
	return my.getStorage({ key }).then(res => res.data).catch(() => '')
}

export function setStorageSync(key,value) {
	return my.setStorage({ key:key, data:value })
}

export function removeStorageSync(key) {
	return my.removeStorage({ key })
}
