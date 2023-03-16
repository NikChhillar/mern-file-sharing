import express from "express";
import upload from '../utils/upload.js'
import { getImage, uploadImage } from "../controller/img_controller.js";

const router = express.Router();

router.post("/upload", upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;
