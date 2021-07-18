function saveLead(event) {
	event.preventDefault();

	const input = document.querySelector('input[name=email]');

	const isValid = validateEmail(input.value);

	if (!isValid) {
		const errorMessage = document.querySelector('.error');

		errorMessage.classList.add('show-error');
		setTimeout(() => {
			errorMessage.classList.remove('show-error');
		}, 3600);

		return;
	}

	localStorage.setItem('email_address', input.value);
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}