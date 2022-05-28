import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<App />}>
        <Route path='expenses' element={<Expenses />}/>
        <Route path='invoices' element={<Invoices />}/>
        <Route path='*' element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }/>
      </Route>      
    </Routes>
    
  </BrowserRouter>
);


//https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params