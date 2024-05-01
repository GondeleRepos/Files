function removeElements() {
    var footer = document.getElementById('footer');
    if (footer) footer.remove();

    var classesToRemove = ['shoutbox', 'catalogNavNoFix right', 'catalogNavNoFix', 'carousel animeNews seriesNewsList'];
    classesToRemove.forEach(cls => {
        document.querySelectorAll('.' + cls).forEach(el => el.remove());
    });

    var selectorsToRemove = [
        'div#wrapper div.container div',
        'div.row:nth-child(8)',
        '.container > div:nth-child(13)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(3)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(4)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(5)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(6)'
    ];
    selectorsToRemove.forEach(sel => {
        var element = document.querySelector(sel);
        if (element) {
            element.remove();
        }
    });
}
