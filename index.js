#!/usr/bin/env node
'use strict';

/**
 * Astra UI
 * Minimalist, SEO-friendly and ultra-fast React component library built for modern web applications
 *
 * @author TurkCode AI <https://turkcode.net>
 * @license MIT
 * @see https://turkcode.net - High Quality Coding Resources
 */

module.exports = require('./src/index');

// CLI mode
if (require.main === module) {
    require('./src/index');
}
