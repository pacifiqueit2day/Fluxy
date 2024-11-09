import './index.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import './styles/css/prime.css';
import './styles/css/material.css';
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Loader from './common/Loader';
import RoutesProvider from "./routes/RoutesProvider";

function App() {
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const [theme, setTheme] = useState('blue'); // default theme

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <RoutesProvider />
    </>
  )
}

export default App
