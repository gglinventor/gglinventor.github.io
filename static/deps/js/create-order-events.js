let input = document.querySelector("#bank-card-input"),
numbers = /[0-9]/,
regExp = /[0-9]{4}/

// добавляем слушатель события на инпут
input.addEventListener("input",(ev)=>{
// не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
if( ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19){
    input.value = input.value.slice(0, input.value.length - 1)
    return
}

// обеспечиваем работу клавиш "backspace","delete"
let value = input.value
if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
    input.value = input.value.slice(0, input.value.length - 1)
    return
}

// добавяем пробел после 4 цифр подряд
if( regExp.test(value.slice(-4)) && value.length < 19){
    input.value += " "
}
})

let input_2 = document.querySelector("#bank-card-input-2")

// добавляем слушатель события на инпут_2
input_2.addEventListener("input",(ev)=>{
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 3-мя символами
    if( ev.inputType === "insertText" && !numbers.test(ev.data) || input_2.value.length > 3){
        input_2.value = input_2.value.slice(0, input_2.value.length - 1)
        return
}
})