const http = require('http')
const { getProducts, getProductById } = require('./controllers/productController')


const server = http.createServer((req,res) => {
    if(req.url === '/api/products' && req.method === 'GET') {
        getProducts(req,res)
    }
    else if(req.url.match(/\/api\/product\/[0-9]+/) && req.method === 'GET'){
        let id  = req.url.split('/')[3]
        getProductById(req,res,id)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})

const PORT = process.env.PORT || 8877

server.listen(PORT,()=>{console.log(`Server running on port:${PORT}`)})