require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => console.log(`express Server is running on port ${PORT}`));