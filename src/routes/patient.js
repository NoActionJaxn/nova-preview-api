// import uuidv4 from 'uuid/v4';
import { Router } from 'express';
import utils from '../utils';

const router = Router();

router.get('/', utils.validateToken, async (req, res) => {
  const patients = await req.context.models.Patient.findAll().catch(err => err);
  return res.send(patients);
});

router.get('/:patientId', utils.validateToken, async (req, res) => {
  const patient = await req.context.models.Patient.findByPk(
    req.params.patientId
  ).catch(err => err);
  return res.send(patient);
});

router.get('/messages/:telephone', utils.validateToken, async (req, res) => {
  const messages = await req.context.models.Message.findAll({
    where: { patient_telephone: req.params.telephone }
  }).catch(err => err);
  return res.send(messages);
});

router.post('/', utils.validateToken, async (req, res) => {
  const patient = await req.context.models.Patient.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    postal_code: req.body.postal_code,
    email: req.body.email,
    telephone: req.body.telephone
  }).catch(err => err);
  return res.send(patient);
});

router.delete('/:patientId', utils.validateToken, async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const result = await req.context.models.Patient.destroy({
    where: { id: req.params.patientId }
  }).catch(err => err);
  return res.send(true);
});

export default router;
