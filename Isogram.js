function isoGram(string)
	
	var givenStr = string;
	for( var i = 0; i < givenStr.length ;i++){
        for(var j = 0; j<givenStr.length;j++){
             if (i != j) {

             	if (givenStr[i]== givenStr[j]) {
             		return false;
             	}
             	
             }


        }

	}
	return true;
    console.log()
}