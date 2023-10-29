"use strict";define("vs/language/json/jsonMode",["require","require"],e=>(()=>{var t,n,r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var c=(_=function(t){if(void 0!==e)return e.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')},void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(_,{get:(t,n)=>(void 0!==e?e:t)[n]}):_),d=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))u.call(e,s)||s===n||i(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},l=(e,t,n)=>(n=null!=e?r(s(e)):{},d(!t&&e&&e.__esModule?n:i(n,"default",{value:e,enumerable:!0}),e));var g=(b=(e,t)=>{var n=l(c("vs/editor/editor.api"));t.exports=n},()=>(k||b((k={exports:{}}).exports,k),k.exports)),f={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(f,{CompletionAdapter:()=>eR,DefinitionAdapter:()=>eN,DiagnosticsAdapter:()=>eT,DocumentColorAdapter:()=>eB,DocumentFormattingEditProvider:()=>eK,DocumentHighlightAdapter:()=>eO,DocumentLinkAdapter:()=>ez,DocumentRangeFormattingEditProvider:()=>eq,DocumentSymbolAdapter:()=>eH,FoldingRangeAdapter:()=>e$,HoverAdapter:()=>eL,ReferenceAdapter:()=>eU,RenameAdapter:()=>eV,SelectionRangeAdapter:()=>eQ,WorkerManager:()=>p,fromPosition:()=>eD,fromRange:()=>eM,setupMode:()=>e5,toRange:()=>eP,toTextEdit:()=>ej});var h={};C=h,w=l(g()),d(C,w,"default"),y&&d(y,w,"default");var p=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=h.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then(e=>{t=e}).then(t=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(e=>t)}};!function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647}(E||(E={})),!function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(A||(A={})),!function(e){e.create=function(e,t){return e===Number.MAX_VALUE&&(e=A.MAX_VALUE),t===Number.MAX_VALUE&&(t=A.MAX_VALUE),{line:e,character:t}};e.is=function(e){return eI.objectLiteral(e)&&eI.uinteger(e.line)&&eI.uinteger(e.character)}}(x||(x={})),!function(e){e.create=function(e,t,n,r){if(eI.uinteger(e)&&eI.uinteger(t)&&eI.uinteger(n)&&eI.uinteger(r))return{start:x.create(e,t),end:x.create(n,r)};if(x.is(e)&&x.is(t))return{start:e,end:t};throw Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")};e.is=function(e){return eI.objectLiteral(e)&&x.is(e.start)&&x.is(e.end)}}(I||(I={})),!function(e){e.create=function(e,t){return{uri:e,range:t}};e.is=function(e){return eI.defined(e)&&I.is(e.range)&&(eI.string(e.uri)||eI.undefined(e.uri))}}(S||(S={})),!function(e){e.create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}};e.is=function(e){return eI.defined(e)&&I.is(e.targetRange)&&eI.string(e.targetUri)&&(I.is(e.targetSelectionRange)||eI.undefined(e.targetSelectionRange))&&(I.is(e.originSelectionRange)||eI.undefined(e.originSelectionRange))}}(T||(T={})),!function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}};e.is=function(e){return eI.numberRange(e.red,0,1)&&eI.numberRange(e.green,0,1)&&eI.numberRange(e.blue,0,1)&&eI.numberRange(e.alpha,0,1)}}(R||(R={})),!function(e){e.create=function(e,t){return{range:e,color:t}};e.is=function(e){return I.is(e.range)&&R.is(e.color)}}(D||(D={})),!function(e){e.create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}};e.is=function(e){return eI.string(e.label)&&(eI.undefined(e.textEdit)||V.is(e))&&(eI.undefined(e.additionalTextEdits)||eI.typedArray(e.additionalTextEdits,V.is))}}(M||(M={})),!function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(P||(P={})),!function(e){e.create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return eI.defined(n)&&(o.startCharacter=n),eI.defined(r)&&(o.endCharacter=r),eI.defined(i)&&(o.kind=i),o};e.is=function(e){return eI.uinteger(e.startLine)&&eI.uinteger(e.startLine)&&(eI.undefined(e.startCharacter)||eI.uinteger(e.startCharacter))&&(eI.undefined(e.endCharacter)||eI.uinteger(e.endCharacter))&&(eI.undefined(e.kind)||eI.string(e.kind))}}(j||(j={})),!function(e){e.create=function(e,t){return{location:e,message:t}};e.is=function(e){return eI.defined(e)&&S.is(e.location)&&eI.string(e.message)}}(L||(L={})),!function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(F||(F={})),!function(e){e.Unnecessary=1,e.Deprecated=2}(O||(O={})),(N||(N={})).is=function(e){return null!=e&&eI.string(e.href)},!function(e){e.create=function(e,t,n,r,i,o){var a={range:e,message:t};return eI.defined(n)&&(a.severity=n),eI.defined(r)&&(a.code=r),eI.defined(i)&&(a.source=i),eI.defined(o)&&(a.relatedInformation=o),a};e.is=function(e){var t;return eI.defined(e)&&I.is(e.range)&&eI.string(e.message)&&(eI.number(e.severity)||eI.undefined(e.severity))&&(eI.integer(e.code)||eI.string(e.code)||eI.undefined(e.code))&&(eI.undefined(e.codeDescription)||eI.string(null===(t=e.codeDescription)||void 0===t?void 0:t.href))&&(eI.string(e.source)||eI.undefined(e.source))&&(eI.undefined(e.relatedInformation)||eI.typedArray(e.relatedInformation,L.is))}}(W||(W={})),!function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return eI.defined(n)&&n.length>0&&(i.arguments=n),i};e.is=function(e){return eI.defined(e)&&eI.string(e.title)&&eI.string(e.command)}}(U||(U={})),!function(e){e.replace=function(e,t){return{range:e,newText:t}};e.insert=function(e,t){return{range:{start:e,end:e},newText:t}};e.del=function(e){return{range:e,newText:""}};e.is=function(e){return eI.objectLiteral(e)&&eI.string(e.newText)&&I.is(e.range)}}(V||(V={})),!function(e){e.create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r};e.is=function(e){return void 0!==e&&eI.objectLiteral(e)&&eI.string(e.label)&&(eI.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(eI.string(e.description)||void 0===e.description)}}(H||(H={})),(z||(z={})).is=function(e){return"string"==typeof e},!function(e){e.replace=function(e,t,n){return{range:e,newText:t,annotationId:n}};e.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}};e.del=function(e,t){return{range:e,newText:"",annotationId:t}};e.is=function(e){return V.is(e)&&(H.is(e.annotationId)||z.is(e.annotationId))}}(K||(K={})),!function(e){e.create=function(e,t){return{textDocument:e,edits:t}};e.is=function(e){return eI.defined(e)&&Y.is(e.textDocument)&&Array.isArray(e.edits)}}(q||(q={})),!function(e){e.create=function(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r};e.is=function(e){return e&&"create"===e.kind&&eI.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||eI.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||eI.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||z.is(e.annotationId))}}(X||(X={})),!function(e){e.create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i};e.is=function(e){return e&&"rename"===e.kind&&eI.string(e.oldUri)&&eI.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||eI.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||eI.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||z.is(e.annotationId))}}(B||(B={})),!function(e){e.create=function(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r};e.is=function(e){return e&&"delete"===e.kind&&eI.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||eI.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||eI.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||z.is(e.annotationId))}}($||($={})),(Q||(Q={})).is=function(e){return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every(function(e){return eI.string(e.kind)?X.is(e)||B.is(e)||$.is(e):q.is(e)}))};var m=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=V.insert(e,t):z.is(n)?(i=n,r=K.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=K.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=V.replace(e,t):z.is(n)?(i=n,r=K.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=K.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=V.del(e):z.is(t)?(r=t,n=K.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=K.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw Error("Text edit change is not configured to manage change annotations.")},e}(),v=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(z.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw Error("Id "+n+" is already in use.");if(void 0===t)throw Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new v(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(function(e){if(q.is(e)){var n=new m(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new m(e.changes[n]);t._textEditChanges[n]=r})):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(Y.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new m(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[e];if(!n){var r=[];this._workspaceEdit.changes[e]=r,n=new m(r),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new v,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=X.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=X.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){var i,o,a;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(H.is(n)||z.is(n)?i=n:r=n,void 0===i?o=B.create(e,t,r):(a=z.is(i)?i:this._changeAnnotations.manage(i),o=B.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=$.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=$.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})(),!function(e){e.create=function(e){return{uri:e}};e.is=function(e){return eI.defined(e)&&eI.string(e.uri)}}(G||(G={})),!function(e){e.create=function(e,t){return{uri:e,version:t}};e.is=function(e){return eI.defined(e)&&eI.string(e.uri)&&eI.integer(e.version)}}(J||(J={})),!function(e){e.create=function(e,t){return{uri:e,version:t}};e.is=function(e){return eI.defined(e)&&eI.string(e.uri)&&(null===e.version||eI.integer(e.version))}}(Y||(Y={})),!function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}};e.is=function(e){return eI.defined(e)&&eI.string(e.uri)&&eI.string(e.languageId)&&eI.integer(e.version)&&eI.string(e.text)}}(Z||(Z={})),!function(e){e.PlainText="plaintext",e.Markdown="markdown"}(ee||(ee={})),!function(e){e.is=function(t){return t===e.PlainText||t===e.Markdown}}(ee||(ee={})),(et||(et={})).is=function(e){return eI.objectLiteral(e)&&ee.is(e.kind)&&eI.string(e.value)},!function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(en||(en={})),!function(e){e.PlainText=1,e.Snippet=2}(er||(er={})),(ei||(ei={})).Deprecated=1,!function(e){e.create=function(e,t,n){return{newText:e,insert:t,replace:n}};e.is=function(e){return e&&eI.string(e.newText)&&I.is(e.insert)&&I.is(e.replace)}}(eo||(eo={})),!function(e){e.asIs=1,e.adjustIndentation=2}(ea||(ea={})),(es||(es={})).create=function(e){return{label:e}},(eu||(eu={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},!function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")};e.is=function(e){return eI.string(e)||eI.objectLiteral(e)&&eI.string(e.language)&&eI.string(e.value)}}(ec||(ec={})),(ed||(ed={})).is=function(e){return!!e&&eI.objectLiteral(e)&&(et.is(e.contents)||ec.is(e.contents)||eI.typedArray(e.contents,ec.is))&&(void 0===e.range||I.is(e.range))},(el||(el={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(eg||(eg={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return eI.defined(t)&&(i.documentation=t),eI.defined(n)?i.parameters=n:i.parameters=[],i},!function(e){e.Text=1,e.Read=2,e.Write=3}(ef||(ef={})),(eh||(eh={})).create=function(e,t){var n={range:e};return eI.number(t)&&(n.kind=t),n},!function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(ep||(ep={})),(em||(em={})).Deprecated=1,(ev||(ev={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},!function(e){e.create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a};e.is=function(e){return e&&eI.string(e.name)&&eI.number(e.kind)&&I.is(e.range)&&I.is(e.selectionRange)&&(void 0===e.detail||eI.string(e.detail))&&(void 0===e.deprecated||eI.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))}}(e_||(e_={})),!function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(eb||(eb={})),!function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n};e.is=function(e){return eI.defined(e)&&eI.typedArray(e.diagnostics,W.is)&&(void 0===e.only||eI.typedArray(e.only,eI.string))}}(ek||(ek={})),!function(e){e.create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):U.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r};e.is=function(e){return e&&eI.string(e.title)&&(void 0===e.diagnostics||eI.typedArray(e.diagnostics,W.is))&&(void 0===e.kind||eI.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||U.is(e.command))&&(void 0===e.isPreferred||eI.boolean(e.isPreferred))&&(void 0===e.edit||Q.is(e.edit))}}(eC||(eC={})),!function(e){e.create=function(e,t){var n={range:e};return eI.defined(t)&&(n.data=t),n};e.is=function(e){return eI.defined(e)&&I.is(e.range)&&(eI.undefined(e.command)||U.is(e.command))}}(ew||(ew={})),!function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}};e.is=function(e){return eI.defined(e)&&eI.uinteger(e.tabSize)&&eI.boolean(e.insertSpaces)}}(ey||(ey={})),!function(e){e.create=function(e,t,n){return{range:e,target:t,data:n}};e.is=function(e){return eI.defined(e)&&I.is(e.range)&&(eI.undefined(e.target)||eI.string(e.target))}}(eE||(eE={})),!function(e){e.create=function(e,t){return{range:e,parent:t}};e.is=function(t){return void 0!==t&&I.is(t.range)&&(void 0===t.parent||e.is(t.parent))}}(eA||(eA={})),!function(e){e.create=function(e,t,n,r){return new eS(e,t,n,r)};e.is=function(e){return!!(eI.defined(e)&&eI.string(e.uri)&&(eI.undefined(e.languageId)||eI.string(e.languageId))&&eI.uinteger(e.lineCount)&&eI.func(e.getText)&&eI.func(e.positionAt)&&eI.func(e.offsetAt))};e.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;)0>=n(i[a],o[s])?t[u++]=i[a++]:t[u++]=o[s++];for(;a<i.length;)t[u++]=i[a++];for(;s<o.length;)t[u++]=o[s++];return t}(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],s=e.offsetAt(a.range.start),u=e.offsetAt(a.range.end);if(u<=i)n=n.substring(0,s)+a.newText+n.substring(u,n.length);else throw Error("Overlapping edit");i=s}return n}}(ex||(ex={}));var _,b,k,C,w,y,E,A,x,I,S,T,R,D,M,P,j,L,F,O,N,W,U,V,H,z,K,q,X,B,$,Q,G,J,Y,Z,ee,et,en,er,ei,eo,ea,es,eu,ec,ed,el,eg,ef,eh,ep,em,ev,e_,eb,ek,eC,ew,ey,eE,eA,ex,eI,eS=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||i===`
`,"\r"===i&&r+1<t.length&&t.charAt(r+1)===`
`&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return x.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return x.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return"u">typeof e};e.undefined=function(e){return typeof e>"u"};e.boolean=function(e){return!0===e||!1===e};e.string=function(e){return"[object String]"===t.call(e)};e.number=function(e){return"[object Number]"===t.call(e)};e.numberRange=function(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r};e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647};e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647};e.func=function(e){return"[object Function]"===t.call(e)};e.objectLiteral=function(e){return null!==e&&"object"==typeof e};e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(eI||(eI={}));var eT=class{constructor(e,t,n){this._languageId=e,this._worker=t;let r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent(()=>{window.clearTimeout(t),t=window.setTimeout(()=>this._doValidate(e.uri,n),500)}),this._doValidate(e.uri,n))},i=e=>{h.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(h.editor.onDidCreateModel(r)),this._disposables.push(h.editor.onWillDisposeModel(i)),this._disposables.push(h.editor.onDidChangeModelLanguage(e=>{i(e.model),r(e.model)})),this._disposables.push(n(e=>{h.editor.getModels().forEach(e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))})})),this._disposables.push({dispose:()=>{for(let e in h.editor.getModels().forEach(i),this._listener)this._listener[e].dispose()}}),h.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,t){this._worker(e).then(t=>t.doValidation(e.toString())).then(n=>{let r=n.map(t=>(function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:function(e){switch(e){case F.Error:return h.MarkerSeverity.Error;case F.Warning:return h.MarkerSeverity.Warning;case F.Information:return h.MarkerSeverity.Info;case F.Hint:return h.MarkerSeverity.Hint;default:return h.MarkerSeverity.Info}}(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}})(e,t)),i=h.editor.getModel(e);i&&i.getLanguageId()===t&&h.editor.setModelMarkers(i,t,r)}).then(void 0,e=>{console.error(e)})}},eR=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doComplete(i.toString(),eD(t))).then(n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new h.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map(e=>{let t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:function(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}(e.command),range:i,kind:function(e){let t=h.languages.CompletionItemKind;switch(e){case en.Text:return t.Text;case en.Method:return t.Method;case en.Function:return t.Function;case en.Constructor:return t.Constructor;case en.Field:return t.Field;case en.Variable:return t.Variable;case en.Class:return t.Class;case en.Interface:return t.Interface;case en.Module:return t.Module;case en.Property:break;case en.Unit:return t.Unit;case en.Value:return t.Value;case en.Enum:return t.Enum;case en.Keyword:return t.Keyword;case en.Snippet:return t.Snippet;case en.Color:return t.Color;case en.File:return t.File;case en.Reference:return t.Reference}return t.Property}(e.kind)};return e.textEdit&&(function(e){return"u">typeof e.insert&&"u">typeof e.replace}(e.textEdit)?t.range={insert:eP(e.textEdit.insert),replace:eP(e.textEdit.replace)}:t.range=eP(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ej)),e.insertTextFormat===er.Snippet&&(t.insertTextRules=h.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:n.isIncomplete,suggestions:o}})}};function eD(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function eM(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function eP(e){if(e)return new h.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ej(e){if(e)return{range:eP(e.range),text:e.newText}}var eL=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.doHover(r.toString(),eD(t))).then(e=>{if(e)return{range:eP(e.range),contents:function(e){if(e)return Array.isArray(e)?e.map(eF):[eF(e)]}(e.contents)}})}};function eF(e){var t;return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}var eO=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDocumentHighlights(r.toString(),eD(t))).then(e=>{if(e)return e.map(e=>({range:eP(e.range),kind:function(e){switch(e){case ef.Read:return h.languages.DocumentHighlightKind.Read;case ef.Write:return h.languages.DocumentHighlightKind.Write;case ef.Text:}return h.languages.DocumentHighlightKind.Text}(e.kind)}))})}},eN=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDefinition(r.toString(),eD(t))).then(e=>{if(e)return[eW(e)]})}};function eW(e){return{uri:h.Uri.parse(e.uri),range:eP(e.range)}}var eU=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.findReferences(i.toString(),eD(t))).then(e=>{if(e)return e.map(eW)})}},eV=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doRename(i.toString(),eD(t),n)).then(e=>(function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=h.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:eP(i.range),text:i.newText}})}return{edits:t}})(e))}},eH=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentSymbols(n.toString())).then(e=>{if(e)return e.map(e=>({name:e.name,detail:"",containerName:e.containerName,kind:function(e){let t=h.languages.SymbolKind;switch(e){case ep.File:return t.Array;case ep.Module:return t.Module;case ep.Namespace:return t.Namespace;case ep.Package:return t.Package;case ep.Class:return t.Class;case ep.Method:return t.Method;case ep.Property:return t.Property;case ep.Field:return t.Field;case ep.Constructor:return t.Constructor;case ep.Enum:return t.Enum;case ep.Interface:return t.Interface;case ep.Function:break;case ep.Variable:return t.Variable;case ep.Constant:return t.Constant;case ep.String:return t.String;case ep.Number:return t.Number;case ep.Boolean:return t.Boolean;case ep.Array:return t.Array}return t.Function}(e.kind),range:eP(e.location.range),selectionRange:eP(e.location.range),tags:[]}))})}},ez=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentLinks(n.toString())).then(e=>{if(e)return{links:e.map(e=>({range:eP(e.range),url:e.target}))}})}},eK=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.format(r.toString(),null,eX(t)).then(e=>{if(!(!e||0===e.length))return e.map(ej)}))}},eq=class{constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.format(i.toString(),eM(t),eX(n)).then(e=>{if(!(!e||0===e.length))return e.map(ej)}))}};function eX(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var eB=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentColors(n.toString())).then(e=>{if(e)return e.map(e=>({color:e.color,range:eP(e.range)}))})}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),t.color,eM(t.range))).then(e=>{if(e)return e.map(e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=ej(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ej)),t})})}},e$=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),t)).then(e=>{if(e)return e.map(e=>{let t={start:e.startLine+1,end:e.endLine+1};return"u">typeof e.kind&&(t.kind=function(e){switch(e){case P.Comment:return h.languages.FoldingRangeKind.Comment;case P.Imports:return h.languages.FoldingRangeKind.Imports;case P.Region:return h.languages.FoldingRangeKind.Region}}(e.kind)),t})})}},eQ=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),t.map(eD))).then(e=>{if(e)return e.map(e=>{let t=[];for(;e;)t.push({range:eP(e.range)}),e=e.parent;return t})})}};function eG(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function eJ(e){return 10===e||13===e||8232===e||8233===e}function eY(e){return e>=48&&e<=57}(n||(n={})).DEFAULT={allowTrailingComma:!1};var eZ=function(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,u=0,c=0,d=0,l=0;function g(){if(i="",l=0,o=r,u=s,d=c,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(eG(t)){do r++,i+=String.fromCharCode(t),t=e.charCodeAt(r);while(eG(t));return a=15}if(eJ(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+=`
`),s++,c=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var t="",i=r;;){if(r>=n){t+=e.substring(i,r),l=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92===o){if(t+=e.substring(i,r),++r>=n){l=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+=`
`;break;case 114:t+="\r";break;case 116:t+="	";break;case 117:var a=function(t,n){for(var i=0,o=0;i<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else if(a>=97&&a<=102)o=16*o+a-97+10;else break;r++,i++}return i<t&&(o=-1),o}(4,!0);a>=0?t+=String.fromCharCode(a):l=4;break;default:l=5}i=r;continue}if(o>=0&&o<=31){if(eJ(o)){t+=e.substring(i,r),l=2;break}else l=6}r++}return t}(),a=10;case 47:var g=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!eJ(e.charCodeAt(r));)r++;return i=e.substring(g,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var f=n-1,h=!1;r<f;){var p=e.charCodeAt(r);if(42===p&&47===e.charCodeAt(r+1)){r+=2,h=!0;break}r++,eJ(p)&&(13===p&&10===e.charCodeAt(r)&&r++,s++,c=r)}return h||(r++,l=1),i=e.substring(g,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),++r===n||!eY(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&eY(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&eY(e.charCodeAt(r))))return l=3,e.substring(t,r);else for(r++;r<e.length&&eY(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r))){if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&eY(e.charCodeAt(r))){for(r++;r<e.length&&eY(e.charCodeAt(r));)r++;n=r}else l=3}return e.substring(t,n)}(),a=11;default:for(;r<n&&function(e){if(eG(e)||eJ(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}(t);)r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}return{setPosition:function(e){r=e,i="",o=0,a=16,l=0},getPosition:function(){return r},scan:t?function(){var e;do e=g();while(e>=12&&e<=15);return e}:g,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return l}}},e0="delimiter.bracket.json",e1="delimiter.array.json",e2=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new e2(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t&&e!==t;){;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},e4=class{_state;scanError;lastWasColon;parents;constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new e4(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!e&&e instanceof e4&&this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&e2.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}},e3=class extends eT{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(h.editor.onWillDisposeModel(e=>{this._resetSchema(e.uri)})),this._disposables.push(h.editor.onDidChangeModelLanguage(e=>{this._resetSchema(e.model.uri)}))}_resetSchema(e){this._worker().then(t=>{t.resetSchema(e.toString())})}};function e5(e){let t=[],n=[],r=new p(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);function o(){var t;let{languageId:r,modeConfiguration:o}=e;e6(n),o.documentFormattingEdits&&n.push(h.languages.registerDocumentFormattingEditProvider(r,new eK(i))),o.documentRangeFormattingEdits&&n.push(h.languages.registerDocumentRangeFormattingEditProvider(r,new eq(i))),o.completionItems&&n.push(h.languages.registerCompletionItemProvider(r,new eR(i,[" ",":",'"']))),o.hovers&&n.push(h.languages.registerHoverProvider(r,new eL(i))),o.documentSymbols&&n.push(h.languages.registerDocumentSymbolProvider(r,new eH(i))),o.tokens&&n.push(h.languages.setTokensProvider(r,(t=!0,{getInitialState:()=>new e4(null,null,!1,null),tokenize:(e,n)=>(function(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}let a=eZ(t),s=n.lastWasColon,u=n.parents,c={tokens:[],endState:n.clone()};for(;;){let d=r+a.getPosition(),l="",g=a.scan();if(17===g)break;if(d===r+a.getPosition())throw Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,g){case 1:u=e2.push(u,0),l=e0,s=!1;break;case 2:u=e2.pop(u),l=e0,s=!1;break;case 3:u=e2.push(u,1),l=e1,s=!1;break;case 4:u=e2.pop(u),l=e1,s=!1;break;case 6:l="delimiter.colon.json",s=!0;break;case 5:l="delimiter.comma.json",s=!1;break;case 8:case 9:case 7:l="keyword.json",s=!1;break;case 10:let f=(u?u.type:0)===1;l=s||f?"string.value.json":"string.key.json",s=!1;break;case 11:l="number.json",s=!1}if(e)switch(g){case 12:l="comment.line.json";break;case 13:l="comment.block.json"}c.endState=new e4(n.getStateData(),a.getTokenError(),s,u),c.tokens.push({startIndex:d,scopes:l})}return c})(t,e,n)}))),o.colors&&n.push(h.languages.registerColorProvider(r,new eB(i))),o.foldingRanges&&n.push(h.languages.registerFoldingRangeProvider(r,new e$(i))),o.diagnostics&&n.push(new e3(r,i,e)),o.selectionRanges&&n.push(h.languages.registerSelectionRangeProvider(r,new eQ(i)))}o(),t.push(h.languages.setLanguageConfiguration(e.languageId,e8));let a=e.modeConfiguration;return e.onDidChange(e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())}),t.push(e7(n)),e7(t)}function e7(e){return{dispose:()=>e6(e)}}function e6(e){for(;e.length;)e.pop().dispose()}var e8={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]};return t=f,d(i({},"__esModule",{value:!0}),t)})());