import config from './config.js'
import app from './app.js'
import clientDB from './database.js'

clientDB.connect()
console.log('Connected to database')

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
})