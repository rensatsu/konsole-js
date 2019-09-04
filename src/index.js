"use strict";

const PREFIX_DEBUG = 7;
const PREFIX_INFO = 6;
const PREFIX_NOTICE = 5;
const PREFIX_WARNING = 4;
const PREFIX_ERR = 3;
const PREFIX_CRIT = 2;
const PREFIX_ALERT = 1;
const PREFIX_EMERG = 0;

class Konsole {
    constructor(
        {
            colors = true,
            prefix = false,
            text = true,
            tag = null
        } = {}
    ) {
        this.colors = colors;
        this.prefix = prefix;
        this.text = text;
        this.tag = tag;
    }

    loadEnv() {
        if ('KONSOLE_COLORS' in process.env) {
            this.setColors(!!parseInt(process.env.KONSOLE_COLORS));
        }

        if ('KONSOLE_PREFIX' in process.env) {
            this.setPrefix(!!parseInt(process.env.KONSOLE_PREFIX));
        }

        if ('KONSOLE_TEXT' in process.env) {
            this.setText(!!parseInt(process.env.KONSOLE_TEXT));
        }

        if ('KONSOLE_TAG' in process.env) {
            this.setTag(process.env.KONSOLE_TAG);
        }
    }

    setColors(enable) {
        this.colors = !!enable;
    }

    setPrefix(enable) {
        this.prefix = !!enable;
    }

    setText(enable) {
        this.text = !!enable;
    }

    setTag(tag) {
        this.tag = tag;
    }

    _print(color, prefix, level, fName, ...args) {
        let mStart = '';
        let mEnd = '';

        const mTag = this.tag && this.tag.length > 0 ? this.tag : '';
        const mText = this.text ? `${mTag}[${level}]` : mTag;

        switch (true) {
            case (this.colors && this.prefix):
                mStart = `<${prefix}>\x1b[${color}m`;
                mEnd = `\x1b[0m`;
                break;
            case (this.colors && !this.prefix):
                mStart = `\x1b[${color}m`;
                mEnd = `\x1b[0m`;
                break;
            case (!this.colors && this.prefix):
                mStart = `<${prefix}>`;
                mEnd = '';
                break;
            case (!this.colors && this.prefix):
                mStart = '';
                mEnd = '';
                break;
        }

        console[fName](mStart + mText, ...args, mEnd);
    }

    log(...args) {
        this._print(39, PREFIX_DEBUG, 'Debug', 'log', ...args);
    }

    info(...args) {
        this._print(94, PREFIX_INFO, 'Info', 'log', ...args);
    }

    warn(...args) {
        this._print(33, PREFIX_WARNING, 'Warning', 'log', ...args);
    }

    error(...args) {
        this._print(31, PREFIX_ERR, 'Error', 'log', ...args);
    }

    success(...args) {
        this._print(32, PREFIX_INFO, 'Success', 'log', ...args);
    }

    notice(...args) {
        this._print(39, PREFIX_NOTICE, 'Notice', 'log', ...args);
    }

    crit(...args) {
        this._print(31, PREFIX_CRIT, 'Critical', 'log', ...args);
    }

    alert(...args) {
        this._print(31, PREFIX_ALERT, 'Alert', 'log', ...args);
    }

    emerg(...args) {
        this._print(31, PREFIX_EMERG, 'Emergency', 'log', ...args);
    }
}

module.exports = new Konsole();
