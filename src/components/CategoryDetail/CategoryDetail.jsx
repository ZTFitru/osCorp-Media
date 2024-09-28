import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CategoryDetail = ()=> {
    console.log('hello')
    const { category, index } = useParams()
    console.log('category', category, 'index', index)
    const [detail, setDetail] = useState('')
    console.log(detail)
    console.log(detail)

    useEffect(()=> {
        const getNewsByCategorys = async ()=> {
            try {
                // const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
                const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
                // const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
                console.log('me',res)
                const data = await res.json()
                // if(data.articles && data.articles[index]) {
                //     setDetail(data.articles[index])
                // } 
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
        <div>
            <h1>Helllooooo</h1>
            <h2>{detail.title}</h2>
            <p>{detail.author}</p> 
            <p>{detail.publishedAt}</p>
            <img src={detail.urlToImage} alt='' />
            <p>{detail.description}</p>
            <p>{detail.content}</p>
        </div>
    )
}

export default CategoryDetail