const asyncHandler = require("express-async-handler");
const Contact=require('../models/contactmodel')

//@desc get all contacts
// @route GET/api/contacts
// @access public

const getContact = asyncHandler(async (req, res) => {
const contacts=await Contact.find()
  res.status(200).json(contacts);
});

//@desc create all contacts
// @route GET/api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  console.log("req of the body", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mendatory !");
  }
  const contact=await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc get all contacts
// @route GET/api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(400);
    throw new Error('Contact not found')
  }
  res.status(200).json(contact);
});

//@desc delete all contacts
// @route GET/api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

//@desc update all contacts
// @route GET/api/contacts
// @access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  deleteContact,
  updateContact,
  getContacts,
};
