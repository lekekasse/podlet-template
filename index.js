export function podlet(req, res) {
    res.send(`Hello podlet! - ${req.originalUrl}`);
};
