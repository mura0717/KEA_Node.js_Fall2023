export async function requireAdmin(req, res, next) {
  const isAdmin = req.session.user.isAdmin;
  if (Number(isAdmin) === 1) {
    next();
  } else {
    res.sendStatus(401).json({ message: "Unauthorized. Admin only." });
  }
}