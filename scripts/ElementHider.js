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
}


const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeName.toLowerCase() === 'in-page-message') {
                    node.style.display = 'none'; // or node.remove();
                }
            });
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
