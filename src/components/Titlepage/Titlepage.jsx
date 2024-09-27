import './Titlepage.css'

const Titlepage = ({ myNewsData })=> {

    console.log(myNewsData)

    return (
        <div>
            {myNewsData.map((news, index)=> {
                return <div key={index}>
                    <h2>{news.title}</h2>
                    <img src={news.urlToImage} alt='' />
                    <p>{news.publishedAt}</p>
                </div>
            })}
        </div>
    )
}

export default Titlepage;