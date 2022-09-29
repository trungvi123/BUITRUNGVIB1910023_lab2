import { contacModel } from "../models/contactModel.js";

const create = async (req, res) => {
  try {
    const reqbody = req.body;
    const newContact = new contacModel(reqbody);
    await newContact.save();
    res.status(200).json(newContact);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}; // xong

const findAll = async (req, res) => {
  try {
    const contacts = await contacModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const findOne = async (req, res) => {
  try {
    const idReq = req.params.id;
    const contacts = await contacModel.findById(idReq);
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const update = async (req, res) => {
  try {
    const updateContact = req.body;
    const idReq = req.params.id;
    const contact = await contacModel.findOneAndUpdate(
      { _id: idReq },
      updateContact,
      { new: true }
    );
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deletee = async (req, res) => {
  try {
    const idReq = req.params.id;
    const contact = await contacModel.findByIdAndDelete(idReq)
    res.status(200).json({message:"Contact was deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deleteeAll = async (req, res) => {
  try {
    const contact = await contacModel.deleteMany()
    res.status(200).json({message:`${contact.deletedCount} contacts were deleted successfully`});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const findAllFavorite = async (req, res) => {
  try {
    const contacts = await contacModel.find({ favorite: true });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

export {
  create,
  findAll,
  findOne,
  findAllFavorite,
  deletee,
  deleteeAll,
  update,
};
