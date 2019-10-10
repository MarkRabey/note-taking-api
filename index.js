import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import cors from 'cors';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/notetaking_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = 4300;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Notetaking API v1'
  });
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is listening at  http://localhost:${PORT}`);
});