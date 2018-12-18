	function addNum(a){

	if (a==1){
		return 1;

	}
	else return a + addNum(a-1);
}