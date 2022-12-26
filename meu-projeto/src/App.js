import './App.css';

import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Juarez";

  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
   <div className="App">
    <h1>Olá React!</h1>
    <p>Olá, {newName}</p>
    <p>Soma: {sum (1, 2)}</p>
    <img src={url} alt="Minha imagem"/>
    <HelloWorld />
   </div>
  );
}

export default App;
