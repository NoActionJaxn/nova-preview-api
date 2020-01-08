// import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const locations = await req.context.models.Location.findAll();
  return res.send(locations);
});

router.get('/:locationId', async (req, res) => {
  const location = await req.context.models.Location.findByPk(
    req.params.locationId
  );
  return res.send(location);
});

router.post('/', async (req, res) => {
  const location = await req.context.models.Message.create({
    name: req.body.name,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    postal_code: req.body.postal_code,
    telephone: req.body.telephone
  });
  return res.send(location);
});

router.delete('/:locationId', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const result = await req.context.models.Location.destroy({
    where: { id: req.params.locationId }
  });
  return res.send(true);
});

export default router;
