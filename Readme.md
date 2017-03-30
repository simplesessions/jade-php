# Jade-PHP

Adds the possibility of compiling PHP for Jade

## Usage

	var pug = require('pug');
	var pugphp = require('pug-php');

	pugphp(pug);

    var html = pug.render('string of pug');

## Example

The following code:

    !!!
    html
        head
            title= $title

        body
            ul
                - foreach ($this->list as $list):
                    li!= $list
                - endforeach

Will produce:

    <!DOCTYPE html>
    <html>
        <head>
            <title><?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></title>
        </head>

        <body>
            <ul>
                <?php foreach ($this->list as $list): ?>
                    <li><?php echo $list; ?></li>
                <?php endforeach; ?>
            </ul>
        </body>
    </html>
