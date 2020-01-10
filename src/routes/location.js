// import uuidv4 from 'uuid/v4';
import { Router } from 'express';
import utils from '../utils';

const router = Router();

router.get('/', utils.validateToken, async (req, res) => {
  const locations = await req.context.models.Location.findAll().catch(
    err => err
  );
  return res.send(locations);
});

router.get('/:locationId', utils.validateToken, async (req, res) => {
  const location = await req.context.models.Location.findByPk(
    req.params.locationId
  ).catch(err => err);
  return res.send(location);
});

router.post('/', utils.validateToken, async (req, res) => {
  const location = await req.context.models.Location.create({
    name: req.body.name,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    postal_code: req.body.postal_code,
    telephone: req.body.telephone
  }).catch(err => err);
  return res.send(location);
});

router.delete('/:locationId', utils.validateToken, async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const result = await req.context.models.Location.destroy({
    where: { id: req.params.locationId }
  }).catch(err => err);
  return res.send(true);
});

export default router;
