import './Titlepage.css'
import DefaultImg from '../../assets/No_image_available.png'

const Titlepage = ({ apiNews })=> {



    return (
        <div className='title-outter'>
            <h2>Top Headlines</h2>
            <div className='article-cont'>
                {apiNews.map((news, index)=> {
                    return <div key={index} className='articles'>
                        <h2>{news.title}</h2>
                        <img src={news.urlToImage || DefaultImg} alt='' />
                        <p>{news.publishedAt}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Titlepage;