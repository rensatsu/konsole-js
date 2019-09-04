# Konsole-js

Konsole is a better console output.

## Environment options
* `KONSOLE_COLORS` - [1, 0]: enables or disables colors in the output.
* `KONSOLE_PREFIX` - [1, 0]: enables or disables printing systemd prefix in the output.
* `KONSOLE_TEXT` - [1, 0]: enables or disables message level text in the output.

## Methods
* `loadEnv` - reads environment variables.
* `setColors(enable)`
* `setPrefix(enable)`
* `setText(enable)`
* `log(...args)`
* `info(...args)`
* `warn(...args)`
* `error(...args)`
* `success(...args)`
* `notice(...args)`
* `crit(...args)`
* `alert(...args)`
* `emerg(...args)`

## Install
`npm i --save git+ssh://git@github.com:rensatsu/konsole-js.git#master`
