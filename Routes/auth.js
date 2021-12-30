const router = require('express').Router();

router.post('/register', (req, res) =>{
    res.send('Welcome to Register page!');
});


module.exports = router;