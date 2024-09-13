import dotenv from 'dotenv'
dotenv.config()

const config = {
    port: process.env.PORT || 3000,
    HOST : process.env.DB_HOST,
    USER : process.env.DB_USER,
    PASS : process.env.DB_PASS,
    DATABASE : process.env.DB_DATABASE,
    PORT : process.env.DB_PORT

}

export default config;