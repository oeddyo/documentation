(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{328:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[t._v("#")]),t._v(" Search")]),t._v(" "),s("h2",{attrs:{id:"search-in-an-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-in-an-index"}},[t._v("#")]),t._v(" Search in an index")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/search"}}),t._v(" "),s("p",[t._v("Search for documents matching a specific query in the given index.")]),t._v(" "),s("h4",{attrs:{id:"path-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Query Parameter")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("q")])]),t._v(" "),s("td",[t._v("query string "),s("em",[t._v("(mandatory)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("offset")])]),t._v(" "),s("td",[t._v("number of documents to skip")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("limit")])]),t._v(" "),s("td",[t._v("number of documents to take")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("attributesToRetrieve")])]),t._v(" "),s("td",[t._v("document attributes to show")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("*")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("attributesToCrop")])]),t._v(" "),s("td",[t._v("which attributes to crop")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("none")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("cropLength")])]),t._v(" "),s("td",[t._v("limit length at which to crop specified attributes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("200")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("attributesToHighlight")])]),t._v(" "),s("td",[t._v("which attributes to highlight")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("none")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("filters")])]),t._v(" "),s("td",[t._v("attribute with an exact match")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("none")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("matches")])]),t._v(" "),s("td",[t._v("whether to return the raw matches or not")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("filters")]),t._v(" takes "),s("code",[t._v("key:value")]),t._v(" as parameter, with the key to be the name of the field to filter, and the value the filter to be applied on this field, e.g.: "),s("code",[t._v("filters=first_name:John")]),t._v(". Only a single filter is supported in a query.")])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/4eb345y7/search?q=american%20ninja%205'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hits"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"25684"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1993-01-01"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"25682"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 3: Blood Hunt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/c7oNrk8bRg0BlmtvidhVD8ivPYT.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Jackson is back, and now he has a new partner, karate champion Sean, as they must face a deadly terrorist known as 'The Cobra', who has infected Sean with a virus. Sean and Jackson have no choice but to fight the Cobra and his bands of ninjas.\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1989-02-24"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"offset"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"limit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"processingTimeMs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"american ninja 5"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);