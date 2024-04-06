import express from 'express'
import test from '../controllers/user.controller.js'
const router = express.Router();

router.get( '/' , test);

///inorder to use the route anywhere we need export

export default router;