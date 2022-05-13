const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        autoprefixer(),
        ...process.env.HUGO_ENVIRONMENT === 'production'
            ? [purgecss]
            : []
    ]
}
