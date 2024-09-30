import { useEffect, useState } from 'react'
import './Card.css'
import { Link, useParams } from 'react-router-dom'
import { getNewsByCategory } from '../../ApiCalls'
import DefaultImg from '../../assets/No_image_available.png'



const Card = ()=> {
    const { category } = useParams()
    const [selectedNews, setSelectedNews] = useState([])
    const [error, setError] = useState('')

    useEffect(()=> {
        getNewsByCategory(category)
        .then(data => {
            setSelectedNews(data.articles)
        }
        )
        .catch(err => setError(err))
    }, [category])

    
    return (
        <div className='card-outter'>
            <h2>{category.toUpperCase()}</h2>
            <div className='card-cont'>
                {error ? (
                    <p>There was an error</p>
                ) : selectedNews.length === 0 ? (
                    <p>No articles are available</p>
                ) : (
                    selectedNews.map((news, index) => (
                        <div key={index} className='cards'>
                            <Link to={`/${category}/article/${index}`} className='card-title'>
                                <h3>{news.title}</h3>
                            </Link>
                            <img src={news.urlToImage || DefaultImg} alt={`Headshot about ${news.title}`} />
                            <p>Date: <span>{new Date(news.publishedAt).toLocaleDateString()}</span></p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Card;