import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app.tsx';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { fetchQuestionAction, checkAuthAction } from './store/api-actions.ts';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from './components/history-route/history-route.tsx';
import browserHistory from './browser-history.ts';

store.dispatch(fetchQuestionAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory} basename={import.meta.env.BASE_URL}>
        <ToastContainer/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
