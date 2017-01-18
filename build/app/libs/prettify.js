define("app/libs/prettify",function(){var e=!1;window.PR_SHOULD_USE_CONTINUATION=!0;var n,t;return function(){function r(e){function n(e){var n=e.charCodeAt(0);if(92!==n)return n;var t=e.charAt(1);return n=d[t],n?n:t>="0"&&"7">=t?parseInt(e.substring(1),8):"u"===t||"x"===t?parseInt(e.substring(2),16):e.charCodeAt(1)}function t(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);var n=String.fromCharCode(e);return"\\"===n||"-"===n||"]"===n||"^"===n?"\\"+n:n}function r(e){var r=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),a=[],s="^"===r[0],l=["["];s&&l.push("^");for(var i=s?1:0,o=r.length;o>i;++i){var u=r[i];if(/\\[bdsw]/i.test(u))l.push(u);else{var c,d=n(u);o>i+2&&"-"===r[i+1]?(c=n(r[i+2]),i+=2):c=d,a.push([d,c]),65>c||d>122||(65>c||d>90||a.push([32|Math.max(65,d),32|Math.min(c,90)]),97>c||d>122||a.push([-33&Math.max(97,d),-33&Math.min(c,122)]))}}a.sort(function(e,n){return e[0]-n[0]||n[1]-e[1]});for(var p=[],f=[],i=0;i<a.length;++i){var h=a[i];h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):p.push(f=h)}for(var i=0;i<p.length;++i){var h=p[i];l.push(t(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&l.push("-"),l.push(t(h[1])))}return l.push("]"),l.join("")}function a(e){for(var n=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=n.length,i=[],o=0,u=0;a>o;++o){var c=n[o];if("("===c)++u;else if("\\"===c.charAt(0)){var d=+c.substring(1);d&&(u>=d?i[d]=-1:n[o]=t(d))}}for(var o=1;o<i.length;++o)-1===i[o]&&(i[o]=++s);for(var o=0,u=0;a>o;++o){var c=n[o];if("("===c)++u,i[u]||(n[o]="(?:");else if("\\"===c.charAt(0)){var d=+c.substring(1);d&&u>=d&&(n[o]="\\"+i[d])}}for(var o=0;a>o;++o)"^"===n[o]&&"^"!==n[o+1]&&(n[o]="");if(e.ignoreCase&&l)for(var o=0;a>o;++o){var c=n[o],p=c.charAt(0);c.length>=2&&"["===p?n[o]=r(c):"\\"!==p&&(n[o]=c.replace(/[a-zA-Z]/g,function(e){var n=e.charCodeAt(0);return"["+String.fromCharCode(-33&n,32|n)+"]"}))}return n.join("")}for(var s=0,l=!1,i=!1,o=0,u=e.length;u>o;++o){var c=e[o];if(c.ignoreCase)i=!0;else if(/[a-z]/i.test(c.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){l=!0,i=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},p=[],o=0,u=e.length;u>o;++o){var c=e[o];if(c.global||c.multiline)throw new Error(""+c);p.push("(?:"+a(c)+")")}return new RegExp(p.join("|"),i?"gi":"g")}function a(e,n){function t(e){var o=e.nodeType;if(1==o){if(r.test(e.className))return;for(var u=e.firstChild;u;u=u.nextSibling)t(u);var c=e.nodeName.toLowerCase();("br"===c||"li"===c)&&(a[i]="\n",l[i<<1]=s++,l[i++<<1|1]=e)}else if(3==o||4==o){var d=e.nodeValue;d.length&&(d=n?d.replace(/\r\n?/g,"\n"):d.replace(/[ \t\r\n]+/g," "),a[i]=d,l[i<<1]=s,s+=d.length,l[i++<<1|1]=e)}}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],s=0,l=[],i=0;return t(e),{sourceCode:a.join("").replace(/\n$/,""),spans:l}}function s(e,n,t,r,a){if(t){var s={sourceNode:e,pre:1,langExtension:null,numberLines:null,sourceCode:t,spans:null,basePos:n,decorations:null};r(s),a.push.apply(a,s.decorations)}}function l(e){for(var n=void 0,t=e.firstChild;t;t=t.nextSibling){var r=t.nodeType;n=1===r?n?e:t:3===r&&q.test(t.nodeValue)?e:n}return n===e?void 0:n}function i(e,n){var t,a={};!function(){for(var s=e.concat(n),l=[],i={},o=0,u=s.length;u>o;++o){var c=s[o],d=c[3];if(d)for(var p=d.length;--p>=0;)a[d.charAt(p)]=c;var f=c[1],h=""+f;i.hasOwnProperty(h)||(l.push(f),i[h]=null)}l.push(/[\0-\uffff]/),t=r(l)}();var l=n.length,i=function(e){for(var r=e.sourceCode,o=e.basePos,u=e.sourceNode,c=[o,z],d=0,f=r.match(t)||[],h={},g=0,m=f.length;m>g;++g){var v,y=f[g],b=h[y],x=void 0;if("string"==typeof b)v=!1;else{var w=a[y.charAt(0)];if(w)x=y.match(w[1]),b=w[0];else{for(var S=0;l>S;++S)if(w=n[S],x=y.match(w[1])){b=w[0];break}x||(b=z)}v=b.length>=5&&"lang-"===b.substring(0,5),!v||x&&"string"==typeof x[1]||(v=!1,b=B),v||(h[y]=b)}var C=d;if(d+=y.length,v){var N=x[1],_=y.indexOf(N),E=_+N.length;x[2]&&(E=y.length-x[2].length,_=E-N.length);var P=b.substring(5);s(u,o+C,y.substring(0,_),i,c),s(u,o+C+_,N,p(P,N),c),s(u,o+C+E,y.substring(E),i,c)}else c.push(o+C,b)}e.decorations=c};return i}function o(e){var n=[],t=[];n.push(e.tripleQuotedStrings?[L,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]:e.multiLineStrings?[L,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]:[L,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&t.push([L,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(n.push(r>1?[$,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]:[$,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),t.push([L,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):n.push([$,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(t.push([$,/^\/\/[^\r\n]*/,null]),t.push([$,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var a=e.regexLiterals;if(a){var s=a>1?"":"\n\r",l=s?".":"[\\S\\s]",o="/(?=[^/*"+s+"])(?:[^/\\x5B\\x5C"+s+"]|\\x5C"+l+"|\\x5B(?:[^\\x5C\\x5D"+s+"]|\\x5C"+l+")*(?:\\x5D|$))+/";t.push(["lang-regex",RegExp("^"+H+"("+o+")")])}var u=e.types;u&&t.push([I,u]);var c=(""+e.keywords).replace(/^ | $/g,"");c.length&&t.push([T,new RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]),n.push([z,/^\s+/,null," \r\n	\xa0"]);var d="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(d+="(?!s*/)"),t.push([O,/^@[a-z_$][a-z_$@0-9]*/i,null],[I,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[z,/^[a-z_$][a-z_$@0-9]*/i,null],[O,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[z,/^\\[\s\S]?/,null],[D,new RegExp(d),null]),i(n,t)}function u(e,n,t){function r(e){var n=e.nodeType;if(1!=n||s.test(e.className)){if((3==n||4==n)&&t){var o=e.nodeValue,u=o.match(l);if(u){var c=o.substring(0,u.index);e.nodeValue=c;var d=o.substring(u.index+u[0].length);if(d){var p=e.parentNode;p.insertBefore(i.createTextNode(d),e.nextSibling)}a(e),c||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(var f=e.firstChild;f;f=f.nextSibling)r(f)}function a(e){function n(e,t){var r=t?e.cloneNode(!1):e,a=e.parentNode;if(a){var s=n(a,1),l=e.nextSibling;s.appendChild(r);for(var i=l;i;i=l)l=i.nextSibling,s.appendChild(i)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var t,r=n(e.nextSibling,0);(t=r.parentNode)&&1===t.nodeType;)r=t;u.push(r)}for(var s=/(?:^|\s)nocode(?:\s|$)/,l=/\r\n?|\n/,i=e.ownerDocument,o=i.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var u=[o],c=0;c<u.length;++c)r(u[c]);n===(0|n)&&u[0].setAttribute("value",n);var d=i.createElement("ol");d.className="linenums";for(var p=Math.max(0,n-1|0)||0,c=0,f=u.length;f>c;++c)o=u[c],o.className="L"+(c+p)%10,o.firstChild||o.appendChild(i.createTextNode("\xa0")),d.appendChild(o);e.appendChild(d)}function c(e){var n=/\bMSIE\s(\d+)/.exec(navigator.userAgent);n=n&&+n[1]<=8;var t=/\n/g,r=e.sourceCode,a=r.length,s=0,l=e.spans,i=l.length,o=0,u=e.decorations,c=u.length,d=0;u[c]=a;var p,f;for(f=p=0;c>f;)u[f]!==u[f+2]?(u[p++]=u[f++],u[p++]=u[f++]):f+=2;for(c=p,f=p=0;c>f;){for(var h=u[f],g=u[f+1],m=f+2;c>=m+2&&u[m+1]===g;)m+=2;u[p++]=h,u[p++]=g,f=m}c=u.length=p;var v=e.sourceNode,y="";v&&(y=v.style.display,v.style.display="none");try{for(;i>o;){var b,x=(l[o],l[o+2]||a),w=u[d+2]||a,m=Math.min(x,w),S=l[o+1];if(1!==S.nodeType&&(b=r.substring(s,m))){n&&(b=b.replace(t,"\r")),S.nodeValue=b;var C=S.ownerDocument,N=C.createElement("span");N.className=u[d+1];var _=S.parentNode;_.replaceChild(N,S),N.appendChild(S),x>s&&(l[o+1]=S=C.createTextNode(r.substring(m,x)),_.insertBefore(S,N.nextSibling))}s=m,s>=x&&(o+=2),s>=w&&(d+=2)}}finally{v&&(v.style.display=y)}}function d(e,n){for(var t=n.length;--t>=0;){var r=n[t];Q.hasOwnProperty(r)?m.console&&console.warn("cannot override language handler %s",r):Q[r]=e}}function p(e,n){return e&&Q.hasOwnProperty(e)||(e=/^\s*</.test(n)?"default-markup":"default-code"),Q[e]}function f(e){var n=e.langExtension;try{var t=a(e.sourceNode,e.pre),r=t.sourceCode;e.sourceCode=r,e.spans=t.spans,e.basePos=0,p(n,r)(e),c(e)}catch(s){m.console&&console.log(s&&s.stack||s)}}function h(e,n,t){var r=t||!1,a=n||null,s=document.createElement("div");s.innerHTML="<pre>"+e+"</pre>",s=s.firstChild,r&&u(s,r,!0);var l={langExtension:a,numberLines:r,sourceNode:s,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null};return f(l),s.innerHTML}function g(e,n){function t(e){return a.getElementsByTagName(e)}function r(){for(var n=m.PR_SHOULD_USE_CONTINUATION?h.now()+250:1/0;g<o.length&&h.now()<n;g++){for(var t=o[g],a=C,i=t;i=i.previousSibling;){var c=i.nodeType,d=(7===c||8===c)&&i.nodeValue;if(d?!/^\??prettify\b/.test(d):3!==c||/\S/.test(i.nodeValue))break;if(d){a={},d.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,n,t){a[n]=t});break}}var p=t.className;if((a!==C||y.test(p))&&!b.test(p)){for(var N=!1,_=t.parentNode;_;_=_.parentNode){var E=_.tagName;if(S.test(E)&&_.className&&y.test(_.className)){N=!0;break}}if(!N){t.className+=" prettyprinted";var P=a.lang;if(!P){P=p.match(v);var R;!P&&(R=l(t))&&w.test(R.tagName)&&(P=R.className.match(v)),P&&(P=P[1])}var k;if(x.test(t.tagName))k=1;else{var A=t.currentStyle,L=s.defaultView,T=A?A.whiteSpace:L&&L.getComputedStyle?L.getComputedStyle(t,null).getPropertyValue("white-space"):0;k=T&&"pre"===T.substring(0,3)}var $=a.linenums;($="true"===$||+$)||($=p.match(/\blinenums\b(?::(\d+))?/),$=$?$[1]&&$[1].length?+$[1]:!0:!1),$&&u(t,$,k);var I={langExtension:P,sourceNode:t,numberLines:$,pre:k,sourceCode:null,basePos:null,spans:null,decorations:null};f(I)}}}g<o.length?m.setTimeout(r,250):"function"==typeof e&&e()}for(var a=n||document.body,s=a.ownerDocument||document,i=[t("pre"),t("code"),t("xmp")],o=[],c=0;c<i.length;++c)for(var d=0,p=i[c].length;p>d;++d)o.push(i[c][d]);i=null;var h=Date;h.now||(h={now:function(){return+new Date}});var g=0,v=/\blang(?:uage)?-([\w.]+)(?!\S)/,y=/\bprettyprint\b/,b=/\bprettyprinted\b/,x=/pre|xmp/i,w=/^code$/i,S=/^(?:pre|code|xmp)$/i,C={};r()}var m=window,v=["break,continue,do,else,for,if,return,while"],y=[v,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],b=[y,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],x=[b,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],w=[b,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],S=[b,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],C="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",N=[b,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],_="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",E=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],P=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],R=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],k=[x,S,w,N,_,E,P,R],A=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,L="str",T="kwd",$="com",I="typ",O="lit",D="pun",z="pln",j="tag",M="dec",B="src",U="atn",V="atv",F="nocode",H="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",q=/\S/,G=o({keywords:k,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),Q={};d(G,["default-code"]),d(i([],[[z,/^[^<?]+/],[M,/^<!\w[^>]*(?:>|$)/],[$,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[D,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),d(i([[z,/^[\s]+/,null," 	\r\n"],[V,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[j,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[U,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[D,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),d(i([],[[V,/^[\s\S]+/]]),["uq.val"]),d(o({keywords:x,hashComments:!0,cStyleComments:!0,types:A}),["c","cc","cpp","cxx","cyc","m"]),d(o({keywords:"null,true,false"}),["json"]),d(o({keywords:S,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:A}),["cs"]),d(o({keywords:w,cStyleComments:!0}),["java"]),d(o({keywords:R,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),d(o({keywords:E,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),d(o({keywords:_,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),d(o({keywords:P,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),d(o({keywords:N,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),d(o({keywords:C,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),d(i([],[[L,/^[\s\S]+/]]),["regex"]);m.PR={createSimpleLexer:i,registerLangHandler:d,sourceDecorator:o,PR_ATTRIB_NAME:U,PR_ATTRIB_VALUE:V,PR_COMMENT:$,PR_DECLARATION:M,PR_KEYWORD:T,PR_LITERAL:O,PR_NOCODE:F,PR_PLAIN:z,PR_PUNCTUATION:D,PR_SOURCE:B,PR_STRING:L,PR_TAG:j,PR_TYPE:I,prettyPrintOne:e?m.prettyPrintOne=h:n=h,prettyPrint:t=e?m.prettyPrint=g:t=g}}(),window.PR});