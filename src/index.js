module.exports = function reverse (n) {
    let str= n.toString();
    let newStr=''; 
    for (let i=0; i<str.length; i++){
        newStr = str[i] + newStr; 
    }
    return parseInt(newStr);
}
