module.exports = {
	name: 'duck',
	async execute(message, args, axios) {
			let getDuck = async() => {
				let response = await axios.get("http://official-joke-api.appspot.com/random_joke");
				let duck = response.json;
				return duck;
			}			
			let duckValue = await getDuck;
			console.log(duckValue);
			message.channel.send(duckValue.setup);
	},
};