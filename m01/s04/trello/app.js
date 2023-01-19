function getRandomInt(min, max, numbersToExclude) {
	min = Math.ceil(min);
	max = Math.floor(max);
	const random = Math.floor(Math.random() * (max - min) + min)
	return numbersToExclude.includes(random)?
		getRandomInt(min, max, numbers):
		random;
}
function megaSena(quantidade, numbers=[]){
	numbers.push(getRandomInt(1, 61, numbers))
	return quantidade-1>0 ? megaSena(quantidade-1, numbers):
	random
}
console.log(megaSena(6))
