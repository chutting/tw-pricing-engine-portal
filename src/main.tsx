import { BrowserRouter } from 'react-router-dom'
import Provider from './store';
import App from './App';
import '@/styles/index.less'
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
