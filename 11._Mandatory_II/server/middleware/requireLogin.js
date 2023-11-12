export function requireLogin(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.sendStatus(401).json({message: 'Unauthorized. Login required.'});
    }
  }