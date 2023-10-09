const generateJoke = () => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			let data = JSON.parse(this.responseText);
			jokeInput.innerHTML = data.value;
		}
	};
	xhr.send();
};

const jokeButton = document.querySelector('#joke-btn');
const jokeInput = document.querySelector('#joke');

jokeButton.addEventListener('click', generateJoke);
