import { useParams } from 'react-router-dom';
import './TitleDetail.css'
import { useEffect, useState } from 'react';

const TitleDetail = ()=> {
    console.log('hello')
    const { sourceId, index } = useParams()
    const [detail, setDetail] = useState('')

    useEffect(()=> {
        const getSingleHeadlineNews = async ()=> {
            try {
                const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
                const data = await res.json()
                if(data.articles && data.articles[index]) {
                    setDetail(data.articles[index])
                }
            } catch (error) {
                console.log('Error something idk', error)
            }
        }
        getSingleHeadlineNews()
    }, [sourceId, index])



    return (
        <div className='title-detail-out'>
            <div className='title-detail-cont'>
                <h2>{detail.title}</h2>
                <p>By: <span>{detail.author}</span></p> 
                <p>Date: <span>{new Date(detail.publishedAt).toLocaleDateString()}</span></p>
                <img src={detail.urlToImage} alt={`Headshot about ${detail.title}`} />
                <p className='description'>{detail.description}</p>
                <p className='content'>{detail.content}
                    <a href={detail.url} target='_black' rel='noopener noreferrer'>
                        <button>Read more</button>
                    </a>
                </p>
                
            </div>
        </div>
    )
}

export default TitleDetail;