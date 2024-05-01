function hideElements() {
    if (window.location.href === 'https://aniworld.to/' || window.location.href === 'https://aniworld.to') {
    document.getElementById('footer').style.display = 'none';
    var classesToHide = ['shoutbox', 'catalogNavNoFix right', 'catalogNavNoFix', 'carousel animeNews seriesNewsList'];
    classesToHide.forEach(cls => {
        document.querySelectorAll('.' + cls).forEach(el => el.style.display = 'none');
    });
    var selectorsToHide = [
        'div#wrapper div.container div',
        'div.row:nth-child(8)',
        '.container > div:nth-child(13)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(3)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(4)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(5)',
        '.primary-navigation > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(6)'
    ];
    selectorsToHide.forEach(sel => {
        var element = document.querySelector(sel);
        if (element) {
            element.style.display = 'none';
        }
    });
}
var iframes = document.getElementsByTagName('iframe');
        Array.from(iframes).forEach(function(iframe) {
            if (!iframe.src || iframe.src.trim() === '') {
                iframe.style.display = 'none';  // hides the iframe
                // iframe.remove();  // removes the iframe from the DOM
            }
        });
}