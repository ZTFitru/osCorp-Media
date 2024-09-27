import './Titlepage.css'

const Titlepage = ({ apiNews })=> {

    // console.log(myNewsData)

    return (
        <div className='title-outter'>
            <h2>Top Headlines</h2>
            <div className='article-cont'>
                {apiNews.map((news, index)=> {
                    return <div key={index} className='articles'>
                        <h2>{news.title}</h2>
                        <img src={news.urlToImage} alt='' />
                        <p>{news.publishedAt}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Titlepage;