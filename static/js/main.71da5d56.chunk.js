(this["webpackJsonpadmin-dashboard-content"]=this["webpackJsonpadmin-dashboard-content"]||[]).push([[0],{138:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(36),o=n.n(r),i=(n(138),n(5)),l=n(33),u=n(50),s=n(4),j=n(58),d=n.n(j),b=n(264),O=n(130),p=n(46),f=n(21),h=n(126),v=n(127),x=n.n(v),g=n(39),m=n.n(g),C=n(68),S=n(6),T=n(8),y="http://localhost:5000",_=function(){function e(t){Object(S.a)(this,e),this.loader=t}return Object(T.a)(e,[{key:"upload",value:function(){var e=Object(C.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,e.next=3,this.loader.file;case 3:return n=e.sent,t.append("files",n),e.abrupt("return",new Promise((function(e,n){d()({url:"".concat(y,"/files"),method:"post",data:t}).then((function(t){var n=t.data;n.default=n.files[0].url,console.log("resData.files[0].url",n.files[0].url),e(n)})).catch((function(e){console.log(e),n(e)}))})));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"abort",value:function(){}}]),e}(),D=n(2),E=function(e){var t=e.initValue,n=(e.readOnly,e.onData),a={ckfinder:{uploadUrl:"".concat(a.server,"/files")}};return Object(D.jsx)(h.CKEditor,{editor:x.a,data:t,onReady:function(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return new _(e)}},config:a,onChange:function(e,t){n(t.getData())}})},R=n(261),k=n(17),P=n(266),w=n(61),A=n(254),U=function(e){var t=e.files,n=e.handleDropZoneDrop,a=["image/gif","image/jpeg","image/png"],c=!t.length&&Object(D.jsx)(R.a.FileUpload,{}),r=t.length>0&&Object(D.jsx)(k.a,{vertical:!0,children:t.map((function(e,t){return Object(D.jsxs)(k.a,{alignment:"center",children:[Object(D.jsx)(P.a,{size:"small",alt:e.name,source:a.includes(e.type)?window.URL.createObjectURL(e):A.a}),Object(D.jsxs)("div",{children:[e.name," ",Object(D.jsxs)(w.a,{children:[e.size," bytes"]})]})]},t)}))});return Object(D.jsxs)(R.a,{onDrop:n,children:[r,c]})};var F=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useCallback)(function(){var t=Object(C.a)(m.a.mark((function t(n,a,c){var o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.upload){t.next=5;break}return t.next=3,e.upload(a);case 3:return o=t.sent,t.abrupt("return",r((function(e){return[].concat(Object(i.a)(e),Object(i.a)(o))})));case 5:return t.abrupt("return",r((function(e){return[].concat(Object(i.a)(e),Object(i.a)(a))})));case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),[]);return Object(D.jsx)(U,{files:c,handleDropZoneDrop:o})};var L=n(258),K=n(256),N=n(262);function B(e){var t=e.variant,n=e.index,a=e.selectedResources,c=e.handleChange,r=t.id,o=t.title,i=t.price,l=t.sku,u=t.barcode,s=(t.imageId,t.image);return Object(D.jsxs)(L.a.Row,{id:r,selected:a.includes(r),position:n,children:[Object(D.jsx)(L.a.Cell,{children:Object(D.jsx)(P.a,{source:s||A.a})}),Object(D.jsx)(L.a.Cell,{children:Object(D.jsx)(O.a,{value:o,onChange:function(e){return c(n,"title",e)}})}),Object(D.jsx)(L.a.Cell,{children:Object(D.jsx)(O.a,{value:String(i),onChange:function(e){return c(n,"price",e)},type:"number"})}),Object(D.jsx)(L.a.Cell,{children:Object(D.jsx)(O.a,{value:l,onChange:function(e){return c(n,"sku",e)}})}),Object(D.jsx)(L.a.Cell,{children:Object(D.jsx)(O.a,{value:u,onChange:function(e){return c(n,"barcode",e)}})})]},r)}var I=c.a.memo(H);function H(e){var t=e.product.variants,n=Object(K.a)(t),c=n.selectedResources,r=n.allResourcesSelected,o=n.handleSelectionChange,i=[{content:"Edit variants",onAction:function(){return console.log("Todo: implement bulk edit",c)}}],s=[{content:"Delete variants",onAction:function(){return console.log("Todo: implement bulk delete",c)}}],j=Object(a.useCallback)((function(n,a,c){var r=t.map((function(e,t){return t===n?Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},a,c)):e}));e.onData(r)}),[t]),d=t.map((function(e,t){return Object(D.jsx)(B,{variant:e,index:t,selectedResources:c,handleChange:j,key:t})}));return Object(D.jsx)(N.a,{children:Object(D.jsx)(L.a,{resourceName:{singular:"variant",plural:"variants"},itemCount:t.length,selectedItemsCount:r?"All":c.length,onSelectionChange:o,bulkActions:s,promotedBulkActions:i,headings:[{title:"Image"},{title:"Title"},{title:"Price"},{title:"SKU"}],children:d})})}var V=n(259),W=n(9),z=n(131),M=n(257),J=c.a.memo(X);function X(e){var t=e.value,n=e.allowMultiple,c=void 0!==n&&n,r=[{value:"type1",label:"Type 1"},{value:"type2",label:"Type 2"},{value:"type3",label:"Type 3"}],o=Object(a.useState)(t),i=Object(s.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(r),d=Object(s.a)(j,2),b=d[0],O=d[1],p=Object(a.useState)(!1),f=Object(s.a)(p,2),h=f[0],v=f[1],x=Object(a.useCallback)((function(e){u(e),h||v(!0),setTimeout((function(){if(""===e)return O(r),void v(!1);var t=new RegExp(e,"i"),n=b.filter((function(e){return e.label.match(t)}));O(n),v(!1)}),300)}),[r,h,b]),g=Object(a.useCallback)((function(t){e.onData(t),u(c?t.join(", "):t[0])}),[b]),m=Object(D.jsx)(V.a.TextField,{onChange:x,label:"Product type",value:l,placeholder:"exp: T-Shirt"}),C=Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(W.a,{source:M.a}),Object(D.jsx)("div",{style:{textAlign:"center"},children:Object(D.jsx)(z.a,{children:"Could not find any results"})})]});return Object(D.jsx)(V.a,{allowMultiple:c,options:b,selected:t,onSelect:g,emptyState:C,loading:h,textField:m})}var Z=n(265),q=n(263),G=n(267);function Q(e){var t=[{label:"Size",value:"Size"},{label:"Color",value:"Color"}],n=Object(a.useState)("Size"),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(["M","L"]),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(a.useCallback)((function(e){return o(e)}),[]),b=Object(a.useCallback)((function(e){return function(){j((function(t){return t.filter((function(t){return t!==e}))}))}}),[]),O=u.map((function(e){return Object(D.jsx)(Z.a,{onRemove:b(e),children:e},e)}));return Object(D.jsx)(q.a,{columnContentTypes:["text","text"],headings:["",""],rows:[[Object(D.jsx)(G.a,{options:t,onChange:d,value:r}),Object(D.jsx)(k.a,{spacing:"tight",children:O})],[Object(D.jsx)(G.a,{options:t,onChange:d,value:r}),Object(D.jsx)(k.a,{spacing:"tight",children:O})]]})}function Y(){var e=Object(a.useState)({title:null,handle:null,description:null,variants:[{image:null,title:null,sku:null,price:0}],productType:"type1",vendor:"type1",tags:[]}),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e={method:"get",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000"}).NEXT_PUBLIC_SERVER_URL,"/orders")};d()(e).then((function(e){var t;console.log(null===(t=e.data)||void 0===t?void 0:t.items)})).catch((function(e){console.log(e)}))}),[]);var r=Object(a.useCallback)((function(e,t){return c((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(l.a)({},e,t))}))}),[]),o=Object(a.useState)(!1),j=Object(s.a)(o,2),h=j[0],v=j[1],x=Object(a.useCallback)((function(e){return v(e)}),[]);return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(n);var t={method:"get",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"http://localhost:5000"}).NEXT_PUBLIC_SERVER_URL,"/products")};d()(t).then((function(e){var t;console.log(null===(t=e.data)||void 0===t?void 0:t.items)})).catch((function(e){console.log(e)}))},children:Object(D.jsxs)(b.a,{children:[Object(D.jsxs)(b.a.Section,{children:[Object(D.jsx)("p",{children:JSON.stringify(n)}),Object(D.jsx)(O.a,{label:"Title",value:n.title,onChange:function(e){return r("title",e)}}),Object(D.jsx)(E,{initValue:n.description,onData:function(e){return r("description",e)}}),Object(D.jsx)(F,{product:n}),Object(D.jsx)(p.a,{label:"Product has many variants",checked:h,onChange:x}),Object(D.jsx)(Q,{product:n}),Object(D.jsx)(I,{product:n,onData:function(e){return r("variants",e)}}),Object(D.jsx)(f.a,{submit:!0,children:"Save"})]}),Object(D.jsxs)(b.a.Section,{secondary:!0,children:[Object(D.jsx)(J,{value:n.productType,onData:function(e){return r.apply(void 0,["productType"].concat(Object(i.a)(e)))}}),Object(D.jsx)(J,{value:n.vendor,onData:function(e){return r.apply(void 0,["vendor"].concat(Object(i.a)(e)))}}),Object(D.jsx)(J,{value:n.tags,onData:function(e){return r("tags",e)},allowMultiple:!0})]})]})})})}var $=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(Y,{})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,268)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},te=n(129),ne=n(260);n(247);o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(ne.a,{i18n:te,children:Object(D.jsx)($,{})})}),document.getElementById("root")),ee()}},[[249,1,2]]]);
//# sourceMappingURL=main.71da5d56.chunk.js.map