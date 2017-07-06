import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"; 
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import store from "./Store.js"
import App from "./components/App.js"


ReactDOM.render(


<Provider store={store}>
		<BrowserRouter>
		 <App/>
		</BrowserRouter>
</Provider>
		, document.getElementById('root'));


registerServiceWorker();




