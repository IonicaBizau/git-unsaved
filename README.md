
# `$ git-unsaved`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/git-unsaved.svg)](https://www.npmjs.com/package/git-unsaved) [![Downloads](https://img.shields.io/npm/dt/git-unsaved.svg)](https://www.npmjs.com/package/git-unsaved)

> Scan your projects directory for dirty git repositories.

## Features

 - :rocket: Very fast–gives feedback while scanning the directories.
 - :zap: Clean output
 - :tokyo_tower: Checks if the local commits/branches are pushed to the remote
 - :eyes: Detects uncommited changes (new files, modified, deleted etc)
 - :dizzy: Lovely output

[![git-unsaved](https://i.imgur.com/2LhUtwg.gif)](#)

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g git-unsaved
```


Then, run `git-unsaved --help` and see what the CLI tool can do.


```
$ git-unsaved --help
Usage: git-unsaved [options]

Scan your projects directory for dirty git repositories.

Options:
  -p, --path <path>     A custom folder path (default: the current working
                        directory).
  -r, --relative-paths  Display the relative paths.
  -v, --version         Displays version information.
  -h, --help            Displays this help.

Examples:
  $ git-unsaved # Scans the current directory
  $ git-unsaved -p ~/projects # Scans the projects directory
  $ git-unsaved | less -r # Pipe the output to `less`

Documentation can be found at https://github.com/IonicaBizau/git-unsaved#readme.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save git-unsaved
```



```js
const gitUnsaved = require("git-unsaved");

gitUnsaved(`${__dirname}/..`, (err, data) => {

    if (err) {
        // Something went really wrong
        return;
    }

    console.log(data);
    // { result: { branch: 'master', ahead: 4, dirty: 3, untracked: 0, stashes: 0 },
    //   messages:
    //    [ 'You have \u001b[1m4\u001b[22m \u001b[1munpushed commits\u001b[22m.',
    //      'You have \u001b[1m3\u001b[22m \u001b[1mfiles you have to commit\u001b[22m.' ],
    //   path: '/home/.../git-unsaved' }

    data.messages.forEach(c => {
        console.log(`  ${c}`);
    });

    // =>
    // You have 4 unpushed commits.
    // You have 3 files you have to commit.
    console.log();
}).on("directory", path => {
    console.log(`Scanning ${path}`)
    // Scanning /home/.../git-unsaved/...
}).on("end", () => {
    console.log("Done")
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2017#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
