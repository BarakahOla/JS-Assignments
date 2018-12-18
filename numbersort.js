function longest(int){
 var input = [5,4,8,2,6,7,3,3,4];
}
var result = input.filter(x => x%2).sort().concat(input.filter(x => x%2 === 0).sort());
      document.write(result+"<br>")
  }
  return longest;