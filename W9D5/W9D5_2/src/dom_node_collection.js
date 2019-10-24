class DOMNodeCollection{
  constructor(arr){
    this.HTMLElements = arr;
  }

  html(string) {
    if (string !== undefined){
      this.HTMLElements.forEach(function(el){
        el.innerHTML = string;
      })
    } else {
      return this.HTMLElements[0].innerHTML;
    }
  }

  empty() {
    this.HTMLElements.forEach(function (el) {
      el.innerHTML = "";
    });
    return this;
  }

  remove() {
    this.HTMLElements.forEach(function (el) {
      el.outerHTML = "";
    });
  }

  append(kim) {
    if ( typeof kim === 'string'){
      this.HTMLElements.forEach(function(el){
        el.innerHTML += kim;
      });
    } else if(kim instanceof HTMLElement){
      this.HTMLElements.forEach(function (el) {
        el.innerHTML += kim.outerHTML;
      });

    } else if (kim instanceof DOMNodeCollection){
      this.HTMLElements.forEach(function (parent) {
        kim.HTMLElements.forEach((child) => {
          parent.appendChild(child.cloneNode(true));
        });
      });
    }
  }

  attr(name, value) {
    this.HTMLElements.forEach((el) => {
      el.setAttribute(name, value);
    });
  }

  addClass(className) {
    this.HTMLElements.forEach((el) => {
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.HTMLElements.forEach((el) => {
      el.classList.remove(className);
    });
  }

  children() {
    let childrenArr = [];
    this.HTMLElements.forEach((el) => {
      childrenArr.push(el.children);
    });
    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    let parentArr = [];
    this.HTMLElements.forEach((el) => {
      parentArr.push(el.parent);
    });
    return new DOMNodeCollection(parenArr);
  }

  find(selector) {
    let result = [];
    this.HTMLElements.forEach((el) => {
      if (el.matches(selector)) {
        result.push(el);
      }
    });
    return new DOMNodeCollection(result);
  }

}

module.exports = DOMNodeCollection;