function validateAdminUser(req, res, next) {
   const { user } = req;

    if (!user) {
      res.status(401).json({ message: 'Necessita de login' });
    }

   if (!user.admin) {
     res.status(403).json({ message: 'Área restrita' });
   }

   next();
}

module.exports = {
  validateAdminUser,
};