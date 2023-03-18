import express, { Request, Response } from 'express'
const Pool = require('pg').Pool
import { User, getUsers } from '../users/user.interface'
export const usersRouter = express.Router()

const pool = new Pool({
  user: process.env.dbuser,
  host: process.env.host,
  database: process.env.database,
  password: process.env.pasword,
  port: process.env.port,
})
/* GET users endpoint. */
usersRouter.get('/', async (req: Request, res: Response) => {
  try {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        console.log('we bad at the db')
      }

      res.json({ data: results.rows })
    })
  } catch (error) {
    res.status(500).send("We goof'd")
  }
})

usersRouter.post('/', async (req: Request, res: Response) => {
  const {name, email} = req.body
  pool.query(
    'INSERT INTO users (name, email) values ($1, $2) RETURNING *', [name, email],
    (err: any, results: any) => {
      if(err){
        console.log('why cant u db')
      }
      let user = new User(results.rows.pop())
      res.status(201).json({ data: user })
    }
  )
})
