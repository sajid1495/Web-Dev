const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


function generatePass() {
    let pass1 = ""
    let pass2 = ""


    for (let i = 0; i < 15; i++) {
        let index = Math.floor(Math.random() * 91)
        pass1 += characters[index]
    }


    for (let i = 0; i < 15; i++) {
        let index = Math.floor(Math.random() * 91)
        pass2 += characters[index]
    }

    let Pass1 = document.getElementById("firstPass")
    let Pass2 = document.getElementById("secondPass")

    Pass1.innerText = pass1
    Pass2.innerText = pass2
}


document.getElementById('copy1').addEventListener('click', function () {
    const textToCopy = document.getElementById('firstPass').innerText;

    navigator.clipboard.writeText(textToCopy).then(function () {
        alert('Text copied to clipboard');
    }).catch(function (error) {
        alert('Failed to copy text: ', error);
    });
});

document.getElementById('copy2').addEventListener('click', function () {
    const textToCopy = document.getElementById('secondPass').innerText;

    navigator.clipboard.writeText(textToCopy).then(function () {
        alert('Text copied to clipboard');
    }).catch(function (error) {
        alert('Failed to copy text: ', error);
    });
});

