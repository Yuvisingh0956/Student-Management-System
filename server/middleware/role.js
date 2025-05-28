module.exports = function (requiredRole) {
  return function (req, res, next) {
    if (req.role !== requiredRole) {
      return res.status(403).json({ msg: "Access denied: insufficient role" });
    }
    next();
  };
};
