// module that contains the motor class definition and the motorArray class
var util = require('util');
var ee = require('events').EventEmitter;

Motor = function(params) {
    ee.call(this);
    this.name = params.name;
    this.decription = params.description;
    
    this.port = params.port;
    this.speed = 0;
    this.enabled = true;
    
    this._encoderValue = null;
    this._actualSpeed = null;
    this._before = 0;
    this._offset = 0;
    this._callback = null;
    this._endEncoderValue = null;
    this._tolerance = 10;
}

Motor.prototype.getPosition = function() {
    return (this._encoderValue - this._offset);
};

Motor.prototype.resetPosition = function() {
    this._offset = this._encoderValue;
    return this;
};

Motor.prototype.getActualSpeed = function() {
    return this._actualSpeed;
}

Motor.prototype.start = function(speed) {
    this.speed = parseInt(speed, 10);
    this.emit('start', this);
    return this;
};

Motor.prototype.stop = function(err) {
    this._endEncoderValue = null;
    this.speed = 0;
    if (this._callback) this._callback(err);
    
    this.emit('stop', this);
    return this;
};

Motor.prototype.stopIn = function(amount, callback) {
    this._callback = callback;
    var startEncoderValue = this._encoderValue;
    this._endEncoderValue = this._encoderValue + this.speed*(parseInt(amount, 10))/(Math.abs(this.speed));
    
    // setting min and max speed for PID
    if (this.speed > 0) {
 	this._maxSpeed = this.speed;
    	this._minSpeed = -1*this.speed;
    } else {
 	this._maxSpeed = -1*this.speed;
    	this._minSpeed = this.speed;
    }
    
    return this;
};

Motor.prototype.moveTo = function(moveToPosition, callback) {
    this._callback = callback;
    var startEncoderValue = this._encoderValue;
    this._endEncoderValue = parseInt(this._offset, 10) + parseInt(moveToPosition, 10);
    
    // setting proper direction
    if (((this._endEncoderValue > startEncoderValue) && (this.speed < 0)) || ((this._endEncoderValue < startEncoderValue) && (this.speed > 0))) {
	this.speed = -1 * this.speed;
    }
    
    // setting min and max speed for PID
    if (this.speed > 0) {
 	this._maxSpeed = this.speed;
    	this._minSpeed = -1*this.speed;
    } else {
 	this._maxSpeed = -1*this.speed;
    	this._minSpeed = this.speed;
    }
    
    return this;
};

Motor.prototype._update = function(encoderValue) {
    this._encoderValue = parseInt(encoderValue, 10);
    
    // speed calculations. in ticks/seconds
    var now = (new Date()).getTime();
    var timelapse = now - this._before;
    this._before = now;
    
    if (this._previousEncoderValue !== null) {
    	this._actualSpeed = (this._encoderValue - this._previousEncoderValue)/timelapse*1000;
    }
    
    this._previousEncoderValue = this._encoderValue;
    
    if (this._actualSpeed !== 0) {
    	this.emit('move',this);
    }
    
    if (this._endEncoderValue) {
		var targetSpeed = this._PIDCalculation(this._endEncoderValue, this._encoderValue, timelapse, this._minSpeed, this._maxSpeed);
		
		if (((Math.abs(this._endEncoderValue - this._encoderValue) < this._tolerance) || (Math.abs(targetSpeed) < 20)) && (Math.abs(this._actualSpeed) === 0)) {
		    this.stop();
		} else {
		    this.speed = targetSpeed.toFixed(0);
		}
    }
};

Motor.prototype._PIDCalculation = function(setPoint, currentPoint, dt, min, max) {
    var KP = 0.4;
    var KD = 0.01;
    var KI = 0.001;
    var epsilon = 1;
    
    this._pre_error = 0;
    this._integral = 0;
    var error;
    var derivative;
    var output;
    
    error = setPoint - currentPoint;
    
    if (Math.abs(error) > epsilon) {
    	this._integral = this._integral + error*dt;
    } 
    
    derivative = (error - this._pre_error)/dt;
    output = KP*error + KI*this._integral + KD*derivative;
    
    //Saturation Filter
    if (output > max) {
    	output = max;
    } else if (output < min) {
    	output = min;
    }
    
    //Update error
    this._pre_error = error;
    
    return output;
}

util.inherits(Motor, ee);
exports.Motor = Motor;
