(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3441],{64681:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nftsender",function(){return t(2814)}])},58962:function(e,s,t){"use strict";var a=t(85893);t(67294);var l=t(53040),n=t(87796),r=t(45697),o=t.n(r);let c=e=>{let{pageTitle:s,currentPage:t,className:r,space:o}=e;return(0,a.jsxs)("div",{className:"w-full border-b border-gray-300 flex flex-col md:flex-row justify-between items-center h-24 md:h-16 px-4 md:px-8",children:[(0,a.jsx)(l.$,{className:"flex mb-4 md:mb-0",children:(0,a.jsx)(n.d,{children:s})}),(0,a.jsxs)(l.$,{className:"flex",children:[(0,a.jsx)(n.d,{children:"Home"}),(0,a.jsx)(n.d,{children:t||s})]})]})};c.propTypes={pageTitle:o().string.isRequired,currentPage:o().string,className:o().string,space:o().oneOf([1])},c.defaultProps={space:1}},92808:function(e,s,t){"use strict";var a=t(85893),l=t(67294),n=t(90290),r=t(1571);s.Z=function(e){let{label:s,placeholder:t,required:o,onChange:c,name:i,value:d,disabled:u,type:x}=e,[m,h]=(0,l.useState)(!1),{resolvedTheme:p}=(0,r.F)();return(0,a.jsxs)("div",{className:"col",children:[s&&(0,a.jsxs)("label",{className:"mt-4",style:{color:"dark"===p?"#ffffff":"#000000"},children:[s,(0,a.jsx)("span",{style:{color:"red"},children:o&&" *"})]}),(0,a.jsx)(n.Y,{type:x,onFocus:()=>h(!0),onBlur:()=>h(!1),placeholder:t,onChange:c,name:i,value:d,disabled:u,bordered:!0,fullWidth:!0,autoComplete:"off",style:{marginTop:"8px",height:"40px"}})]})}},2814:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return V}});var a=t(85893),l=t(67294),n=t(24031),r=t(92321),o=t(68551),c=t(23538),i=t(69553),d=t(51218),u=t(9134),x=t(676),m=t(65650),h=t(4831),p=t(5636),f=t(24238),v=t(56199),j=t(87570),N=t(52622),b=t(16693),g=t(34647),y=t(37003),k=t(92808),w=t(76718),S=e=>{let{disabled:s,currentNetwork:t,address:l,selectedToken:n,setSelectedToken:r,erc721:o}=e,c=async e=>{try{let[s,a]=await Promise.all([(0,y.L)(w.config,{address:e,abi:o?b.Hr:g.p,functionName:"name",chainId:t.chainId}),(0,y.L)(w.config,{address:e,abi:o?b.Hr:g.p,functionName:"symbol",chainId:t.chainId})]);r({address:e,value:e,tokenName:s&&s,symbol:a&&a,label:s||a,contractType:o?"ERC721":"ERC1155"})}catch(s){console.log(s),r({address:e,value:e,label:e,contractType:o?"ERC721":"ERC1155"})}};return(0,a.jsx)("div",{className:"w-full",onClick:()=>s&&u.Am.error("Please connect your wallet to choose NFT."),children:(0,a.jsx)(k.Z,{value:null==n?void 0:n.value,onChange:e=>c(e.target.value),placeholder:"NFT Contract Address",name:"sdlfknsd",autoComplete:!1},"".concat(null==t?void 0:t.chainId,"-").concat(l))})},A=t(70794),C=t(92526),E=t(41283),F=t(67619),T=t(25619),Z=t(8155),I=t(35111),_=t(88238),R=t(93399),Y=t(76369),H=t(41664),L=t.n(H),B=t(1571),P=t(34863),M=function(e){let{sendingInfo:s,currentNetwork:t,selectedToken:n,dataArray:r,setreCalculate:o}=e,[c,i]=(0,l.useState)(null),{resolvedTheme:d}=(0,B.F)(),[m,h]=(0,l.useState)(null),[p,f]=(0,l.useState)(null),[v,N]=(0,l.useState)(null),[g,y]=(0,l.useState)(!1),[k,w]=(0,l.useState)(null),[S,H]=(0,l.useState)(null);(0,_.Nr)(v,500);let[M,J]=(0,l.useState)(null),[D,V]=(0,l.useState)(null),[X,$]=(0,l.useState)(null),[q,O]=(0,l.useState)(0),[W,G]=(0,l.useState)(null),[z,Q]=(0,l.useState)(!1),[K,U]=(0,l.useState)(!1);(0,_.Nr)(M,1e3);let[ee,es]=(0,l.useState)(0),{data:et,writeContract:ea,error:el}=(0,C.S)(),{data:en,writeContract:er}=(0,C.S)(),{isLoading:eo,isSuccess:ec,error:ei}=(0,E.A)({hash:en}),[ed,eu]=(0,l.useState)(null);(0,l.useEffect)(()=>{eu(localStorage.getItem("ref"))},[]),(0,l.useEffect)(()=>{ec&&o(e=>e+1)},[ec,eo,ei,en]),(0,l.useEffect)(()=>{el&&u.Am.error("There is an error."),console.log(el,"senderror")},[el]);let{isLoading:ex,isSuccess:em,error:eh}=(0,E.A)({hash:et&&et});(0,l.useEffect)(()=>{console.log(et)},[et]),(0,l.useEffect)(()=>{(async()=>{em&&(ef("success"),O(e=>e+1)),eh&&(ef("error"),O(e=>e+1)),console.log(ex,em,eh)})()},[ex,em,eh]);let ep=()=>{Q(!0),ea({address:null==t?void 0:t.tokensenderAddress,abi:F.a,functionName:"sendErc721Tokens",args:[n.value,k[q],S[q],ed],value:D})};(0,l.useEffect)(()=>{q>0&&q<M&&z?ea({address:null==t?void 0:t.tokensenderAddress,abi:F.a,functionName:"sendErc721Tokens",args:[n.value,k[q],S[q],ed],value:D}):M>0&&q>=M&&(Q(!1),U(!0))},[q]),(0,l.useEffect)(()=>{et&&(W[q].txHash=et)},[et]);let ef=e=>{W[q].status=e};(0,l.useEffect)(()=>{if(s){let e=(0,T.x$)(Number.MAX_SAFE_INTEGER,n.decimals,0);h(e),f(new A.Z(s.approveAmount).toFixed(0)),N(e);let a=async()=>{V(await (0,T.iy)(t.tokensenderAddress,t.chainId))};i(e=>({...e,enoughBalance:Number(s.totalAmount)})),a()}},[null==s?void 0:s.approveAmount,t,n]),(0,l.useEffect)(()=>{y(null==s?void 0:s.allowance)},[s,null==s?void 0:s.allowance]),(0,l.useEffect)(()=>{if(g){let e=(0,x.JV)(s.addresses,Y.u.tokensenderArrayLength),t=(0,x.JV)(s.amounts,Y.u.tokensenderArrayLength);J(Math.floor(r.length/Y.u.tokensenderArrayLength)+1),G(e.map((s,a)=>({txNo:a+1,txHash:"",status:"",addresses:e[a],amounts:t[a]}))),w(e),H(t)}},[g,s,r]);let ev=()=>(console.log(s,n,X),Number(s.balance)>=s.totalAmount&&Number(s.nativeBalance)>=Number(X));return(0,l.useEffect)(()=>{D&&M&&$(Number((0,T.HM)(D,18,6))*M)},[D,M]),(0,l.useEffect)(()=>{console.log(s)},[s]),(0,a.jsxs)(a.Fragment,{children:[0==ee&&(0,a.jsxs)("div",{className:" max-w-6xl mx-auto",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3  gap-3 md:gap-12 mt-5",children:[(0,a.jsx)("div",{className:"col-4 text-center mt-3",children:(0,a.jsxs)("div",{style:{border:"1px solid green",borderRadius:"15px",padding:"10px",height:"100%",backgroundColor:"dark"==d?"#171F29":"#f5f8fa"},className:"text-break green-shadow",children:[(0,a.jsx)("h5",{className:"responsive-text",children:s.transactionsCount.toString()+" Tx"}),(0,a.jsxs)("p",{children:["You need to confirm"," "+s.transactionsCount.toString()+" ","transactions on your wallet."]})]})}),(0,a.jsx)("div",{className:"col-4 text-center mt-3",children:(0,a.jsxs)("div",{style:{border:"1px solid ".concat(Number(s.nativeBalance)>=X?"green":"red"),backgroundColor:"dark"==d?"#171F29":"#f5f8fa",borderRadius:"15px",padding:"10px",height:"100%"},className:"text-break ".concat(Number(s.nativeBalance)>=X?"green-shadow":"red-shadow"),children:[(0,a.jsx)("h5",{className:"responsive-text",children:s.nativeBalance+" "+(null==t?void 0:t.currencySymbol)}),(0,a.jsx)("p",{children:Number(s.nativeBalance)>=X?"You have enough ".concat(null==t?void 0:t.currencySymbol," balance for transaction"):"You have not enough ".concat(null==t?void 0:t.currencySymbol," balance for transaction")})]})}),(0,a.jsx)("div",{className:"col-4 text-center mt-3",children:(0,a.jsxs)("div",{style:{border:"1px solid ".concat((null==s?void 0:s.allowance)?"green":"red"),backgroundColor:"dark"==d?"#171F29":"#f5f8fa",borderRadius:"15px",padding:"10px",height:"100%"},className:"text-break ".concat((null==s?void 0:s.allowance)?"green-shadow":"red-shadow"),children:[(0,a.jsx)("h5",{className:"responsive-text",children:(null==s?void 0:s.allowance)?"No Allowance":"Enough Allowance"}),(0,a.jsx)("p",{children:(null==s?void 0:s.allowance)?"Allowance is given to Contract. You don't need to approvement you can directly start transactions.":"Allowance is not given to Contract please click button below and give allowance to contract."})]})})]}),(0,a.jsx)("div",{className:"form-inner mt-5",children:(0,a.jsx)(I.Z,{dataArray:r})}),s&&s.allowanceNeeded&&(0,a.jsx)("div",{className:"form-inner mt-5",children:(0,a.jsxs)("ul",{className:"list",style:{justifyContent:"space-around"},children:[(0,a.jsxs)("li",{className:"list__item",children:[(0,a.jsx)("input",{type:"radio",className:"radio-btn",name:"first",id:"a-opt1",checked:m===v,value:m,onChange:e=>{N(m)}}),(0,a.jsx)("label",{htmlFor:"a-opt1",className:"label",style:{display:"flex",justifyContent:"space-around"},children:(0,a.jsx)("span",{children:"Approve unlimited amount"})})]},"first"),(0,a.jsxs)("li",{className:"list__item",children:[(0,a.jsx)("input",{type:"radio",className:"radio-btn",name:"second",id:"a-opt12",value:p,checked:p===v,onChange:e=>{N(p)}}),(0,a.jsx)("label",{htmlFor:"a-opt12",className:"label",style:{display:"flex",justifyContent:"space-around"},children:(0,a.jsx)("span",{children:"Exact amount "+s.approveAmountWithoutDecimal})})]},"first1")]})})]}),1==ee&&(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsxs)("div",{className:"col-12 text-center",children:[(0,a.jsx)("h5",{className:"text-2xl mt-5",children:"You need to complete ".concat(M&&M," transactions")}),(0,a.jsx)("h5",{className:"text-2xl mt-5",children:"Fee ".concat(X&&X," ").concat(null==t?void 0:t.currencySymbol," + Network Fee")}),(0,a.jsx)("h5",{className:"text-xl mt-5",children:"You are currently completed ".concat(q&&q," of ").concat(M&&M)}),z&&(0,a.jsx)("h4",{className:"text-2xl",style:{color:"yellow"},children:"Transactions have been started, Please don't close this page and wait till the end!!!"}),K&&(0,a.jsx)("h4",{style:{color:"green"},className:"text-xl",children:(0,a.jsx)(L(),{href:"/",children:"All transactions completed please click here to go back."})})]})}),eo&&(0,a.jsx)("div",{className:"row mt-5",children:(0,a.jsx)("div",{className:"col-12 mt-3 mb-3",children:(0,a.jsx)(R.Z,{text:"  Your transaction sent to the blockchain. Clik here to see on block explorer.",link:t.blockExplorer+"/tx/"+en})})}),ei&&(0,a.jsx)("div",{className:" mt-5",children:(0,a.jsx)(j.Z,{text:"This token may not be able to be approved, or there is another error"})}),W&&(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12 mt-5 mb-3",children:W.map((e,s)=>"pending"===e.status?(0,a.jsx)(R.Z,{text:"Transaction number ".concat(e.txNo," is sending to the blockchain click here to see on block explorer"),link:t.blockExplorer+"/tx/"+et},e.txNo):"success"===e.status?(0,a.jsx)(R.Z,{text:"Transaction number ".concat(e.txNo," is confirmed"),link:t.blockExplorer+"/tx/"+e.txHash,status:"success",noAnimation:!0},e.txNo):"error"===e.status?(0,a.jsx)(R.Z,{text:"Transaction number ".concat(e.txNo," is failed and transaction is not confirmed"),link:t.blockExplorer+"/tx/"+e.txHash,status:"danger",noAnimation:!0},e.txNo):void 0)})}),(0,a.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"15px"},children:s&&(s.allowance?!z&&!K&&(0,a.jsx)(Z.A,{onClick:()=>0==ee?ev()?es(e=>e+1):u.Am.error("Not enough balance you can't proceed."):ep(),addclass:"style1",style:{width:"20%"},children:0==ee?"Next >>":"Send >"}):eo?(0,a.jsx)(P.c,{animation:"border",variant:"secondary"}):(0,a.jsx)(Z.A,{onClick:()=>{er({address:null==n?void 0:n.value,abi:b.Hr,functionName:"setApprovalForAll",args:[null==t?void 0:t.tokensenderAddress,!0]})},addclass:"style1",style:{width:"20%"},children:"Approve >>"}))})]})},J=function(e){let{sendingInfo:s,currentNetwork:t,selectedToken:n,dataArray:r,setreCalculate:o}=e,[c,i]=(0,l.useState)(null),{resolvedTheme:d}=(0,B.F)(),[m,h]=(0,l.useState)(null),[p,f]=(0,l.useState)(null),[v,N]=(0,l.useState)(null),[b,y]=(0,l.useState)(!1),[k,w]=(0,l.useState)(null),[S,H]=(0,l.useState)(null),[M,J]=(0,l.useState)(null);(0,_.Nr)(v,500);let[D,V]=(0,l.useState)(null),[X,$]=(0,l.useState)(null),[q,O]=(0,l.useState)(null),[W,G]=(0,l.useState)(0),[z,Q]=(0,l.useState)(null),[K,U]=(0,l.useState)(!1),[ee,es]=(0,l.useState)(!1),[et,ea]=(0,l.useState)(0),{data:el,writeContract:en,error:er}=(0,C.S)(),{data:eo,writeContract:ec}=(0,C.S)(),{isLoading:ei,isSuccess:ed,error:eu}=(0,E.A)({hash:eo}),[ex,em]=(0,l.useState)(null);(0,l.useEffect)(()=>{em(localStorage.getItem("ref"))},[]),(0,l.useEffect)(()=>{ed&&o(e=>e+1)},[ed,ei,eu,eo]);let{isLoading:eh,isSuccess:ep,error:ef}=(0,E.A)({hash:el&&el});(0,l.useEffect)(()=>{(async()=>{ep&&(ej("success"),G(e=>e+1)),ef&&(ej("error"),G(e=>e+1)),console.log(eh,ep,ef)})()},[eh,ep,ef]),(0,l.useEffect)(()=>{er&&u.Am.error("There is an error."),console.log(er,"senderror")},[er]);let ev=()=>{U(!0),en({address:null==t?void 0:t.tokensenderAddress,abi:F.a,functionName:"sendErc1155Tokens",args:[n.value,k[W],M[W],S[W],ex],value:X})};(0,l.useEffect)(()=>{W>0&&W<D&&K?en({address:null==t?void 0:t.tokensenderAddress,abi:F.a,functionName:"sendErc1155Tokens",args:[n.value,k[W],M[W],S[W],ex],value:X}):D>0&&W>=D&&(U(!1),es(!0))},[W]),(0,l.useEffect)(()=>{el&&(z[W].txHash=el)},[el]);let ej=e=>{z[W].status=e};(0,l.useEffect)(()=>{if(s){let e=(0,T.x$)(Number.MAX_SAFE_INTEGER,n.decimals,0);h(e),f(new A.Z(s.approveAmount).toFixed(0)),N(e);let a=async()=>{$(await (0,T.Qp)(t.tokensenderAddress,t.chainId))};i(e=>({...e,enoughBalance:Number(s.totalAmount)})),a()}},[null==s?void 0:s.approveAmount,t,n]),(0,l.useEffect)(()=>{y(null==s?void 0:s.allowance)},[s,null==s?void 0:s.allowance]),(0,l.useEffect)(()=>{if(b){let e=(0,x.JV)(s.addresses,Y.u.tokensenderArrayLength),t=(0,x.JV)(s.amounts,Y.u.tokensenderArrayLength),a=(0,x.JV)(s.ids,Y.u.tokensenderArrayLength);V(Math.floor(r.length/Y.u.tokensenderArrayLength)+1),Q(e.map((s,a)=>({txNo:a+1,txHash:"",status:"",addresses:e[a],amounts:t[a]}))),J(a),w(e),H(t)}},[b,s,r]);let eN=()=>(console.log(s,n),Number(s.nativeBalance)>=Number(q));return(0,l.useEffect)(()=>{X&&D&&O(Number((0,T.HM)(X,18,6))*D)},[X,D]),(0,a.jsxs)(a.Fragment,{children:[0==et&&(0,a.jsxs)("div",{className:"max-w-6xl mx-auto mt-5",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,a.jsx)("div",{className:"col-4 text-center mt-3",children:(0,a.jsxs)("div",{style:{border:"1px solid green",borderRadius:"15px",padding:"10px",height:"100%",backgroundColor:"dark"==d?"#171F29":"#f5f8fa"},className:"text-break green-shadow",children:[(0,a.jsx)("h5",{className:"responsive-text",children:s.transactionsCount.toString()+" Tx"}),(0,a.jsxs)("p",{children:["You need to confirm"," "+s.transactionsCount.toString()+" ","transactions on your wallet."]})]})}),(0,a.jsx)("div",{className:"col-4 text-center mt-3",children:(0,a.jsxs)("div",{style:{border:"1px solid ".concat(Number(s.nativeBalance)>=q?"green":"red"),backgroundColor:"dark"==d?"#171F29":"#f5f8fa",borderRadius:"15px",padding:"10px",height:"100%"},className:"text-break ".concat(Number(s.nativeBalance)>=q?"green-shadow":"red-shadow"),children:[(0,a.jsx)("h5",{className:"responsive-text",children:s.nativeBalance+" "+(null==t?void 0:t.currencySymbol)}),(0,a.jsx)("p",{children:Number(s.nativeBalance)>=q?"You have enough ".concat(null==t?void 0:t.currencySymbol," balance for transaction"):"You have not enough ".concat(null==t?void 0:t.currencySymbol," balance for transaction")})]})}),(0,a.jsx)("div",{className:"col-4 text-center mt-3",children:(0,a.jsxs)("div",{style:{border:"1px solid ".concat((null==s?void 0:s.allowance)?"green":"red"),backgroundColor:"dark"==d?"#171F29":"#f5f8fa",borderRadius:"15px",padding:"10px",height:"100%"},className:"text-break ".concat((null==s?void 0:s.allowance)?"green-shadow":"red-shadow"),children:[(0,a.jsx)("h5",{className:"responsive-text",children:(null==s?void 0:s.allowance)?"Enough Allowance":"No Allowance"}),(0,a.jsx)("p",{children:(null==s?void 0:s.allowance)?"Allowance is given to Contract. You don't need to approvement you can directly start transactions.":"Allowance is not given to Contract please click button below and give allowance to contract."})]})})]}),(0,a.jsx)("div",{className:"form-inner mt-3",children:(0,a.jsx)(I.Z,{dataArray:r})}),s&&s.allowanceNeeded&&(0,a.jsx)("div",{className:"form-inner mt-5",children:(0,a.jsxs)("ul",{className:"list",style:{justifyContent:"space-around"},children:[(0,a.jsxs)("li",{className:"list__item",children:[(0,a.jsx)("input",{type:"radio",className:"radio-btn",name:"first",id:"a-opt1",checked:m===v,value:m,onChange:e=>{N(m)}}),(0,a.jsx)("label",{htmlFor:"a-opt1",className:"label",style:{display:"flex",justifyContent:"space-around"},children:(0,a.jsx)("span",{children:"Approve unlimited amount"})})]},"first"),(0,a.jsxs)("li",{className:"list__item",children:[(0,a.jsx)("input",{type:"radio",className:"radio-btn",name:"second",id:"a-opt12",value:p,checked:p===v,onChange:e=>{N(p)}}),(0,a.jsx)("label",{htmlFor:"a-opt12",className:"label",style:{display:"flex",justifyContent:"space-around"},children:(0,a.jsx)("span",{children:"Exact amount "+s.approveAmountWithoutDecimal})})]},"first1")]})})]}),1==et&&(0,a.jsx)("div",{className:"row max-w-6xl mx-auto mt-10",children:(0,a.jsxs)("div",{className:"col-12 text-center ",children:[(0,a.jsx)("h5",{className:"text-2xl",children:"You need to complete ".concat(D&&D," transactions")}),(0,a.jsx)("h5",{className:"text-2xl mt-5",children:"Fee ".concat(q&&q," ").concat(null==t?void 0:t.currencySymbol," + Network Fee")}),(0,a.jsx)("h5",{className:"text-xl mt-5",children:"You are currently completed ".concat(W&&W," of ").concat(D&&D)}),K&&(0,a.jsx)("h4",{style:{color:"yellow"},children:"Transactions have been started, Please don't close this page and wait till the end!!!"}),ee&&(0,a.jsx)("h4",{className:"text-xl",style:{color:"green"},children:(0,a.jsx)(L(),{href:"/",children:"All transactions completed please click here to go back."})})]})}),ei&&(0,a.jsx)("div",{className:"row max-w-6xl mx-auto",children:(0,a.jsx)("div",{className:"col-12 mt-3 mb-3",children:(0,a.jsx)(R.Z,{text:"  Your transaction sent to the blockchain. Clik here to see on block explorer.",link:t.blockExplorer+"/tx/"+eo})})}),eu&&(0,a.jsx)("div",{className:"row max-w-6xl mx-auto",children:(0,a.jsx)(j.Z,{text:"This token may not be able to be approved, or there is another error"})}),z&&(0,a.jsx)("div",{className:"row max-w-6xl mx-auto",children:(0,a.jsx)("div",{className:"col-12 mt-3 mb-3",children:z.map((e,s)=>"pending"===e.status?(0,a.jsx)(R.Z,{text:"Transaction number ".concat(e.txNo," is sending to the blockchain click here to see on block explorer"),link:t.blockExplorer+"/tx/"+el},e.txNo):"success"===e.status?(0,a.jsx)(R.Z,{text:"Transaction number ".concat(e.txNo," is confirmed"),link:t.blockExplorer+"/tx/"+e.txHash,status:"success",noAnimation:!0},e.txNo):"error"===e.status?(0,a.jsx)(R.Z,{text:"Transaction number ".concat(e.txNo," is failed and transaction is not confirmed"),link:t.blockExplorer+"/tx/"+e.txHash,status:"danger",noAnimation:!0},e.txNo):void 0)})}),(0,a.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"15px"},children:s&&(s.allowance?!K&&!ee&&(0,a.jsx)(Z.A,{onClick:()=>0==et?eN()?ea(e=>e+1):u.Am.error("Not enough balance you can't proceed."):ev(),addclass:"style1",style:{width:"20%"},children:0==et?"Next >>":"Send >"}):ei?(0,a.jsx)(P.c,{animation:"border",variant:"secondary"}):(0,a.jsx)(Z.A,{onClick:()=>{ec({address:null==n?void 0:n.value,abi:g.p,functionName:"setApprovalForAll",args:[null==t?void 0:t.tokensenderAddress,!0]})},addclass:"style1",style:{width:"20%"},children:"Approve >>"}))})]})};t(58962);var D=t(77042),V=function(){let{address:e,isConnected:s}=(0,r.m)(),t=(0,o.x)(),{resolvedTheme:b}=(0,B.F)(),[g,y]=(0,l.useState)(null),[k,A]=(0,l.useState)(!0),[C,E]=(0,l.useState)(!1),[F,I]=(0,l.useState)(""),[_,R]=(0,l.useState)([]),[Y,H]=(0,l.useState)([]),[L,V]=(0,l.useState)([]),[X,$]=(0,l.useState)(null),[q,O]=(0,l.useState)(!1),[W,G]=(0,l.useState)([]),[z,Q]=(0,l.useState)(null),[K,U]=(0,l.useState)(0),[ee,es]=(0,l.useState)(null),[et,ea]=(0,l.useState)(!1),[el,en]=(0,l.useState)(0),er=(0,l.useRef)(),eo=(0,l.useRef)(),{chains:ec,error:ei,isLoading:ed,pendingChainId:eu,switchChain:ex}=(0,c.o)();(0,l.useEffect)(()=>{let e=F.split(/\r?\n/).length;var s=[];for(let t=0;t<e;t++)s.push(t+1);R(s)},[F]);let{data:em,isError:eh,isLoading:ep}=(0,i.F)({chainId:(null==g?void 0:g.chainId)||1,watch:!0}),[ef,ev]=(0,l.useState)(null);(0,l.useEffect)(()=>{em&&(console.log(em),ev(Number((0,T.HM)(em,9,2))))},[em]);let ej=e=>n.Z.find(s=>s.chainId==e),eN=async e=>{try{await ex({chainId:e})}catch(e){u.Am.error("Please confirm network change")}};(0,l.useEffect)(()=>{(()=>{if(s&&t){let e=ej(t);y(e),console.log(e,"currentNetwork")}else y(n.Z[0])})()},[t,s]),(0,l.useEffect)(()=>{(0,d.E)(w.config,{onChange(e){try{if(t&&s&&e){let s=ej(e);y(s)}else y(null)}catch(e){}}})()},[t]),(0,l.useEffect)(()=>{g&&t&&g.chainId!=t&&(console.log(t),eN(g.chainId))},[g]);let eb=async()=>{if(!z){u.Am.error("Please select a token to send");return}k?(0,x.Y_)(F,H,V,$,Y,L,O,I,G)&&(ea(!0),O(!0)):(0,x.xj)(F,H,V,$,Y,L,O,I,G)&&(ea(!0),O(!0))};return(0,l.useEffect)(()=>{et&&(null==X?void 0:X.length)>0&&g&&(k?(0,x.cf)(O,z,X,U,e,H,es,g,ee):(0,x.Jq)(O,z,X,U,e,H,es,g,ee))},[et,X,null==z?void 0:z.value,null==g?void 0:g.chainId]),(0,l.useEffect)(()=>{et&&(null==z?void 0:z.value)&&(null==X?void 0:X.length)&&g.chainId&&ee&&(null==ee?void 0:ee.totalAmount)&&(O(!1),ea(!1),U(e=>e+1))},[et,null==X?void 0:X.length,null==z?void 0:z.value,g,ee]),(0,l.useEffect)(()=>{el>0&&(k?(0,x.cf)(O,z,X,U,e,H,es,g,ee):(0,x.Jq)(O,z,X,U,e,H,es,g,ee))},[el,k]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D.Z,{pageTitle:"Nft Sender"}),(0,a.jsx)("div",{className:"container mx-auto mx-auto p-6 md:p-0",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:(0,a.jsxs)("div",{className:"w-full",children:[0==K&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.Z,{currentNetwork:g,setCurrentNetwork:y,isConnected:s,chain:t}),(0,a.jsxs)("div",{className:"space-y-4 max-w-6xl mx-auto",children:[(0,a.jsxs)("div",{className:"mt-5 mb-3",children:[(0,a.jsxs)("div",{className:"flex flex-wrap mx-2",children:[(0,a.jsxs)("div",{className:"w-9/12 px-2 mb-2",children:[(0,a.jsx)(f.Z,{title:"Please past select your nft from list or past contract address.",id:"tokencontracttooltip",text:"NFT Contract Address",theme:b}),(0,a.jsx)(S,{disabled:!s,currentNetwork:g,address:e,selectedToken:z,setSelectedToken:Q,erc721:k})]}),(0,a.jsxs)("div",{className:"w-3/12 px-2 mb-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)(f.Z,{title:"You can choose ERC721 or ERC1155 NFT's",id:"deflationary",text:k?"ERC721":"ERC1155",theme:b})}),(0,a.jsx)("div",{children:(0,a.jsx)(m.Z,{checked:k,onChange:()=>A(e=>!e)})})]})]}),(0,a.jsxs)("div",{className:"flex flex-wrap -mx-2",children:[(0,a.jsx)("div",{className:"w-full md:w-1/2 mt-3",children:(0,a.jsx)("fieldset",{className:"block",children:(0,a.jsx)("div",{className:"p-4  rounded-md",children:(0,a.jsx)("div",{className:"relative p-4  rounded-md",children:(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)("div",{className:"p-4 border-dashed border-2 border-gray-400 rounded-md cursor-pointer",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("input",{name:"file",id:"file",type:"file",className:"inputfile","data-multiple-caption":"{count} files selected",onChange:e=>(0,p.Z)(e,I),style:{display:"none"},accept:".csv"}),(0,a.jsxs)("label",{htmlFor:"file",title:"No File Choosen",children:[(0,a.jsx)("i",{className:"feather-upload"}),(0,a.jsx)("span",{className:"text-center",children:"Choose a File"}),(0,a.jsxs)("p",{className:"text-center mt--10",children:["Comma Seperated .csv files",(0,a.jsx)("br",{})," Allowed"]})]})]})})})})})})}),(0,a.jsx)("div",{className:"w-full md:w-1/2 px-2 mt-3 flex items-center justify-center ",children:(0,a.jsx)("p",{className:"cursor-pointer mt-4 text-lg hover:text-xl",onClick:()=>E(!0),children:"Show Example List"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-wrap mx-2 border border-gray-700 rounded-lg",children:[(0,a.jsx)("div",{className:"w-1/12 text-center overflow-auto border-r border-gray-700 p-1 line-count",style:{height:"300px"},ref:eo,children:_&&_.map((e,s)=>(0,a.jsxs)("span",{style:{color:(W.includes(s)||L.flat().includes(s))&&"red"},children:[e,(0,a.jsx)("br",{})]},e))}),(0,a.jsx)("div",{className:"w-11/12",children:(0,a.jsx)("textarea",{style:{height:"300px",resize:"none",margin:0,padding:"5px",width:"100%",borderRadius:0},rows:8,onScroll:()=>{eo.current&&(eo.current.scrollTop=er.current.scrollTop)},ref:er,className:"custom-textarea lined",id:"lined",value:F,onChange:e=>{I(e.target.value)}})})]}),L.length>0&&!k&&(0,a.jsx)("div",{className:"mt-5",children:(0,a.jsx)("div",{className:"form-inner",children:(0,a.jsxs)("ul",{className:"flex justify-around",children:[(0,a.jsxs)("div",{className:"input-box pb--20 rn-check-box",onClick:()=>(0,x.Hv)(L,X,I,V,$,H),children:[(0,a.jsx)("input",{className:"rn-check-box-input",type:"checkbox",id:"putonsale"}),(0,a.jsx)("label",{className:"rn-check-box-label",htmlFor:"putonsale",children:"Merge Amounts"})]})," ",(0,a.jsxs)("div",{className:"input-box pb--20 rn-check-box",onClick:()=>(0,x.p0)(L,X,I,V,$,H),children:[(0,a.jsx)("input",{className:"rn-check-box-input",type:"checkbox",id:"putonsale1"}),(0,a.jsx)("label",{className:"rn-check-box-label",htmlFor:"putonsale",children:"Remove Duplicates"})]})]})})}),Y&&Y.map(e=>(0,a.jsx)("div",{className:"col-md-12 mt-3 mb-3",children:(0,a.jsx)(j.Z,{text:e.message})},e.message)),L&&L.map((e,s)=>(0,a.jsx)("div",{className:"col-md-12 mt-3 mb-3",children:k?(0,a.jsx)(j.Z,{text:"Duplicate token Id's found on lines ".concat(e.map(e=>e+1))}):(0,a.jsx)(j.Z,{text:"Duplicate token Address and Id's found on lines ".concat(e.map(e=>e+1))})},s)),(0,a.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"15px"},children:s?q?(0,a.jsx)(P.c,{animation:"border"}):(0,a.jsx)(Z.A,{onClick:eb,addclass:"style1",children:"Next Step >>"}):(0,a.jsx)(N.Z,{})})]})]}),1==K&&(0,a.jsx)(a.Fragment,{children:k?(0,a.jsx)(M,{sendingInfo:ee,currentNetwork:g,selectedToken:z,dataArray:X,setreCalculate:en}):(0,a.jsx)(J,{sendingInfo:ee,currentNetwork:g,selectedToken:z,dataArray:X,setreCalculate:en})})]})})}),(0,a.jsx)(h.Z,{show:C,handleClose:()=>{E(!1)},erc721:k?"ERC721":"ERC1155"})]})}}},function(e){e.O(0,[9585,9598,4102,2770,7341,1664,3115,3040,5287,8238,6490,9913,4363,725,2888,9774,179],function(){return e(e.s=64681)}),_N_E=e.O()}]);