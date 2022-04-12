export function calculatePrice() {
	const inputs = document.querySelectorAll('.input');
	let price = 0;
	
	function calculate() {
		const priceText = document.getElementById('price');
		if (this.checked) {
			price += parseInt(this.value);
		} else {
			price -= parseInt(this.value);
		}
		priceText.textContent = `$${price}`
	}

	inputs.forEach(input => input.addEventListener('change', calculate));
}