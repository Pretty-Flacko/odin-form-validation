import "./style.css";

const form = document.getElementById("signup-form");

const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-cnfrm");

const inputs = [email, country, postalCode, password, passwordConfirm];

inputs.forEach((input) => {
	input.addEventListener("input", () => validateField(input));
});

function validateField(input) {
	const error = input.nextElementSibling;

	if (input === passwordConfirm) {
		if (password.value !== passwordConfirm.value) {
			showError(error, "Passwords do not match");
			return false;
		}
	}

	if (input.validity.valid) {
		clearError(error);
		return true;
	}

	if (input.validity.valueMissing) {
		showError(error, "This field is required");
	} else if (input.validity.typeMismatch) {
		showError(error, "Please enter a valid value");
	}

	return false;
}

function showError(errorElement, message) {
	errorElement.textContent = message;
	errorElement.classList.add("active");
}

function clearError(errorElement) {
	errorElement.textContent = "";
	errorElement.classList.remove("active");
}
