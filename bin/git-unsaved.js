#!/usr/bin/env node
"use strict";

const Tilda = require("tilda")
    , gitUnsaved = require("..")
    , couleurs = require("couleurs")
    , colorIt = require("color-it")
    , ora = require("ora")
    , Path = require("path")
    ;

new Tilda(`${__dirname}/../package.json`, {
    options: [
        {
            name: "path"
          , opts: ["p", "path"]
          , desc: "A custom folder path (default: the current working directory)."
          , default: process.cwd()
        }
      , {
            opts: ["r", "relative-paths"]
          , desc: "Display the relative paths."
          , default: false
          , type: Boolean
        }
    ]
  , examples: [
        "git-unsaved # Scans the current directory",
        "git-unsaved -p ~/projects # Scans the projects directory",
        "git-unsaved | less -r # Pipe the output to `less`"
    ]
}).main(action => {
    const path = action.options.path.value;
    const cwd = process.cwd();
    const spinner = ora({
        text: "Scanning directories..."
    }).start();

    gitUnsaved(path, (err, data) => {
        spinner.clear();
        if (err) {
            return console.log(`${colorIt(`${err.message} at ${path}`).red()}`);
        }
        const cPath = action.options.r.value ? (Path.relative(cwd, data.path) || ".") : data.path;
        console.log(`> ${colorIt(`${cPath}`).red()}`);
        data.messages.forEach(c => {
            console.log(`  ${c}`);
        });
        console.log();
    }).on("directory", path => {
        spinner.text = path.slice(0, process.stdout.columns - 2);
        spinner.render();
    }).on("end", () => {
        spinner.stop();
    });
});
