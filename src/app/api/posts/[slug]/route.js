import { NextResponse } from "next/server";

export async function GET(request, context) {
    const {params} = context
    const {slug} = params
    return NextResponse.json({slug: slug})
}


//TEST in Terminal POST:
// curl -X POST -L http://localhost:3000/api
