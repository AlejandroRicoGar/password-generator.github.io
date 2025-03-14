document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const generateBtn = document.getElementById("generate-btn");
    const copyBtn = document.getElementById("copy-btn");
    const lengthInput = document.getElementById("lengthInput");
    const selectedLength = document.getElementById("selectedLength");

    lengthInput.addEventListener("input", () => {
        let lengthValue = parseInt(lengthInput.value);
        if (lengthValue < 6) {
            lengthValue = 6;
        } else if (lengthValue > 20) {
            lengthValue = 20;
        }
        lengthInput.value = lengthValue;
        selectedLength.textContent = lengthValue;
    });
    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyToClipboard);

    function generatePassword () {
        const length = parseInt(lengthInput.value);
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*"
        let password= "";

        for(let i=0; i<length; i++){
            const randomindex = Math.floor(Math.random() * chars.length);
            password += chars[randomindex];
        }

        passwordField.value= password;
        animateButton(generateBtn);
    }

    function copyToClipboard() {
        if(passwordField.value) {
            passwordField.select();
            document.execCommand("copy");

            copyBtn.innerHTML = "<i class='fas fa-check''></i>"

            setTimeout(() => {
                copyBtn.innerHTML = "<i class='fas fa-copy''></i>"
            }, 1500)
        }
    }

    function animateButton (button) {
        button.style.transform = "scale(0.9)";

        setTimeout (() => {
            button.style.transform = "scale(1)";
        },150);
    }


    generatePassword();

});