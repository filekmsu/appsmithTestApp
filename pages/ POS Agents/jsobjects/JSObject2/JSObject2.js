export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		return appsmith.URL.queryParams.param
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}