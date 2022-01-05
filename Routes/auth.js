const router = require('express').Router();
const User = require('../Models/User');

router.post('/register', async(req, res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log('user data: ' + user);

    try{
        const savedUser = await user.save();
        res.status(200).send(savedUser);
    }catch(err){
        res.status(400).send(err + " -------> Som ting wong!");
    }

});


module.exports = router;