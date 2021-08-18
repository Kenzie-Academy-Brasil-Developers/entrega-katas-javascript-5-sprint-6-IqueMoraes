// implemente aqui as funções de teste
//----------KATAS 1

function reverseString(string) {
    let reversedString = "";
    for (let i = string.length; i > 0; i--) {
        reversedString += string[i - 1];
    }
    return reversedString;
}

function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1()

function testeReverseString2() {
    console.assert(`${reverseString("hello world")}` === "dlrow olleh", {
        'função': 'reverseString()',
        'esperado': "dlrow olleh",
        'obtido': reverseString("hello world")
    })
}
testeReverseString2()



//-----------KATAS 2
function reverseSentence(phrase) {
    let splitPhrase = phrase.split(' ')
    splitPhrase.reverse()
    let reversedPhrase = splitPhrase.join(' ')
    return reversedPhrase
}

const testeReverseSentence1 = () => {
    console.assert(reverseSentence("bob like dogs") === "dogs like bob", {
        'função': 'reverseSentence()',
        'esperado': "dogs like bob",
        'obtido': reverseSentence("bob like dogs")
    })
}
testeReverseSentence1()


const testeReverseSentence2 = () => {
    console.assert(reverseSentence("bob also like dogs") === "dogs like also bob", {
        'função': 'reverseSentence()',
        'esperado': "dogs like also bob",
        'obtido': reverseSentence("bob also like dogs")
    })
}
testeReverseSentence2()



//------------KATAS3
const minimumValue = (array) => {
    let minimo = array[0]
    array.forEach(numero => {
        if (numero < minimo) {
            minimo = numero
        }
    })

    return minimo
}


const testMinimumValue1 = () => {
    const array = [4, 2, 3, 6, 8, 20, 31, 2];
    console.assert(minimumValue(array) === 2,
        {
            'função': 'minimumValue()',
            'esperado': 2,
            'obtido': minimumValue(array)
        })
}
testMinimumValue1()

const testMinimumValue2 = () => {
    const array = [6, 8, 0, -2, 5, 4, 7, 1];
    console.assert(minimumValue(array) === -2,
        {
            'função': 'minimumValue()',
            'esperado': -2,
            'obtido': minimumValue(array)
        })
}
testMinimumValue2()

//------------KATAS4
const maximumValue = (array) => {
    let maximo = array[0]
    array.forEach(numero => {
        if (numero > maximo) {
            maximo = numero
        }
    })

    return maximo
}


const testMaximumValue1 = () => {
    const array = [4, 2, 3, 6, 8, 20, 31, 2];
    console.assert(maximumValue(array) === 31,
        {
            'função': 'maximumValue()',
            'esperado': 31,
            'obtido': maximumValue(array)
        })
}
testMaximumValue1()

const testMaximumValue2 = () => {
    const array = [6, 8, 0, -2, 5, 4, 7, 1];
    console.assert(maximumValue(array) === 8,
        {
            'função': 'maximumValue()',
            'esperado': 8,
            'obtido': maximumValue(array)
        })
}
testMaximumValue2()


//------------KATAS5
function calculateRemainder(a, b) {
    return a % b
}
const testCalculateRemainder1 = () => {

    console.assert(calculateRemainder(9, 4) === 1,
        {
            'função': 'calculateRemainder()',
            'esperado': 1,
            'obtido': calculateRemainder(9, 4)
        })
}
testCalculateRemainder1()

const testCalculateRemainder2 = () => {

    console.assert(calculateRemainder(17, 5) === 2,
        {
            'função': 'calculateRemainder()',
            'esperado': 2,
            'obtido': calculateRemainder(17, 5)
        })
}
testCalculateRemainder2()

//------------KATAS6
function distinctValues(list) {
    let listaSplit = list.split(' ')

    let array =[];
    let control = "verde";
    listaSplit.forEach((numero, index) =>{
        if(index === 0){
            array.push(numero)
        }

        for(let i=0; i<array.length;i++){
            if(numero === array[i]){
                control = "vermelho";
                break
                }else{
                   control= "verde";
                }
        }                

        if(control === "verde"){
            array.push(numero)
        }
    })

    return array.join(' ')
}

const testDistinctValues1 = () => {

    console.assert(distinctValues("1 3 5 3 7 3 1 1 5") === "1 3 5 7",
        {
            'função': 'distinctValue()',
            'esperado': "1 3 5 7",
            'obtido': distinctValues("1 3 5 3 7 3 1 1 5")
        })
}
testDistinctValues1()

const testDistinctValues2 = () => {

    console.assert(distinctValues("2 5 5 5 4 4 4 1 2 3 6 4 8 9 7 8 8 8 8 8 7 13") === "2 5 4 1 3 6 8 9 7 13",
        {
            'função': 'distinctValue()',
            'esperado': "2 5 4 1 3 6 8 9 7 13",
            'obtido': distinctValues("2 5 5 5 4 4 4 1 2 3 6 4 8 9 7 8 8 8 8 8 7 13")
        })
}
testDistinctValues2()


//------------KATAS7
function countValues(list) {
    let listaSplit = list.split(' ')

    let array =[];
    let control = "verde";
    listaSplit.forEach((numero, index) =>{

        let count = 0
        for(let i=0; i<listaSplit.length;i++){
            if(numero === listaSplit[i]){
                count++
                }
        }

        for(let i=0; i<index; i++){
            if(numero !== listaSplit[i]){
                control = "verde";
            }else{
                control = "vermelho"
                break
            }
        }
        if(control === "verde" || index === 0){
            array.push(`${numero}(${count})`)
        }
    })
    return array.join(' ')
}

const testCountValues1 = () => {

    console.assert(countValues("1 3 5 3 7 3 1 1 5") === "1(3) 3(3) 5(2) 7(1)",
        {
            'função': 'countValue()',
            'esperado': "1(3) 3(3) 5(2) 7(1)",
            'obtido': countValues("1 3 5 3 7 3 1 1 5")
        })
}
testCountValues1()

const testCountValues2 = () => {

    console.assert(countValues("2 5 5 5 4 4 4 1 2 3 6 4 8 9 7 8 8 8 8 8 7 13") === "2(2) 5(3) 4(4) 1(1) 3(1) 6(1) 8(6) 9(1) 7(2) 13(1)",
        {
            'função': 'countValue()',
            'esperado': "2(2) 5(3) 4(4) 1(1) 3(1) 6(1) 8(6) 9(1) 7(2) 13(1)",
            'obtido': countValues("2 5 5 5 4 4 4 1 2 3 6 4 8 9 7 8 8 8 8 8 7 13")
        })
}
testCountValues2()


//------------KATAS8
function evaluateExpression(string, obj){
//subtr
//slice
//como identificar o valor a ser substituído?
//como identificar o valor no item do obj?
}


const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, 
        {'function': 'evaluateExpression()',
         'esperado': `${expected}`,
         'obtido': `${result}`})
 }
testEvaluateExpression1()