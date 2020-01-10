// import uuidv4 from 'uuid/v4';
import { Router } from 'express';
import utils from '../utils';

const router = Router();

router.get('/', utils.validateToken, async (req, res) => {
  const messages = await req.context.models.Message.findAll().catch(err => err);
  return res.send(messages);
});

router.get('/:messageId', utils.validateToken, async (req, res) => {
  const message = await req.context.models.Message.findByPk(
    req.params.messageId
  ).catch(err => err);
  return res.send(message);
});

router.post('/', utils.validateToken, async (req, res) => {
  const message = await req.context.models.Message.create({
    message_audio_url: req.body.name,
    message_transcript: req.body.street_address,
    status: req.body.city
  }).catch(err => err);
  return res.send(message);
});

router.delete('/:messageId', utils.validateToken, async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const result = await req.context.models.Message.destroy({
    where: { id: req.params.messageId }
  }).catch(err => err);
  return res.send(true);
});

export default router;
