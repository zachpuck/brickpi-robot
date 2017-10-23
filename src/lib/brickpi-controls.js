const brickpi = require('../bot/Brickpi');
const async = require('async');

// const robot = new brickpi.BrickPi();
    // const motorA = new brickpi.Motor({port: brickpi.PORTS.MB, name: 'motor A'});
    // const motorB = new brickpi.Motor({port: brickpi.PORTS.MC, name: 'motor B'});
    
    // robot.addMotor(motorA).addMotor(motorB).setup();
    
    // robot.on('ready', function() {
    //     motorA.resetPosition();
    //     motorB.resetPosition();
    //     robot.run();
    
        // console.log("im ready");
        // async.parallel([
        //     function(callback) {
        //         motorA.start(100).stopIn(1500, callback);
        //     },
        //     function(callback) {
        //         motorB.start(100).stopIn(1500, callback);
        //     }], 
        //     function() {
        //         console.log('Motor A and Motor B moved to 720');
        // });
    
        // motorA.start(100).moveTo(5000, function(err) {
        //     if (!err) {
        //         console.log('motorA did one revolution');
        //       }
        // 	// called when motorA has reached 5000 ticks (2500 degrees in rotation)
        // });
        
        // motorB.start(100).moveTo(5000, function(err) {
        //     if (!err) {
        //         console.log('motorB did one revolution');
        //       }
        // 	// called when motorA has reached 5000 ticks (2500 degrees in rotation)
        // });
    // });
    
    // var stdin = process.openStdin();
    
    // stdin.addListener("data", function(d) {
    //     // note:  d is an object, and when converted to a string it will
    //     // end with a linefeed.  so we (rather crudely) account for that  
    //     // with toString() and then trim() 
    //     console.log("you entered: [" + 
    //         d.toString().trim() + "]");
    //     async.parallel([
    //         function(callback) {
    //             motorA.start(100).stopIn(1500, callback);
    //         },
    //         function(callback) {
    //             motorB.start(100).stopIn(1500, callback);
    //         }], 
    //         function() {
    //             console.log('Motor A and Motor B moved to 720');
    //     });
    //   });
    
    // robot.on('a', function() {
    
    //     console.log('you typed a');
    
        // async.parallel([
        //     function(callback) {
        //         motorA.start(200).moveTo(720, callback);
        //     },
        //     function(callback) {
        //         motorB.start(150).moveTo(-3000, callback);
        //     }], 
        //     function() {
        //         console.log('Motor A and Motor B moved to 720');
        // });
        
    
        // motorA.start(100).stopIn(750, function(error) {
        //     if (!error) {
        //         console.log('motorA moved forward');
        //     }
        // });
        // motorB.start(100).stopIn(750, function(error) {
        //     if (!error) {
        //         console.log('motorA moved forward');
        //     }
        // });
    // });
    
    
    // async.series([
    // 	function(callback) {
    // 		motorA.start(200).moveTo(720, callback);
    // 	},
    // 	function(callback) {
    // 		motorB.start(150).moveTo(-3000, callback);
    // 	}
    // 	], function() {
    // 	   console.log('Motor A moved to 720 followed by Motor B');
    // 	});
    
    // motorA.start(150).moveTo(720, function(err) {
    //     if (!err) {
    //       console.log('motorA did one revolution');
    //     }
    //   });
    
    // setTimeout(function() {
    // 	motorB.start(150);
    // }, 3000);
    
    // setTimeout(function() {
    // 	motorB.stop();
    // }, 5000);
    
    // robot.on('tick', function() {
    // 	// called at every polling cycle.
    // 	var value = touchA.getValue();
    // });
    
    // setTimeout(function() {
    // 	robot.stop();
    // }, 10000);