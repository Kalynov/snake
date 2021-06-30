(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c,r,i,a,o,s,d,u=n(0),l=n.n(u),j=n(8),b=n.n(j),O=(n(23),n(24),n(6)),f="SNAKE_SET_LENGTH",h="SNAKE_SET_COORDS",p="SNAKE_ADD_LENGTH",x="SNAKE_STEP",g="SNAKE_CHANGE_DIRECTION",v="GAME_PLAY",y="GAME_PAUSE",E="GAME_CRASH",m=n(3),w=n(4),k=["transparent","#000000"],T=w.a.div(c||(c=Object(m.a)(["\n    width: 500px;\n    height: 500px;\n    background-color: #dbeeae;\n    margin: 20px auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: flex-start;\n    align-content: flex-start;\n"]))),A=w.a.div(r||(r=Object(m.a)(["\n    width: 5px;     \n    height: 5px;\n    background-color: ",";\n"])),(function(e){var t=e.type;return k[t]})),_=w.a.div(i||(i=Object(m.a)(["\n    width: 700px;\n    height: 50px;\n    top: 10px;\n    margin: 0 auto;\n    background-color: #604a4a;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n"]))),I=w.a.div(a||(a=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),S=w.a.div(o||(o=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),N=w.a.div(s||(s=Object(m.a)(['\n    & {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 50px;\n        height: 50px;\n        padding: 0.5em;\n        background-color: #f8d05d;\n        position: relative;\n    }\n    &:after {\n        border-right: solid 20px transparent;\n        border-left: solid 20px transparent;\n        border-top: solid 20px #000000;\n        transform: translateX(-50%) translateY(-50%);\n        position: absolute;\n        z-index: 1;\n        content: "";\n        top: 50%;\n        left: 50%;\n    }\n']))),C=Object(w.a)(N)(d||(d=Object(m.a)(["\n    transform: ",";\n"])),(function(e){switch(e.direction){case"UP":return"rotate(180deg)";case"DOWN":return"rotate(0deg)";case"LEFT":return"rotate(90deg)";case"RIGHT":return"rotate(270deg)"}})),D=n(1),L=function(e){var t=e.setDirection,n=Object(u.useCallback)((function(e){switch(e.key){case"ArrowDown":case"s":t("DOWN");break;case"ArrowUp":case"w":t("UP");break;case"ArrowLeft":case"a":t("LEFT");break;case"ArrowRight":case"d":t("RIGHT")}}),[t]);return Object(u.useEffect)((function(){return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}}),[n]),Object(D.jsxs)(I,{children:[Object(D.jsx)(S,{children:Object(D.jsx)(C,{direction:"UP",onClick:function(){return t("UP")}})}),Object(D.jsxs)(S,{style:{width:198},children:[Object(D.jsx)(C,{direction:"LEFT",onClick:function(){return t("LEFT")}}),Object(D.jsx)(C,{direction:"RIGHT",onClick:function(){return t("RIGHT")}})]}),Object(D.jsx)(S,{children:Object(D.jsx)(C,{direction:"DOWN",onClick:function(){return t("DOWN")}})})]})},G=function(e){var t=e.key,n=void 0===t?"1":t,c=e.itemType,r=void 0===c?0:c;return Object(D.jsx)(A,{type:r},n)},P=Object(u.memo)(G),R="AREA_SET_SIZE",F=function(){var e=Object(O.c)((function(e){return e.area})),t=Object(O.c)((function(e){return e.snake})),n=Object(O.c)((function(e){var t;return null===(t=e.game)||void 0===t?void 0:t.timerId})),c=Object(O.b)();Object(u.useEffect)((function(){c({type:R,size:{width:100,height:100}}),c({type:f,length:3}),c({type:h,coords:[[49,50],[49,49],[49,48],[48,48],[47,48],[46,48],[45,48]]})}),[c]);var r=e.area&&e.area.map((function(e,n){return e.map((function(e,c){var r=0;return t.coords&&t.coords.forEach((function(e){e[0]===n&&e[1]===c&&(r=1)})),Object(D.jsx)(P,{itemType:r},"".concat(n,",").concat(c))}))})),i=function(){t.coords[0].includes(0)||t.coords[0].includes(99)?a():c({type:x})},a=function(){n&&(clearInterval(n),c({type:v}))};return Object(D.jsxs)(u.Fragment,{children:[Object(D.jsxs)(_,{children:[Object(D.jsx)("button",{onClick:function(){c(function(e){return{type:v,timerId:e}}(setInterval(i,500)))},children:"Start"}),Object(D.jsx)("button",{children:"100X100"}),Object(D.jsx)("button",{children:"50X50"}),Object(D.jsx)("button",{onClick:a,children:"Pause"}),Object(D.jsx)("button",{onClick:i,children:"Step"})]}),Object(D.jsxs)(S,{children:[Object(D.jsx)(T,{children:r}),Object(D.jsx)(L,{setDirection:function(e){c(function(e){return{type:g,direction:e}}(e))}})]})]})},H=n(5),U=n(18),z=n(2),K={width:null,height:null,area:null},M={length:0,coords:[[0,0]],direction:"RIGHT"},W={play:!1,pause:!1,score:0,speed:1,crash:!1,classic:!1},X=Object(H.c)({area:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(z.a)(Object(z.a)(Object(z.a)({},e),t.size),{},{area:new Array(t.size.height).fill(new Array(t.size.width).fill(0))});default:return e}},snake:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(z.a)(Object(z.a)({},e),{},{length:t.length});case h:return Object(z.a)(Object(z.a)({},e),{},{coords:t.coords});case p:return Object(z.a)(Object(z.a)({},e),{},{length:e.length++});case g:return Object(z.a)(Object(z.a)({},e),{},{direction:t.direction});case x:return Object(z.a)(Object(z.a)({},e),{},{coords:e.coords&&e.coords.map((function(t,n,c){if(0!==n)return c[n-1];switch(e.direction){case"RIGHT":return[t[0],t[1]+1];case"LEFT":return[t[0],t[1]-1];case"UP":return[t[0]-1,t[1]];case"DOWN":return[t[0]+1,t[1]];default:return t}}))});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(z.a)(Object(z.a)({},e),{},{play:!0,pause:!1,timerId:t.timerId});case y:return Object(z.a)(Object(z.a)({},e),{},{play:!1,pause:!0,timerId:void 0});case E:return Object(z.a)(Object(z.a)({},e),{},{play:!0,timerId:void 0});default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,J=Object(H.e)(X,Object(H.d)(B&&B(),Object(H.a)(U.a)));var Y=function(){return Object(D.jsx)(O.a,{store:J,children:Object(D.jsx)(l.a.StrictMode,{children:Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(F,{})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};b.a.render(Object(D.jsx)(Y,{}),document.getElementById("root")),V()}},[[36,1,2]]]);
//# sourceMappingURL=main.0b8bb63c.chunk.js.map