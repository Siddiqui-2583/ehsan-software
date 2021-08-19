import express from 'express'
import {
  getAllBlogs,
  addNewBlog,
  getSingleBlog,
  editReactCount,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/blogs", getAllBlogs);
router.post("/add-new-blog", addNewBlog);
router.get("/blogs/:id", getSingleBlog);
router.put("/blogs/:id", editReactCount);

export default router

