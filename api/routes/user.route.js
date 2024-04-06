import express from 'express'
import test1 from '../controllers/user.controller.js'
const router = express.Router();

router.get( '/' , test1);

///inorder to use the route anywhere we need export

export default router;