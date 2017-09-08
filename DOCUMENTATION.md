## Documentation

You can see below the API reference of this module.

### `exports(target, cb)`
gitUnsaved
Searches for dirty repositories.

#### Params

- **String** `target`: The directory path.
- **Function** `cb`: The callback function. It's going to be called for each dirty repository.

#### Return
- **EventEmitter** An event emitter created by [`git-repos`](https://github.com/IonicaBizau/node-git-repos).

