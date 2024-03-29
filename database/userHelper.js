const UserModel = require('./userModel.js');

async function getUserDetail(email) {
   return await UserModel.find({ email });
}

async function isUserPresent(email) {
   return (await getUserDetail(email)).length > 0;
}

async function createUser(details) {
   const user = new UserModel({
      email: details.email,
      password: details.password
   });
   return await user.save();
}

async function updateUser(details) {
  return await  UserModel.findOneAndUpdate({ email: details.email }, {
      ...details
   });
}

module.exports = {
   getUserDetail,
   isUserPresent,
   createUser,
   updateUser
}