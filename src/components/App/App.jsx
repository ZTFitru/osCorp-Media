import Navbar from '../Navbar/Navbar'
import './App.css'
import NewsData from '../../MockData.json'
import Titlepage from '../Titlepage/Titlepage'

const App = ()=> {

    const myNewsData = NewsData.articles

    return (
        <main>
            <Navbar />
            <Titlepage myNewsData={myNewsData} />
        </main>
    )
}

export default App;