import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  const userToken = req.cookies.authToken;

  if (!userToken) {
    return res.status(400).json({
      messagge: "Please log in first",
    });
  }

  try {
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    req.currentUser = decoded.userId;
  } catch (error) {
    console.log("error from protect route", error);
    res.status(400).json({
      message: "internal server error",
    });
  }

  next();
};

export default protectRoute;
