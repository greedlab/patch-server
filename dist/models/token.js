'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise; /**
                                              * Created by Bell on 16/8/24.
                                              */

var Token = new _mongoose2.default.Schema({
    name: { type: String },
    token: { type: String, required: true },
    status: { type: Number, default: 0 },
    type: { type: Number, default: 0 }
});

exports.default = _mongoose2.default.model('token', Token);
//# sourceMappingURL=token.js.map
