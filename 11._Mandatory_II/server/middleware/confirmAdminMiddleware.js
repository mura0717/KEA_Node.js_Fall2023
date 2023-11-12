export async function confirmAdmin(req, res, next) {
  console.log(req.session.user);
  //userObj.isAdmin = Number(userObj.isAdmin) === 1 ? 1 : 0;
  const isAdmin = req.session.user.isAdmin
  if (Number(isAdmin) === 1) {
    next();
  } else {
    res.status(401).json({error: 'Unauthorized'});
    console.log("confirmAdmin Error: 401");
  }
}