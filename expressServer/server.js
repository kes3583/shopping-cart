require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes)

// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.get("/api", (req, res) => {
  res.json({ message: "API running..." });
});


app.listen(PORT, () => console.log(`express Server is running on port ${PORT}`));