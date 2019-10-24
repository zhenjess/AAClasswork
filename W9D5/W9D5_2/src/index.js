const DOMNodeCollection = require("./dom_node_collection.js")

window.$l = function(selector) {
  if (typeof selector === "string"){
    const nodeList = document.querySelectorAll(selector);
    const nodeListArr = Array.from(nodeList);
    return new DOMNodeCollection(nodeListArr)

  } else if (selector instanceof HTMLElement){
    return new DOMNodeCollection(Array.from(selector));
  }
}