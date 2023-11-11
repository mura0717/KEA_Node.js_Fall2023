export async function confirmAdmin(req, res, next) {
  const isAdmin = req.session.user.isAdmin
  if (isAdmin === 1) {
    next();
  } else {
    res.status(401).json({error: 'Unauthorized'});
    console.log("401");
  }
}