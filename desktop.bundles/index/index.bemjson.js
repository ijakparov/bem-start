module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { place: 'home' },
    content: [
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },

        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        }
    ]
};
