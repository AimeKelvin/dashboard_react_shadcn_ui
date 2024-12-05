import {createConnection} from '../../../backend/db'
import {NextResponse} from 'next/server'

export async function GET(){
    try {

const db= await createConnection()
const sql = "SELECT * FROM users"
const [users]  = await db.query(sql)
return NextResponse.json(users)
    } catch(error){
        console.log(error)
        return NextResponse.json({error: error.message})
    }
}