import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"; 
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import store from "./Store.js"; 
import App from "./components/App.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
// import injectTapEventPlugin from 'react-tap-event-plugin'; 


const WrappedApp = () => (
	<MuiThemeProvider>
		<App></App>
	</MuiThemeProvider>
	); 



ReactDOM.render(

	<Provider store={store}>
			<BrowserRouter>
			 <WrappedApp/>
			</BrowserRouter>
	</Provider>
	,document.getElementById('root')

);


registerServiceWorker();




