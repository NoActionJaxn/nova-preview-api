// import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const patients = await req.context.models.Patient.findAll();
  return res.send(patients);
});

router.get('/:patientId', async (req, res) => {
  const patient = await req.context.models.Patient.findByPk(
    req.params.patientId
  );
  return res.send(patient);
});

router.post('/', async (req, res) => {
  const patient = await req.context.models.Patient.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    postal_code: req.body.postal_code,
    email: req.body.email,
    telephone: req.body.telephone
  });
  return res.send(patient);
});

router.delete('/:patientId', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const result = await req.context.models.Patient.destroy({
    where: { id: req.params.patientId }
  });
  return res.send(true);
});

export default router;
