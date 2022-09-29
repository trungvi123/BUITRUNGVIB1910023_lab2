import express from "express";
import * as contacts from '../controllers/contact.controller.js'


const router = express.Router();

router.route('/')
.get(contacts.findAll)
.post(contacts.create)
.delete(contacts.deleteeAll);

router.route("/favorite")
.get(contacts.findAllFavorite)

router.route("/:id")
.get(contacts.findOne)
.put(contacts.update)
.delete(contacts.deletee)

export default router