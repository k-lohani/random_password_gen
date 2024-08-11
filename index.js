const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3","4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const wo_numbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const wo_symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3","4", "5", "6", "7", "8", "9"]

const wo_numbers_symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

async function clicktocopy(value) {
    try {
        let password = document.getElementById(value).textContent
        await navigator.clipboard.writeText(password)
        const confirmMessage = document.getElementById("copy-confirmation");
        confirmMessage.style.display = "inline";
        setTimeout(() => {
            confirmMessage.style.display = "none";
        }, 2000); 
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}


function updateSliderValue(value) {
    document.getElementById('slider-value').textContent = value
}

function generate() {
    const password_len = parseInt(document.getElementById('slider-value').textContent)
    const symbol_checkbox = document.getElementById('toggle-symbols')
    const number_checkbox = document.getElementById('toggle-numbers')

    let charset = characters

    if (symbol_checkbox.checked && number_checkbox.checked === false) {
        charset = wo_symbols
    }
    else if (number_checkbox.checked && symbol_checkbox.checked === false) {
        charset = wo_numbers
    }
    else if (number_checkbox.checked && symbol_checkbox.checked) {
        charset = wo_numbers_symbols
    }

    let password1 = ""
    let password2 = ""
    for (let i = 0; i < password_len; i++){
        password1 += charset[Math.floor(Math.random() * charset.length)]
        password2 += charset[Math.floor(Math.random() * charset.length)]
    }

    document.getElementById('password-1').textContent = password1
    document.getElementById('password-2').textContent = password2

}

window.generate = generate;
window.clicktocopy = clicktocopy;
window.updateSliderValue = updateSliderValue;