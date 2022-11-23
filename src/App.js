import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting={<h1>Bienvenidos a mi tienda</h1>}/>
    </div>
  );
}

export default App;
