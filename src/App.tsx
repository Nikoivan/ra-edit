import { Provider } from 'react-redux';
import EditList from './components/EditList/EditList';
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <EditList />
    </Provider>
  );
}

export default App;

