async function getData() {
    //1 endpoint - API?
    const endpoint = "http://localhost:3000/api/posts"
    const res = await fetch(endpoint)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()

}



export default async function BlogPage() {
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
    return <main>
        <h1>Hello world ... Are you there?</h1>
        <p>Posts:</p>
        {/* {data && JSON.stringify(items)} */}
        {items && items.map((item, idx)=>{
            return <li key={`post-${idx}`}>{item.title}</li>
        })}
    </main>
}