
function removeDuplicates( str ){
    var newString='';
    for(var i=0; i<str.length; i++){
        if(newString.indexOf(str[i])==-1){
            newString += str[i];
        }
    }
    return newString;
    