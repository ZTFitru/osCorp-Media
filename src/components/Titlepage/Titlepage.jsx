import './Titlepage.css'

const Titlepage = ({ myNewsData })=> {

    console.log(myNewsData)

    return (
        <div className='title-outter'>
            <div className='article-cont'>
                {myNewsData.map((news, index)=> {
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