webpackJsonp([0],{68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(262),a=n.n(r),o=n(504);t.default={namespace:"project",state:{roleInfo:void 0,loading:!1},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var n=e.pathname.match(/\/p\/([^/]+)(\/.*)?/);n&&t({type:"init",payload:{projectName:n[1]}})})}},effects:{reset:a.a.mark(function e(t,n){t.payload,n.call;var r=n.put;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({type:"save",payload:{roleInfo:void 0,loading:!1}});case 2:case"end":return e.stop()}},e,this)}),init:a.a.mark(function e(t,n){var r,o,s=t.payload,c=(n.call,n.put),u=n.select;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(function(e){return e.project});case 2:if(r=e.sent,!(o=r.roleInfo)||o.project_name!==s.projectName){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,c({type:"getRoleInfo",payload:s});case 8:case"end":return e.stop()}},e,this)}),getRoleInfo:a.a.mark(function e(t,n){var r,s,c,u,p,i,l=t.payload,f=n.call,d=n.put,v=n.select;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(function(e){return e.loading});case 2:if(r=e.sent,!r.loading){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,d({type:"save",payload:{roleInfo:void 0,loading:!0}});case 8:return e.next=10,v(function(e){return e.client});case 10:return s=e.sent,c=s.userInfo,e.next=14,f(o.a.getUserRole,{username:c.username,projectName:l.projectName});case 14:return u=e.sent,p=u.data,i=u.errMsg,e.next=19,d({type:"save",payload:{loading:!1,roleInfo:p||null}});case 19:if(!i||!i.response||404!==i.response.status){e.next=22;break}return e.next=22,d({type:"client/getUserResource"});case 22:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return Object.assign({},e,t.payload)}}}}});
//# sourceMappingURL=0.c6b832a7.chunk.js.map