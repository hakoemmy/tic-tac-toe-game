(this["webpackJsonptic-tac-toe-game"]=this["webpackJsonptic-tac-toe-game"]||[]).push([[0],[,function(e,n,t){e.exports={WinnerReporterInactive:"WinnerReporter_WinnerReporterInactive__2szFo",WinnerReporterActive:"WinnerReporter_WinnerReporterActive__1qRGQ",Content:"WinnerReporter_Content__2eCvo",Close:"WinnerReporter_Close__2ObNV"}},function(e,n,t){e.exports={BoardGround:"BoardGround_BoardGround__gCBsG"}},,,,,,function(e,n,t){e.exports={Board:"Board_Board__2eUuJ"}},function(e,n,t){e.exports={Layout:"Layout_Layout__2BpO9"}},function(e,n,t){e.exports={Warning:"Instructions_Warning__1-kqi"}},,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(4),l=t.n(o),i=(t(18),t(5)),s=t(6),c=t(11),u=t(7),m=t(12),v=t(8),f=t.n(v),d=function(e){return e.children},p=t(2),y=t.n(p),h=function(e){return""!==e.symbol?a.a.createElement("div",{className:y.a.BoardGround},e.symbol):e.isGameOver?a.a.createElement("div",{className:y.a.BoardGround},e.symbol):a.a.createElement("div",{className:y.a.BoardGround,onClick:e.clicked},e.symbol)},E=function(){return a.a.createElement(d,null,"\u2003\u2003\u2003 \u2003\u2003\u2003 \u2003\u2003\u2003 \u2003\u2003\u2003")},g=function(e){return a.a.createElement("label",null,"Move: ",a.a.createElement("strong",null,e.moves))},b=function(e){return a.a.createElement("label",null,"Turn: ",a.a.createElement("strong",null,"You"))},w=function(e){return a.a.createElement("label",null,"You: ",a.a.createElement("strong",null,e.score))},S=function(e){return a.a.createElement("label",{"data-testid":"aIScore"},"AI user: ",a.a.createElement("strong",null,e.score))},G=t(1),W=t.n(G),_=function(e){return e.isGameOver?""===e.winnerSymbol?a.a.createElement("div",{className:W.a.WinnerReporterActive},a.a.createElement("div",{className:W.a.Content},a.a.createElement("span",{className:W.a.Close,onClick:e.clicked},"\xd7"),a.a.createElement("p",null,"DRAW!"))):a.a.createElement("div",{className:W.a.WinnerReporterActive},a.a.createElement("div",{className:W.a.Content},a.a.createElement("span",{className:W.a.Close,onClick:e.clicked},"\xd7"),a.a.createElement("p",null,"O"===e.winnerSymbol?"AI Won!":"You Won!"))):a.a.createElement("div",{className:W.a.WinnerReporterInactive},a.a.createElement("div",{className:W.a.Content},a.a.createElement("span",{className:W.a.Close},"\xd7"),a.a.createElement("p",null,"O"===e.winnerSymbol?"AI Won!":"You Won!")))},O=function(e){function n(){var e,t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={isAiUserTurn:!0,isNaiveTurn:!1,isGameOver:!1,aIScore:0,naiveScore:0,winnerSymbol:"",playGround:[["","",""],["","",""],["","",""]],naive:{symbol:"X"},aIUser:{symbol:"O"},moves:0,result:{incomplete:0,tie:3}},t.moveCount=function(e){for(var n=0,r=0;r<e.length;r++)for(var a=0;a<e[r].length;a++)""!=e[r][a]&&n++;return t.setState({moves:n}),n},t.getResult=function(e,n){var r=t.state.result.incomplete;if(t.moveCount(e)<5)return{result:r};for(var a=function(e){return e===n.repeat(3)},o=[],l=0;l<3;l++)if(a(e[l].join("")))return{result:r=n,winningLine:o=[[l,0],[l,1],[l,2]]};for(var i=0;i<3;i++){if(a([e[0][i],e[1][i],e[2][i]].join("")))return{result:r=n,winningLine:o=[[0,i],[1,i],[2,i]]}}return a([e[0][0],e[1][1],e[2][2]].join(""))?{result:r=n,winningLine:o=[[0,0],[1,1],[2,2]]}:a([e[0][2],e[1][1],e[2][0]].join(""))?{result:r=n,winningLine:o=[[0,2],[1,1],[2,0]]}:9==t.moveCount(e)?{result:r=t.state.result.tie,winningLine:o}:{result:r}},t.applyMove=function(e,n,t){return e[n.row][n.column]=t,e},t.getBestMove=function(e,n){for(var r=function(e){for(var n=[],t=0;t<3;t++){n.push([]);for(var r=0;r<3;r++)n[t][r]=e[t][r]}return n},a=function(e){for(var n=[],t=0;t<3;t++)for(var r=0;r<3;r++)""===e[t][r]&&n.push({row:t,column:r});return n}(e),o=[],l=0;l<a.length;l++){var i=a[l],s=r(e);s=t.applyMove(s,i,n);var c=t.getResult(s,n).result,u=void 0;if(c==t.state.result.tie)u=0;else if(c==n)u=1;else{var m=t.state.naive.symbol;u=-t.getBestMove(s,m).score}if(1===u)return{move:i,score:u};o.push({move:i,score:u})}return function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}}(o),o.sort((function(e,n){return n.score-e.score})),o[0]},t.executeTurn=function(e,n,r){if(""!==e[n.row][n.column])return e;t.applyMove(e,n,r);t.getResult(e,r).result},t.findWinnerHandler=function(e){for(var n=!0,r=0;r<3;r++)n=n&&t.state.playGround[r][r]==e;if(n)return{result:n,player:e};n=!0;for(var a=0;a<3;a++)n=n&&t.state.playGround[2-a][a]==e;if(n)return{result:n,player:e};for(var o=0;o<3;o++){n=!0;for(var l=0;l<3;l++)n=n&&t.state.playGround[o][l]==e;if(n)return{result:n,player:e};n=!0;for(var i=0;i<3;i++)n=n&&t.state.playGround[i][o]==e;if(n)return{result:n,player:e}}return!1},t.naiveTurnHandler=function(e,n){var r=t.state.naive.symbol;t.executeTurn(t.state.playGround,{row:e,column:n},r),t.setState({isAiUserTurn:!0,isNaiveTurn:!1});var a=t.findWinnerHandler(t.state.naive.symbol);if(a.result){var o=t.state.naiveScore+1,l=t.state.naive.symbol;t.setState({isGameOver:!0,naiveScore:o,winnerSymbol:l})}a.result||8!==t.state.moves||t.setState({winnerSymbol:"",isGameOver:!0})},t.aITurnHandler=function(){var e=t.state.aIUser.symbol,n=t.getBestMove(t.state.playGround,e);if(void 0!=n){var r=n.move;t.executeTurn(t.state.playGround,r,e);var a=t.findWinnerHandler(t.state.aIUser.symbol);if(a.result){var o=t.state.aIScore+1,l=t.state.aIUser.symbol;t.setState({isGameOver:!0,aIScore:o,winnerSymbol:l})}a.result||8!==t.state.moves||t.setState({winnerSymbol:"",isGameOver:!0})}},t.removeReporterHandler=function(){t.setState({playGround:[["","",""],["","",""],["","",""]]}),t.setState({isGameOver:!1}),t.state.moves=0},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;this.state.isAiUserTurn&&(this.aITurnHandler(),this.setState({isAiUserTurn:!1,isNaiveTurn:!0}));var n=0,t=this.state.playGround.map((function(t,r){return t.map((function(t,o){return n++,a.a.createElement(h,{key:n,symbol:t,isGameOver:e.state.isGameOver,clicked:function(){return e.naiveTurnHandler(r,o)}})}))}));return a.a.createElement(d,null,a.a.createElement(_,{isGameOver:this.state.isGameOver,winnerSymbol:this.state.winnerSymbol,clicked:this.removeReporterHandler}),a.a.createElement("header",null,a.a.createElement("span",null,a.a.createElement(g,{moves:this.state.moves})),a.a.createElement(E,null),a.a.createElement("span",null,a.a.createElement(b,null))),a.a.createElement("main",{className:f.a.Board},t),a.a.createElement("footer",null,a.a.createElement("span",null,a.a.createElement(w,{score:this.state.naiveScore})),a.a.createElement(E,null),a.a.createElement("span",null,a.a.createElement(S,{score:this.state.aIScore}))))}}]),n}(r.Component),k=t(9),C=t.n(k),N=t(10),R=t.n(N),I=function(e){return a.a.createElement(d,null,a.a.createElement("h1",null,"Tic Tac Toe Game"),a.a.createElement("p",null,"Play with an AI player who wins and never loses"),a.a.createElement("p",null,a.a.createElement("label",{className:R.a.Warning},"Note"),": Keep in mind that You'll be using ",a.a.createElement("strong",null,"X")," symbol."))},T=function(e){return a.a.createElement("div",{className:C.a.Layout},a.a.createElement(I,null),e.children)};var A=function(){return a.a.createElement("div",null,a.a.createElement(T,null,a.a.createElement(O,null)))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(a.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tic-tac-toe-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/tic-tac-toe-game","/service-worker.js");B?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(n,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.29f65d92.chunk.js.map