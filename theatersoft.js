(function () {
'use strict';

var style = { "items": "_nav_items", "icon": "_nav_icon" };

const [items, icon] = [style.items, style.icon].map(document.getElementById.bind(document));

icon.addEventListener('click', e => {
    e.preventDefault();
    const expanded = icon.getAttribute('aria-expanded') === 'true';
    icon.setAttribute('aria-expanded', !expanded);
    items.setAttribute('aria-expanded', !expanded);
}, true);

}());
