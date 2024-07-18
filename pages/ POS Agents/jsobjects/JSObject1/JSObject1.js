export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		const urlParams = new URLSearchParams(window.location.search);
		const param1 = urlParams.get('param1');
		const param2 = urlParams.get('param2');
		return param1;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}