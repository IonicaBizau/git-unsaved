"use strict";

const gitRepos = require("git-repos")
    , gitState = require("git-state")
    , couleurs = require("couleurs")
    ;

function isClean(res) {
  return res.dirty === 0
      && res.ahead === 0
      && res.untracked === 0
      ;
}

/**
 * gitUnsaved
 * List the git repositories from a folder which have unsaved work.
 *
 * @name gitUnsaved
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = (target, cb) => {
    return gitRepos(target, (err, repoPath) => {
        if (err) { return cb(err); }
        gitState.check(repoPath, (err, data) => {
            if (err) { return cb(err); }
            if (isClean(data)) { return; }

            let res = {
                result: data
              , messages: []
              , path: repoPath
            };

            // Commits
            if (isNaN(data.ahead)) {
                res.messages.push(`Add a ${couleurs.bold('remote address')} to push the code to.`);
            } else if (data.ahead) {
                res.messages.push(`You have ${couleurs.bold(data.ahead)} ${couleurs.bold('unpushed commits')}.`);
            }

            const modifiedAndUntracked = data.dirty + data.untracked;
            if (modifiedAndUntracked) {
                res.messages.push(`You have ${couleurs.bold(modifiedAndUntracked)} ${couleurs.bold('files you have to commit')}.`);
            }

            if (data.stashes) {
                res.messages.push(`You have ${couleurs.bold(data.stashes)} ${couleurs.bold('stashes')}.`);
            }

            cb(null, res);
        });
    });
};

