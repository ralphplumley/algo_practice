function firstDuplicate(a) {
  debugger;
  let hash = {};
  
  for(var i = 0; i < a.length; i++){
      let currentElement = a[i];
      
      if (!hash[currentElement]) {
        hash[currentElement] = 1;       
      } else if (hash[currentElement]) {
        return currentElement;
      }
  }
          
  return -1;
}

let test = [2,3,3];
console.log(firstDuplicate(test));
