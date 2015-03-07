/*!
 * avgrund 0.1
 * http://lab.hakim.se/avgrund
 * MIT licensed
 *
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */
var Avgrund=function(){function e(e){27===e.keyCode&&r()}function n(e){e.target===s&&r()}function t(t){document.addEventListener("keyup",e,!1),document.addEventListener("click",n,!1),document.addEventListener("touchstart",n,!1),c(m,b),u(m,"no-transition"),u(m,t),setTimeout(function(){c(m,"no-transition"),u(d,"avgrund-active")},0),b=t}function r(){document.removeEventListener("keyup",e,!1),document.removeEventListener("click",n,!1),document.removeEventListener("touchstart",n,!1),c(d,"avgrund-active"),c(m,"avgrund-popup-animate")}function a(){u(document.documentElement,"no-blur")}function u(e,n){e.className=e.className.replace(/\s+$/gi,"")+" "+n}function c(e,n){e.className=e.className.replace(n,"")}function o(e){return document.getElementById("p1").innerHTML=l[v],m=document.querySelector(e),u(m,"avgrund-popup-animate"),t(),this}function i(){r()}var d=document.documentElement,m=document.querySelector(".avgrund-popup-animate"),s=document.querySelector(".avgrund-cover"),b=null,l=["\u53ea\u8981\u6709\u5fc3\u4eba\u4eba\u90fd\u53ef\u4ee5\u662f\u98df\u795e<br>ps.\u5e79\u67b6\u5225\u5fd8\u4e86\u597d\u6298\u51f3\u3002","\u5be6\u6b72\u662f\u5f9e\u5abd\u5abd\u7684\u8eab\u9ad4\u88e1\u51fa\u4f86\u958b\u59cb\u7b97\u7684\uff0c\u865b\u6b72\u662f\u5f9e\u7238\u7238\u7684\u8eab\u9ad4\u88e1\u51fa\u4f86\u958b\u59cb\u7b97\u7684","\u5b85\uff1a\u6211\u7684\u4e3b\u6a5f\u677f\u6703\u55b5\u55b5\u53eb\u8036\u3002<br>\u5ba2\u670d\uff1a\u55b5\u55b5\u53eb\uff1f<br>\u5b85\uff1a\u5f88\u9577\u5f88\u9577\u7684\u55b5\u963f\uff0c\u4f60\u5b78\u4e00\u6b21\u3002<br>\u5ba2\u670d\uff1a\u55b5\uff5e\uff5e<br>\u5b85\uff1a\u5594\u5594\u5594 \u592a\u723d\u4e86\uff0c\u597d\u840c\u963f\u3002","\u6211\u8981\u5728\u4f60\u5c4c\u4e0a\u5beb\u500b\u6158\u5b57 \u5fc4...\u5beb\u4e0d\u4e0b\u4e86","\u66f9\u5b5f\u5fb7\u6709\u4e00\u79c1\u5b50\uff0c\u540d\u4e0d\u8a73\uff0c\u5b57\u723d\u5fb7<br>\u6027\u559c\u6b66\uff0c\u7cbe\u5404\u5f0f\u6b66\u85dd\uff0c\u53c8\u4ee5\u5c16\u5200\u70ba\u6700\u64c5<br>\u5176\u4f7f\u5c16\u5200\u6642\uff0c\u7136\u821e\u4e4b\u901f\u5947\u5feb\uff0c\u4e0d\u898b\u5200\u9ad4\uff0c\u53ea\u5f97\u5200\u8072\uff0c\u5982\u767e\u628a\u5c16\u5200\u547c\u562f\u800c\u904e\u3002<br>\u5f8c\u4eba\u7a31\u4e4b\u70ba\u300c\u66f9\u723d\u5fb7\uff0c\u5c16\u5200\u4e00\u767e\u5feb\u300d","\u7518\u5be7\u6709\u4e00\u6bcd\uff0c\u540d\u4e0d\u8a73\uff0c\u5b57\u4e0d\u8a73<br>\u5176\u6bcd\u6027\u559c\u6b66\uff0c\u7cbe\u5404\u5f0f\u6b66\u85dd\uff0c\u53c8\u4ee5\u4e00\u967d\u6307\u6700\u64c5<br>\u5176\u4f7f\u624b\u6307\u6642\uff0c\u624b\u52c1\u5f37\u97cc\uff0c\u6307\u529b\u975e\u51e1\uff0c\u4e0d\u898b\u624b\u9ad4\uff0c\u66f4\u7121\u6307\u5f71<br>\u7dca\u63e1\u4e94\u6307\uff0c\u4fbf\u80fd\u645c\u6bba\u731b\u7378\u3001\u76f4\u6417\u9285\u7246\u3002<br>\u5f8c\u4eba\u7a31\u4e4b\u70ba\u300c\u7518\u5be7\u5a18\uff0c\u63e1\u6307\u80fd\u6253\u7378\u7246\u300d","\u5973\u751f\u80f8\u90e8\u8d8a\u5c0f\uff0c\u813e\u6c23\u8d8a\u5dee\uff1f<br>\u662f\u8b02--\u6709\u5bb9\u5976\u5927 \u7aae\u80f8\u60e1\u6975","\u5510\u8a69\u57fa\u672c\u53ef\u7e3d\u7d50\u70ba\uff1a<br>\u7530\u5712\u591a\u5b85\u7537\u3001\u908a\u585e\u591a\u61a4\u9752\u3001<br>\u8a60\u53e4\u50b7\u4e0d\u8d77\u3001\u9001\u5225\u6eff\u6fc0\u60c5\u3002","\u5b8b\u8a5e\u57fa\u672c\u53ef\u7e3d\u7d50\u70ba\uff1a<br>\u5c0f\u8cc7\u559d\u82b1\u9152\u3001\u8001\u5175\u5750\u5e8a\u982d\u3001<br>\u77e5\u9752\u8a60\u53e4\u81ea\u52a9\u904a\u3001\u7687\u4e0a\u5bae\u4e2d\u6101\u3001<br>\u5269\u5973\u5b85\u5bb6\u88e1\u3001\u863f\u8389\u5ac1\u738b\u4faf\u3001<br>\u540d\u5a9b\u4e08\u592b\u6b7b\u5f97\u65e9\u3001\u7f8e\u7709\u5728\u9752\u6a13\u3002","\u8f15\u8f15\u6572\u9192\u6c89\u7761\u7684\u5fc3\u9748 \u6162\u6162\u5f35\u958b\u4f60\u7684\u773c\u775b<br>\u770b\u90a3\u5fd9\u788c\u7684\u897f\u5c4f\u662f\u5426\u4f9d\u7136 \u548c\u5bf6\u5091\u8b1b\u500b\u4e0d\u505c<br>\u6f94\u5e73\u4e0d\u89e3\u98a8\u60c5 \u5168\u90fd\u63a8\u7d66\u5916\u661f		--<\u660e\u5929\u6703\u66f4\u597d>","\u6700\u5f8c\u7684\u75bc\u611b<br>\u662f\u8173\u6253\u958b<br>\u4e0d\u8981\u4e00\u5f35\u96d9\u4eba\u5e8a\u4e2d\u9593\u9694\u8457\u67ef\u8cdc\u6d77		--\u674e\u8056\u5091<\u624b\u653e\u958b>",'\u6668\u904e\u5e02\uff0c\u5ffd\u89ba\u7518\u9178\u64b2\u9f3b\uff0c\u898b\u4e00\u8ca9\u6843\u674e\u8005\uff0c\u5f80\u554f\u4e4b\uff0c"\u6843\u674e\u4f55\u8005\u826f?"<br>"\u6843\u5473\u9178\u9999\uff0c\u674e\u5473\u7518\u751c\uff0c\u5404\u6709\u6ecb\u5473\uff0c\u7686\u70ba\u826f\u54c1\uff0c\u610f\u6b32\u70ba\u4f55?"<br>"\u5982\u6b64\uff0c\u5247\u7518\u674e\u826f\u3002"<br>\u8a9e\u7562\uff0c\u8ca9\u8005\u66b4\u8d77\u76f8\u6bc6\uff0c\u5176\u4e5f\u602a\u8036\u6b5f?	--<\u8001\u6b98\u904a\u8a18>','\u5fa9\u5411\u6771\uff0c\u898b\u4e00\u5546\u6e2f\uff0c\u7136\u5546\u8ca9\u7686\u91d1\u9aee\u78a7\u773c\uff0c\u6599\u662f\u6d77\u5916\u4f86\u671d\u4e4b\u82f1\u5409\u5229\u5546\u8ca9\u96c6\u6563\u6240\u5728\uff0c\u8236\u4f86\u7570\u5bf6\u773e\u591a\uff0c\u6b63\u76ee\u7729\u795e\u8ff7\u9593\uff0c\u7434\u8072\u50f9\u97ff\uff0c\u4f47\u807d\u4e4b\uff0c\u6216\u5982\u5c71\u58d1\u96c5\u79c0\uff0c\u6216\u5982\u6c34\u6f6d\u6de8\u8b10\uff0c\u6642\u60a0\u9060\u8f15\u63da\uff0c\u5fa9\u800c\u539a\u5be6\u51dd\u91cd\uff0c\u4ee4\u4eba\u795e\u99b3\uff0c\u6025\u5c0b\u7434\u8072\u4f86\u8655\uff0c\u898b\u4e00\u82f1\u5409\u5229\u5973\u5b50\u6b63\u81ea\u594f\u85dd\u8ca9\u7434\uff0c\u7576\u4e0b\u6587\u601d\u6cc9\u6e67\uff0c\u517c\u6709\u7d50\u8b58\u4e4b\u610f\uff0c\u65bc\u662f\u7a81\u51fa\u4eba\u7fa4\uff0c\u541f\u8a69\u5531\u548c:"\u5546\u5a25\u6276\u78a7\u66f2\uff0c\u79c0\u8b10\u60a0\u800c\u539a..."\uff0c\u8a69\u672a\u7adf\uff0c\u66f2\u9a5f\u65b7\uff0c\u4f46\u898b\u82f1\u5973\u795e\u8272\u9a5a\u8a1d\uff0c\u9023\u8072\u66f0\u8afe\uff0c\u6b63\u6697\u559c\u9593\uff0c\u537b\u898b\u6578\u540d\u82f1\u5546\u5de1\u5b98\u6012\u76ee\u800c\u4f86\uff0c\u5012\u62d6\u543e\u8eab\uff0c\u98fd\u4ee5\u8001\u62f3\u3002\u55df\u4e4e\uff0c\u5948\u4f55\u883b\u5937\u7d42\u7a76\u4e0d\u8b58\u8a69\u8a5e\u66f2\u8ce6\u4e4b\u7f8e...\u3002		--<\u8001\u6b98\u904a\u8a18>'],v=Math.floor(Math.random()*l.length);return d.className=d.className.replace(/\s+$/gi,"")+" avgrund-ready",{activate:t,deactivate:r,disableBlur:a,show:o,hide:i}}();