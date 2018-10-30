const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.loginUser = (req, res, next) => {
    let fetchedUser;
  
    User.findOne({ username: req.body.username })
      .then(user => {
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
        // return (req.body.password == user.password);
      })
      .then(result => {
        if (!result) {
  
          return res.status(401).json({ 
          });
        }
  
          res.status(200).json({
            msg: fetchedUser.name + " <br>logged in",
            flag: 1
          });
      })
      .catch(err => {
        return res.status(401).json({});
      });
  }

  exports.checkServer = (req, res, next) => {
    return res.status(200).json({
      msg: "success"
   
    }); 
  }

  exports.bcrypt_it = (req, res, next) => { 
    bcrypt.hash(req.body.text, 10, function(err, hash) {
      return res.status(200).json({
        bcrypt: hash
      });
   });
  }