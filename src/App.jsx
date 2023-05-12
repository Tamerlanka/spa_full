import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './components/Home'
import Form from './components/Form'
import Description from './components/Description'
import Footer from './components/Footer'
import Favorites from './components/Favorites'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function App() {
  // хранение данных туров
  const [turs, setTurs] = useState([]) // хук

  useEffect(() => {
    // хук
    // Блок axios пишем вместо fetch
    async function axiosData() {
      const tursData = await axios.get(
        'https://6422f073001cb9fc2033f8c7.mockapi.io/turs'
      )
      console.log(tursData) // смотрим что приходит это объект целиком
      setTurs(tursData.data) // передаем в setTurs только свойство data которое содержит нужную нам информацию из БД
    }
    axiosData() // вызываем функцию
  }, []) // [] - чтобы избежать бесконечной загрузки данных

  /* Вместо fetch пишем блок с axios
    // получаема данные туров с сервера
    fetch('https://6422f073001cb9fc2033f8c7.mockapi.io/turs')
      .then((myJson) => {
        return myJson.json()
      })
      .then((myJson) => {
        setTurs(myJson) // console.log(myJson)
      })
  }, []) // [] - чтобы избежать бесконечной загрузки данных
*/
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<Home item={turs} />} />
          <Route path="/description" element={<Description />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
//  <CardItem item={turs} />  - передаем в пропсах данные полученные с ссервера (свойство item со значением переменной turs)
// Router маршрутизатор, Routes маршруты Route маршрут
