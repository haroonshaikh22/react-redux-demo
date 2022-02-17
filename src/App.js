import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <UserContainer/>
    {/* <ItemContainer cake/>
    <ItemContainer/>
      <CakeContainer/>
      <HooksCakeContainer/>
      <HooksIcecreamContainer/>
      <NewCakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
