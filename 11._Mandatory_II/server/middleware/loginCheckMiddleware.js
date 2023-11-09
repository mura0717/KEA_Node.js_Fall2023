// login requirement check for auth
export function requireLogin(req, res, next) {
    if (req.session.user) {
      next(); // User is logged in, continue to the next.
    } else {
      res.status(401).json({error: 'Unauthorized'});
    }
  }
