import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { sequelize } from './models';
import routes from './routes';
import { createEntries } from './entries';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createEntries(models);
  }
  app.listen(process.env.PORT, () => {
    console.log(`Nova Preview listening on port ${process.env.PORT}`);
  });
});

app.use(cors());

app.use('/session', routes.session);

app.use('/locations', routes.location);

app.use('/users', routes.user);

app.use('/patients', routes.patient);

app.use('/messages', routes.message);
