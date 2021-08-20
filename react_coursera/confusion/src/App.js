import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

function App() {
  return (
    // Provider component makes the Redux Store available 
    // to any nested components that need to access the Redux Store
    <Provider store={store}> 
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
