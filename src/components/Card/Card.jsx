import { useEffect, useState } from 'react'
import './Card.css'
import { useParams } from 'react-router-dom'
import { getNewsByCategory } from '../../ApiCalls'
import DefaultImg from '../../assets/No_image_available.png'

const Card = ()=> {
    const { category } = useParams()
    const [selectedNews, setSelectedNews] = useState([])

    useEffect(()=> {
        getNewsByCategory(category)
        .then(data => {
            console.log(data.articles)
            setSelectedNews(data.articles)
        })
        .catch(err => console.log(err))
    }, [category])
    
    

    console.log(selectedNews)
    return (
        <div className='card-outter'>
            <h2>{category.toUpperCase()}</h2>
            {/* <ul> */}
                <div className='card-cont'>
                {selectedNews.map((news, index) => {
                    // <li key={news.id}>{news.title}</li>
                    return <div key={index} className='cards'>
                        <h3>{news.title}</h3>
                        <img src={news.urlToImage || DefaultImg} alt='' />
                        <p>{news.publishedAt}</p>
                    </div>
                })}
                </div>
            {/* </ul> */}

        </div>
    )
}

export default Card;