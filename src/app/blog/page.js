import getDomain from "@/app/lib/getDomain"

import BlogCard from "./card"



async function getData() {
    // 1 endpoint - API?
    const domain = getDomain()
    const endpoint = `${domain}/api/posts`  // Third party API request??
    //HTTP GET & revalidate 10 seconds
    // const res = await fetch(endpoint, {next: {revalidate: 10 }}) 
    //HTTP GET no store
    const res = await fetch(endpoint, {cache: 'no-store' }) // HTTP GET

    // if (!res.ok) {
    //     throw new Error("Failed to fetch data")
    // }

    if (res.headers.get("content-type") !== "application/json") {
        return {items: []}
    }
    return res.json()
}



export default async function BlogPage() {
    const data = await getData()
    const items = data && data.items ? [...data.items] : []

    return <main>
        <h1>Hello World</h1>
        <p>Posts:</p>
        {items && items.map((item, idx)=>{
            return <BlogCard title={item.title} key={`post-${idx}`} />
        })}
    </main>
}