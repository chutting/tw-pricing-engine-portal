import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Provider from './store';
import App from './App';
import '@/styles/index.less'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/">
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>,
)
