import express from "express";
import { getUsers, postUser, putUser, deleteUser} from "../controllers/userController.js";

const router = express.Router(); 

router.get("/", getUsers)

router.post("/", postUser)

router.put("/:id", putUser)

router.delete("/:id", deleteUser)

export default router;