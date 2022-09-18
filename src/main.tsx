import { BrowserRouter } from 'react-router-dom'
import App from './App';
import '@/styles/index.less'
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
