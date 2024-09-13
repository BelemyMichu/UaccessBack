import pkg from 'pg'
import config from './config.js'

const {Client} = pkg 

const clientDB = new Client({
    host: config.HOST,
    user: config.USER,
    password: config.PASS,
    database: config.DATABASE,
    port: config.PORT
})

export default clientDB;