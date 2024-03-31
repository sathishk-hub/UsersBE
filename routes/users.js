var express = require('express');
var router = express.Router();
const userHelper = require('../database/userHelper.js');


/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {

    const user = await userHelper.getUserDetail(req.query.email || req.body.email)
    res.status(200).json(user);

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/', async function (req, res, next) {
  try {
    const isUserPresent = await userHelper.isUserPresent(req.body.email)

    if (isUserPresent) {
      res.status(200).send({
        message: "User is already Present",
      });
    }
    else {
      await userHelper.createUser(req.body).then(data => {
        res.status(200).send({
          message: "User created successfully!!",
          user: data
        });
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating user"
        });
      });

    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


router.put('/', async function (req, res, next) {
  try {
    await userHelper.updateUser(req.body).then(data => {
      res.status(200).send({
        message: "User updated successfully!!",
        user: data
      });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating user"
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }

});



module.exports = router;
