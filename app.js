const express = require('express');
const app = express();
const db = require('./src/models');
const userRoutes = require('./src/routes/user.routes');

app.use(express.json());
app.use('/api/users', userRoutes);


db.sequelize.sync().then(() => {
  console.log('Database synced');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error("Failed to sync database")
})
