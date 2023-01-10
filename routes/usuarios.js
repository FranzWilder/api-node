
import express from "express"
import usuariosController from "../controllers/usuarios.js" 


const router = express.Router();

router.get('/',usuariosController.usuariosGet);

router.put('/:id',usuariosController.usuariosPut);

router.post('/',usuariosController.usuariosPost);

router.delete('/',usuariosController.usuariosDelete);


export default router;

