import express from 'express';
import productsRouter from './router/products.router.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(8080, () => {
    console.log("Listening server on port 8080.");
});

app.get('/', (req, res) => {
    res.send("Bienvenidos");
})

// Routes
app.use('/api/products', productsRouter);