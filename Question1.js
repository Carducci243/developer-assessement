const sentence='The Rain in Spain'


let reverseSentence=(sentence)=>{
    let reversedSentence=sentence.split(" ").reverse().join(" ")
    return console.log(reversedSentence)

}


reverseSentence(sentence);