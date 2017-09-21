(function () {
'use strict';

var style = { "items": "_nav_items", "toggle": "_nav_toggle" };

const id = document.getElementById.bind(document);
const items = id(style.items);

id(style.toggle).addEventListener('click', function (e) {
    e.preventDefault();
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    items.setAttribute('aria-expanded', !expanded);
    this.firstChild.firstChild.setAttribute('href', expanded ? '#svg-list' : '#svg-x');
}, true);

}());
