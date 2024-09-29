import Navbar from '../Navbar/Navbar'
import './App.css'
import Titlepage from '../Titlepage/Titlepage'
import { useEffect } from 'react'
import {getTopHeadlineNews} from '../../ApiCalls'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from '../Card/Card'
import TitleDetail from '../TitleDetail/TitleDetail'
import CategoryDetail from '../CategoryDetail/CategoryDetail'

const App = ()=> {
    

    const [apiNews, setApiNews] = useState([])

    useEffect(()=> {
        getTopHeadlineNews()
        .then(data => setApiNews(data.articles))
        .catch(error => console.log(error))
    }, [])

    return (
        <main>
            <Navbar />
            <Routes>
                <Route path='/' element={<Titlepage apiNews={apiNews} />} />
                <Route path='/article/:sourceId/:index' element={<TitleDetail />} />
                <Route path='/:category' element={<Card />} />
                <Route path='/:category/article/:index' element={<CategoryDetail />} />
            </Routes>
        </main>
    )
}

export default App;