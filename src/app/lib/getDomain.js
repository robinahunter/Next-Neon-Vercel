export default function getDomain() {
    //Check is production https if not use http
    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http"
    //Check if production url if not use localhost. Once in production default to production_url
    const domain = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : "localhost:3000" //Change this to production URL once you have it "production_url.com" vs "localhost:3000" 
    return `${protocol}://${domain}`
}