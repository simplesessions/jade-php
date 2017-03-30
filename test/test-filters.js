var assert = require('assert');
var pug = require('pug');
require('../lib/filters.js')(pug);

describe('php filter', function () {
    it('should apply', function () {
        var html = pug.render(':php\n\techo \'test filter!\';');
        assert.equal(html, '<?php echo \'test filter!\'; ?>');
    });

    it('can handle multiple lines', function () {
        var html = pug.render(':php\n\techo \'test filter!\';\n\techo \'test filter2!\';');
        assert.equal(html, '<?php echo \'test filter!\';\necho \'test filter2!\'; ?>');
    });
});
