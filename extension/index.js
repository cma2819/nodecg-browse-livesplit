"use strict";
var tslib_1 = require("tslib");
var livesplit_client_1 = tslib_1.__importDefault(require("livesplit-client"));
var utils_1 = require("./utils");
module.exports = function (nodecg) {
    var logger = new nodecg.Logger('extension');
    var lsConfig = nodecg.bundleConfig.livesplit;
    var currentTimeRep = nodecg.Replicant('currentTime', {
        defaultValue: {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
        }
    });
    var lsClient = new livesplit_client_1.default(lsConfig.address || '127.0.0.1:16834');
    try {
        // Connected event
        lsClient.on('connected', function () {
            logger.info('Connected!');
            setInterval(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                var _a, _b;
                return tslib_1.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = currentTimeRep;
                            _b = utils_1.timeStringToObject;
                            return [4 /*yield*/, lsClient.getCurrentTime()];
                        case 1:
                            _a.value = _b.apply(void 0, [_c.sent()]);
                            logger.debug("ct: " + JSON.stringify(currentTimeRep.value));
                            return [2 /*return*/];
                    }
                });
            }); }, lsConfig.tick || 100);
        });
        // Disconnected event
        lsClient.on('disconnected', function () {
            logger.info('Disconnected!');
        });
        lsClient.connect();
    }
    catch (err) {
        logger.error(err);
    }
};
