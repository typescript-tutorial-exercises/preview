"use strict";define("vs/basic-languages/restructuredtext/restructuredtext",["require","require"],e=>(()=>{var e,n=Object.defineProperty,s=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,o=(e,o,r,l)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let a of t(o))i.call(e,a)||a===r||n(e,a,{get:()=>o[a],enumerable:!(l=s(o,a))||l.enumerable});return e},r={};((e,s)=>{for(var t in s)n(e,t,{get:s[t],enumerable:!0})})(r,{conf:()=>l,language:()=>a});var l={brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:RegExp("^\\s*<!--\\s*#?region\\b.*-->"),end:RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")}}},a={defaultToken:"",tokenPostfix:".rst",control:/[\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],alphanumerics:/[A-Za-z0-9]/,simpleRefNameWithoutBq:/(?:@alphanumerics[-_+:.]*@alphanumerics)+|(?:@alphanumerics+)/,simpleRefName:/(?:`@phrase`|@simpleRefNameWithoutBq)/,phrase:/@simpleRefNameWithoutBq(?:\s@simpleRefNameWithoutBq)*/,citationName:/[A-Za-z][A-Za-z0-9-_.]*/,blockLiteralStart:/(?:[!"#$%&'()*+,-./:;<=>?@\[\]^_`{|}~]|[\s])/,precedingChars:/(?:[ -:/'"<([{])/,followingChars:/(?:[ -.,:;!?/'")\]}>]|$)/,punctuation:/(=|-|~|`|#|"|\^|\+|\*|:|\.|'|_|\+)/,tokenizer:{root:[[/^(@punctuation{3,}$){1,1}?/,"keyword"],[/^\s*([\*\-+‣•]|[a-zA-Z0-9]+\.|\([a-zA-Z0-9]+\)|[a-zA-Z0-9]+\))\s/,"keyword"],[/([ ]::)\s*$/,"keyword","@blankLineOfLiteralBlocks"],[/(::)\s*$/,"keyword","@blankLineOfLiteralBlocks"],{include:"@tables"},{include:"@explicitMarkupBlocks"},{include:"@inlineMarkup"}],explicitMarkupBlocks:[{include:"@citations"},{include:"@footnotes"},[/^(\.\.\s)(@simpleRefName)(::\s)(.*)$/,[{token:"",next:"subsequentLines"},"keyword","",""]],[/^(\.\.)(\s+)(_)(@simpleRefName)(:)(\s+)(.*)/,[{token:"",next:"hyperlinks"},"","","string.link","","","string.link"]],[/^((?:(?:\.\.)(?:\s+))?)(__)(:)(\s+)(.*)/,[{token:"",next:"subsequentLines"},"","","","string.link"]],[/^(__\s+)(.+)/,["","string.link"]],[/^(\.\.)( \|)([^| ]+[^|]*[^| ]*)(\| )(@simpleRefName)(:: .*)/,[{token:"",next:"subsequentLines"},"","string.link","","keyword",""],"@rawBlocks"],[/(\|)([^| ]+[^|]*[^| ]*)(\|_{0,2})/,["","string.link",""]],[/^(\.\.)([ ].*)$/,[{token:"",next:"@comments"},"comment"]]],inlineMarkup:[{include:"@citationsReference"},{include:"@footnotesReference"},[/(@simpleRefName)(_{1,2})/,["string.link",""]],[/(`)([^<`]+\s+)(<)(.*)(>)(`)(_)/,["","string.link","","string.link","","",""]],[/\*\*([^\\*]|\*(?!\*))+\*\*/,"strong"],[/\*[^*]+\*/,"emphasis"],[/(``)((?:[^`]|\`(?!`))+)(``)/,["","keyword",""]],[/(__\s+)(.+)/,["","keyword"]],[/(:)((?:@simpleRefNameWithoutBq)?)(:`)([^`]+)(`)/,["","keyword","","",""]],[/(`)([^`]+)(`:)((?:@simpleRefNameWithoutBq)?)(:)/,["","","","keyword",""]],[/(`)([^`]+)(`)/,""],[/(_`)(@phrase)(`)/,["","string.link",""]]],citations:[[/^(\.\.\s+\[)((?:@citationName))(\]\s+)(.*)/,[{token:"",next:"@subsequentLines"},"string.link","",""]]],citationsReference:[[/(\[)(@citationName)(\]_)/,["","string.link",""]]],footnotes:[[/^(\.\.\s+\[)((?:[0-9]+))(\]\s+.*)/,[{token:"",next:"@subsequentLines"},"string.link",""]],[/^(\.\.\s+\[)((?:#@simpleRefName?))(\]\s+)(.*)/,[{token:"",next:"@subsequentLines"},"string.link","",""]],[/^(\.\.\s+\[)((?:\*))(\]\s+)(.*)/,[{token:"",next:"@subsequentLines"},"string.link","",""]]],footnotesReference:[[/(\[)([0-9]+)(\])(_)/,["","string.link","",""]],[/(\[)(#@simpleRefName?)(\])(_)/,["","string.link","",""]],[/(\[)(\*)(\])(_)/,["","string.link","",""]]],blankLineOfLiteralBlocks:[[/^$/,"","@subsequentLinesOfLiteralBlocks"],[/^.*$/,"","@pop"]],subsequentLinesOfLiteralBlocks:[[/(@blockLiteralStart+)(.*)/,["keyword",""]],[/^(?!blockLiteralStart)/,"","@popall"]],subsequentLines:[[/^[\s]+.*/,""],[/^(?!\s)/,"","@pop"]],hyperlinks:[[/^[\s]+.*/,"string.link"],[/^(?!\s)/,"","@pop"]],comments:[[/^[\s]+.*/,"comment"],[/^(?!\s)/,"","@pop"]],tables:[[/\+-[+-]+/,"keyword"],[/\+=[+=]+/,"keyword"]]}};return e=r,o(n({},"__esModule",{value:!0}),e)})());