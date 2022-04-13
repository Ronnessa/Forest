export function sendMail() {
	const form = document.getElementById('form');
	const email = document.getElementById('mail');
	const title = document.getElementById('title');
	const message = document.getElementById('message');
	const confirmationText = document.getElementById('confirmation-text');

	function submitForm(e) {
		e.preventDefault();
		email.value = '';
		title.value = '';
		message.value = '';
		confirmationText.textContent = 'Wysłano wiadomosć!';
	}

	form.addEventListener('submit', event => submitForm(event));
}
