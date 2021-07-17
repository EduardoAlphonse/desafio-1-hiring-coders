function saveLead(event) {
	event.preventDefault();

	const input = document.querySelector('input[name=email]');

	email = input.value;

	alert(email);
}