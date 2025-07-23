const service = require("../services/firestore.service");

exports.createNote = async (req, res, next) => {
  try {
    const note = await service.createNote(req.body);
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

exports.getAllNotes = async (req, res, next) => {
  try {
    const notes = await service.getAllNotes();
    res.status(200).json(notes);
  } catch (err) {
    next(err);
  }
};

exports.getNoteById = async (req, res, next) => {
  try {
    const note = await service.getNoteById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (err) {
    next(err);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const note = await service.getNoteById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    const updated = await service.updateNote(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const note = await service.getNoteById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    await service.deleteNote(req.params.id);
    res.status(200).send({
      message: "Note deleted successfully"
    });
  } catch (err) {
    next(err);
  }
};
