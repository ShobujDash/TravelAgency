// const getJwtToken = require("../helper/getJwtToken");


// const cookieToken = (user, res) => {
//   const token = getJwtToken(user?._id, user?.email);
//   const options = {
//     expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//     httpOnly: true,
//     secure: true, // HTTPS এ কাজ করবে
//     sameSite: "None", // Cross-site cookies অনুমোদিত
//   };

//   res.status(200).cookie("token", token, options).json({
//     success: true,
//     token,
//     message:"Login Successfull"
//     user,
//   });
// };

// module.exports = cookieToken;


const getJwtToken = require("../helper/getJwtToken");

const cookieToken = (user, res) => {
  const token = getJwtToken(user?._id, user?.email);
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true, // Will work over HTTPS
    sameSite: "None", // Allows cross-site cookies
  };

  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    message: "Login Successful",
    user, // Fixed: Ensured proper syntax for `user`
  });
};

module.exports = cookieToken;
