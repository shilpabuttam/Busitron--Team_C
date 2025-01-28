

const protect = (req, res, next) => {
    // Middleware to protect routes
    next();
};

module.exports = protect;