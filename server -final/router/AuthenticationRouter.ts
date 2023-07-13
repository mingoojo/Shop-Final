import express from 'express';
import { check } from 'express-validator';
import controllers from '../controllers';

const router = express.Router();

router.get('/users', controllers.getUsers);

router.post('/login', [
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({ min: 6 }),
], controllers.login);

router.delete('/logout', controllers.logout);

router.post('/signup', [
  check('name').not().isEmpty(),
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({ min: 6 }),
], controllers.signup);

router.get('/users/me', controllers.checkToken);

const authenticationRouter = router;
export default authenticationRouter;
