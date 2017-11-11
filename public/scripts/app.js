"use strict";

var app = {
  title: "Tasks TODO App",
  subtitle: "This is paragraph",
  options: []
};

//let optionList = app.options.map((item, index) => <li>{item}</li>);
var luckyTask = '';
var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    app.options && app.options.length > 0 && React.createElement(
      "p",
      null,
      "Here are your list of tasks."
    ) || React.createElement(
      "p",
      null,
      "No Tasks to do."
    ),
    app.options && app.options.length > 0 && React.createElement(
      "div",
      null,
      React.createElement(
        "h5",
        null,
        app.options.length,
        " Task",
        app.options.length > 1 && 's',
        " to do."
      ),
      React.createElement(
        "h1",
        null,
        luckyTask
      ),
      React.createElement(
        "button",
        { onClick: selectTask },
        "Got Lucky"
      ),
      React.createElement(
        "button",
        { onClick: removeAll },
        "Remove All"
      )
    ),
    app.options && app.options.length > 0 && React.createElement(
      "ol",
      null,
      app.options.map(function (item, index) {
        return React.createElement(
          "li",
          { key: index + 1 },
          item
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: addOption },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};

var addOption = function addOption(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.unshift(option);
    e.target.elements.option.value = '';
  }

  renderTemplate();
};

var removeAll = function removeAll() {
  app.options = [];

  renderTemplate();
};

var selectTask = function selectTask() {
  var randomIndex = Math.floor(Math.random() * app.options.length);
  luckyTask = app.options[randomIndex];
  renderTemplate();
};

renderTemplate();

var user = {
  name: "Jatinder Pal Singh",
  age: 33,
  location: "Mohali, Punjab, India",
  showLocation: true
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age,
    " "
  ),
  user.showLocation && user.location && React.createElement(
    "p",
    null,
    "Location:  ",
    user.location
  )
);

// function getLocation(location) {
//   if(location) {
//     return <p>{user.showLocation && `Location:  ${user.location}`}</p>;
//   }
// }
