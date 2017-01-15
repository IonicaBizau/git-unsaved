
# `$ git-unsaved`

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/git-unsaved.svg)](https://www.npmjs.com/package/git-unsaved) [![Downloads](https://img.shields.io/npm/dt/git-unsaved.svg)](https://www.npmjs.com/package/git-unsaved) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> List the git repositories from a folder which have unsaved work.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g git-unsaved
```


Then, run `git-unsaved --help` and see what the CLI tool can do.


```
$ git-unsaved --help
Usage: git-unsaved [options]

List the git repositories from a folder which have unsaved work.

Options:
  -p, --path <path>     A custom folder path (default: the current working
                        directory).
  -r, --relative-paths  Display the relative paths.
  -v, --version         Displays version information.
  -h, --help            Displays this help.

Documentation can be found at https://github.com/Bloggify/git-unsaved#readme.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save git-unsaved
```



```js
const gitUnsaved = require("git-unsaved");

console.log(gitUnsaved());
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2017#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
