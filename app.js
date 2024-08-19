import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

// Leer un json en ESModule con fs
// import fs from 'node.fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// leer un JSON en ESModules recomendado por forma nativa de node.js
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

// en el futuro será
// import movies from './movies.json' with { type: 'json' }

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
