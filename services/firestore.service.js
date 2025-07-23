const db = require("../config/firebase.config");

const notesRef = db.collection("notes");

exports.createNote = async (note) => {
  const timestamp = new Date();
  const doc = await notesRef.add({ ...note, createdAt: timestamp, updatedAt: timestamp });
  return { id: doc.id, ...note, createdAt: timestamp, updatedAt: timestamp };
};

exports.getAllNotes = async () => {
  const snapshot = await notesRef.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

exports.getNoteById = async (id) => {
  const doc = await notesRef.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

exports.updateNote = async (id, data) => {
  const timestamp = new Date();
  await notesRef.doc(id).update({ ...data, updatedAt: timestamp });
  return { id, ...data, updatedAt: timestamp };
};

exports.deleteNote = async (id) => {
  await notesRef.doc(id).delete();
};
