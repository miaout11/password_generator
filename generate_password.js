// define generatePassword function
function generatePassword() {
    console.log('This function will generate password')
}
// define things user might want
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

// dummy data of req.body(先使用假資料來測試函式能否正確執行)
const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    // symbols: 'on',
    excludeCharacters: '40'
}
console.log('options', options)

// create a collection to store things user picked up
// use split()將字串轉成陣列，沒有帶入任何參數時，
// 會把原本的字串完整地直接放到陣列中的第一個元素，而這個陣列也就只會有一個元素
// 當split() 中有帶入參數時，則會根據參數內容，將原本的字串拆成多個元素的陣列。
// 例如我們可以用 , 或是 o 來分割。記得參數也需要用單引號來註明它是字串。ex:split(',')
let collection = []

if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
}
if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
}
if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
}
if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
}
console.log('collection', collection)

// remove things user do not need

// start generating password

// return the generated password

// invoke generatePassword function 
generatePassword()