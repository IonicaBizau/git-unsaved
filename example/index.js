"use strict";

const gitUnsaved = require("../lib");

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
