import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { depositarDinheiro, sacarDinheiro } from './redux/actionCreators/accountActionCreators';

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(depositarDinheiro(5))}>Depositar 5</button>
      <button onClick={() => dispatch(sacarDinheiro(5))}>Sacar 5</button>
      <h1>{account.saldo}</h1>
    </div>
  );
}

export default App;
