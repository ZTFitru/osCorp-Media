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
        <div>
            <h2>{detail.title}</h2>
            <p>{detail.author}</p> 
            <p>{detail.publishedAt}</p>
            <img src={detail.urlToImage} alt='' />
            <p>{detail.description}</p>
            <p>{detail.content}</p>
        </div>
    )
}

export default TitleDetail;