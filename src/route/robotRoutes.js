const robotController = require('../controller/robot-controller');

module.exports = function (router) {
    router.get('/robot', (req, res) => {
        console.log('BuuZZZ clunck clunck')
        robotController.startRobot(req)
        .then(data => {
            console.log('data', data);
            return res.json(data);
        })
        .catch(err => {
            return res.status(404).json(err);
        });
    });
    return router;   
};


