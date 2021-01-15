import express from 'express';
import mongoose from 'mongoose';

import routes from './src/routes/crmRoutes';

const app = express();
const PORT = process.env.PORT || 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.get('/', (req, res) => {
  res.send('Done');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
