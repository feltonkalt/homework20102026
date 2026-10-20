let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

cargoHold.forEach(el => {
    if(el == 'Кристаллы'){
        console.log('⚠️ Внимание! Обнаружен ценный груз!')
    }
    console.log(`Внимание: груз ${el} проверен`)
});

let delEl = cargoHold.pop()
console.log(`Разгружен последний отсек: ${delEl}`)

let scienceCargo = cargoHold.slice(1, 4)

console.log(cargoHold)
console.log(scienceCargo)

cargoHold.splice(1, 2)
console.log(cargoHold)

cargoHold.splice(1,0,'золото','детектор лжи')
console.log(cargoHold)