(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/d1K":function(e,a,t){"use strict";t.d(a,"a",(function(){return A}));var i=t("q1tI"),n=t.n(i),l=t("O7Mw"),r=t.n(l),s=t("Wbzz"),o=t("N1om"),m=t.n(o),_=t("vg98"),d=t.n(_),c=function(e){var a=e.author;return n.a.createElement("ul",{className:d.a.author},n.a.createElement("li",null,n.a.createElement("div",{className:d.a.author__headshot},n.a.createElement("img",{src:Object(s.withPrefix)(a.photo),className:d.a.author__headshot_photo,width:"75",height:"75",alt:a.name}))),n.a.createElement("li",null,n.a.createElement("div",{className:d.a.author__name,height:"75"},n.a.createElement(s.Link,{to:"/pages/"+m()(a.bio)+"/",className:d.a["author__name-link"],activeClassName:d.a["author__name-link--active"]},a.name))))},u=function(e){var a=e.authors,t=e.isIndex;return n.a.createElement("div",{className:r.a.authorsidebar},n.a.createElement("h3",null,"Authors"),n.a.createElement("ul",{className:r.a.authorsidebar__list},a.map((function(e){return n.a.createElement("li",{className:r.a["authorsidebar__list-item"],key:e.name},n.a.createElement(c,{author:e,isIndex:t}))}))))},g=t("T2za"),f=t.n(g),p=function(e){var a=e.categories;return n.a.createElement("div",{className:f.a.feedcategories},n.a.createElement("h3",null,"Categories"),n.a.createElement("ul",{className:f.a.feedcategories__list},a.map((function(e){return n.a.createElement("li",{className:f.a["feedcategories__list-item"],key:e.fieldValue},n.a.createElement(s.Link,{to:"/tag/"+m()(e.fieldValue)+"/",className:f.a["feedcategories__list-item-link"],activeClassName:f.a["feedcategories__list-item-link--active"]},e.fieldValue," (",e.totalCount,")"))}))))},h=t("7FsQ"),v=t.n(h),k=function(e){var a=e.tags;return n.a.createElement("div",{className:v.a.feedtags},n.a.createElement("h3",null,"Tags"),n.a.createElement("ul",{className:v.a.feedtags__list},a.map((function(e){return n.a.createElement("li",{className:v.a["feedtags__list-item"],key:e.fieldValue},n.a.createElement(s.Link,{to:"/tag/"+m()(e.fieldValue)+"/",className:v.a["feedtags__list-item-link"],activeClassName:v.a["feedtags__list-item-link--active"]},e.fieldValue," (",e.totalCount,")"))}))))},E=t("Nrk+"),N=t.n(E),b=function(e){var a=e.copyright;return n.a.createElement("div",{className:N.a.copyright},a)},x=t("je8k"),P=t.n(x),y=function(e){var a=e.menu;return n.a.createElement("div",{className:P.a.menu},n.a.createElement("h3",null,"Links"),n.a.createElement("ul",{className:P.a.menu__list},a.map((function(e){return n.a.createElement("li",{className:P.a["menu__list-item"],key:e.path},n.a.createElement(s.Link,{to:e.path,className:P.a["menu__list-item-link"],activeClassName:P.a["menu__list-item-link--active"]},e.label))}))))},F=t("SySy"),M=t.n(F),L=t("gGy4"),A=function(e){var a=e.categories,t=e.tags,i=e.isIndex,l=Object(L.a)(),r=l.author,s=l.copyright,o=l.menu;return n.a.createElement("div",{className:M.a.sidebar},n.a.createElement("div",{className:M.a.sidebar__inner},n.a.createElement("h1",{className:M.a.sidebar__title},"Arity Parity"),n.a.createElement(y,{menu:o}),n.a.createElement(p,{categories:a}),n.a.createElement(k,{tags:t}),n.a.createElement(u,{isIndex:i,authors:r}),n.a.createElement(b,{copyright:s})))}},"1xLx":function(e,a,t){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var i=t("q1tI"),n=t.n(i),l=t("wd/R"),r=t.n(l),s=t("Wbzz"),o=t("1xLx"),m=t.n(o),_=function(e){var a=e.edges;return n.a.createElement("div",{className:m.a.feed},a.map((function(e){return n.a.createElement("div",{className:m.a.feed__item,key:e.node.fields.slug},n.a.createElement("div",{className:m.a["feed__item-meta"]},n.a.createElement("time",{className:m.a["feed__item-meta-time"],dateTime:r()(e.node.frontmatter.date).format("MMMM D, YYYY")},r()(e.node.frontmatter.date).format("MMMM YYYY")),n.a.createElement("span",{className:m.a["feed__item-meta-divider"]}),n.a.createElement("span",{className:m.a["feed__item-meta-category"]},n.a.createElement(s.Link,{to:e.node.fields.categorySlug,className:m.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),n.a.createElement("h2",{className:m.a["feed__item-title"]},n.a.createElement(s.Link,{className:m.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),n.a.createElement("p",{className:m.a["feed__item-description"]},e.node.frontmatter.description),n.a.createElement(s.Link,{className:m.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))})))}},"7FsQ":function(e,a,t){e.exports={feedtags__list:"FeedTags-module--feedtags__list--TuxoD","feedtags__list-item-link":"FeedTags-module--feedtags__list-item-link--17O2O","feedtags__list-item-link--active":"FeedTags-module--feedtags__list-item-link--active--261GJ"}},"999l":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return d}));var i=t("q1tI"),n=t.n(i),l=t("Zttt"),r=t("/d1K"),s=t("6V6j"),o=t("RXmK"),m=t("v0M6"),_=t("gGy4"),d="3533721328";a.default=function(e){var a=e.data,t=e.pageContext,i=Object(_.a)(),d=i.title,c=i.subtitle,u=i.categories,g=i.tags,f=t.currentPage,p=t.hasNextPage,h=t.hasPrevPage,v=t.prevPagePath,k=t.nextPagePath,E=a.allMarkdownRemark.edges,N=f>0?"Posts - Page "+f+" - "+d:d;return n.a.createElement(l.a,{title:N,description:c},n.a.createElement(r.a,{isIndex:!0,categories:u,tags:g}),n.a.createElement(o.a,null,n.a.createElement(s.a,{edges:E}),n.a.createElement(m.a,{prevPagePath:v,nextPagePath:k,hasPrevPage:h,hasNextPage:p})))}},"Nrk+":function(e,a,t){e.exports={copyright:"Copyright-module--copyright--1ariN"}},O7Mw:function(e,a,t){e.exports={authorsidebar__list:"AuthorSidebar-module--authorsidebar__list--3_EF9","authorsidebar__list-item-link":"AuthorSidebar-module--authorsidebar__list-item-link--3DEhO","authorsidebar__list-item-link--active":"AuthorSidebar-module--authorsidebar__list-item-link--active--19zKE"}},RBgx:function(e,a,t){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var i=t("q1tI"),n=t.n(i),l=t("RBgx"),r=t.n(l),s=function(e){var a=e.title,t=e.children,l=Object(i.useRef)();return Object(i.useEffect)((function(){l.current.scrollIntoView()})),n.a.createElement("div",{ref:l,className:r.a.page},n.a.createElement("div",{className:r.a.page__inner},a&&n.a.createElement("h1",{className:r.a.page__title},a),n.a.createElement("div",{className:r.a.page__body},t)))}},SySy:function(e,a,t){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s",sidebar__title:"Sidebar-module--sidebar__title--3g70f"}},T2za:function(e,a,t){e.exports={feedcategories__list:"FeedCategories-module--feedcategories__list--2dFEZ","feedcategories__list-item-link":"FeedCategories-module--feedcategories__list-item-link--1CvQT","feedcategories__list-item-link--active":"FeedCategories-module--feedcategories__list-item-link--active--22WcL"}},U4DU:function(e,a,t){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,a,t){var i;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var i=arguments[a];if(i){var l=typeof i;if("string"===l||"number"===l)e.push(this&&this[i]||i);else if(Array.isArray(i))e.push(n.apply(this,i));else if("object"===l)for(var r in i)t.call(i,r)&&i[r]&&e.push(this&&this[r]||r)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(a,[]))||(e.exports=i)}()},je8k:function(e,a,t){e.exports={menu__list:"Menu-module--menu__list--31Zeo","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},v0M6:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var i=t("q1tI"),n=t.n(i),l=t("UbMB"),r=t.n(l),s=t("Wbzz"),o=t("WlAH"),m=t("U4DU"),_=t.n(m),d=r.a.bind(_.a),c=function(e){var a=e.prevPagePath,t=e.nextPagePath,i=e.hasNextPage,l=e.hasPrevPage,r=d({"pagination__prev-link":!0,"pagination__prev-link--disable":!l}),m=d({"pagination__next-link":!0,"pagination__next-link--disable":!i});return n.a.createElement("div",{className:_.a.pagination},n.a.createElement("div",{className:_.a.pagination__prev},n.a.createElement(s.Link,{rel:"prev",to:l?a:"/",className:r},o.b.PREV_PAGE)),n.a.createElement("div",{className:_.a.pagination__next},n.a.createElement(s.Link,{rel:"next",to:i?t:"/",className:m},o.b.NEXT_PAGE)))}},vg98:function(e,a,t){e.exports={author:"AuthorLink-module--author--1p7uK",author__headshot_photo:"AuthorLink-module--author__headshot_photo--syIqW",author__name:"AuthorLink-module--author__name--2ZbnX","author__name-link":"AuthorLink-module--author__name-link--3WI5p","author__name-link--active":"AuthorLink-module--author__name-link--active--cPSks"}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-157f8fdc036245a9b922.js.map