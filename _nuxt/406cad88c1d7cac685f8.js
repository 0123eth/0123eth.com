(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(e,t,r){"use strict";var n={name:"MainTitle",props:["text"]},o=r(6),component=Object(o.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mt-6 mb-3 text-xl text-center text-gray-500 font-mono uppercase"},[this._v("\n  "+this._s(this.text)+"\n")])}),[],!1,null,"1a5bd200",null);t.a=component.exports},194:function(e,t,r){var content=r(203);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("05f712d0",content,!0,{sourceMap:!1})},195:function(e,t,r){var content=r(205);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("761f898d",content,!0,{sourceMap:!1})},201:function(e,t,r){e.exports=r.p+"img/aa19858.svg"},202:function(e,t,r){"use strict";var n=r(194);r.n(n).a},203:function(e,t,r){(t=r(10)(!1)).push([e.i,".cp-info[data-v-7f7aadd8]{width:100%;padding:.75rem;border-color:#718096;border-left-width:4px;background-color:#f7fafc;font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;color:#718096;font-size:.875rem}.cp-info-success[data-v-7f7aadd8]{border-color:#38a169;background-color:#f0fff4;color:#38a169}.cp-info-error[data-v-7f7aadd8]{border-color:#e53e3e;background-color:#fff5f5;color:#e53e3e}.cp-info-info[data-v-7f7aadd8]{border-color:#3182ce;background-color:#ebf8ff;color:#3182ce}.cp-info-warn[data-v-7f7aadd8]{border-color:#dd6b20;background-color:#fffaf0;color:#dd6b20}.cp-info .main[data-v-7f7aadd8]{display:flex;align-items:baseline}.cp-info .main .avatar[data-v-7f7aadd8]{font-size:1.875rem}.cp-info .main .info[data-v-7f7aadd8]{margin-left:.75rem}.cp-info h2[data-v-7f7aadd8]{font-size:1.125rem;font-weight:700}.cp-info p[data-v-7f7aadd8]{margin-top:1rem;word-break:break-all}.cp-info h3[data-v-7f7aadd8]{margin-top:1.5rem;margin-left:.25rem;font-size:1rem;font-weight:700;word-wrap:break-word}",""]),e.exports=t},204:function(e,t,r){"use strict";var n=r(195);r.n(n).a},205:function(e,t,r){(t=r(10)(!1)).push([e.i,".tx-info[data-v-b0c1ee0a]{display:flex;color:#4a5568;font-size:.875rem;word-break:break-all}.tx-info-success[data-v-b0c1ee0a]{color:#38a169}.tx-info-error[data-v-b0c1ee0a]{color:#e53e3e}.tx-title[data-v-b0c1ee0a]{padding-top:.5rem;padding-bottom:.5rem;font-weight:700;text-align:center}.tx-labels[data-v-b0c1ee0a],.tx-title[data-v-b0c1ee0a]{font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.tx-labels[data-v-b0c1ee0a]{display:flex;background-color:#e2e8f0}.tx-labels div[data-v-b0c1ee0a]{flex:1 1 0%;padding:.25rem .5rem}.tx-info-success .tx-labels[data-v-b0c1ee0a]{background-color:#c6f6d5}.tx-info-error .tx-labels[data-v-b0c1ee0a]{background-color:#fed7d7}.tx-values[data-v-b0c1ee0a]{display:flex;background-color:#f7fafc}.tx-values div[data-v-b0c1ee0a]{flex:1 1 0%;border-color:#e2e8f0;border-right-width:1px;padding:.25rem .5rem;text-align:center}.tx-values div[data-v-b0c1ee0a]:last-child{border-right-width:0}.tx-info-success .tx-values[data-v-b0c1ee0a]{background-color:#f0fff4}.tx-info-error .tx-values[data-v-b0c1ee0a]{background-color:#fff5f5}.tx-info-success .tx-values div[data-v-b0c1ee0a]{border-color:#c6f6d5}.tx-info-error .tx-values div[data-v-b0c1ee0a]{border-color:#fed7d7}",""]),e.exports=t},206:function(e,t,r){var content=r(232);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("b9d2f700",content,!0,{sourceMap:!1})},207:function(e,t,r){var content=r(234);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("4a3d48ce",content,!0,{sourceMap:!1})},223:function(e,t,r){"use strict";var n={name:"TxInfo",props:["status","hash","blockNumber","gasUsed","confirmation"],computed:{fast:function(){return this.$store.state.fast},txInfoClassArr:function(){var e=["tx-info"];return"success"===this.status?e.push("tx-info-success"):"error"===this.status&&e.push("tx-info-error"),e},titleDisplay:function(){return 1===this.status?"Transaction SUCCESS":this.status>1?"Transaction ERROR":"Transaction INFO"},hashDisplay:function(){return this.hash?this.hash:"..."},blockNumberDisplay:function(){return this.blockNumber?this.blockNumber:"..."},gasUsedDisplay:function(){return this.gasUsed?this.gasUsed:"..."},confirmationDisplay:function(){return this.confirmation?this.confirmation:"..."}}},o=(r(204),r(6)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.hash,expression:"hash"}],class:e.txInfoClassArr},[r("div",{staticClass:"w-full"},[r("div",{staticClass:"tx-title"},[e._v(e._s(e.titleDisplay))]),e._v(" "),r("div",[e._m(0),e._v(" "),r("div",{staticClass:"tx-values"},[r("div",[r("a",{attrs:{href:e.fast.linkToTx(e.hash),target:"_blank"}},[e._v(e._s(e.hashDisplay))])])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.blockNumber||e.gasUsed||e.confirmation,expression:"blockNumber || gasUsed || confirmation"}]},[e._m(1),e._v(" "),r("div",{staticClass:"tx-values"},[r("div",[e._v(e._s(e.blockNumberDisplay))]),e._v(" "),r("div",[e._v(e._s(e.gasUsedDisplay))]),e._v(" "),r("div",[e._v(e._s(e.confirmationDisplay))])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tx-labels"},[t("div",[this._v("Tx hash")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tx-labels"},[t("div",[this._v("Block")]),this._v(" "),t("div",[this._v("Gas used")]),this._v(" "),t("div",[this._v("Confirmation")])])}],!1,null,"b0c1ee0a",null);t.a=component.exports},225:function(e,t,r){"use strict";var n={name:"Info",props:["status","title","message","tips"],computed:{infoClassArr:function(){var e=["cp-info"];return"success"===this.status?e.push("cp-info-success"):"error"===this.status?e.push("cp-info-error"):"info"===this.status?e.push("cp-info-info"):"warn"===this.status&&e.push("cp-info-warn"),e},titleDisplay:function(){return this.title?this.title:"success"===this.status?"Success":"error"===this.status?"Error":"warn"===this.status?"Warn":"Info"}}},o=(r(202),r(6)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.message,expression:"message"}]},[r("div",{class:e.infoClassArr},[r("div",{staticClass:"main"},["success"===e.status?r("div",{staticClass:"avatar"},[r("fa",{attrs:{icon:["fas","check-circle"]}})],1):"error"===e.status?r("div",{staticClass:"avatar"},[r("fa",{attrs:{icon:["fas","frog"]}})],1):"warn"===e.status?r("div",{staticClass:"avatar"},[r("fa",{attrs:{icon:["fas","exclamation-triangle"]}})],1):r("div",{staticClass:"avatar"},[r("fa",{attrs:{icon:["fas","info-circle"]}})],1),e._v(" "),r("div",{staticClass:"info"},[r("h2",[e._v(e._s(e.titleDisplay))]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.message,expression:"message"}]},[e._v(e._s(e.message))])])]),e._v(" "),r("h3",{directives:[{name:"show",rawName:"v-show",value:e.tips,expression:"tips"}]},[e._v(e._s(e.tips))])])])}),[],!1,null,"7f7aadd8",null);t.a=component.exports},226:function(e,t,r){"use strict";var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex justify-center"},[t("img",{staticClass:"w-1/4",attrs:{src:r(201),alt:"spinner"}})])}],o={name:"Spinner",props:["message"]},l=r(6),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.message,expression:"message"}]},[t("div",{staticClass:"px-3 pt-2 pb-4 flex flex-col\n    border-blue-600 border-l-4 bg-blue-100\n    font-mono text-blue-600 text-sm text-center break-words\n  "},[this._m(0),this._v(" "),t("div",{staticClass:"flex justify-center"},[t("div",{},[this._v(this._s(this.message))])])])])}),n,!1,null,"3d20ca79",null);t.a=component.exports},231:function(e,t,r){"use strict";var n=r(206);r.n(n).a},232:function(e,t,r){(t=r(10)(!1)).push([e.i,".cp-info[data-v-7869c252]{width:100%;padding:.75rem;border-color:#718096;border-left-width:4px;background-color:#f7fafc;font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;color:#718096;font-size:.875rem}.cp-info-success[data-v-7869c252]{border-color:#38a169;background-color:#f0fff4;color:#38a169}.cp-info .main[data-v-7869c252]{display:flex;align-items:baseline}.cp-info .main .avatar[data-v-7869c252]{font-size:1.875rem}.cp-info .main .info[data-v-7869c252]{margin-left:.75rem}.cp-info h2[data-v-7869c252]{font-size:1.125rem;font-weight:700}.cp-info p[data-v-7869c252],.cp-info p.no-prize[data-v-7869c252]{margin-top:1rem;word-break:break-all}.cp-info p.no-prize[data-v-7869c252]{color:#a0aec0}.cp-info h3[data-v-7869c252]{margin-top:1.5rem;margin-left:.25rem;font-size:1rem;font-weight:700;word-wrap:break-word}",""]),e.exports=t},233:function(e,t,r){"use strict";var n=r(207);r.n(n).a},234:function(e,t,r){(t=r(10)(!1)).push([e.i,".text-display-placeholder[data-v-4ee4fee5]{color:#cbd5e0}.push-group[data-v-4ee4fee5]{margin-top:1rem}.push-label[data-v-4ee4fee5]{margin-left:.25rem;margin-bottom:.5rem;display:block;text-transform:uppercase;letter-spacing:.025em;color:#718096;font-size:.75rem;font-weight:700}.push-label-error[data-v-4ee4fee5]{color:#e53e3e}.push-input[data-v-4ee4fee5]{display:block;padding:.75rem 1rem;width:100%;resize:none;background-color:#edf2f7;border-color:#e2e8f0;border-width:1px;border-radius:.25rem;color:#718096}.push-input[data-v-4ee4fee5]:focus{background-color:#fff;border-color:#cbd5e0}.push-input-error[data-v-4ee4fee5]{background-color:#fed7d7;border-color:#fc8181}.push-input-error[data-v-4ee4fee5]:focus{background-color:#fff5f5;border-color:#fc8181}.push-tip[data-v-4ee4fee5]{color:#a0aec0}.push-tip[data-v-4ee4fee5],.push-tip-error[data-v-4ee4fee5]{margin-top:.25rem;margin-left:.5rem;font-size:.75rem;word-wrap:break-word;font-style:italic}.push-tip-error[data-v-4ee4fee5]{color:#e53e3e;font-weight:700}.btn[data-v-4ee4fee5]{display:block;width:100%;margin-top:.25rem;margin-bottom:.25rem;font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.btn-ready[data-v-4ee4fee5]{padding:.5rem 1rem;background-color:#ff5b00;color:#fff;border-radius:.25rem;border-width:1px;border-color:transparent;font-size:.875rem}.btn-ready[data-v-4ee4fee5]:hover{background-color:transparent;color:#ff5b00;border-color:#ff5b00}.btn-push[data-v-4ee4fee5]{padding:.5rem 1rem;background-color:#ff5b00;color:#fff;border-radius:.25rem;border-width:1px;border-color:transparent;font-size:1.25rem}.btn-push[data-v-4ee4fee5]:hover{background-color:transparent;color:#ff5b00;border-color:#ff5b00}.btn-pushed[data-v-4ee4fee5]{display:block;border-radius:.25rem;background-color:#4299e1;padding:.5rem 1rem;color:#fff;text-align:center;font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.btn-pushed[data-v-4ee4fee5]:hover{background-color:#2b6cb0}",""]),e.exports=t},268:function(e,t,r){"use strict";r.r(t);r(88),r(45),r(35),r(20);var n,o=r(2),l=(r(89),r(47),r(14)),c=r.n(l),d=r(5),f=r(226),v=r(225),h=r(223),m={name:"MessagePushed",props:["pushed","cookie"]},x=(r(231),r(6)),w=Object(x.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.pushed,expression:"pushed"}]},[r("div",{staticClass:"cp-info cp-info-success"},[r("div",{staticClass:"main"},[r("div",{staticClass:"avatar"},[r("fa",{attrs:{icon:["fas","check-circle"]}})],1),e._v(" "),r("div",{staticClass:"info"},[r("h2",[e._v("Message pushed")]),e._v(" "),e.cookie?r("div",[123===e.cookie?r("div",[r("p",[e._v("\n              You got exactly\n              "),r("fa",{attrs:{icon:["fas","cookie-bite"]}}),e._v("\n              "+e._s(e.cookie)+" LCS.\n            ")],1),e._v(" "),e._m(0)]):e.cookie>99?r("div",[r("p",{staticClass:"no-prize"},[e._v("\n              And, you got\n              "),r("fa",{attrs:{icon:["fas","cookie-bite"]}}),e._v("\n              "+e._s(e.cookie)+" LCS.\n            ")],1),e._v(" "),r("p",[e._v("\n              If you meet 123 LCS after a push,\n              you will won 50% of the lucky cookies' prize.\n            ")])]):e._e()]):e._e()])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("span",{staticClass:"font-bold"},[this._v("Congratulations!")]),t("br"),this._v("\n              You won 50% of the lucky cookies' prize.\n            ")])}],!1,null,"7869c252",null).exports,_={name:"push-page",components:{MainTitle:r(193).a,MessagePushed:w,Spinner:f.a,TxInfo:h.a,Info:v.a},layout:"ab2",data:function(){return{showTitle:!0,showRules:!0,showPreview:!1,showForm:!1,timestampNow:0,timestampInterval:null,spinnerMessage:null,infoStatus:null,infoTitle:null,infoMessage:null,infoTips:null,msgPushed:!1,msgCookie:null,txStatus:null,txHash:null,txBlockNumber:null,txGasUsed:null,txConfirmation:null,nameInput:null,nameTips:null,nameMaxLength:null,nameError:null,adviserAccount:null,adviserInput:null,adviserTips:null,adviserMaxLength:null,adviserError:null,adviserVerified:null,textInput:null,textTips:null,textMaxLength:null,textError:null,pushButtonText:"PUSH",player:this.$store.state.player}},computed:{fn:function(){return d.a},fast:function(){return this.$store.state.fast},nameDisplay:function(){return this.player.name?this.player.name:this.nameInput?this.nameInput:"Your name"},textDisplay:function(){return this.textInput?this.textInput:"Write your m in the text-area below."},blockNumberDisplay:function(){return this.txBlockNumber?this.txBlockNumber:".."}},watch:{nameInput:function(e){this.nameInput=d.a.utf8Cut(e,this.nameMaxLength),this.nameTips=e?d.a.utf8Len(this.nameInput)+"/"+this.nameMaxLength+' bytes, hex: "'+d.a.web3Utils.utf8ToHex(this.nameInput)+'"':"Set a name for display on every message."},adviserInput:function(e){e?(this.adviserInput=d.a.inputEtherAddress(e),this.adviserInput=d.a.utf8Cut(this.adviserInput,this.adviserMaxLength),this.adviserInput.length<this.adviserMaxLength&&(this.adviserTips="Inputting...")):this.adviserTips="Input a valid key or player address."},textInput:function(e){this.textInput=d.a.utf8Cut(e.replace(/[\r\n]/g,""),this.textMaxLength),this.textTips=e?d.a.utf8Len(this.textInput)+"/"+this.textMaxLength+' bytes, hex: "'+d.a.web3Utils.utf8ToHex(this.textInput)+'"':"Write down something here, then push(send) it to the world!"}},mounted:(n=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.timestampInterval=window.setInterval(this.updateNowTimestamp,1e3);case 1:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),methods:{updateNowTimestamp:function(){this.timestampNow=(new Date).getTime()},resetInfo:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.infoStatus=null,e.infoTitle=null,e.infoMessage=null,e.infoTips=null;case 4:case"end":return t.stop()}}),t)})))()},resetTxInfo:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.txStatus=null,e.txHash=null,e.txBlockNumber=null,e.txGasUsed=null,e.txConfirmation=null;case 5:case"end":return t.stop()}}),t)})))()},resetForm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.nameInput="",e.nameTips="Set a name for display on every message.",e.nameMaxLength=18,e.nameError=null,e.$store.state.player.isPlayer){t.next=13;break}if(!(r=c.a.localStorage.getData("adviserSerial"))){t.next=12;break}return t.next=9,e.$store.state.fast.playerAt(r).then((function(e){n=e}));case 9:n.isPlayer&&(e.adviserInput=r,e.verifyAdviser()),t.next=13;break;case 12:e.adviserInput="";case 13:e.adviserTips="Input a valid key or player address.",e.adviserMaxLength=42,e.adviserError=null,e.adviserVerified=!1,e.textInput="",e.textTips="Write down something here, then push(send) it to the world!",e.textMaxLength=300,e.textError=null,e.pushButtonText="PUSH";case 22:case"end":return t.stop()}}),t)})))()},reset:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showRules=!1,e.showTitle=!0,e.showPreview=!0,e.showForm=!0,e.spinnerMessage=null,e.msgPushed=!1,e.msgCookie=null,t.next=9,e.resetInfo();case 9:return t.next=11,e.resetTxInfo();case 11:e.adviserVerified=!1,e.pushButtonText="PUSH";case 13:case"end":return t.stop()}}),t)})))()},readyToPush:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.reset();case 2:return t.next=4,e.resetForm();case 4:case"end":return t.stop()}}),t)})))()},aboutToPush:function(){this.resetInfo(),this.showPreview=!1,this.showForm=!1,this.spinnerMessage="Please auth the tx..."},verifyAdviser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.adviserVerified=!1,!d.a.web3Utils.isAddress(e.adviserInput)){t.next=7;break}return e.adviserError?e.adviserError="Verifying...":e.adviserTips="Verifying...",t.next=5,e.$store.state.fast.player(e.adviserInput).then((function(t){t.isPlayer?(e.adviserError=null,e.adviserAccount=t.account,t.name?e.adviserTips='The key address belongs to "'+t.name+'", it is AVAILABLE.':e.adviserTips="The key address is available.",e.adviserVerified=!0):(e.adviserAccount="0x0000000000000000000000000000000000000000",e.adviserError='"'+e.adviserInput+'" is NOT valid/available.',e.$refs.adviser.focus(),e.adviserVerified=!1)}));case 5:t.next=17;break;case 7:if(!d.a.isHex(e.adviserInput)){t.next=13;break}return e.adviserError?e.adviserError="Verifying...":e.adviserTips="Verifying...",t.next=11,e.$store.state.fast.playerAt(e.adviserInput).then((function(t){t.isPlayer?(e.adviserError=null,e.adviserAccount=t.account,t.name?e.adviserTips='The key belongs to "'+t.name+'", it is AVAILABLE.':e.adviserTips="The key is available.",e.adviserVerified=!0):(e.adviserAccount="0x0000000000000000000000000000000000000000",e.adviserError='"'+e.adviserInput+'" is NOT valid/available.',e.$refs.adviser.focus(),e.adviserVerified=!1)}));case 11:t.next=17;break;case 13:e.adviserAccount="0x0000000000000000000000000000000000000000",e.adviserError="Please enter a valid key or Ethereum address.",e.$refs.adviser.focus(),e.adviserVerified=!1;case 17:case"end":return t.stop()}}),t)})))()},adviserOnChange:function(){this.adviserInput?this.verifyAdviser():this.adviserError=null},textPreventEnter:function(e){e.preventDefault&&e.preventDefault()},pushMessage:function(){var e={from:this.$store.state.account,to:"0x1234567B172f040f45D7e924C0a7d088016191A6",value:d.a.web3Utils.toWei("0.123","ether"),gas:"4500000",data:d.a.web3Utils.utf8ToHex(this.textInput)};this.aboutToPush(),this.$store.state.web3().eth.sendTransaction(e).on("transactionHash",this.onTransactionHash).on("receipt",this.onReceipt).on("confirmation",this.onConfirmation).on("error",this.onError)},pushWithAdviser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.verifyAdviser();case 2:e.adviserVerified&&(r={from:e.$store.state.account,value:d.a.web3Utils.toWei("0.123","ether"),gas:"4500000"},e.aboutToPush(),e.$store.state.gameContract().methods.pushWithAdviser(d.a.web3Utils.utf8ToHex(e.textInput),e.adviserAccount,d.a.web3Utils.utf8ToHex(e.nameInput)).send(r).on("transactionHash",e.onTransactionHash).on("receipt",e.onReceipt).on("confirmation",e.onConfirmation).on("error",e.onError));case 3:case"end":return t.stop()}}),t)})))()},onTransactionHash:function(e){this.spinnerMessage="Broadcasting...",this.txHash=e},onReceipt:function(e){if(console.log('::: "onReceipt": receipt =>',e),this.spinnerMessage=null,this.txBlockNumber=e.blockNumber,this.txGasUsed=e.gasUsed,e.status){if(this.msgPushed=!0,this.txStatus="success",e.logs){console.log("::: onReceipt: logs");var t=!0,r=!1,n=void 0;try{for(var o,l=e.logs[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var c=o.value;"0x123456fdD46513126a65896a3Ae522e5D0D5A8f1"===c.address&&(this.msgCookie=d.a.web3Utils.hexToNumber(c.data))}}catch(e){r=!0,n=e}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}if(e.events.Transfer){console.log("::: onReceipt: events");var f=!0,v=!1,h=void 0;try{for(var m,x=e.events.Transfer[Symbol.iterator]();!(f=(m=x.next()).done);f=!0){var w=m.value;"0x123456fdD46513126a65896a3Ae522e5D0D5A8f1"===w.address&&(this.msgCookie=parseInt(w.returnValues.value))}}catch(e){v=!0,h=e}finally{try{f||null==x.return||x.return()}finally{if(v)throw h}}}}else this.txStatus="error"},onConfirmation:function(e){this.spinnerMessage=null,this.txConfirmation=e+"+"},onError:function(e,t){console.error("::: error =>",e),this.reset(),this.infoStatus="error",this.infoMessage=e.message,t&&this.onReceipt(t),4001===e.code?(this.infoTips="Please re-PUSH, and auth the tx...",this.pushButtonText="re-PUSH"):this.infoTips="Please retry..."}},head:function(){return{title:"Push"}}},y=(r(233),Object(x.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("main-title",{directives:[{name:"show",rawName:"v-show",value:e.showTitle,expression:"showTitle"}],attrs:{text:"Push message"}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showRules,expression:"showRules"}],staticClass:"the-rules mt-6"},[e._m(0),e._v(" "),r("div",{staticClass:"ru-accept"},[r("button",{staticClass:"btn-warm text-sm",on:{click:e.readyToPush}},[r("fa",{attrs:{icon:["fas","thumbs-up"]}}),e._v("\n          OKay, that's great!\n        ")],1)])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showPreview,expression:"showPreview"}],staticClass:"the-card my-6 mx-4"},[r("div",{staticClass:"tab"},[r("div",{staticClass:"label"},[e._v("\n          Message\n        ")]),e._v(" "),r("div",{staticClass:"sub"},[r("fa",{attrs:{icon:["fas","fingerprint"]}}),e._v("\n          #"+e._s(e.blockNumberDisplay)+"\n        ")],1)]),e._v(" "),r("div",{staticClass:"canvas"},[r("div",{staticClass:"the-player"},[r("div",{staticClass:"avatar"},[r("fa",{attrs:{icon:["fas","user-tie"]}})],1),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"name"},[e._v(e._s(e.nameDisplay))])]),e._v(" "),r("li",{staticClass:"account"},[e._v("\n              "+e._s(e.$store.state.player.account)+"\n            ")])])]),e._v(" "),r("div",{staticClass:"the-message-text mt-4",class:{"text-display-placeholder":!this.textInput}},[e._v("\n          "+e._s(e.textDisplay)+"\n        ")]),e._v(" "),r("div",{staticClass:"the-message-footer"},[r("span"),e._v(" "),r("span",[e._v(e._s(e.$moment(e.timestampNow).format("LLL")))])])])]),e._v(" "),r("spinner",{staticClass:"m-4",attrs:{message:e.spinnerMessage}}),e._v(" "),r("info",{staticClass:"m-4",attrs:{status:e.infoStatus,title:e.infoTitle,message:e.infoMessage,tips:e.infoTips}}),e._v(" "),r("message-pushed",{staticClass:"my-6 mx-6",attrs:{pushed:e.msgPushed,cookie:e.msgCookie}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.msgPushed,expression:"msgPushed"}],staticClass:"my-6 mx-6"},[r("div",{staticClass:"flex justify-between"},[r("nuxt-link",{staticClass:"w-full btn-pushed",attrs:{to:e.fast.linkToPlayer(e.$store.state.account)}},[r("fa",{attrs:{icon:["fas","hdd"]}}),e._v("\n          My messages\n        ")],1)],1),e._v(" "),r("div",{staticClass:"mt-2 bg-white"},[r("button",{staticClass:"w-full btn-pushed",on:{click:e.readyToPush}},[r("fa",{attrs:{icon:["fas","feather-alt"]}}),e._v("\n          Push another\n        ")],1)])]),e._v(" "),r("tx-info",{staticClass:"my-6 mx-6",attrs:{status:e.txStatus,hash:e.txHash,blockNumber:e.txBlockNumber,gasUsed:e.txGasUsed,confirmation:e.txConfirmation}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticClass:"mt-12 flex"},[r("div",{staticClass:"w-full"},[e.player.isPlayer?e._e():r("div",{staticClass:"push-group"},[r("label",{staticClass:"push-label",class:{"push-label-error":this.nameError},attrs:{for:"name"}},[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.nameInput,expression:"nameInput",modifiers:{trim:!0}}],ref:"nameInput",staticClass:"push-input placeholder-gray-500 focus:placeholder-gray-300",class:{"push-input-error":this.nameError},attrs:{id:"name",maxlength:e.nameMaxLength,placeholder:"Name"},domProps:{value:e.nameInput},on:{input:function(t){t.target.composing||(e.nameInput=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.nameError,expression:"nameError"}],staticClass:"push-tip-error"},[e._v(e._s(e.nameError))]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.nameError,expression:"!nameError"}],staticClass:"push-tip"},[e._v(e._s(e.nameTips))])]),e._v(" "),e.player.isPlayer?e._e():r("div",{staticClass:"push-group"},[r("label",{staticClass:"push-label",class:{"push-label-error":this.adviserError},attrs:{for:"key"}},[e._v("Key")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adviserInput,expression:"adviserInput",modifiers:{trim:!0}}],ref:"adviser",staticClass:"push-input placeholder-gray-500 focus:placeholder-gray-300",class:{"push-input-error":this.adviserError},attrs:{id:"key",maxlength:e.adviserMaxLength,placeholder:"0x..."},domProps:{value:e.adviserInput},on:{change:e.adviserOnChange,input:function(t){t.target.composing||(e.adviserInput=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.adviserError,expression:"adviserError"}],staticClass:"push-tip-error"},[e._v(e._s(e.adviserError))]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.adviserError,expression:"!adviserError"}],staticClass:"push-tip"},[e._v(e._s(e.adviserTips))])]),e._v(" "),r("div",{staticClass:"push-group"},[r("label",{staticClass:"push-label",class:{"push-label-error":this.textError},attrs:{for:"message"}},[e._v("Message")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.textInput,expression:"textInput",modifiers:{trim:!0}}],ref:"textInput",staticClass:"push-input h-32 placeholder-gray-500 focus:placeholder-gray-300",class:{"push-input-error":this.textError},attrs:{id:"message",maxlength:e.textMaxLength,placeholder:"..."},domProps:{value:e.textInput},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.textPreventEnter(t)},input:function(t){t.target.composing||(e.textInput=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.textError,expression:"textError"}],staticClass:"push-tip-error"},[e._v(e._s(e.textError))]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.textError,expression:"!textError"}],staticClass:"push-tip"},[e._v(e._s(e.textTips))])]),e._v(" "),r("div",{staticClass:"my-8"},[e.player.isPlayer?r("button",{staticClass:"btn btn-push",on:{click:e.pushMessage}},[r("fa",{attrs:{icon:["fas","paper-plane"]}}),e._v(" "+e._s(e.pushButtonText)+"\n          ")],1):e._e(),e._v(" "),e.player.isPlayer?e._e():r("button",{staticClass:"btn btn-push",on:{click:e.pushWithAdviser}},[r("fa",{attrs:{icon:["fas","paper-plane"]}}),e._v(" "+e._s(e.pushButtonText)+"\n          ")],1)])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("dl",[t("div",{staticClass:"ru-qa"},[t("dt",[this._v("Where messages will be stored?")]),this._v(" "),t("dd",[t("p",[this._v("\n              All the messages are permanent,\n              they will be store in the Ethereum blockchain.\n              Once a message is pushed, nobody can change it or erase.\n            ")])])]),this._v(" "),t("div",{staticClass:"ru-qa"},[t("dt",[this._v("Push, then win bonuses.")]),this._v(" "),t("dd",[t("p",[this._v("\n              Execute by the game contract on the Ethereum blockchain,\n              which is open-sourced, fair, honest, and without any controller.\n            ")])])])])}],!1,null,"4ee4fee5",null));t.default=y.exports}}]);