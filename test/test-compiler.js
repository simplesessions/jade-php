var assert = require('assert');
var pug = require('pug');
require('../lib/compiler.js')(pug);

describe('php compiler', function () {
    it('should compile lines', function () {
        var html = pug.render('- echo \'teste\';');
        assert.equal(html, '<?php echo \'teste\'; ?>');
    });

    describe('should replace', function () {
        it('escaped values', function () {
            var html = pug.render('title= \'teste\'');
            assert.equal(html, '<title><?php echo htmlspecialchars(\'teste\', ENT_QUOTES, \'UTF-8\'); ?></title>');
        });

        it('unescaped values', function () {
            var html = pug.render('title!= \'teste\'');
            assert.equal(html, '<title><?php echo \'teste\'; ?></title>');
        });
    });
});
