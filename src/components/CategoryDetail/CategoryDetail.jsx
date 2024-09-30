import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CategoryDetail.css'

const CategoryDetail = ()=> {
    const { category, index } = useParams()
    const [detail, setDetail] = useState('')

    useEffect(()=> {
        const getNewsByCategorys = async ()=> {
            try {
                const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
               
                const data = await res.json()
                console.log(data)
                if(data.articles && data.articles[index]) {
                    console.log('this', data.articles[index])
                    setDetail(data.articles[index])
                }
            } catch (error) {
                console.log('Error something idk', error)
            }
        }
        getNewsByCategorys()
    }, [category, index])

    
   

    return (
        <div className='cat-detail-out'>
            <div className='cat-detail-cont'>
                <h2>{detail.title}</h2>
                <p>By: <span>{detail.author || 'Unknown'}</span></p>  
                <p>Date: <span>{new Date(detail.publishedAt).toLocaleDateString()}</span></p>
                <img src={detail.urlToImage} alt={`Headshot about ${detail.title}`} />
                <p className='cat-description'>{detail.description}</p>
                <p className='cat-content'>{detail.content}
                    <a href={detail.url} target='_black' rel='noopener noreferrer'>
                        <button>Read more</button>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default CategoryDetail