let count = 0;

const increment = () => {
  count = count + 1;
  renderTemplate(); 
}

const decrement = () => {
  count = count - 1;
  renderTemplate();
}

const reset = () => {
  count = 0;
  renderTemplate();
}

const renderTemplate = () => {
  const counterTemplate = (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )

  ReactDOM.render(counterTemplate, document.getElementById("app"));
}

renderTemplate();