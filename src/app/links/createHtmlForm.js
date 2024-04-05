
export default function LinksCreateHtmlForm () {
    return <>
        <form action="/api/links" method="POST">
            <input type="text" defaultValue="https://github.com/robinahunter/Next-Neon-Vercel" name="url" placeholder="Your url to shorten"/>
            <button type="submit" >Shorten</button>

        </form>
    </>
}
