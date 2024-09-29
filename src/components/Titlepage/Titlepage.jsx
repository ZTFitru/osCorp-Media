import './Titlepage.css'
import DefaultImg from '../../assets/No_image_available.png'
import { Link } from 'react-router-dom'

const Titlepage = ({ apiNews })=> {



    return (
        <div className='title-outter'>
            <h2>Top Headlines</h2>
            <div className='article-cont'>
                {apiNews.map((news, index)=> {
                    return (
                        <div key={index} className='articles'>
                            <Link to={`/article/${news.source.id}/${index}`} className='article-title'>
                                <h2>{news.title}</h2>
                            </Link>
                                <img src={news.urlToImage || DefaultImg} alt={`Headshot about ${news.title}`} />
                                <p>{news.publishedAt}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Titlepage;