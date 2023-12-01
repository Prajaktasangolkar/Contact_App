const express=require('express');
const router=express.Router();
const {getContact,createContact,deleteContact,updateContact,getContacts}=require('../controllers/contactController');

router.route('/').get(getContact).post(createContact);

// router.route('/:id').get(getContacts);
// router.route('/:id').put(updateContact);
// router.route('/:id').delete(deleteContact);
router.route('/:id').get(getContacts).put(updateContact).delete(deleteContact);

module.exports=router;