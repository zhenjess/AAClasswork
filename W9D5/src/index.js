const DOMNodeCollection = require('./dom_node_collection.js');

// new DOMNodeCollect();

window.$l = function(selector) { //($l is the Jquery Lite function)
  //select HTML element on the page and wrap in jquery obj
  //now Jquery class has access to the jquery methods from wrapping selector in jquery obj (so there is a dollar sign)
  //use vanilla javascript to access
  //($) takes in a string with .first or takes in a html element and chain elements then define methods in DOM node class
  if (typeof selector === "string") {
    // console.log(this);
    const NodeList = document.querySelectorAll(selector); //.querySelectorAll is vanilla javascript method
    const arrNode = Array.from(NodeList);
    //DOMNodeCollection is the wrapper
    return new DOMNodeCollection(arrNode);
  } else if (selector instanceof HTMLElement) {
    let arrNode = [selector];
    return new DOMNodeCollection(arrNode);
  }
}