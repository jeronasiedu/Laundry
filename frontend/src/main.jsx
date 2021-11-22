import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <App />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </AnimatePresence>
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
