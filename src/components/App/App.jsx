import Navbar from '../Navbar/Navbar'
import './App.css'
// import NewsData from '../../MockData.json'
import Titlepage from '../Titlepage/Titlepage'
import { useEffect } from 'react'
import {getTopHeadlineNews} from '../../ApiCalls'
import { useState } from 'react'

const App = ()=> {
    

    // const myNewsData = NewsData.articles

    const [apiNews, setApiNews] = useState([])

    useEffect(()=> {
        getTopHeadlineNews()
        .then(data => setApiNews(data.articles))
        .catch(error => console.log(error))
    }, [])

    return (
        <main>
            <Navbar />
            {/* <Titlepage myNewsData={myNewsData} /> */}
            <Titlepage apiNews={apiNews} />
        </main>
    )
}

export default App;