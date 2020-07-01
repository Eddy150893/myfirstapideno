

import {Application,Router} from 'https://deno.land/x/oak/mod.ts'
import * as indexCtrl from "../controllers/index.controllers.ts";

const router=new Router();

router.get('/',({response})=>{
    response.body="Welcome to my api in Deno";
});
router.get('/users',indexCtrl.getUsers);
router.get('/users/:id',indexCtrl.getUser);
router.post('/users',indexCtrl.createUser);
router.put('/users/:id',indexCtrl.updateUser);
router.delete('/users/:id',indexCtrl.deleteUser);
export default router;