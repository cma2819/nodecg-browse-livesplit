"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStringToObject = void 0;
/**
 * Parse time string from LiveSplit to Time object.
 * @param time (hh):(mm):ss.ms
 */
exports.timeStringToObject = function (time) {
    var hmsString = time.split('.')[0];
    var hms = hmsString.split(':');
    var second = hms.pop();
    var minute = hms.pop();
    var hour = hms.pop();
    return {
        day: hour ? (parseInt(hour) / 24) : 0,
        hour: hour ? (parseInt(hour) % 24) : 0,
        minute: minute ? parseInt(minute) : 0,
        second: second ? parseInt(second) : 0,
    };
};
