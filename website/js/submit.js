import * as checkData from '/check_data.js';
import * as sendData from '/send_data.js';

function submit() {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function() {
        if (checkData.checkData()) {
            sendData.sendRequest();
        }
        else {
            alert("Произошла ошибка отправки!");
        }
    });
}