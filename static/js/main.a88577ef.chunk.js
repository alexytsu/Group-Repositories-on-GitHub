(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,e,t){n.exports=t(24)},18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(5),i=t.n(r),c=(t(18),t(2)),s=t.n(c),l=t(3),u=t(6),d=t(7),p=t(11),b=t(8),h=t(12),m=t(1);function g(n){var e=n.repo;return Object(m.c)("div",{css:{borderRadius:3,border:"1px solid #d1d5da",padding:16}},Object(m.c)("a",{css:{color:"#0366d6",fontWeight:"bolder","&:visited":{color:"#0366d6",fontWeight:"bolder"}},href:e.html_url},e.name),Object(m.c)("div",{css:{fontSize:13,color:"#4a4a4a",marginTop:8}},e.description))}function f(n){var e=[];console.log("Props.repos",n.repos);for(var t=0;t<n.repos.length;t++){var a=n.repos[t];e.push(Object(m.c)(g,{repo:a}))}return Object(m.c)("div",{css:{marginTop:24}},Object(m.c)("h2",{css:{fontSize:20,marginBottom:8,fontWeight:"bolder",color:"#4a4a4a"}},n.name?"# ".concat(n.name):"Uncategorised"),Object(m.c)("div",{css:{display:"grid",gridTemplateColumns:"1fr",gap:8,"@media (min-width: 480px)":{gridTemplateColumns:"1fr 1fr"}}},e))}function v(n){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(s.a.mark(function n(e){var t,a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.github.com/users/".concat(e,"/repos"),{headers:{Accept:"application/vnd.github.mercy-preview+json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}var y=t(10);function w(){var n=Object(y.a)(['\n      html,\n      body,\n      div,\n      span,\n      applet,\n      object,\n      iframe,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      p,\n      blockquote,\n      pre,\n      a,\n      abbr,\n      acronym,\n      address,\n      big,\n      cite,\n      code,\n      del,\n      dfn,\n      em,\n      img,\n      ins,\n      kbd,\n      q,\n      s,\n      samp,\n      small,\n      strike,\n      strong,\n      sub,\n      sup,\n      tt,\n      var,\n      b,\n      u,\n      i,\n      center,\n      dl,\n      dt,\n      dd,\n      ol,\n      ul,\n      li,\n      fieldset,\n      form,\n      label,\n      legend,\n      table,\n      caption,\n      tbody,\n      tfoot,\n      thead,\n      tr,\n      th,\n      td,\n      article,\n      aside,\n      canvas,\n      details,\n      embed,\n      figure,\n      figcaption,\n      footer,\n      header,\n      hgroup,\n      menu,\n      nav,\n      output,\n      ruby,\n      section,\n      summary,\n      time,\n      mark,\n      audio,\n      video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n      }\n\n      :focus {\n        outline: 0;\n      }\n\n      article,\n      aside,\n      details,\n      figcaption,\n      figure,\n      footer,\n      header,\n      hgroup,\n      menu,\n      nav,\n      section {\n        display: block;\n      }\n\n      body {\n        line-height: 1;\n      }\n\n      ol,\n      ul {\n        list-style: none;\n      }\n\n      blockquote,\n      q {\n        quotes: none;\n      }\n\n      blockquote:before,\n      blockquote:after,\n      q:before,\n      q:after {\n        content: "";\n        content: none;\n      }\n\n      table {\n        border-collapse: collapse;\n        border-spacing: 0;\n      }\n\n      input[type="search"]::-webkit-search-cancel-button,\n      input[type="search"]::-webkit-search-decoration,\n      input[type="search"]::-webkit-search-results-button,\n      input[type="search"]::-webkit-search-results-decoration {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n      }\n\n      input[type="search"] {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        -webkit-box-sizing: content-box;\n        -moz-box-sizing: content-box;\n        box-sizing: content-box;\n      }\n\n      textarea {\n        overflow: auto;\n        vertical-align: top;\n        resize: vertical;\n      }\n\n      audio,\n      canvas,\n      video {\n        display: inline-block;\n        *display: inline;\n        *zoom: 1;\n        max-width: 100%;\n      }\n\n      audio:not([controls]) {\n        display: none;\n        height: 0;\n      }\n\n      [hidden] {\n        display: none;\n      }\n\n      html {\n        font-size: 100%; /* 1 */\n        -webkit-text-size-adjust: 100%; /* 2 */\n        -ms-text-size-adjust: 100%; /* 2 */\n      }\n\n      a:focus {\n        outline: thin dotted;\n      }\n\n      a:active,\n      a:hover {\n        outline: 0;\n      }\n\n      a,\n      a:visited,\n      a:active,\n      a:hover {\n        text-decoration: none;\n        color: black;\n      }\n\n      img {\n        border: 0; /* 1 */\n        -ms-interpolation-mode: bicubic; /* 2 */\n      }\n\n      figure {\n        margin: 0;\n      }\n\n      form {\n        margin: 0;\n      }\n\n      fieldset {\n        border: 1px solid #c0c0c0;\n        margin: 0 2px;\n        padding: 0.35em 0.625em 0.75em;\n      }\n\n      legend {\n        border: 0; /* 1 */\n        padding: 0;\n        white-space: normal; /* 2 */\n        *margin-left: -7px; /* 3 */\n      }\n\n      button,\n      input,\n      select,\n      textarea {\n        font-size: 100%; /* 1 */\n        margin: 0; /* 2 */\n        vertical-align: baseline; /* 3 */\n        *vertical-align: middle; /* 3 */\n      }\n\n      button,\n      input {\n        line-height: normal;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button,\n      html input[type="button"],\n      input[type="reset"],\n      input[type="submit"] {\n        -webkit-appearance: button;\n        cursor: pointer;\n        *overflow: visible;\n      }\n      button[disabled],\n      html input[disabled] {\n        cursor: default;\n      }\n\n      input[type="checkbox"],\n      input[type="radio"] {\n        box-sizing: border-box; /* 1 */\n        padding: 0; /* 2 */\n        *height: 13px; /* 3 */\n        *width: 13px; /* 3 */\n      }\n\n      input[type="search"] {\n        -webkit-appearance: textfield; /* 1 */\n        -moz-box-sizing: content-box;\n        -webkit-box-sizing: content-box; /* 2 */\n        box-sizing: content-box;\n      }\n\n      input[type="search"]::-webkit-search-cancel-button,\n      input[type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none;\n      }\n\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n\n      textarea {\n        overflow: auto;\n        vertical-align: top;\n      }\n\n      table {\n        border-collapse: collapse;\n        border-spacing: 0;\n      }\n\n      html,\n      button,\n      input,\n      select,\n      textarea {\n        color: #222;\n      }\n\n      ::-moz-selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      ::selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      img {\n        vertical-align: middle;\n      }\n\n      fieldset {\n        border: 0;\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      .chromeframe {\n        margin: 0.2em 0;\n        background: #ccc;\n        color: #000;\n        padding: 0.2em 0;\n      }\n    ']);return w=function(){return n},n}var k=function(){return Object(m.c)(m.a,{styles:Object(m.b)(w())})},j=t(21),z=function(n){function e(n){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(b.a)(e).call(this,n))).state={data:[],categories:null},t}return Object(h.a)(e,n),Object(d.a)(e,[{key:"getValidCategories",value:function(n){return n.filter(function(n){return n.startsWith("cat-")}).map(function(n){return n.substr(4)})}},{key:"componentDidMount",value:function(){var n=Object(l.a)(s.a.mark(function n(){var e,t,a,o,r,i,c,l;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v("alexytsu");case 2:for(e=n.sent,t=!0,a=!1,o=void 0,n.prev=6,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0)(c=i.value).tag=this.getValidCategories(c.topics);n.next=14;break;case 10:n.prev=10,n.t0=n.catch(6),a=!0,o=n.t0;case 14:n.prev=14,n.prev=15,t||null==r.return||r.return();case 17:if(n.prev=17,!a){n.next=20;break}throw o;case 20:return n.finish(17);case 21:return n.finish(14);case 22:l=j.groupBy(e,function(n){return n.tag}),this.setState({data:e}),this.setState({categories:l});case 25:case"end":return n.stop()}},n,this,[[6,10,14,22],[15,,17,21]])}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.categories,e=[];for(var t in n){var a=n[t];e.push(Object(m.c)(f,{name:t,repos:a}))}return Object(m.c)("div",null,Object(m.c)(k,null),Object(m.c)("div",{css:{fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',padding:16,maxWidth:1024,marginRight:"auto",marginLeft:"auto"}},e))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.a88577ef.chunk.js.map