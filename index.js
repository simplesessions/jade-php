module.exports = function (pug) {
    if (typeof pug === 'undefined') {
        pug = require('pug');
    }
    require('./lib/filters')(pug);
    require('./lib/compiler')(pug);
};
