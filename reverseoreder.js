function reverseorder(str){
    let words =[];
    let word="";
    let i =0;
    while(i < str.length){
        let char = str[i];
        if(char !== ' '){
            word += char;
        }else{
            if(word !== ""){
                words.push(word)
                word = "";
            }
        }
        i++;
    }
    if(word !== ""){
        words.push(word);
    }
    var reversed="";
    var j = words.length-1;
    while(j >=0){
        reversed += words[j];
        if(j>0){
            reversed +=" ";
        }
        j--;
        
    }
    return reversed;
    
}
let str1 = "  the   sky  is blue  "
console.log(reverseorder(str1))