"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[7030],{4109:(F,y,h)=>{h.d(y,{Dc:()=>I,Hy:()=>S,NL:()=>k,Sz:()=>a,XO:()=>P,XW:()=>b,a$:()=>p,aI:()=>A,kZ:()=>c,s3:()=>R,xn:()=>g});var n=h(5024),v=h(8982),_=h(5286),D=h(9928),C=h(4421),N=h(9493),O=h(8728),E=h(7605),s=h(4438),T=h(8203);class x{constructor(){this.expansionModel=new n.CB(!0)}toggle(r){this.expansionModel.toggle(this._trackByValue(r))}expand(r){this.expansionModel.select(this._trackByValue(r))}collapse(r){this.expansionModel.deselect(this._trackByValue(r))}isExpanded(r){return this.expansionModel.isSelected(this._trackByValue(r))}toggleDescendants(r){this.expansionModel.isSelected(this._trackByValue(r))?this.collapseDescendants(r):this.expandDescendants(r)}collapseAll(){this.expansionModel.clear()}expandDescendants(r){let e=[r];e.push(...this.getDescendants(r)),this.expansionModel.select(...e.map(t=>this._trackByValue(t)))}collapseDescendants(r){let e=[r];e.push(...this.getDescendants(r)),this.expansionModel.deselect(...e.map(t=>this._trackByValue(t)))}_trackByValue(r){return this.trackBy?this.trackBy(r):r}}class b extends x{constructor(r,e,t){super(),this.getLevel=r,this.isExpandable=e,this.options=t,this.options&&(this.trackBy=this.options.trackBy)}getDescendants(r){const t=[];for(let o=this.dataNodes.indexOf(r)+1;o<this.dataNodes.length&&this.getLevel(r)<this.getLevel(this.dataNodes[o]);o++)t.push(this.dataNodes[o]);return t}expandAll(){this.expansionModel.select(...this.dataNodes.map(r=>this._trackByValue(r)))}}class P extends x{constructor(r,e){super(),this.getChildren=r,this.options=e,this.options&&(this.trackBy=this.options.trackBy)}expandAll(){this.expansionModel.clear();const r=this.dataNodes.reduce((e,t)=>[...e,...this.getDescendants(t),t],[]);this.expansionModel.select(...r.map(e=>this._trackByValue(e)))}getDescendants(r){const e=[];return this._getDescendants(e,r),e.splice(1)}_getDescendants(r,e){r.push(e);const t=this.getChildren(e);Array.isArray(t)?t.forEach(o=>this._getDescendants(r,o)):(0,v.A)(t)&&t.pipe((0,N.s)(1),(0,O.p)(Boolean)).subscribe(o=>{for(const l of o)this._getDescendants(r,l)})}}const c=new s.nKC("CDK_TREE_NODE_OUTLET_NODE");let p=(()=>{class i{constructor(e,t){this.viewContainer=e,this._node=t}static#e=this.\u0275fac=function(t){return new(t||i)(s.rXU(s.c1b),s.rXU(c,8))};static#t=this.\u0275dir=s.FsC({type:i,selectors:[["","cdkTreeNodeOutlet",""]],standalone:!0})}return i})();class d{constructor(r){this.$implicit=r}}let a=(()=>{class i{constructor(e){this.template=e}static#e=this.\u0275fac=function(t){return new(t||i)(s.rXU(s.C4Q))};static#t=this.\u0275dir=s.FsC({type:i,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[0,"cdkTreeNodeDefWhen","when"]},standalone:!0})}return i})(),k=(()=>{class i{get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}constructor(e,t){this._differs=e,this._changeDetectorRef=t,this._onDestroy=new _.B7,this._levels=new Map,this.viewChange=new D.t({start:0,end:Number.MAX_VALUE})}ngOnInit(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}ngAfterContentChecked(){const e=this._nodeDefs.filter(t=>!t.when);this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}_switchDataSource(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}_observeRenderChanges(){let e;(0,n.y4)(this._dataSource)?e=this._dataSource.connect(this):(0,v.A)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,C.of)(this._dataSource)),e&&(this._dataSubscription=e.pipe((0,E.Q)(this._onDestroy)).subscribe(t=>this.renderNodeChanges(t)))}renderNodeChanges(e,t=this._dataDiffer,o=this._nodeOutlet.viewContainer,l){const f=t.diff(e);f&&(f.forEachOperation((m,B,M)=>{if(null==m.previousIndex)this.insertNode(e[M],M,o,l);else if(null==M)o.remove(B),this._levels.delete(m.item);else{const X=o.get(B);o.move(X,M)}}),this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(l=>l.when&&l.when(t,e))||this._defaultNodeDef}insertNode(e,t,o,l){const f=this._getNodeDef(e,t),m=new d(e);m.level=this.treeControl.getLevel?this.treeControl.getLevel(e):typeof l<"u"&&this._levels.has(l)?this._levels.get(l)+1:0,this._levels.set(e,m.level),(o||this._nodeOutlet.viewContainer).createEmbeddedView(f.template,m,t),g.mostRecentTreeNode&&(g.mostRecentTreeNode.data=e)}static#e=this.\u0275fac=function(t){return new(t||i)(s.rXU(s._q3),s.rXU(s.gRc))};static#t=this.\u0275cmp=s.VBU({type:i,selectors:[["cdk-tree"]],contentQueries:function(t,o,l){if(1&t&&s.wni(l,a,5),2&t){let f;s.mGM(f=s.lsd())&&(o._nodeDefs=f)}},viewQuery:function(t,o){if(1&t&&s.GBs(p,7),2&t){let l;s.mGM(l=s.lsd())&&(o._nodeOutlet=l.first)}},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],standalone:!0,features:[s.aNF],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(t,o){1&t&&s.eu8(0,0)},dependencies:[p],encapsulation:2})}return i})(),g=(()=>{class i{get role(){return"treeitem"}set role(e){this._elementRef.nativeElement.setAttribute("role",e)}static#e=this.mostRecentTreeNode=null;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}get isExpanded(){return this._tree.treeControl.isExpanded(this._data)}get level(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}constructor(e,t){this._elementRef=e,this._tree=t,this._destroyed=new _.B7,this._dataChanges=new _.B7,i.mostRecentTreeNode=this,this.role="treeitem"}ngOnInit(){this._parentNodeAriaLevel=function L(i){let r=i.parentElement;for(;r&&!U(r);)r=r.parentElement;return r?r.classList.contains("cdk-nested-tree-node")?(0,s.Udg)(r.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level",`${this.level+1}`)}ngOnDestroy(){i.mostRecentTreeNode===this&&(i.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}_setRoleFromData(){this.role="treeitem"}static#t=this.\u0275fac=function(t){return new(t||i)(s.rXU(s.aKT),s.rXU(k))};static#n=this.\u0275dir=s.FsC({type:i,selectors:[["cdk-tree-node"]],hostAttrs:[1,"cdk-tree-node"],hostVars:1,hostBindings:function(t,o){2&t&&s.BMQ("aria-expanded",o.isExpanded)},inputs:{role:"role"},exportAs:["cdkTreeNode"],standalone:!0})}return i})();function U(i){const r=i.classList;return!(!r?.contains("cdk-nested-tree-node")&&!r?.contains("cdk-tree"))}let R=(()=>{class i extends g{constructor(e,t,o){super(e,t),this._differs=o}ngAfterContentInit(){this._dataDiffer=this._differs.find([]).create(this._tree.trackBy);const e=this._tree.treeControl.getChildren(this.data);Array.isArray(e)?this.updateChildrenNodes(e):(0,v.A)(e)&&e.pipe((0,E.Q)(this._destroyed)).subscribe(t=>this.updateChildrenNodes(t)),this.nodeOutlet.changes.pipe((0,E.Q)(this._destroyed)).subscribe(()=>this.updateChildrenNodes())}ngOnInit(){super.ngOnInit()}ngOnDestroy(){this._clear(),super.ngOnDestroy()}updateChildrenNodes(e){const t=this._getNodeOutlet();e&&(this._children=e),t&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,t.viewContainer,this._data):this._dataDiffer.diff([])}_clear(){const e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}_getNodeOutlet(){const e=this.nodeOutlet;return e&&e.find(t=>!t._node||t._node===this)}static#e=this.\u0275fac=function(t){return new(t||i)(s.rXU(s.aKT),s.rXU(k),s.rXU(s._q3))};static#t=this.\u0275dir=s.FsC({type:i,selectors:[["cdk-nested-tree-node"]],contentQueries:function(t,o,l){if(1&t&&s.wni(l,p,5),2&t){let f;s.mGM(f=s.lsd())&&(o.nodeOutlet=f)}},hostAttrs:[1,"cdk-nested-tree-node"],exportAs:["cdkNestedTreeNode"],standalone:!0,features:[s.Jv_([{provide:g,useExisting:i},{provide:c,useExisting:i}]),s.Vt3]})}return i})();const w=/([A-Za-z%]+)$/;let A=(()=>{class i{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}constructor(e,t,o,l){this._treeNode=e,this._tree=t,this._element=o,this._dir=l,this._destroyed=new _.B7,this.indentUnits="px",this._indent=40,this._setPadding(),l&&l.change.pipe((0,E.Q)(this._destroyed)).subscribe(()=>this._setPadding(!0)),e._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){const e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,t=null==this._level?e:this._level;return"number"==typeof t?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){const t=this._paddingIndent();if(t!==this._currentPadding||e){const o=this._element.nativeElement,l=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",f="paddingLeft"===l?"paddingRight":"paddingLeft";o.style[l]=t||"",o.style[f]="",this._currentPadding=t}}_setLevelInput(e){this._level=isNaN(e)?null:e,this._setPadding()}_setIndentInput(e){let t=e,o="px";if("string"==typeof e){const l=e.split(w);t=l[0],o=l[1]||o}this.indentUnits=o,this._indent=(0,s.Udg)(t),this._setPadding()}static#e=this.\u0275fac=function(t){return new(t||i)(s.rXU(g),s.rXU(k),s.rXU(s.aKT),s.rXU(T.dS,8))};static#t=this.\u0275dir=s.FsC({type:i,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[2,"cdkTreeNodePadding","level",s.Udg],indent:[0,"cdkTreeNodePaddingIndent","indent"]},standalone:!0,features:[s.GFd]})}return i})(),S=(()=>{class i{constructor(e,t){this._tree=e,this._treeNode=t,this.recursive=!1}_toggle(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}static#e=this.\u0275fac=function(t){return new(t||i)(s.rXU(k),s.rXU(g))};static#t=this.\u0275dir=s.FsC({type:i,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(t,o){1&t&&s.bIt("click",function(f){return o._toggle(f)})},inputs:{recursive:[2,"cdkTreeNodeToggleRecursive","recursive",s.L39]},standalone:!0,features:[s.GFd]})}return i})(),I=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=s.$C({type:i});static#n=this.\u0275inj=s.G2t({})}return i})()},7030:(F,y,h)=>{h.r(y),h.d(y,{CdkTreeFlatExample:()=>x,CdkTreeNestedExample:()=>P});var n=h(4438),v=h(5024),_=h(4109),D=h(9213),C=h(8834);function N(c,p){if(1&c&&(n.j41(0,"cdk-tree-node",3),n.nrm(1,"button",4),n.EFF(2),n.k0s()),2&c){const d=p.$implicit,a=n.XpG();n.xc7("display",a.shouldRender(d)?"flex":"none"),n.R7$(2),n.SpI(" ",d.name," ")}}function O(c,p){if(1&c){const d=n.RV6();n.j41(0,"cdk-tree-node",3)(1,"button",5),n.bIt("click",function(){const u=n.eBV(d).$implicit;return n.Njj(u.isExpanded=!u.isExpanded)}),n.j41(2,"mat-icon",6),n.EFF(3),n.k0s()(),n.EFF(4),n.k0s()}if(2&c){const d=p.$implicit,a=n.XpG();n.xc7("display",a.shouldRender(d)?"flex":"none"),n.R7$(),n.xc7("visibility",d.expandable?"visible":"hidden"),n.BMQ("aria-label","Toggle "+d.name),n.R7$(2),n.SpI(" ",a.treeControl.isExpanded(d)?"expand_more":"chevron_right"," "),n.R7$(),n.SpI(" ",d.name," ")}}function E(c,p){if(1&c&&(n.j41(0,"cdk-nested-tree-node",3),n.nrm(1,"button",4),n.EFF(2),n.k0s()),2&c){const d=p.$implicit;n.R7$(2),n.SpI(" ",d.name," ")}}function s(c,p){if(1&c&&(n.j41(0,"cdk-nested-tree-node",3)(1,"button",5)(2,"mat-icon",6),n.EFF(3),n.k0s()(),n.EFF(4),n.j41(5,"div"),n.eu8(6,7),n.k0s()()),2&c){const d=p.$implicit,a=n.XpG();n.R7$(),n.BMQ("aria-label","Toggle "+d.name),n.R7$(2),n.SpI(" ",a.treeControl.isExpanded(d)?"expand_more":"chevron_right"," "),n.R7$(),n.SpI(" ",d.name," "),n.R7$(),n.AVh("example-tree-invisible",!a.treeControl.isExpanded(d))}}const T=[{name:"Fruit",expandable:!0,level:0},{name:"Apple",expandable:!1,level:1},{name:"Banana",expandable:!1,level:1},{name:"Fruit loops",expandable:!1,level:1},{name:"Vegetables",expandable:!0,level:0},{name:"Green",expandable:!0,level:1},{name:"Broccoli",expandable:!1,level:2},{name:"Brussels sprouts",expandable:!1,level:2},{name:"Orange",expandable:!0,level:1},{name:"Pumpkins",expandable:!1,level:2},{name:"Carrots",expandable:!1,level:2}];let x=(()=>{class c{constructor(){this.treeControl=new _.XW(d=>d.level,d=>d.expandable),this.dataSource=new v.hx(T),this.hasChild=(d,a)=>a.expandable}getParentNode(d){for(let u=T.indexOf(d)-1;u>=0;u--)if(T[u].level===d.level-1)return T[u];return null}shouldRender(d){let a=this.getParentNode(d);for(;a;){if(!a.isExpanded)return!1;a=this.getParentNode(a)}return!0}static#e=this.\u0275fac=function(a){return new(a||c)};static#t=this.\u0275cmp=n.VBU({type:c,selectors:[["cdk-tree-flat-example"]],standalone:!0,features:[n.aNF],decls:3,vars:3,consts:[[3,"dataSource","treeControl"],["cdkTreeNodePadding","","class","example-tree-node",3,"display",4,"cdkTreeNodeDef"],["cdkTreeNodePadding","","class","example-tree-node",3,"display",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","",1,"example-tree-node"],["mat-icon-button","","disabled",""],["mat-icon-button","","cdkTreeNodeToggle","",3,"click"],[1,"mat-icon-rtl-mirror"]],template:function(a,u){1&a&&(n.j41(0,"cdk-tree",0),n.DNE(1,N,3,3,"cdk-tree-node",1)(2,O,5,7,"cdk-tree-node",2),n.k0s()),2&a&&(n.Y8G("dataSource",u.dataSource)("treeControl",u.treeControl),n.R7$(2),n.Y8G("cdkTreeNodeDefWhen",u.hasChild))},dependencies:[_.Dc,_.Sz,_.aI,_.Hy,_.NL,_.xn,C.Hl,C.iY,D.m_,D.An],styles:[".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"]})}return c})();const b=[{name:"Fruit",children:[{name:"Apple"},{name:"Banana"},{name:"Fruit loops"}]},{name:"Vegetables",children:[{name:"Green",children:[{name:"Broccoli"},{name:"Brussels sprouts"}]},{name:"Orange",children:[{name:"Pumpkins"},{name:"Carrots"}]}]}];let P=(()=>{class c{constructor(){this.treeControl=new _.XO(d=>d.children),this.dataSource=new v.hx(b),this.hasChild=(d,a)=>!!a.children&&a.children.length>0}static#e=this.\u0275fac=function(a){return new(a||c)};static#t=this.\u0275cmp=n.VBU({type:c,selectors:[["cdk-tree-nested-example"]],standalone:!0,features:[n.aNF],decls:3,vars:3,consts:[[3,"dataSource","treeControl"],["class","example-tree-node",4,"cdkTreeNodeDef"],["class","example-tree-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],[1,"example-tree-node"],["mat-icon-button","","disabled",""],["mat-icon-button","","cdkTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"],["cdkTreeNodeOutlet",""]],template:function(a,u){1&a&&(n.j41(0,"cdk-tree",0),n.DNE(1,E,3,1,"cdk-nested-tree-node",1)(2,s,7,5,"cdk-nested-tree-node",2),n.k0s()),2&a&&(n.Y8G("dataSource",u.dataSource)("treeControl",u.treeControl),n.R7$(2),n.Y8G("cdkTreeNodeDefWhen",u.hasChild))},dependencies:[_.Dc,_.s3,_.Sz,_.Hy,_.NL,_.a$,C.Hl,C.iY,D.m_,D.An],styles:[".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"]})}return c})()}}]);