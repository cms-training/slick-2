define("publish/ui",[],function(){"use strict";document.querySelector("#logo").addEventListener("click",function(e){e.preventDefault(),document.querySelector("#menu").classList.toggle("open")})}),define("publish/media",[],function(){"use strict";[].forEach.call(document.querySelectorAll("article .content img"),function(e){e.addEventListener("click",function(e){e.preventDefault(),document.querySelector("#lightbox img").src=this.src,document.querySelector("#lightbox").classList.toggle("open")},!1)}),document.querySelector("#lightbox, #lightbox img").addEventListener("click",function(e){e.preventDefault(),document.querySelector("#lightbox").classList.toggle("open")})}),define("publish/social",[],function(){"use strict";[].forEach.call(document.querySelectorAll(".social"),function(e){e.addEventListener("click",function(e){e.preventDefault();var t=this.dataset.socialNetwork;window.open(this.getAttribute("href"),t,"height=500,width=575")},!1)})}),define("publish/syntax",[],function(){"use strict";window.hljs.initHighlightingOnLoad()}),define("publish/base",["publish/ui","publish/media","publish/social","publish/syntax"],function(){"use strict"}),require(["publish/base"],function(){"use strict"}),define("publish",["publish/base"],function(){});
//# sourceMappingURL=publish.js.map