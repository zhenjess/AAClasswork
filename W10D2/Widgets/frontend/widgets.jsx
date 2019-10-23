
import React from 'react';
import ReactDom from 'react-dom';
import Clock from '../frontend/clock';
import Tab from '../frontend/tab';

const panes = [
  { title: "one", content: "I am the first" },
  { title: "two", content: "Second pane here" },
  { title: "three", content: "Third pane here" }
]


document.addEventListener("DOMContentLoaded", () => {
  const rootDiv = document.getElementById("root");
  ReactDom.render(<Clock />, rootDiv);
  const rootDivTab = document.getElementById("root-tab");
  ReactDom.render(<Tab panes={panes}/>, rootDivTab);
});

