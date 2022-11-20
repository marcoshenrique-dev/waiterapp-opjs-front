import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components';
import { Orders } from './components/Orders';
import { GlobalStyles } from './styles/GlobalStyles';

import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center'/>
    </>
  );
}
