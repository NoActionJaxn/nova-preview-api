import { Router } from 'express';
import utils from '../utils';

const router = Router();

router.get('/', utils.validateToken, async (req, res) => {
  const users = await req.context.models.User.findAll().catch(err => err);
  return res.send(users);
});

router.get('/:userId', utils.validateToken, async (req, res) => {
  const user = await req.context.models.User.findByPk(req.params.userId).catch(
    err => err
  );
  return res.send(user);
});

export default router;
