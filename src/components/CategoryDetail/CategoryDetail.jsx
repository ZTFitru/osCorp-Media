import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CategoryDetail.css'

const CategoryDetail = ()=> {
    // console.log('hello')
    const { category, index } = useParams()
    console.log('category', category, 'index', index)
    const [detail, setDetail] = useState('')
    console.log(detail)
    console.log(detail)

    useEffect(()=> {
        const getNewsByCategorys = async ()=> {
            try {
                const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
                console.log('me',res)
                const data = await res.json()
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

    console.log('detail', detail)
   

    return (
        <div className='cat-detail-out'>
            <div className='cat-detail-cont'>
                <h2>{detail.title}</h2>
                <p>By: <span>{detail.author}</span></p>  
                <p>Date: <span>{new Date(detail.publishedAt).toLocaleDateString()}</span></p>
                <img src={detail.urlToImage} alt='' />
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