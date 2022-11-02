import { Router } from 'express';
import userModel from '../../model/user.model.js';
import { getAllUsers, addUser, updateUser, deleteUser, getUser, getUserName } from './controller/user.controller.js'
const router = Router();



router.get("/getUsers", getAllUsers)

router.post("/add", addUser)

router.patch("/update/:id", updateUser)

router.delete("/delete/:id", deleteUser)

router.get("/getUser/:id", getUser)

router.get("/getUserName", getUserName)

export default router;