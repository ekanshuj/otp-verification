import express from require('express');
import app from express();

import dotenv from require('dotenv');
import userRoutes from require('./routes/userRoutes');

dotenv.config({ path: './config/config.env' });


app.use(express.json());
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello OTP');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {}); // server running 
