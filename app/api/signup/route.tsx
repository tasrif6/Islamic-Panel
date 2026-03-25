import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    const {email, password, conf_password} = await request.json();
    console.log(email, password, conf_password)
    return new Response(JSON.stringify({message: "User Registered Successfully"}), {status: 201})
}