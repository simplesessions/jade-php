
module.exports = function (pug) {
    if (!pug) {
        pug = require('pug');
    }

    pug.filters.php = function (text) {
        return '<?php ' + text + ' ?>';
    };
};
