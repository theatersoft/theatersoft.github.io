(function () {
'use strict';

var style = { "on": "_40d", "items": "_566", "toggle": "_c62" };

const id = document.getElementById.bind(document);
const items = id(style.items);

id(style.toggle).addEventListener('click', function (e) {
    e.preventDefault();
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    items.setAttribute('aria-expanded', !expanded);
    this.firstChild.firstChild.setAttribute('href', expanded ? '#svg-list' : '#svg-x');
}, true);

var pv = function () {
    window.addEventListener('load', () => {
        const name = encodeURIComponent(document.title),
              id = encodeURIComponent(location.pathname);
        window.fetch(`https://wt-47a5ce8e5dbcfa3158055115f65e26cf-0.sandbox.auth0-extend.com/webtask?name=${name}&id=${id}`);
    });
};

window.trackLink = function (e) {
    const url = e.currentTarget.href,
          hitCallback = () => document.location = url;
    if (ga.loaded) {
        ga('send', 'event', 'outbound', 'click', url, { transport: 'beacon', hitCallback });
        e.preventDefault();
    }
};

typeof pv === 'function' && pv();

}());
