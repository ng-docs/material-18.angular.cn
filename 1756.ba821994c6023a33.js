"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[1756],{1756:(d,o,t)=>{t.r(o),t.d(o,{BreakpointObserverOverviewExample:()=>c});var r=t(9327),e=t(4438),l=t(5286),p=t(7605);let c=(()=>{class s{constructor(i){this.destroyed=new l.B7,this.displayNameMap=new Map([[r.Rp.XSmall,"XSmall"],[r.Rp.Small,"Small"],[r.Rp.Medium,"Medium"],[r.Rp.Large,"Large"],[r.Rp.XLarge,"XLarge"]]),i.observe([r.Rp.XSmall,r.Rp.Small,r.Rp.Medium,r.Rp.Large,r.Rp.XLarge]).pipe((0,p.Q)(this.destroyed)).subscribe(a=>{for(const n of Object.keys(a.breakpoints))a.breakpoints[n]&&(this.currentScreenSize=this.displayNameMap.get(n)??"Unknown")})}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}static#e=this.\u0275fac=function(a){return new(a||s)(e.rXU(r.QP))};static#r=this.\u0275cmp=e.VBU({type:s,selectors:[["breakpoint-observer-overview-example"]],standalone:!0,features:[e.aNF],decls:6,vars:1,template:function(a,n){1&a&&(e.j41(0,"p"),e.EFF(1," Resize your browser window to see the current screen size change.\n"),e.k0s(),e.j41(2,"p"),e.EFF(3," The current screen size is "),e.j41(4,"strong"),e.EFF(5),e.k0s()()),2&a&&(e.R7$(5),e.JRh(n.currentScreenSize))}})}return s})()}}]);