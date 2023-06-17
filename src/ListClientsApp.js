

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './router/AppRouter';

function ListClientsApp() {
  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    )
}

export default ListClientsApp;
