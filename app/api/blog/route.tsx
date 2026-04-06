import DBConnect from "@/lib/db"
import { NextResponse } from "next/server"

const LoadDB = async () => {
    await DBConnect()
    console.log("Database connected")
    return NextResponse.json({msg: "Database Connected"}), {status: 200}
}
export async function GET(request) {

    return NextResponse.json({msg: "API Working"})
}

export async function POST(request) {
    const formData = await request.formData()
    const timestamp = Date.now()
}