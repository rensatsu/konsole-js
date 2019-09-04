# Konsole-js

Konsole is a better console output.

## Install
`npm i --save git+ssh://git@github.com:rensatsu/konsole-js.git#master`

## Environment options
* `KONSOLE_COLORS` - [1, 0]: enables or disables colors in the output.
* `KONSOLE_PREFIX` - [1, 0]: enables or disables printing systemd prefix in the output.
* `KONSOLE_TEXT` - [1, 0]: enables or disables message level text in the output.
* `KONSOLE_TAG` - string or null: sets a log tag.

## Methods
* `loadEnv` - reads environment variables.
* `setColors(enable)` - enable or disable colors.
* `setPrefix(enable)` - enable or disable systemd prefix.
* `setText(enable)` - enable or disable message level text.
* `setTag(tag)` - enable or disable log tag.

Logging methods for different severities:
* `log(...args)`
* `info(...args)`
* `warn(...args)`
* `error(...args)`
* `success(...args)`
* `notice(...args)`
* `crit(...args)`
* `alert(...args)`
* `emerg(...args)`
