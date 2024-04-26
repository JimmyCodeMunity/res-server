const express = require('express');
const { getAllUsers, Login, createUser, getAllUsersByEmail, updateUserByEmail, updateUserPasswordByEmail } = require('../controllers/ResellerController');

const router = express.Router();
router.use(express.json());

//allow url encoded
router.use(express.urlencoded({extended:false}));


router.get('/usersdata',getAllUsers);

router.post('/login',Login);

router.post('/register',createUser);

router.get('/usersdata/:email',getAllUsersByEmail);


router.put('/updateuser/:email',updateUserByEmail);


router.put('/updatepassword/:email',updateUserPasswordByEmail);


module.exports = router;
