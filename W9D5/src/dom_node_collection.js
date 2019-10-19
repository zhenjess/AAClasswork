class DOMNodeCollection { //is the Jquery Lite object class of all HTML elements
  constructor(array) {
    //get collection of no args
    this.elements = array; //store all HTML elements in this property

  }


  html(str) {

    if (str) { //
     this.elements.forEach((el) => {
        el.innerHTML = str; //change innerHTML property of current HTML element to the given str
     });
    } else {
      return this.elements[0].innerHTML; //returning the first node's html 
    }
    return this;
  }

  empty() {
    this.elements.forEach((el) => {
       el.innerHTML = "";

    });
    return this;
  }

  append() {

  }
}





module.exports = DOMNodeCollection;