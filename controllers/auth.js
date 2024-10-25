const userDetails = require("../userData.json");

exports.login = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (userDetails.find((user) => user.email == email)) {
      return res.status(200).json({ status: "success", message: "Logged in" });
    } else {
      return res
        .status(404)
        .json({ status: "failure", message: "You are not authorized" });
    }
  } catch (error) {}
};

exports.usersDetails = (req , res , next)=>{
    return res.status(200).json({message : "User details " , userDetails})
}
