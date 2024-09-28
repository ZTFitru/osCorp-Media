export const getTopHeadlineNews = async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    const res = await fetch(url)
    if(!res.ok) {
        throw new Error('Bad Network')
    }
    return await res.json()
}


export const getNewsByCategory = async (category)=> {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    const res = await fetch(url)
    if(!res.ok) {
        throw new Error('Bad Network')
    }
    return await res.json()
}


