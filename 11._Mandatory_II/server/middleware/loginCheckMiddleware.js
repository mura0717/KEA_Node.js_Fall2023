// login requirement check for auth
export function requireLogin(req, res, next) {
    if (req.session.user) {
      next(); // if logged in, continue to the next.
    } else {
      res.status(401).json({error: 'Unauthorized'});
    }
  }

export async function requireAdmin(req, res, next) {
  const isAdmin = req.session.user.isAdmin
  if (isAdmin === 1) {
    next();
  } else {
    res.status(401).json({error: 'Unauthorized'});
  }
}


