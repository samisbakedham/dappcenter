"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4363],{77042:function(e,n,t){var a=t(85893),i=t(9008),r=t.n(i),s=t(48349);n.Z=e=>{let{pageTitle:n}=e,{globalState:t,setGlobalState:i}=(0,s.j)(),p="".concat(n," || ").concat(t.siteData.projectName," Blockchain Utility Tool");return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:p}),(0,a.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,a.jsx)("meta",{name:"description",content:"".concat(t.siteData.projectName," Blockchain Utility Tool, token batch sender, nft batch sender, token generator.")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},34647:function(e,n,t){t.d(n,{p:function(){return a}});let a=[{inputs:[{internalType:"address",name:"initialOwner",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"burnBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"exists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mintBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newuri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}]},25619:function(e,n,t){t.d(n,{HM:function(){return d},Ky:function(){return g},Nb:function(){return w},Nd:function(){return T},Qp:function(){return b},Wb:function(){return l},bF:function(){return h},i1:function(){return v},iy:function(){return m},x$:function(){return o},xt:function(){return c},yX:function(){return f}});var a=t(37003),i=t(43417),r=t(70794),s=t(67619),p=t(16693),u=t(34647),y=t(76718);function d(e,n,t){if(!(n>0))return new r.Z(String(e)).toFixed(t);{let a=new r.Z(String(e)),i=new r.Z(String(10)).exponentiatedBy(String(n));return new r.Z(a.dividedBy(i)).toFixed(t)}}function o(e,n,t){if(!(n>0))return new r.Z(String(e)).toFixed(t);{let a=new r.Z(String(e)),i=new r.Z(String(10)).exponentiatedBy(String(n));return new r.Z(a.multipliedBy(i)).toFixed(t)}}let l=async(e,n,t,i)=>{try{return await (0,a.L)(y.config,{address:n,abi:p.Wo,functionName:"allowance",args:[e,t],chainId:Number(i)})}catch(e){return console.log(e),0}},c=async(e,n)=>{try{let t=await (0,a.L)(y.config,{address:e,abi:s.a,functionName:"commission",chainId:Number(n)});return console.log(t,typeof t,t.toString()),t.toString()}catch(e){return null}},m=async(e,n)=>{try{return(await (0,a.L)(y.config,{address:e,abi:s.a,functionName:"erc721commission",chainId:Number(n)})).toString()}catch(e){return null}},b=async(e,n)=>{try{return(await (0,a.L)(y.config,{address:e,abi:s.a,functionName:"erc1155commission",chainId:Number(n)})).toString()}catch(e){return null}},f=async(e,n,t)=>{try{return await (0,a.L)(y.config,{address:n,abi:p.Wo,functionName:"balanceOf",args:[e],chainId:Number(t)})}catch(e){return null}},T=async(e,n)=>{try{return await (0,i.s)(y.config,{address:e,chainId:n})}catch(e){return null}},g=async(e,n,t,i)=>{try{let r=await (0,a.L)(y.config,{address:n,abi:p.Hr,functionName:"isApprovedForAll",args:[e,t],chainId:Number(i)});return console.log(r,typeof r,r.toString()),r}catch(e){return null}},w=async(e,n,t)=>{try{return(await (0,a.L)(y.config,{address:n,abi:p.Hr,functionName:"balanceOf",args:[e],chainId:Number(t)})).toString()}catch(e){return null}},v=async(e,n,t)=>{try{let i=await (0,a.L)(y.config,{address:n,abi:u.p,functionName:"balanceOf",args:[e],chainId:Number(t)});return console.log(i),i.toString()}catch(e){return null}},h=async(e,n,t,i)=>{try{let r=await (0,a.L)(y.config,{address:n,abi:u.p,functionName:"isApprovedForAll",args:[e,t],chainId:Number(i)});return console.log(r,typeof r,r.toString()),r}catch(e){return null}}}}]);