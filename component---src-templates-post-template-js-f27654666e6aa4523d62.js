(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DvHF:function(e,t,a){e.exports={authorfooter:"AuthorFooter-module--authorfooter--3mLTs",authorfooter__author:"AuthorFooter-module--authorfooter__author--3wZaI",authorfooter__contact:"AuthorFooter-module--authorfooter__contact--1x9Uz"}},J4bc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return F}));var n=a("q1tI"),o=a.n(n),r=a("Zttt"),s=a("Wbzz"),c=a("DvHF"),i=a.n(c),l=a("N1om"),u=a.n(l),m=a("ztWG"),d=a.n(m),_=function(e){var t=e.author;return o.a.createElement("ul",{className:d.a.author},o.a.createElement("li",null,o.a.createElement("div",{className:d.a.author__headshot},o.a.createElement("img",{src:Object(s.withPrefix)(t.photo),className:d.a.author__headshot_photo,width:"75",height:"75",alt:t.name}))),o.a.createElement("li",null,o.a.createElement("div",{className:d.a.author__name,height:"75"},o.a.createElement(s.Link,{to:"/pages/"+u()(t.bio)+"/",className:d.a["author__name-link"],activeClassName:d.a["author__name-link--active"]},t.name))))},f=a("WlAH"),p=function(e){var t;switch(e){case"twitter":t=f.a.TWITTER;break;case"github":t=f.a.GITHUB;break;case"vkontakte":t=f.a.VKONTAKTE;break;case"telegram":t=f.a.TELEGRAM;break;case"email":t=f.a.EMAIL;break;case"rss":t=f.a.RSS;break;case"linkedin":t=f.a.LINKEDIN;break;case"instagram":t=f.a.INSTAGRAM;break;case"line":t=f.a.LINE;break;case"facebook":t=f.a.FACEBOOK;break;case"gitlab":t=f.a.GITLAB;break;case"weibo":t=f.a.WEIBO;break;case"codepen":t=f.a.CODEPEN;break;case"youtube":t=f.a.YOUTUBE;break;case"soundcloud":t=f.a.SOUNDCLOUD;break;default:t={}}return t},h=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"telegram":a="https://t.me/"+t;break;case"email":a="mailto:"+t;break;case"linkedin":a="https://www.linkedin.com/in/"+t;break;case"instagram":a="https://www.instagram.com/"+t;break;case"line":a="line://ti/p/"+t;break;case"facebook":a="https://www.facebook.com/"+t;break;case"gitlab":a="https://www.gitlab.com/"+t;break;case"weibo":a="https://www.weibo.com/"+t;break;case"codepen":a="https://www.codepen.io/"+t;break;case"youtube":a="https://www.youtube.com/channel/"+t;break;case"soundcloud":a="https://soundcloud.com/"+t;break;default:a=t}return a},b=a("euHg"),g=a.n(b),k=function(e){var t=e.name,a=e.icon;return o.a.createElement("svg",{className:g.a.icon,viewBox:a.viewBox},o.a.createElement("title",null,t),o.a.createElement("path",{d:a.path}))},w=a("y1sF"),v=a.n(w),E=function(e){var t=e.contacts;return o.a.createElement("div",{className:v.a.contacts},o.a.createElement("ul",{className:v.a.contacts__list},Object.keys(t).map((function(e){return t[e]?o.a.createElement("li",{className:v.a["contacts__list-item"],key:e},o.a.createElement("a",{className:v.a["contacts__list-item-link"],href:h(e,t[e]),rel:"noopener noreferrer",target:"_blank"},o.a.createElement(k,{name:e,icon:p(e)}))):null}))))},y=function(e){var t=e.author;return o.a.createElement("div",{className:i.a.authorfooter},o.a.createElement("div",{className:i.a.authorfooter__author},o.a.createElement(_,{author:t,isIndex:!1})),o.a.createElement("div",{className:i.a.authorfooter__contact},o.a.createElement(E,{contacts:t.contacts})))},N=a("RPjP"),O=a.n(N),T=a("gGy4"),I=function(e){var t=e.postTitle,a=e.postSlug,n=Object(T.a)(),r=n.url,s=n.disqusShortname;return s?o.a.createElement(O.a,{shortname:s,identifier:t,title:t,url:r+a}):null},S=a("Mvws"),j=a.n(S),x=function(e){var t=e.body,a=e.title;return o.a.createElement("div",{className:j.a.content},o.a.createElement("h1",{className:j.a.content__title},a),o.a.createElement("div",{className:j.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},C=a("wd/R"),D=a.n(C),P=a("myfg"),A=a.n(P),q=function(e){var t=e.date;return o.a.createElement("div",{className:A.a.meta},o.a.createElement("p",{className:A.a.meta__date},"Published ",D()(t).format("D MMM YYYY")))},L=a("WXWR"),M=a.n(L),R=function(e){var t=e.tags,a=e.tagSlugs;return o.a.createElement("div",{className:M.a.tags},o.a.createElement("ul",{className:M.a.tags__list},a&&a.map((function(e,a){return o.a.createElement("li",{className:M.a["tags__list-item"],key:t[a]},o.a.createElement(s.Link,{to:e,className:M.a["tags__list-item-link"]},t[a]))}))))},W=a("gt/k"),U=a.n(W),B=function(e){var t=e.post,a=t.html,n=t.fields,r=n.tagSlugs,c=n.slug,i=t.frontmatter,l=i.tags,u=i.title,m=i.date,d=i.author;return o.a.createElement("div",{className:U.a.post},o.a.createElement(s.Link,{className:U.a["post__home-button"],to:"/"},"All Articles"),o.a.createElement("div",{className:U.a.post__content},o.a.createElement(x,{body:a,title:u})),o.a.createElement("div",{className:U.a.post__footer},o.a.createElement(q,{date:m}),l&&r&&o.a.createElement(R,{tags:l,tagSlugs:r}),o.a.createElement(y,{author:d})),o.a.createElement("div",{className:U.a.post__comments},o.a.createElement(I,{postSlug:c,postTitle:t.frontmatter.title})))},F="2985267950";t.default=function(e){var t=e.data,a=Object(T.a)(),n=a.title,s=a.subtitle,c=t.markdownRemark.frontmatter,i=c.title,l=c.description,u=c.socialImage,m=null!==l?l:s;return o.a.createElement(r.a,{title:i+" - "+n,description:m,socialImage:u},o.a.createElement(B,{post:t.markdownRemark}))}},Mvws:function(e,t,a){e.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=c(a("q1tI")),s=c(a("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(e,t){var a=t.onNewComment,n=t.language,o=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var r in o)e.page[r]=o[r];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var _=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return u.some((function(e){return e===a}))?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return r.default.createElement("div",t,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(r.default.Component);_.displayName="DisqusThread",_.propTypes={id:s.default.string,shortname:s.default.string.isRequired,identifier:s.default.string,title:s.default.string,url:s.default.string,category_id:s.default.string,onNewComment:s.default.func,language:s.default.string},_.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=_},WXWR:function(e,t,a){e.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},"gt/k":function(e,t,a){e.exports={post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}},myfg:function(e,t,a){e.exports={meta__date:"Meta-module--meta__date--29eD7"}},y1sF:function(e,t,a){e.exports={contacts:"Contacts-module--contacts--fHaj_",contacts__list:"Contacts-module--contacts__list--1548F","contacts__list-item":"Contacts-module--contacts__list-item--3qiIm","contacts__list-item-link":"Contacts-module--contacts__list-item-link--3UKKY"}},ztWG:function(e,t,a){e.exports={author:"Author-module--author--3DSIx",author__headshot_photo:"Author-module--author__headshot_photo--3tekg",author__name:"Author-module--author__name--3w3Oe","author__name-link":"Author-module--author__name-link--3tOAp","author__name-link--active":"Author-module--author__name-link--active--r2nxl"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-f27654666e6aa4523d62.js.map