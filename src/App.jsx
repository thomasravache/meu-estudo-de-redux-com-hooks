import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { depositarDinheiro, sacarDinheiro } from './redux/actionCreators/accountActionCreators';
import { incrementarContador } from './redux/actionCreators/counterActionCreator';

function App() {
  const account = useSelector((state) => state.account);
  const contador = useSelector((state) => state.contador);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(depositarDinheiro(5))}>Depositar 5</button>
      <button onClick={() => dispatch(sacarDinheiro(5))}>Sacar 5</button>
      <h1>{account.saldo}</h1>
      <h1>{contador.count}</h1>
      <button onClick={() => dispatch(incrementarContador())}>Incrementar contador</button>
    </div>
  );
}

export default App;
