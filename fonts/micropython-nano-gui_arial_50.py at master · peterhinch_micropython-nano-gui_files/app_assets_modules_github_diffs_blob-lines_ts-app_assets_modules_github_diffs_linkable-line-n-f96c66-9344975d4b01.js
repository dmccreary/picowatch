"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-f96c66"],{81574:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(4412),l=n(24536);let s=[],r=0;function o(e){!async function(){s.push(e),await i.x,c()}()}function c(){let e=r;r=s.length,a(s.slice(e),null,window.location.href)}function a(e,t,n){let i=window.location.hash.slice(1),l=i?document.getElementById(i):null,s={oldURL:t,newURL:n,target:l};for(let t of e)t.call(null,s)}o.clear=()=>{s.length=r=0};let u=window.location.href;window.addEventListener("popstate",function(){u=window.location.href}),window.addEventListener("hashchange",function(e){let t=window.location.href;try{a(s,e.oldURL||u,t)}finally{u=t}});let d=null;document.addEventListener(l.QE.START,function(){d=window.location.href}),document.addEventListener(l.QE.SUCCESS,function(){a(s,d,window.location.href)})},56334:(e,t,n)=>{function i(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=c(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=c(t[0]),n=c(t[1]);if(!e||!n)return;return f(Object.freeze({start:e,end:n}))}}}function l(e){let{start:t,end:n}=f(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function s(e){let t=e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}function r(e){let t=i(e),n=s(e);return{blobRange:t,anchorPrefix:n}}function o({anchorPrefix:e,blobRange:t}){return t?`#${e}${l(t)}`:"#"}function c(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function a(e,t){let[n,i]=u(e.start,!0,t),[l,s]=u(e.end,!1,t);if(!n||!l)return;let r=i,o=s;if(-1===r&&(r=0),-1===o&&(o=l.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let c=n.ownerDocument.createRange();return c.setStart(n,r),c.setEnd(l,o),c}function u(e,t,n){let i=[null,0],l=n(e.line);if(!l)return i;if(null==e.column)return[l,-1];let s=e.column-1,r=d(l);for(let e=0;e<r.length;e++){let n=r[e],i=s-(n.textContent||"").length;if(0===i){let i=r[e+1];if(t&&i)return[i,0];return[n,s]}if(i<0)return[n,s];s=i}return i}function d(e){if(e.nodeType===Node.TEXT_NODE)return[e];if(!e.childNodes||!e.childNodes.length)return[];let t=[];for(let n of e.childNodes)t=t.concat(d(n));return t}function f(e){let t=[e.start,e.end];return(t.sort(h),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function h(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{Dw:()=>o,G5:()=>i,M9:()=>a,n6:()=>r})},57088:(e,t,n)=>{var i=n(56334),l=n(76745),s=n(69567),r=n(81574),o=n(36071),c=n(59753),a=n(95253),u=n(11445);let d=!1;function f(e,t){return document.querySelector(`#${e}LC${t}`)}function h({blobRange:e,anchorPrefix:t}){let n=document.querySelectorAll(".js-file-line");if(0!==n.length&&(m(),e)){if(null===e.start.column||null===e.end.column)for(let n=e.start.line;n<=e.end.line;n+=1){let e=f(t,n);e&&e.classList.add("highlighted")}else if(e.start.line===e.end.line&&null!=e.start.column&&null!=e.end.column){let n=(0,i.M9)(e,e=>f(t,e));if(n){let e=document.createElement("span");e.classList.add("highlighted"),(0,u.v)(n,e)}}}}function m(){for(let e of document.querySelectorAll(".js-file-line.highlighted"))e.classList.remove("highlighted");for(let e of document.querySelectorAll(".js-file-line .highlighted")){let t=e.closest(".js-file-line");e.replaceWith(...e.childNodes),t.normalize()}}function g(){let e=(0,i.n6)(window.location.hash);h(e),y();let{blobRange:t,anchorPrefix:n}=e,l=t&&f(n,t.start.line);if(!d&&l){l.scrollIntoView();let e=l.closest(".blob-wrapper, .js-blob-wrapper");e.scrollLeft=0}d=!1}function b(e){let t=[];for(let n of e)t.push(n.textContent);let n=document.getElementById("js-copy-lines");if(n instanceof l.Z){n.textContent=`Copy ${1===e.length?"line":"lines"}`,n.value=t.join("\n");let i=`Blob, copyLines, numLines:${e.length.toString()}`;n.setAttribute("data-ga-click",i)}}function p(e){let t=document.querySelector(".js-permalink-shortcut");if(t instanceof HTMLAnchorElement){let n=`${t.href}${window.location.hash}`,i=document.getElementById("js-copy-permalink");if(i instanceof l.Z){i.value=n;let t=`Blob, copyPermalink, numLines:${e.toString()}`;i.setAttribute("data-ga-click",t)}return n}}function L(e,t){let n=document.getElementById("js-new-issue");if(n instanceof HTMLAnchorElement){if(!n.href)return;let i=new URL(n.href,window.location.origin),l=new URLSearchParams(i.search);l.set("permalink",e),i.search=l.toString(),n.href=i.toString(),n.setAttribute("data-ga-click",`Blob, newIssue, numLines:${t.toString()}`)}}function w(e,t){let n=document.getElementById("js-new-discussion");if(!(n instanceof HTMLAnchorElement)||!n?.href)return;let i=new URL(n.href,window.location.origin),l=new URLSearchParams(i.search);l.set("permalink",e),i.search=l.toString(),n.href=i.toString(),n.setAttribute("data-ga-click",`Blob, newDiscussion, numLines:${t.toString()}`)}function E(e){let t=document.getElementById("js-view-git-blame");t&&t.setAttribute("data-ga-click",`Blob, viewGitBlame, numLines:${e.toString()}`)}function y(){let e=document.querySelector(".js-file-line-actions");if(!e)return;let t=document.querySelectorAll(".js-file-line.highlighted"),n=t[0];if(n){b(t),E(t.length);let i=p(t.length);i&&L(i,t.length),i&&w(i,t.length),e.style.top=`${n.offsetTop-2}px`,e.classList.remove("d-none")}else e.classList.add("d-none")}function v(e){let t=window.scrollY;d=!0,e(),window.scrollTo(0,t)}(0,r.Z)(function(){if(document.querySelector(".js-file-line-container")){setTimeout(g,0);let e=window.location.hash;for(let t of document.querySelectorAll(".js-update-url-with-hash"))if(t instanceof HTMLAnchorElement)t.hash=e;else if(t instanceof HTMLFormElement){let n=new URL(t.action,window.location.origin);n.hash=e,t.action=n.toString()}}}),(0,c.on)("click",".js-line-number",function(e){let t=(0,i.n6)(e.currentTarget.id),{blobRange:n}=t,l=(0,i.G5)(window.location.hash);l&&e.shiftKey&&(t.blobRange={start:l.start,end:n.end}),v(()=>{window.location.hash=(0,i.Dw)(t)})}),(0,c.on)("submit",".js-jump-to-line-form",function(e){let t=e.currentTarget.querySelector(".js-jump-to-line-field"),n=t.value.replace(/[^\d-]/g,""),i=n.split("-").map(e=>parseInt(e,10)).filter(e=>e>0).sort((e,t)=>e-t);i.length&&(window.location.hash=`L${i.join("-L")}`),e.preventDefault()}),(0,o.N7)(".js-check-bidi",_);let j=/[\u202A-\u202E]|[\u2066-\u2069]/,S={"\u202A":"U+202A","\u202B":"U+202B","\u202C":"U+202C","\u202D":"U+202D","\u202E":"U+202E","\u2066":"U+2066","\u2067":"U+2067","\u2068":"U+2068","\u2069":"U+2069"};function A(e,t){if(e.nodeType===Node.TEXT_NODE)return k(e,t);if(!e.childNodes||!e.childNodes.length)return!1;let n=!1;for(let i of e.childNodes)if(n||(n=A(i,t)),n&&!t)break;return n}function k(e,t){let n=!1;if(e.nodeValue)for(let i=e.nodeValue.length-1;i>=0;i--){let l=e.nodeValue.charAt(i);if(S[l]){if(n=!0,!t)break;let r=new s.R(t,{revealedCharacter:S[l]}),o=new Range;o.setStart(e,i),o.setEnd(e,i+1),o.deleteContents(),o.insertNode(r)}}return n}function _(e){let t=!1,n=performance.now(),i=e.textContent||"";if(j.test(i)){let n=e.querySelectorAll(".diff-table .blob-code-inner, .js-file-line-container .js-file-line, .js-suggested-changes-blob .blob-code-inner"),i=document.querySelector(".js-line-alert-template"),l=document.querySelector(".js-revealed-character-template");for(let r of n)if(A(r,l)&&(t=!0,i)){let t=new s.R(i,{});"before"===e.getAttribute("data-line-alert")?r.before(t):r.after(t)}}let l=performance.now()-n,r={durationMs:l.toString(),result:t.toString()};if((0,a.q)("blob_js_check_bidi_character",r),t){let t=document.querySelector(".js-file-alert-template");if(t){let n=new URL(window.location.href,window.location.origin);"1"===n.searchParams.get("h")?n.searchParams.delete("h"):n.searchParams.set("h","1");let i=new s.R(t,{revealButtonHref:n.href});e.prepend(i)}}e.classList.remove("js-check-bidi")}let C=class CodeListingLine{range(e,t){e=isNaN(e)?0:e,t=isNaN(t)?0:t;let n=null,i=0,l=0;for(let[s,r]of this.lineElement.childNodes.entries()){let o=(r.textContent||"").length;if(o>e&&!n&&(n=r,i=s),o>=t){l=s;break}e-=o,t-=o}let s=document.createRange();if(i===l){for(;n&&"#text"!==n.nodeName;)n=n.childNodes[0];if(!n)return null;s.setStart(n,e),s.setEnd(n,t)}else s.setStart(this.lineElement,i),s.setEnd(this.lineElement,l+1);return s}constructor(e,t){this.lineElement=e,this.numberElement=t}},T=class CodeListing{findLine(e){if(!e)return null;let t=this.container.querySelector(`.js-blob-rnum[data-line-number='${e}']`);if(!t)return null;let n=t.nextElementSibling;return n&&n.classList.contains("js-file-line")?(n=n.querySelector(".js-code-nav-pass")||n,new C(n,t)):null}constructor(e){this.container=e}},N=new WeakMap;function x(e){if(!e)return;let t=e.closest(".js-blob-code-container, .js-file-content"),n=e.querySelector(".js-codeowners-error-tooltip-template"),i=e.querySelector(".js-codeowners-error-line-alert-template");if(!t||!n||!i)return;let l=t.querySelector("deferred-diff-lines");if(l?.isAwaitingHighlight())return;let r=e.querySelectorAll(".js-codeowners-error"),o=new T(t);for(let e of r){if(N.get(e))continue;let t=e.getAttribute("data-line"),l=e.getAttribute("data-kind"),r=e.getAttribute("data-suggestion"),c=parseInt(e.getAttribute("data-start-offset")||"",10),a=parseInt(e.getAttribute("data-end-offset")||"",10),u=o.findLine(t),d=u?.range(c,a);if(!u||!d)continue;let f=l;r&&(f+=`: ${r}`);let h=document.createElement("SPAN");h.className="error-highlight",d.surroundContents(h);let m=new s.R(n,{message:f}).firstElementChild;d.surroundContents(m);let g=new s.R(i,{});u.numberElement.appendChild(g),N.set(e,!0)}}(0,o.N7)(".js-codeowners-errors",x),(0,c.on)("expander:expanded",".js-file",function(e){if(!e.target||!(e.target instanceof HTMLElement))return;let t=e.target.querySelector(".js-codeowners-errors");x(t)}),(0,c.on)("deferred-highlight:applied","deferred-diff-lines",function(e){if(!e.target||!(e.target instanceof HTMLElement))return;let t=e.target.closest(".js-file"),n=t?.querySelector(".js-codeowners-errors");x(n)})},37574:(e,t,n)=>{n.d(t,{s:()=>i});function i(e){let t=e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);if(null!=t&&6===t.length)return t;let n=e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);return null!=n&&6===n.length?n:null}},47851:(e,t,n)=>{n.d(t,{MO:()=>L,vu:()=>m,Oz:()=>b});var i=n(87098);let l=class DiffPosition{sideForCommenting(){return this.element&&this.element.classList.contains("blob-num-context")?"right":({R:"right",L:"left"})[this.side]}isContext(){return!!this.element&&this.element.classList.contains("blob-num-context")}anchor(){return`${this.diffId}${this.anchorSuffix()}`}anchorSuffix(){return`${this.side}${this.lineNumber}`}is(e){return this.diffId===e.diffId&&this.side===e.side&&this.lineNumber===e.lineNumber}constructor(e,t,n){this.diffId=e,this.side=t,this.lineNumber=n,this.element=(0,i.Q)(document,this.anchor())}};let DiffRange=class DiffRange{anchor(){let e=[];return e.push(this.start.anchor()),this.start.is(this.end)||e.push(this.end.anchorSuffix()),e.join("-")}parse(){if(!this.diffTable)return;let e=this.unify(this.diffTable.querySelectorAll(".js-linkable-line-number"));e=this.filterInRange(e),this.lineCount=e.length,this.elements=this.expandRelatedElements(e),this._commentOutsideTheDiff=this.diffTable.classList.contains("js-comment-outside-the-diff"),this.isParsed=!0}unify(e){if(!this.isSplit)return Array.from(e);let t=[],n=[],i=[];for(let l of e)l.classList.contains("blob-num-addition")?n.push(l):l.classList.contains("blob-num-deletion")?i.push(l):(t.push(...i,...n,l),n=[],i=[]);return t.push(...i,...n),t}filterInRange(e){if(!this.start.element||!this.end.element)return[];let t=e.indexOf(this.start.element),n=e.indexOf(this.end.element);if(t>n){[t,n]=[n,t];let[e,i]=[this.end,this.start];this.start=e,this.end=i}return e.slice(t,n+1)}isContextOnly(){return this.isParsed||this.parse(),this._isContextOnly}isAcrossHunks(){return this.isParsed||this.parse(),this._isAcrossHunks}includesExpandedLine(){return this.isParsed||this.parse(),this._includesExpandedLine}commentOutsideTheDiffEnabled(){return this.isParsed||this.parse(),this._commentOutsideTheDiff}rows(){return this.isParsed||this.parse(),this._rows}expandRelatedElements(e){let t=this.isSplit,n=e[0],i=e[e.length-1];if(n&&i){let e=n.closest("[data-hunk]"),t=i.closest("[data-hunk]");if(e&&t){let n=e.getAttribute("data-hunk"),i=t.getAttribute("data-hunk");n!==i&&(this._isAcrossHunks=!0)}}let l=(e,n)=>{!this._includesExpandedLine&&n.closest(".blob-expanded")&&(this._includesExpandedLine=!0);let i=n.parentElement;i instanceof HTMLElement&&this._rows.add(i);let l=n.classList.contains("blob-num-deletion")||n.classList.contains("blob-num-addition");if(l&&(this._isContextOnly=!1),!i)return e;if(t&&l){let t=Array.from(i.children).indexOf(n);return t<2?e.add(i.children[0]).add(i.children[1]):e.add(i.children[2]).add(i.children[3])}for(let t of Array.from(i.children))e.add(t);return e};return e.reduce(l,new Set)}constructor(e,t,n,i,s){this.elements=new Set,this.isParsed=!1,this.isSplit=!1,this._rows=new Set,this._isAcrossHunks=!1,this._isContextOnly=!0,this._includesExpandedLine=!1,this._commentOutsideTheDiff=!1,this.diffId=e,this.diffTable=document.querySelector(`.js-diff-table[data-diff-anchor="${e}"]`),this.diffTable&&(this.isSplit=this.diffTable.classList.contains("js-file-diff-split")),this.start=new l(e,t,n),this.end=new l(e,i,s),this.lineCount=0,this.parse()}};var s=n(81574),r=n(37574),o=n(36071),c=n(59753),a=n(29764);let u=null,d=null,f=!1,h=null;function m(){return u}function g(e){return!!e.closest(".js-multi-line-comments-enabled")}function b(e,t){if(!g(e))return!1;let{start:{lineNumber:n},end:{lineNumber:i}}=t;return!(n===i&&t.isContextOnly()||!t.commentOutsideTheDiffEnabled()&&(t.isAcrossHunks()||t.includesExpandedLine()))}function p(e){return e.closest(".js-diff-table").classList.contains("is-selecting")}function L(){window.history.replaceState(null,"","#"),N()}function w(e,t){let n=e.id;if(t){let t=(0,r.s)(n);if(!t)return;let i=t[1],l=t[2],s=t[3];if(u&&u.diffId===i){if(l===u.start.side&&s<u.start.lineNumber)return;let t=new DiffRange(i,u.start.side,u.start.lineNumber,l,+s);n=t.anchor();let r=e.closest(".js-file-content[data-hydro-view]");if(r instanceof HTMLElement&&x(r,t),f&&p(e)){let n=e.closest(".js-diff-table");n.classList.toggle("is-commenting",b(e,t))}d=function(){if(b(e,t)){let n=t.end.sideForCommenting(),i=`.js-add-line-comment[data-side="${n}"]`,l=e.closest("tr").querySelector(i);l&&t&&l.click()}}}}window.history.replaceState(null,"",`#${n}`),N()}function E(e){if(!(e instanceof HTMLElement))return null;if(e.classList.contains("js-linkable-line-number"))return e;let t=e.previousElementSibling;return t?E(t):null}function y(e){!u||e.target.closest(".js-diff-table")||(window.history.replaceState(null,"","#"),N())}function v(){if(!h)return;w(h,!1);let e=h.closest(".js-diff-table");h=null,e.classList.add("is-selecting"),e.classList.add("is-commenting"),document.addEventListener("mouseup",function(t){e.classList.remove("is-selecting"),e.classList.remove("is-selecting","is-commenting"),d&&d(),d=null,_(e),t.preventDefault()},{once:!0})}function j(e){let t=E(e);t&&p(t)&&w(t,!0)}function S(e){p(e)&&w(e,!0)}function A(e){let t=e.target;if(!(t instanceof Element))return;h&&v();let n=t.closest(".blob-code, .js-linkable-line-number");if(n){if(n.classList.contains("blob-code"))return j(n);n.classList.contains("js-linkable-line-number")&&S(n)}}function k(e){e.addEventListener("mouseenter",A,{capture:!0})}function _(e){f=!1,e.removeEventListener("mouseenter",A,{capture:!0}),setTimeout(()=>{document.addEventListener("click",y,{once:!0})},0)}function C(){if(!u)return;for(let e of u.elements)e.classList.add("selected-line");let e=[],t=[],n=[],i=[];for(let l of u.rows()){let[s,r,o,c]=l.children;e.push(s),t.push(r),n.push(o),i.push(c)}function l(e){for(let[t,n]of e.entries()){if(n.classList.contains("empty-cell"))continue;let i=e[t-1];i&&i.classList.contains("selected-line")||n.classList.add("selected-line-top");let l=e[t+1];l&&l.classList.contains("selected-line")||n.classList.add("selected-line-bottom")}}for(let[s,r]of(l(e),l(t),l(n),l(i),t.entries()))i[s].classList.contains("selected-line")||r.classList.add("selected-line-right");for(let[e,i]of n.entries())t[e].classList.contains("selected-line")||i.classList.add("selected-line-left")}function T(){if(!u)return;for(let e of u.elements)e.classList.add("selected-line");let e=Array.from(u.rows()),t=e[0];for(let e of t.children)e.classList.add("selected-line-top");let n=e[e.length-1];for(let e of n.children)e.classList.add("selected-line-bottom")}function N(){if(u){for(let e of u.elements)e.classList.remove("selected-line","selected-line-top","selected-line-bottom","selected-line-left","selected-line-right");u=null}let e=(0,r.s)(window.location.hash);if(!e)return;let t=e[1],n=e[2],i=e[3],l=e[4]||n,s=e[5]||i;u=new DiffRange(t,n,+i,l,+s);let o=Array.from(u.elements),c=o[0];c&&(c.closest(".js-diff-table").classList.contains("file-diff-split")?C():T())}function x(e,t){let n={starting_diff_position:t.start.side+t.start.lineNumber,ending_diff_position:t.end.side+t.end.lineNumber,line_count:t.lineCount};e.setAttribute("data-hydro-client-context",JSON.stringify(n)),(0,a.Fk)(e)}(0,c.on)("mousedown",".js-add-line-comment",function(e){if(!(e instanceof MouseEvent)||0!==e.button)return;let t=e.target.parentElement;if(!t||!g(e.target))return;let n=E(t);if(!n)return;let i=e.target.closest(".js-diff-table");k(i),h=n,f=!0,e.target.addEventListener("mouseup",function(){_(i),h=null,f=!1},{once:!0}),u&&u.lineCount>1&&e.preventDefault()}),(0,c.on)("mousedown",".js-linkable-line-number",function(e){if(!(e instanceof MouseEvent)||0!==e.button)return;let t=e.target;if(!(t instanceof Element))return;let n=t.closest(".js-diff-table");n.classList.add("is-selecting"),k(n),document.addEventListener("mouseup",function(){t.closest(".js-diff-table").classList.remove("is-selecting"),_(n)},{once:!0}),w(t,e instanceof MouseEvent&&e.shiftKey),e.preventDefault()}),(0,s.Z)(N),(0,o.N7)(".blob-expanded",N),(0,o.N7)(".js-diff-progressive-loader",function(e){e.addEventListener("load",N)}),(0,o.N7)(".js-diff-entry-loader",function(e){e.addEventListener("load",N)})},99874:(e,t,n)=>{var i=n(59753);(0,i.on)("click",".js-rich-diff.collapsed .js-expandable",function(e){if(!(e.target instanceof Element))return;e.preventDefault();let t=e.target.closest(".js-rich-diff");t.classList.remove("collapsed")}),(0,i.on)("click",".js-show-rich-diff",function(e){let t=e.currentTarget.closest(".js-warn-no-visible-changes");if(!t)return;t.classList.add("d-none");let n=t.parentElement,i=n.querySelector(".js-no-rich-changes");i&&i.classList.remove("d-none")})},87098:(e,t,n)=>{function i(e,t=location.hash){return l(e,s(t))}function l(e,t){return""===t?null:e.getElementById(t)||e.getElementsByName(t)[0]}function s(e){try{return decodeURIComponent(e.slice(1))}catch{return""}}n.d(t,{$z:()=>s,Kt:()=>i,Q:()=>l})},29764:(e,t,n)=>{n.d(t,{$S:()=>l,Fk:()=>s,sz:()=>r});var i=n(71643);function l(e,t,n){let l={hydroEventPayload:e,hydroEventHmac:t,visitorPayload:"",visitorHmac:"",hydroClientContext:n},s=document.querySelector("meta[name=visitor-payload]");s instanceof HTMLMetaElement&&(l.visitorPayload=s.content);let r=document.querySelector("meta[name=visitor-hmac]")||"";r instanceof HTMLMetaElement&&(l.visitorHmac=r.content),(0,i.b)(l,!0)}function s(e){let t=e.getAttribute("data-hydro-view")||"",n=e.getAttribute("data-hydro-view-hmac")||"",i=e.getAttribute("data-hydro-client-context")||"";l(t,n,i)}function r(e){let t=e.getAttribute("data-hydro-click-payload")||"",n=e.getAttribute("data-hydro-click-hmac")||"",i=e.getAttribute("data-hydro-client-context")||"";l(t,n,i)}},254:(e,t,n)=>{n.d(t,{ZG:()=>o,q6:()=>a,w4:()=>c});var i=n(8439);let l=!1,s=new i.Z;function r(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of s.matches(t))e.data.call(null,t)}function o(e,t){l||(l=!0,document.addEventListener("focus",r,!0)),s.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function c(e,t,n){function i(t){let l=t.currentTarget;l&&(l.removeEventListener(e,n),l.removeEventListener("blur",i))}o(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",i)})}function a(e,t){function n(e){let{currentTarget:i}=e;i&&(i.removeEventListener("input",t),i.removeEventListener("blur",n))}o(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},11445:(e,t,n)=>{n.d(t,{v:()=>i});function i(e,t){t.appendChild(e.extractContents()),e.insertNode(t)}},97629:(e,t,n)=>{function i(e){return e.offsetWidth<=0&&e.offsetHeight<=0}function l(e){return!i(e)}n.d(t,{Z:()=>l})},95253:(e,t,n)=>{let i;n.d(t,{Y:()=>f,q:()=>h});var l=n(88149),s=n(86058),r=n(44544),o=n(71643);let{getItem:c}=(0,r.Z)("localStorage"),a="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,l.n)("octolytics");delete e.baseContext,i=new s.R(e)}catch(e){}function d(e){let t=(0,l.n)("octolytics").baseContext||{};if(t)for(let e in delete t.app_id,delete t.event_url,delete t.host,t)e.startsWith(a)&&(t[e.replace(a,"")]=t[e],delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let i=new URLSearchParams(window.location.search);for(let[e,n]of i)u.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,o.B)().toString(),Object.assign(t,e)}function f(e){i?.sendPageView(d(e))}function h(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,l=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(l[e]=`${n}`);i&&(d(l),i.sendEvent(e||"unknown",d(l)))}},56959:(e,t,n)=>{n.d(t,{RB:()=>i,qC:()=>l,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function i(e,t,n,i={capture:!1}){return e.addEventListener(t,n,i),new Subscription(()=>{e.removeEventListener(t,n,i)})}function l(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}}}]);
//# sourceMappingURL=app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-f96c66-388190a40704.js.map