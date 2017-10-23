const brickpi = require('../lib/brickpi-controls');

module.exports = exports = {};

exports.startRobot = (req) => {
    return new Promise((resolve, reject) => {
        console.log('clink clank control clank')
        function sample() {
            if(err) {
                return reject(err)
            } else {
                num = 1 + 2;
                return num;
            }            
        }
        return resolve(num);
    });
};

 