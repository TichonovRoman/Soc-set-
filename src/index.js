import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


  ReactDOM.render(
  
    <React.StrictMode >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
  );










// передаем rerenderEntireTree в subscribe куда то во внешку
// передаем т.к. не ставим () в передаваемой функции. Если бы были скобки, то вызвали бы эту функцию.
// а так мы ее передаем тким образом, похожим как будто мы ее вызываем здесь


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();