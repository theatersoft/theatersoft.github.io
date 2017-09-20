(function () {
'use strict';

var style = { "items": "_nav_items", "icon": "_nav_icon" };

const id = document.getElementById.bind(document);
const items = id(style.items);
const icon = id(style.icon);
const use = icon.firstChild.firstChild;

icon.addEventListener('click', e => {
    e.preventDefault();
    const expanded = icon.getAttribute('aria-expanded') === 'true';
    icon.setAttribute('aria-expanded', !expanded);
    items.setAttribute('aria-expanded', !expanded);
    use.setAttribute('href', expanded ? '#svg-list' : '#svg-x');
}, true);

}());
