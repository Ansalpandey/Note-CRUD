const express = require("express");
const router = express.Router();
const controller = require("../controllers/notes.controller");
const { validateNote } = require("../middlewares/validate.middleware");

router.post("/notes", validateNote, controller.createNote);
router.get("/notes", controller.getAllNotes);
router.get("/notes/:id", controller.getNoteById);
router.put("/notes/:id", validateNote, controller.updateNote);
router.delete("/notes/:id", controller.deleteNote);

module.exports = router;
