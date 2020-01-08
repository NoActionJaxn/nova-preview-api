// import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.findAll();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findByPk(
    req.params.messageId
  );
  return res.send(message);
});

router.post('/', async (req, res) => {
  const message = await req.context.models.Message.create({
    message_audio_url: req.body.name,
    message_transcript: req.body.street_address,
    status: req.body.city
  });
  return res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const result = await req.context.models.Message.destroy({
    where: { id: req.params.messageId }
  });
  return res.send(true);
});

export default router;
