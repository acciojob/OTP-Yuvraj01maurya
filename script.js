let codeInputs = document.querySelectorAll('.code');

function onInput(e) {
    if (e.target.value) {
        let nextInput = codeInputs[Array.from(codeInputs).indexOf(e.target) + 1];
        if (nextInput) {
            nextInput.focus();
        }
    } else {
        let prevInput = codeInputs[Array.from(codeInputs).indexOf(e.target) - 1];
        if (prevInput) {
            prevInput.focus();
        }
    }
}