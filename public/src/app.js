const app = {
  title: "Tasks TODO App",
  subtitle: "This is paragraph",
  options: []
};

//let optionList = app.options.map((item, index) => <li>{item}</li>);
let luckyTask = '';
const renderTemplate = () => {
  const template =  (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.options && app.options.length > 0) && <p>Here are your list of tasks.</p> || <p>No Tasks to do.</p>}
      {(app.options && app.options.length > 0) && <div>
        <h5>{app.options.length} Task{app.options.length > 1 &&  's'} to do.</h5>
        <h1>{luckyTask}</h1>
        <button onClick={selectTask} >Got Lucky</button>
        <button onClick={removeAll} >Remove All</button>
      </div>}
      {(app.options && app.options.length > 0)  && <ol>{app.options.map((item, index) => <li key={index + 1}>{item}</li>)}</ol>}
      
       
      <form onSubmit={addOption}>
        <input type="text" name="option"/>
        <button >Add Option</button>
      </form>
    </div>
  );

  
ReactDOM.render(template, document.getElementById("app"));
}

const addOption = (e) => {
  e.preventDefault();
  let option = e.target.elements.option.value;

  if(option) {
    app.options.unshift(option);
    e.target.elements.option.value = '';
  }
  
  renderTemplate();
}

const removeAll = () => {
  app.options = [];

  renderTemplate();
}

const selectTask = () => {
  const randomIndex = Math.floor(Math.random() * app.options.length);
  luckyTask = app.options[randomIndex];
  renderTemplate();
}


renderTemplate();

const user = {
  name: "Jatinder Pal Singh",
  age: 33,
  location: "Mohali, Punjab, India",
  showLocation: true
};
const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}
    {(user.showLocation && user.location) && <p>Location:  {user.location}</p>}
     {/*getLocation(user.location)*/} 
  </div>
);

// function getLocation(location) {
//   if(location) {
//     return <p>{user.showLocation && `Location:  ${user.location}`}</p>;
//   }
// }



  