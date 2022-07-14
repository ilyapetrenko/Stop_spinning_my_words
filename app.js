function spinWords(string){
    let arr = string.split(' ')
    let word
    let answerArray = new Array()
    for(let el of arr){
            if(el.split('').length>4){
                word = el.split('').reverse().join('')
                console.log(word)
            }
            else{
                word =el.split('').join('')
                console.log(word)
            }
            answerArray.push(word)
    }
    console.log(answerArray)
    console.log(answerArray.join(' '))
    return answerArray
}
spinWords('This is Another test')