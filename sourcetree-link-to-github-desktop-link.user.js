// ==UserScript==
// @name         Bitbucket Sourcetree Links to Github Desktop
// @namespace    https://https://github.com/dotFionn/tampermonkey_scripts
// @version      1
// @author       Fionn Sperath / dotFionn
// @match        https://bitbucket.meinefirma.de/*
// @match        https://bitbucket.org/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  $(document).bind('DOMSubtreeModified', function () {
    $('a').each((i, e) => {
      let url = new URL(e.href);
      if (url.protocol.toLowerCase() != 'sourcetree:') {
        return;
      }

      console.log(i + ' /  ' + e.href);
      let repo = url.searchParams.get('cloneUrl');
      console.log(repo);
      e.href = `x-github-client://openRepo/${repo}`;
      e.innerText = 'Clone with GitHub Desktop';

      console.log(e.href + ' / ' + e.innerText);
    });
  });
})();
