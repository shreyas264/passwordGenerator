
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerChars = "abcdefghihklmnopqrstuvwxyz"
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars ="!@#$%^&*()_+=-?/"

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase ? lowerChars : "";
    allowedChar += includeUpperCase ? upperChars : "";
    allowedChar += includeNumbers ? numberChars : "";
    allowedChar += includeSymbols ? symbolChars : "";

    if(length == 0){
        return '(password must include atleast 1 character)'
    }
    else if(allowedChar.length === 0){
        return '(select atleast one type of characters)'
    }

    for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length)
        password += allowedChar[randomIndex]
    }
    return password;
}

const passwordLength = 7;
const includeLowerCase = true;
const includeUpperCase = false;
const includeNumbers = false;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols)

console.log(`Genreated password: ${password}`)                                  