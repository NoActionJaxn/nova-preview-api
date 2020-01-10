import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

router.post('/login', async (req, res) => {
  let result = {};
  let status = 200;
  const { email, password } = req.body;
  const login = await req.context.models.User.findOne({
    where: { email }
  }).then(
    function(user) {
      if (user) {
        bcrypt
          .compare(password, user.password)
          .then(match => {
            if (match) {
              status = 200;
              // Create a token
              const payload = { user: user.name };
              const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
              const secret = process.env.JWT_SECRET;
              const token = jwt.sign(payload, secret, options);

              // console.log('TOKEN', token);
              result.token = token;
              result.status = status;
              result.result = user;
            } else {
              status = 401;
              result.status = status;
              result.error = `Authentication error: Incorrect Password`;
            }
            res.status(status).send(result);
          })
          .catch(err => {
            status = 500;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          });
      } else {
        status = 404;
        result.status = status;
        result.error = `Authentication error: User Not Found`;
        res.status(status).send(result);
      }
    },
    function(err) {
      status = 404;
      result.status = status;
      result.error = err;
      res.status(status).send(result);
    }
  );

  return login;
});
export default router;
