import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Login from './pages/login.jsx'
import HomePage from './pages/Home.jsx'
import { Topbar } from './components/Topbar.jsx'
import { Transactions } from './components/Transactions.jsx'
import TransactionFilters from './components/Filters.jsx'
import { TransactionPage } from './pages/TransactionPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
