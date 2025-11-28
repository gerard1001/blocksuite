const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/core-BZDMbBiB.js","assets/browser-CRWZJX63.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const dd=Symbol("GfxGroupCompatible"),ah=e=>typeof e!="object"||e===null?!1:dd in e&&e[dd]===!0;var R=(e=>(e[e.DefaultRuntimeError=1]="DefaultRuntimeError",e[e.ReactiveProxyError=2]="ReactiveProxyError",e[e.DocCollectionError=3]="DocCollectionError",e[e.ModelCRUDError=4]="ModelCRUDError",e[e.ValueNotExists=5]="ValueNotExists",e[e.ValueNotInstanceOf=6]="ValueNotInstanceOf",e[e.ValueNotEqual=7]="ValueNotEqual",e[e.MigrationError=8]="MigrationError",e[e.SchemaValidateError=9]="SchemaValidateError",e[e.TransformerError=10]="TransformerError",e[e.InlineEditorError=11]="InlineEditorError",e[e.TransformerNotImplementedError=12]="TransformerNotImplementedError",e[e.EdgelessExportError=13]="EdgelessExportError",e[e.CommandError=14]="CommandError",e[e.EventDispatcherError=15]="EventDispatcherError",e[e.SelectionError=16]="SelectionError",e[e.GfxBlockElementError=17]="GfxBlockElementError",e[e.MissingViewModelError=18]="MissingViewModelError",e[e.DatabaseBlockError=19]="DatabaseBlockError",e[e.ParsingError=20]="ParsingError",e[e.UserAbortError=21]="UserAbortError",e[e.ExecutionError=22]="ExecutionError",e[e.DefaultFatalError=1e4]="DefaultFatalError",e[e.NoRootModelError=10001]="NoRootModelError",e[e.NoSurfaceModelError=10002]="NoSurfaceModelError",e[e.NoneSupportedSSRError=10003]="NoneSupportedSSRError",e))(R||{});class T extends Error{constructor(t,s,r){super(s,r),this.name="BlockSuiteError",this.code=t,this.isFatal=t>=1e4}}T.ErrorCode=R;function Ly(e){if(!(e instanceof T))throw e;if(e.isFatal)throw new Error("A fatal error for BlockSuite occurs, please contact the team if you find this.",{cause:e});console.error("A runtime error for BlockSuite occurs, you can ignore this error if it won't break the user experience."),console.error(e.stack)}const C=class lc{static clamp(t,s,r){return Math.max(s,r!==void 0?Math.min(t,r):t)}static clampV(t,s,r){return t.map(n=>r!==void 0?lc.clamp(n,s,r):lc.clamp(n,s))}static cross(t,s,r){return(s[0]-t[0])*(r[1]-t[1])-(r[0]-t[0])*(s[1]-t[1])}static snap(t,s=1){return[Math.round(t[0]/s)*s,Math.round(t[1]/s)*s]}};C.abs=e=>[Math.abs(e[0]),Math.abs(e[1])];C.add=(e,t)=>[e[0]+t[0],e[1]+t[1]];C.addScalar=(e,t)=>[e[0]+t,e[1]+t];C.ang=(e,t)=>Math.atan2(C.cpr(e,t),C.dpr(e,t));C.ang3=(e,t,s)=>{const r=C.vec(t,e),n=C.vec(t,s);return C.ang(r,n)};C.angle=(e,t)=>Math.atan2(t[1]-e[1],t[0]-e[0]);C.clockwise=(e,t,s)=>C.isLeft(e,t,s)>0;C.cpr=(e,t)=>e[0]*t[1]-t[0]*e[1];C.dist=(e,t)=>Math.hypot(e[1]-t[1],e[0]-t[0]);C.dist2=(e,t)=>C.len2(C.sub(e,t));C.distanceToBounds=(e,t)=>C.dist(t,C.nearestPointOnBounds(e,t));C.distanceToLineSegment=(e,t,s,r=!0)=>C.dist(s,C.nearestPointOnLineSegment(e,t,s,r));C.distanceToLineThroughPoint=(e,t,s)=>C.dist(s,C.nearestPointOnLineThroughPoint(e,t,s));C.div=(e,t)=>[e[0]/t,e[1]/t];C.divV=(e,t)=>[e[0]/t[0],e[1]/t[1]];C.dpr=(e,t)=>e[0]*t[0]+e[1]*t[1];C.fastDist=(e,t)=>{const s=[t[0]-e[0],t[1]-e[1]],r=[Math.abs(s[0]),Math.abs(s[1])];let n=1/Math.max(r[0],r[1]);return n=n*(1.29289-(r[0]+r[1])*n*.29289),[s[0]*n,s[1]*n]};C.int=(e,t,s,r,n=1)=>{const i=(C.clamp(s,r)-s)/(r-s);return C.add(C.mul(e,1-i),C.mul(t,n))};C.isEqual=(e,t)=>e[0]===t[0]&&e[1]===t[1];C.isLeft=(e,t,s)=>(t[0]-e[0])*(s[1]-e[1])-(s[0]-e[0])*(t[1]-e[1]);C.len=e=>Math.hypot(e[0],e[1]);C.len2=e=>e[0]*e[0]+e[1]*e[1];C.lrp=(e,t,s)=>C.add(e,C.mul(C.sub(t,e),s));C.max=(...e)=>[Math.max(...e.map(t=>t[0])),Math.max(...e.map(t=>t[1]))];C.med=(e,t)=>C.mul(C.add(e,t),.5);C.min=(...e)=>[Math.min(...e.map(t=>t[0])),Math.min(...e.map(t=>t[1]))];C.mul=(e,t)=>[e[0]*t,e[1]*t];C.mulV=(e,t)=>[e[0]*t[0],e[1]*t[1]];C.nearestPointOnBounds=(e,t)=>[C.clamp(t[0],e.minX,e.maxX),C.clamp(t[1],e.minY,e.maxY)];C.nearestPointOnLineSegment=(e,t,s,r=!0)=>{const n=C.uni(C.sub(t,e)),i=C.add(e,C.mul(n,C.pry(C.sub(s,e),n)));if(r){if(i[0]<Math.min(e[0],t[0]))return e[0]<t[0]?e:t;if(i[0]>Math.max(e[0],t[0]))return e[0]>t[0]?e:t;if(i[1]<Math.min(e[1],t[1]))return e[1]<t[1]?e:t;if(i[1]>Math.max(e[1],t[1]))return e[1]>t[1]?e:t}return i};C.nearestPointOnLineThroughPoint=(e,t,s)=>C.add(e,C.mul(t,C.pry(C.sub(s,e),t)));C.neg=e=>[-e[0],-e[1]];C.normalize=e=>C.uni(e);C.nudge=(e,t,s)=>C.isEqual(e,t)?e:C.add(e,C.mul(C.uni(C.sub(t,e)),s));C.nudgeAtAngle=(e,t,s)=>[Math.cos(t)*s+e[0],Math.sin(t)*s+e[1]];C.per=e=>[e[1],-e[0]];C.pointOffset=(e,t,s)=>{let r=C.uni(C.sub(t,e));return C.isEqual(e,t)&&(r=e),C.add(e,C.mul(r,s))};C.pointsBetween=(e,t,s=6)=>Array.from({length:s}).map((r,n)=>{const i=n/(s-1),o=Math.min(1,.5+Math.abs(.5-i));return[...C.lrp(e,t,i),o]});C.pry=(e,t)=>C.dpr(e,t)/C.len(t);C.rescale=(e,t)=>{const s=C.len(e);return[t*e[0]/s,t*e[1]/s]};C.rot=(e,t=0)=>[e[0]*Math.cos(t)-e[1]*Math.sin(t),e[0]*Math.sin(t)+e[1]*Math.cos(t)];C.rotWith=(e,t,s=0)=>{if(s===0)return e;const r=Math.sin(s),n=Math.cos(s),i=e[0]-t[0],o=e[1]-t[1],a=i*n-o*r,l=i*r+o*n;return[a+t[0],l+t[1]]};C.slope=(e,t)=>e[0]===t[0]?NaN:(e[1]-t[1])/(e[0]-t[0]);C.sub=(e,t)=>[e[0]-t[0],e[1]-t[1]];C.subScalar=(e,t)=>[e[0]-t,e[1]-t];C.tangent=(e,t)=>C.uni(C.sub(e,t));C.toFixed=e=>e.map(t=>Math.round(t*100)/100);C.toPoint=e=>({x:e[0],y:e[1]});C.toPrecision=(e,t=4)=>[+e[0].toPrecision(t),+e[1].toPrecision(t)];C.toVec=e=>[e.x,e.y];C.uni=e=>C.div(e,C.len(e));C.vec=(e,t)=>[t[0]-e[0],t[1]-e[1]];let D=C;class Lr extends Array{constructor(t=[0,0],s=[0,0],r=[0,0],n=[0,0]){super(2),this._in=[0,0],this._out=[0,0],this._tangent=[0,0],this[0]=t[0],this[1]=t[1],this._tangent=s,this._in=r,this._out=n}get absIn(){return D.add(this,this._in)}get absOut(){return D.add(this,this._out)}get in(){return this._in}set in(t){this._in=t}get length(){return super.length}get out(){return this._out}set out(t){this._out=t}get tangent(){return this._tangent}set tangent(t){this._tangent=t}static fromVec(t){const s=new Lr;return s[0]=t[0],s[1]=t[1],s}clone(){return new Lr(this,this._tangent,this._in,this._out)}setVec(t){return this[0]=t[0],this[1]=t[1],this}toVec(){return[this[0],this[1]]}}const Si=1e-12,Ny=112e-18,yA=Math.PI*2,_A=1e-8;function wA(){return Math.floor(Math.random()*2**31)}function lh(e,t,s,r,n=!1){const i=D.sub(t,e),o=D.sub(r,s),a=D.cpr(i,o);if(Dp(a,0,Ny))return null;const l=D.sub(e,s);let c=D.cpr(o,l)/a;const h=D.cpr(i,l)/a,u=Si,d=-u,f=1+u;return n||d<c&&c<f&&d<h&&h<f?(n||(c=Qo(c,0,1)),D.lrp(e,t,c)):null}function Ip(e,t){const s=e.length;if(s<2)throw new Error("Polygon must have at least 2 points");let r=e[0],n=D.dist(e[0],t);for(let i=0;i<s;i++){const o=e[i],a=e[(i+1)%s],l=D.nearestPointOnLineSegment(o,a,t,!0),c=D.dist(l,t);c<n&&(n=c,r=l)}return r}function By(e,t){const s=Ip(e,t);return D.dist(s,t)}function Mo(e,t,s){const r=Mp(s);return e.map(n=>D.rotWith(n,t,r))}function zy(e,t,s){const r=Mp(s);return D.add(t,D.rot(D.sub(e,t),r))}function Mp(e){return e*Math.PI/180}function Vy(e,t){const[s,r]=t,n=D.sub(e,s),i=D.sub(e,r);return Dp(D.cpr(n,i),0,.01)&&D.dpr(n,i)<=0}function Uy(e,t){const s=e.length;for(let r=0;r<s;r++){const n=e[r],i=e[(r+1)%s];if(Vy(t,[n,i]))return D.normalize(D.sub(i,n))}return[0,0]}function Fy(e,t,s){const r=[],n=s.length;for(let i=0;i<n;i++){const o=s[i],a=s[(i+1)%n],l=lh(e,t,o,a);if(l){const c=new Lr(l);c.tangent=D.normalize(D.sub(a,o)),r.push(c)}}return r.length?r:null}function xA(e,t,s){const r=[],n=s.length;for(let i=0;i<n-1;i++){const o=s[i],a=s[i+1],l=lh(e,t,o,a);l&&r.push(new Lr(l,D.normalize(D.sub(a,o))))}return r.length?r:null}function kA(e,t){const s=e.length;let r,n=1/0;for(let i=0;i<s-1;i++){const o=e[i],a=e[i+1],l=D.nearestPointOnLineSegment(o,a,t,!0),c=D.dist(l,t);c<n&&(n=c,r=l)}return r}function SA(e,t,s,r,n){let i,o;if(s===0)i=r[0]-e.x,o=r[1]-e.y;else{const{minX:h,minY:u,maxX:d,maxY:f}=e,p=zy(r,[h+(d-h)/2,u+(f-u)/2],-s);i=p[0]-e.x,o=p[1]-e.y}let[a,l]=t,c;if(Do(a[0],a[1],i,o)<n||Do(l[0],l[1],i,o)<n)return!0;for(let h=0;h<t.length;h++){const u=[l[0]-a[0],l[1]-a[1]],d=Math.hypot(u[1],u[0]),f=[u[0]/d,u[1]/d],p=[i-a[0],o-a[1]],b=(p[0]*f[0]+p[1]*f[1])/Math.hypot(f[1],f[0]);c=[a[0]+f[0]*b,a[1]+f[1]*b];const v=Do(c[0],c[1],a[0],a[1]),x=Do(c[0],c[1],l[0],l[1]);if(c=x<v&&v>d?l:v<x&&x>d?a:c,Math.hypot(o-c[1],i-c[0])<n)return!0;a=l,l=t[h+1]}return!1}const Do=(e,t,s,r)=>{const n=s-e,i=r-t;return Math.hypot(n,i)};function fd(e){return e*e}function Sl(e,t){return fd(e[0]-t[0])+fd(e[1]-t[1])}function jy(e,t,s){const r=Sl(t,s);if(r==0)return Sl(e,t);let n=((e[0]-t[0])*(s[0]-t[0])+(e[1]-t[1])*(s[1]-t[1]))/r;return n=Math.max(0,Math.min(1,n)),Sl(e,[t[0]+n*(s[0]-t[0]),t[1]+n*(s[1]-t[1])])}function Hy(e,t,s){return Math.sqrt(jy(e,t,s))}function CA(e,t){return e.x<t.x+t.w&&e.x+e.w>t.x&&e.y<t.y+t.h&&e.y+e.h>t.y}function Dp(e,t,s=1e-4){return Math.abs(e-t)<s}function EA(e){return e.every(t=>Wy(t))}function Wy(e){return e>=-Si&&e<=Si}function Qo(e,t,s){return Math.max(t,s!==void 0?Math.min(e,s):e)}function $A(e,t,s,r,n=0){const i=Math.cos(n),o=Math.sin(n),a=D.sub(e,t),l=i*a[0]+o*a[1],c=o*a[0]-i*a[1];return l*l/(s*s)+c*c/(r*r)<=1}function TA(e,t){let s=0;return t.forEach((r,n)=>{const i=t[(n+1)%t.length];r[1]<=e[1]?i[1]>e[1]&&D.cross(r,i,e)>0&&(s+=1):i[1]<=e[1]&&D.cross(r,i,e)<0&&(s-=1)}),s!==0}function AA(e,t,s){for(let r=0;r<t.length;++r){const n=r+1===t.length?0:r+1;if(Hy(e,t[r],t[n])<=s)return!0}return!1}function OA(e,t=!0){const s=e.length;if(s<4)return"";let r=e[0],n=e[1];const i=e[2];let o=`M${r[0].toFixed(2)},${r[1].toFixed(2)} Q${n[0].toFixed(2)},${n[1].toFixed(2)} ${Po(n[0],i[0]).toFixed(2)},${Po(n[1],i[1]).toFixed(2)} T`;for(let a=2,l=s-1;a<l;a++)r=e[a],n=e[a+1],o+=`${Po(r[0],n[0]).toFixed(2)},${Po(r[1],n[1]).toFixed(2)} `;return t&&(o+="Z"),o}function Po(e,t){return(e+t)/2}function RA(e,t,s,r,n,i=0){e=D.rot(D.sub(e,s),-i),t=D.rot(D.sub(t,s),-i),r*=r,n*=n;const o=[],a=D.sub(t,e),l=r*a[1]*a[1]+n*a[0]*a[0],c=2*(r*e[1]*a[1]+n*e[0]*a[0]),h=r*e[1]*e[1]+n*e[0]*e[0]-r*n,u=c*c-4*l*h;if(u>=0){const d=Math.sqrt(u),f=(-c+d)/(2*l),p=(-c-d)/(2*l);0<=f&&f<=1&&o.push(D.add(D.rot(D.add(D.mul(a,f),e),i),s)),0<=p&&p<=1&&Math.abs(f-p)>1e-16&&o.push(D.add(D.rot(D.add(D.mul(a,p),e),i),s))}return o.length===0?null:o.map(d=>{const f=new Lr(d),p=D.uni(D.divV(D.sub(d,s),[r*r,n*n]));return f.tangent=[-p[1],p[0]],f})}function IA(e){return e>0?1:-1}function MA(e,t){const{x:s,y:r,w:n,h:i,rotate:o}=e;if(!o)return t;const a=s+n/2,l=r+i/2,c=new DOMMatrix().translateSelf(a,l).rotateSelf(o).translateSelf(-a,-l),h=new DOMPoint(...t).matrixTransform(c);return[h.x,h.y]}function DA(e){return e<0&&(e+=360),e%=360,e}function PA(e){return e*180/Math.PI}function LA(e,t,s,r=!0){const n=r?(i,o)=>i<o:(i,o)=>i<=o;return!(n(Math.max(e[0][s],e[1][s]),Math.min(t[0][s],t[1][s]))||n(Math.max(t[0][s],t[1][s]),Math.min(e[0][s],e[1][s])))}function NA(e,t){const{x:s,y:r,w:n,h:i,rotate:o}=e,a=s+n/2,l=r+i/2,c=n*t,h=i*t;return{x:a-c/2,y:l-h/2,w:c,h,rotate:o}}function pd(e,t,s,r){return`[${e},${t},${s},${r}]`}function Pp(e){try{return JSON.parse(e)}catch(t){return console.error("Failed to deserialize xywh",e),console.error(t),[0,0,0,0]}}function ch(e,t=0){let s=1/0,r=1/0,n=-1/0,i=-1/0;if(e.length<1)s=0,r=0,n=1,i=1;else for(const[o,a]of e)s=Math.min(o,s),r=Math.min(a,r),n=Math.max(o,n),i=Math.max(a,i);return t!==0?ch(e.map(o=>D.rotWith(o,[(s+n)/2,(r+i)/2],t))):{minX:s,minY:r,maxX:n,maxY:i,x:s,y:r,w:n-s,h:i-r}}class tt{get bl(){return[this.x,this.y+this.h]}get br(){return[this.x+this.w,this.y+this.h]}get center(){return[this.x+this.w/2,this.y+this.h/2]}set center([t,s]){const[r,n]=this.center;this.x+=t-r,this.y+=s-n}get horizontalLine(){return[[this.x,this.y+this.h/2],[this.x+this.w,this.y+this.h/2]]}get leftLine(){return[[this.x,this.y],[this.x,this.y+this.h]]}get lowerLine(){return[[this.x,this.y+this.h],[this.x+this.w,this.y+this.h]]}get maxX(){return this.x+this.w}get maxY(){return this.y+this.h}get midPoints(){return[[this.x+this.w/2,this.y],[this.x+this.w,this.y+this.h/2],[this.x+this.w/2,this.y+this.h],[this.x,this.y+this.h/2]]}get minX(){return this.x}get minY(){return this.y}get points(){return[[this.x,this.y],[this.x+this.w,this.y],[this.x+this.w,this.y+this.h],[this.x,this.y+this.h]]}get rightLine(){return[[this.x+this.w,this.y],[this.x+this.w,this.y+this.h]]}get tl(){return[this.x,this.y]}get tr(){return[this.x+this.w,this.y]}get upperLine(){return[[this.x,this.y],[this.x+this.w,this.y]]}get verticalLine(){return[[this.x+this.w/2,this.y],[this.x+this.w/2,this.y+this.h]]}constructor(t=0,s=0,r=0,n=0){this.x=t,this.y=s,this.w=r,this.h=n}static deserialize(t){const[s,r,n,i]=Pp(t);return new tt(s,r,n,i)}static from(t){return new tt(t.x,t.y,t.w,t.h)}static fromCenter(t,s,r){const[n,i]=t;return new tt(n-s/2,i-r/2,s,r)}static fromDOMRect({left:t,top:s,width:r,height:n}){return new tt(t,s,r,n)}static fromPoints(t){return tt.from(ch(t))}static fromXYWH(t){return new tt(t[0],t[1],t[2],t[3])}static serialize(t){return pd(t.x,t.y,t.w,t.h)}clone(){return new tt(this.x,this.y,this.w,this.h)}contains(t){return t.x>=this.x&&t.y>=this.y&&t.maxX<=this.maxX&&t.maxY<=this.maxY}containsPoint([t,s]){const{minX:r,minY:n,maxX:i,maxY:o}=this;return r<=t&&t<=i&&n<=s&&s<=o}expand(t,s,r,n){if(Array.isArray(t)){const[i,o]=t;return new tt(this.x-i,this.y-o,this.w+i*2,this.h+o*2)}return s??(s=t),r??(r=t),n??(n=s),new tt(this.x-t,this.y-s,this.w+t+r,this.h+s+n)}getRelativePoint([t,s]){return[this.x+t*this.w,this.y+s*this.h]}getVerticesAndMidpoints(){return[...this.points,...this.midPoints]}horizontalDistance(t){return Math.min(Math.abs(this.minX-t.maxX),Math.abs(this.maxX-t.minX))}include(t){const s=Math.min(this.x,t[0]),r=Math.min(this.y,t[1]),n=Math.max(this.maxX,t[0]),i=Math.max(this.maxY,t[1]);return new tt(s,r,n-s,i-r)}intersectLine(t,s,r=!1){const n=[];return[[this.tl,this.tr],[this.tl,this.bl],[this.tr,this.br],[this.bl,this.br]].forEach(([i,o])=>{const a=lh(t,s,i,o,r);a&&n.push(a)}),n.length===0?null:n}isHorizontalCross(t){return!(this.maxY<t.minY||this.minY>t.maxY)}isIntersectWithBound(t,s=Si){return t.maxX>this.minX-s&&t.maxY>this.minY-s&&t.minX<this.maxX+s&&t.minY<this.maxY+s&&!this.contains(t)&&!t.contains(this)}isOverlapWithBound(t,s=Si){return t.maxX>this.minX-s&&t.maxY>this.minY-s&&t.minX<this.maxX+s&&t.minY<this.maxY+s}isPointInBound([t,s],r=.01){return t>this.minX+r&&t<this.maxX-r&&s>this.minY+r&&s<this.maxY-r}isPointNearBound([t,s],r=.01){return By(this.points,[t,s])<r}isVerticalCross(t){return!(this.maxX<t.minX||this.minX>t.maxX)}moveDelta(t,s){return new tt(this.x+t,this.y+s,this.w,this.h)}serialize(){return pd(this.x,this.y,this.w,this.h)}toRelative([t,s]){const r=this.w===0?0:(t-this.x)/this.w,n=this.h===0?0:(s-this.y)/this.h;return[r,n]}toXYWH(){return[this.x,this.y,this.w,this.h]}unite(t){const s=Math.min(this.x,t.x),r=Math.min(this.y,t.y),n=Math.max(this.maxX,t.maxX),i=Math.max(this.maxY,t.maxY);return new tt(s,r,n-s,i-r)}verticalDistance(t){return Math.min(Math.abs(this.minY-t.maxY),Math.abs(this.maxY-t.minY))}}function Yy(e,t){const s=Math.min(e.x,t.x),r=Math.min(e.y,t.y),n=Math.max(e.x+e.w,t.x+t.w),i=Math.max(e.y+e.h,t.y+t.h),o=Math.abs(n-s),a=Math.abs(i-r);return{x:s,y:r,w:o,h:a}}function Lp(e,t=({x:r,y:n,w:i,h:o})=>[[r,n],[r+i,n],[r+i,n+o],[r,n+o]],s=[0,0]){const{rotate:r}=e;let n=t({x:e.x-s[1],y:e.y-s[0],w:e.w+s[1]*2,h:e.h+s[0]*2});if(r){const{x:i,y:o,w:a,h:l}=e,c=i+a/2,h=o+l/2,u=new DOMMatrix().translateSelf(c,h).rotateSelf(r).translateSelf(-c,-h);n=n.map(d=>{const{x:f,y:p}=new DOMPoint(...d).matrixTransform(u);return[f,p]})}return n}function qy(e){const{x:t,y:s,w:r,h:n,rotate:i}=e,o=new DOMRect(t,s,r,n);return i?new DOMQuad(...Lp(e).map(a=>new DOMPoint(...a))).getBounds():o}function cc(e){const{x:t,y:s,width:r,height:n}=qy(e);return{x:t,y:s,w:r,h:n}}function BA(e){if(!e.length)return null;if(e.length===1){const{x:s,y:r,w:n,h:i}=e[0];return new tt(s,r,n,i)}let t=e[0];for(let s=1;s<e.length;s++)t=Yy(t,e[s]);return new tt(t.x,t.y,t.w,t.h)}function zA(e){return e.length===0?new tt(0,0,0,0):e.reduce((t,s)=>t.unite(s instanceof tt?s:tt.from(cc(s))),tt.from(cc(e[0])))}function VA(e){return tt.from(ch(e))}function UA(e,t){const s=t/2,r=new tt(e.x-s,e.y-s,e.w+t,e.h+t);if(r.w<=0||r.h<=0)throw new Error("Invalid delta range or bound size.");return r}function FA(e,t,s,r,n){const i=s*2,o=n*2,a=Math.max(t.w-i,1),l=Math.max(t.h-i,1),c=Math.max(r.w-o,1),h=Math.max(r.h-o,1);return{points:e.map(d=>({...d,x:c*((d.x-s)/a)+n,y:h*((d.y-s)/l)+n})),bound:new tt(r.x,r.y,c+o,h+o)}}const Nr=()=>new Set,Cl=e=>e[e.length-1],Zy=(e,t)=>{for(let s=0;s<t.length;s++)e.push(t[s])},Ms=Array.from,Gy=(e,t)=>{for(let s=0;s<e.length;s++)if(t(e[s],s,e))return!0;return!1},Xy=(e,t)=>{const s=new Array(e);for(let r=0;r<e;r++)s[r]=t(r,s);return s},hc=Array.isArray,Ky=String.fromCharCode,Jy=e=>e.toLowerCase(),Qy=/^\s*/g,t_=e=>e.replace(Qy,""),e_=/([A-Z])/g,gd=(e,t)=>t_(e.replace(e_,s=>`${t}${Jy(s)}`)),s_=e=>{const t=unescape(encodeURIComponent(e)),s=t.length,r=new Uint8Array(s);for(let n=0;n<s;n++)r[n]=t.codePointAt(n);return r},Ci=typeof TextEncoder<"u"?new TextEncoder:null,r_=e=>Ci.encode(e),n_=Ci?r_:s_;let yi=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});yi&&yi.decode(new Uint8Array).length===1&&(yi=null);const i_=(e,t)=>Xy(t,()=>e).join(""),Dt=()=>new Map,uc=e=>{const t=Dt();return e.forEach((s,r)=>{t.set(r,s)}),t},de=(e,t,s)=>{let r=e.get(t);return r===void 0&&e.set(t,r=s()),r},o_=(e,t)=>{const s=[];for(const[r,n]of e)s.push(t(n,r));return s},a_=(e,t)=>{for(const[s,r]of e)if(t(r,s))return!0;return!1},md=e=>e===void 0?null:e;class l_{constructor(){this.map=new Map}setItem(t,s){this.map.set(t,s)}getItem(t){return this.map.get(t)}}let Np=new l_,c_=!0;try{typeof localStorage<"u"&&localStorage&&(Np=localStorage,c_=!1)}catch{}const h_=Np,u_=Object.assign,Bp=Object.keys,d_=(e,t)=>{for(const s in e)t(e[s],s)},bd=e=>Bp(e).length,vd=e=>Bp(e).length,f_=e=>{for(const t in e)return!1;return!0},p_=(e,t)=>{for(const s in e)if(!t(e[s],s))return!1;return!0},zp=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g_=(e,t)=>e===t||vd(e)===vd(t)&&p_(e,(s,r)=>(s!==void 0||zp(t,r))&&t[r]===s),m_=Object.freeze,Vp=e=>{for(const t in e){const s=e[t];(typeof s=="object"||typeof s=="function")&&Vp(e[t])}return m_(e)},yd=Symbol("Equality"),hh=(e,t,s=0)=>{try{for(;s<e.length;s++)e[s](...t)}finally{s<e.length&&hh(e,t,s+1)}},Up=e=>e,El=(e,t)=>{if(e===t)return!0;if(e==null||t==null||e.constructor!==t.constructor)return!1;if(e[yd]!=null)return e[yd](t);switch(e.constructor){case ArrayBuffer:e=new Uint8Array(e),t=new Uint8Array(t);case Uint8Array:{if(e.byteLength!==t.byteLength)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;break}case Set:{if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;break}case Map:{if(e.size!==t.size)return!1;for(const s of e.keys())if(!t.has(s)||!El(e.get(s),t.get(s)))return!1;break}case Object:if(bd(e)!==bd(t))return!1;for(const s in e)if(!zp(e,s)||!El(e[s],t[s]))return!1;break;case Array:if(e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(!El(e[s],t[s]))return!1;break;default:return!1}return!0},b_=(e,t)=>t.includes(e);var Fp={};const gn=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",v_=typeof window<"u"&&typeof document<"u"&&!gn;let os;const y_=()=>{if(os===void 0)if(gn){os=Dt();const e=process.argv;let t=null;for(let s=0;s<e.length;s++){const r=e[s];r[0]==="-"?(t!==null&&os.set(t,""),t=r):t!==null&&(os.set(t,r),t=null)}t!==null&&os.set(t,"")}else typeof location=="object"?(os=Dt(),(location.search||"?").slice(1).split("&").forEach(e=>{if(e.length!==0){const[t,s]=e.split("=");os.set(`--${gd(t,"-")}`,s),os.set(`-${gd(t,"-")}`,s)}})):os=Dt();return os},dc=e=>y_().has(e),ca=e=>md(gn?Fp[e.toUpperCase().replaceAll("-","_")]:h_.getItem(e)),jp=e=>dc("--"+e)||ca(e)!==null;jp("production");const __=gn&&b_(Fp.FORCE_COLOR,["true","1","2"]),w_=__||!dc("--no-colors")&&!jp("no-color")&&(!gn||process.stdout.isTTY)&&(!gn||dc("--color")||ca("COLORTERM")!==null||(ca("TERM")||"").includes("color")),Js=Math.floor,ta=Math.abs,Hp=(e,t)=>e<t?e:t,Xr=(e,t)=>e>t?e:t,Wp=e=>e!==0?e<0:1/e<0,_d=1,wd=2,$l=4,Tl=8,Ei=32,Rs=64,ke=128,jA=1<<29,Va=31,fc=63,Ar=127,x_=2147483647,Yp=Number.MAX_SAFE_INTEGER,k_=Number.isInteger||(e=>typeof e=="number"&&isFinite(e)&&Js(e)===e);class ao{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const Dn=()=>new ao,S_=e=>{let t=e.cpos;for(let s=0;s<e.bufs.length;s++)t+=e.bufs[s].length;return t},Le=e=>{const t=new Uint8Array(S_(e));let s=0;for(let r=0;r<e.bufs.length;r++){const n=e.bufs[r];t.set(n,s),s+=n.length}return t.set(new Uint8Array(e.cbuf.buffer,0,e.cpos),s),t},C_=(e,t)=>{const s=e.cbuf.length;s-e.cpos<t&&(e.bufs.push(new Uint8Array(e.cbuf.buffer,0,e.cpos)),e.cbuf=new Uint8Array(Xr(s,t)*2),e.cpos=0)},It=(e,t)=>{const s=e.cbuf.length;e.cpos===s&&(e.bufs.push(e.cbuf),e.cbuf=new Uint8Array(s*2),e.cpos=0),e.cbuf[e.cpos++]=t},$i=It,V=(e,t)=>{for(;t>Ar;)It(e,ke|Ar&t),t=Js(t/128);It(e,Ar&t)},Ua=(e,t)=>{const s=Wp(t);for(s&&(t=-t),It(e,(t>fc?ke:0)|(s?Rs:0)|fc&t),t=Js(t/64);t>0;)It(e,(t>Ar?ke:0)|Ar&t),t=Js(t/128)},pc=new Uint8Array(3e4),E_=pc.length/3,$_=(e,t)=>{if(t.length<E_){const s=Ci.encodeInto(t,pc).written||0;V(e,s);for(let r=0;r<s;r++)It(e,pc[r])}else we(e,n_(t))},T_=(e,t)=>{const s=unescape(encodeURIComponent(t)),r=s.length;V(e,r);for(let n=0;n<r;n++)It(e,s.codePointAt(n))},Or=Ci&&Ci.encodeInto?$_:T_,A_=(e,t)=>lo(e,Le(t)),lo=(e,t)=>{const s=e.cbuf.length,r=e.cpos,n=Hp(s-r,t.length),i=t.length-n;e.cbuf.set(t.subarray(0,n),r),e.cpos+=n,i>0&&(e.bufs.push(e.cbuf),e.cbuf=new Uint8Array(Xr(s*2,i)),e.cbuf.set(t.subarray(n)),e.cpos=i)},we=(e,t)=>{V(e,t.byteLength),lo(e,t)},uh=(e,t)=>{C_(e,t);const s=new DataView(e.cbuf.buffer,e.cpos,t);return e.cpos+=t,s},O_=(e,t)=>uh(e,4).setFloat32(0,t,!1),R_=(e,t)=>uh(e,8).setFloat64(0,t,!1),I_=(e,t)=>uh(e,8).setBigInt64(0,t,!1),xd=new DataView(new ArrayBuffer(4)),M_=e=>(xd.setFloat32(0,e),xd.getFloat32(0)===e),Ti=(e,t)=>{switch(typeof t){case"string":It(e,119),Or(e,t);break;case"number":k_(t)&&ta(t)<=x_?(It(e,125),Ua(e,t)):M_(t)?(It(e,124),O_(e,t)):(It(e,123),R_(e,t));break;case"bigint":It(e,122),I_(e,t);break;case"object":if(t===null)It(e,126);else if(hc(t)){It(e,117),V(e,t.length);for(let s=0;s<t.length;s++)Ti(e,t[s])}else if(t instanceof Uint8Array)It(e,116),we(e,t);else{It(e,118);const s=Object.keys(t);V(e,s.length);for(let r=0;r<s.length;r++){const n=s[r];Or(e,n),Ti(e,t[n])}}break;case"boolean":It(e,t?120:121);break;default:It(e,127)}};class kd extends ao{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&V(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}}const Sd=e=>{e.count>0&&(Ua(e.encoder,e.count===1?e.s:-e.s),e.count>1&&V(e.encoder,e.count-2))};class ea{constructor(){this.encoder=new ao,this.s=0,this.count=0}write(t){this.s===t?this.count++:(Sd(this),this.count=1,this.s=t)}toUint8Array(){return Sd(this),Le(this.encoder)}}const Cd=e=>{if(e.count>0){const t=e.diff*2+(e.count===1?0:1);Ua(e.encoder,t),e.count>1&&V(e.encoder,e.count-2)}};class Al{constructor(){this.encoder=new ao,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(Cd(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return Cd(this),Le(this.encoder)}}class D_{constructor(){this.sarr=[],this.s="",this.lensE=new ea}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){const t=new ao;return this.sarr.push(this.s),this.s="",Or(t,this.sarr.join("")),lo(t,this.lensE.toUint8Array()),Le(t)}}const Qs=e=>new Error(e),hs=()=>{throw Qs("Method unimplemented")},be=()=>{throw Qs("Unexpected case")},qp=Qs("Unexpected end of array"),Zp=Qs("Integer out of Range");class Fa{constructor(t){this.arr=t,this.pos=0}}const Xt=e=>new Fa(e),Gp=e=>e.pos!==e.arr.length,P_=(e,t)=>{const s=new Uint8Array(e.arr.buffer,e.pos+e.arr.byteOffset,t);return e.pos+=t,s},xe=e=>P_(e,Y(e)),mn=e=>e.arr[e.pos++],Y=e=>{let t=0,s=1;const r=e.arr.length;for(;e.pos<r;){const n=e.arr[e.pos++];if(t=t+(n&Ar)*s,s*=128,n<ke)return t;if(t>Yp)throw Zp}throw qp},ja=e=>{let t=e.arr[e.pos++],s=t&fc,r=64;const n=(t&Rs)>0?-1:1;if((t&ke)===0)return n*s;const i=e.arr.length;for(;e.pos<i;){if(t=e.arr[e.pos++],s=s+(t&Ar)*r,r*=128,t<ke)return n*s;if(s>Yp)throw Zp}throw qp},L_=e=>{let t=Y(e);if(t===0)return"";{let s=String.fromCodePoint(mn(e));if(--t<100)for(;t--;)s+=String.fromCodePoint(mn(e));else for(;t>0;){const r=t<1e4?t:1e4,n=e.arr.subarray(e.pos,e.pos+r);e.pos+=r,s+=String.fromCodePoint.apply(null,n),t-=r}return decodeURIComponent(escape(s))}},N_=e=>yi.decode(xe(e)),Rr=yi?N_:L_,dh=(e,t)=>{const s=new DataView(e.arr.buffer,e.arr.byteOffset+e.pos,t);return e.pos+=t,s},B_=e=>dh(e,4).getFloat32(0,!1),z_=e=>dh(e,8).getFloat64(0,!1),V_=e=>dh(e,8).getBigInt64(0,!1),U_=[e=>{},e=>null,ja,B_,z_,V_,e=>!1,e=>!0,Rr,e=>{const t=Y(e),s={};for(let r=0;r<t;r++){const n=Rr(e);s[n]=Ai(e)}return s},e=>{const t=Y(e),s=[];for(let r=0;r<t;r++)s.push(Ai(e));return s},xe],Ai=e=>U_[127-mn(e)](e);class Ed extends Fa{constructor(t,s){super(t),this.reader=s,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),Gp(this)?this.count=Y(this)+1:this.count=-1),this.count--,this.s}}class sa extends Fa{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=ja(this);const t=Wp(this.s);this.count=1,t&&(this.s=-this.s,this.count=Y(this)+2)}return this.count--,this.s}}class Ol extends Fa{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const t=ja(this),s=t&1;this.diff=Js(t/2),this.count=1,s&&(this.count=Y(this)+2)}return this.s+=this.diff,this.count--,this.s}}class F_{constructor(t){this.decoder=new sa(t),this.str=Rr(this.decoder),this.spos=0}read(){const t=this.spos+this.decoder.read(),s=this.str.slice(this.spos,t);return this.spos=t,s}}const j_=e=>new Uint8Array(e),H_=e=>{let t="";for(let s=0;s<e.byteLength;s++)t+=Ky(e[s]);return btoa(t)},W_=e=>Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("base64"),HA=v_?H_:W_,Y_=e=>{const t=j_(e.byteLength);return t.set(e),t};async function WA(e,t){return new Promise(s=>{if(t?.aborted){s();return}let r=!1;t?.addEventListener("abort",()=>{r||(clearTimeout(n),s())});const n=setTimeout(()=>{r=!0,s()},e)})}function YA(e){}async function q_(){return"scheduler"in window&&"yield"in window.scheduler?window.scheduler.yield():typeof requestIdleCallback<"u"?new Promise(e=>requestIdleCallback(e)):new Promise(e=>setTimeout(e,0))}class fh{constructor(){this._observers=Dt()}on(t,s){return de(this._observers,t,Nr).add(s),s}once(t,s){const r=(...n)=>{this.off(t,r),s(...n)};this.on(t,r)}off(t,s){const r=this._observers.get(t);r!==void 0&&(r.delete(s),r.size===0&&this._observers.delete(t))}emit(t,s){return Ms((this._observers.get(t)||Dt()).values()).forEach(r=>r(...s))}destroy(){this._observers=Dt()}}let qA=class{constructor(){this._observers=Dt()}on(t,s){de(this._observers,t,Nr).add(s)}once(t,s){const r=(...n)=>{this.off(t,r),s(...n)};this.on(t,r)}off(t,s){const r=this._observers.get(t);r!==void 0&&(r.delete(s),r.size===0&&this._observers.delete(t))}emit(t,s){return Ms((this._observers.get(t)||Dt()).values()).forEach(r=>r(...s))}destroy(){this._observers=Dt()}};const Z_=crypto.getRandomValues.bind(crypto),Xp=()=>Z_(new Uint32Array(1))[0],G_="10000000-1000-4000-8000"+-1e11,Kp=()=>G_.replace(/[018]/g,e=>(e^Xp()&15>>e/4).toString(16)),X_=Date.now,$d=e=>new Promise(e);Promise.all.bind(Promise);class K_{constructor(t,s){this.left=t,this.right=s}}const Es=(e,t)=>new K_(e,t);typeof DOMParser<"u"&&new DOMParser;const J_=e=>o_(e,(t,s)=>`${s}:${t};`).join(""),Ns=Symbol,Jp=Ns(),Qp=Ns(),Q_=Ns(),t0=Ns(),e0=Ns(),tg=Ns(),s0=Ns(),ph=Ns(),r0=Ns(),n0=e=>{e.length===1&&e[0]?.constructor===Function&&(e=e[0]());const t=[],s=[];let r=0;for(;r<e.length;r++){const n=e[r];if(n===void 0)break;if(n.constructor===String||n.constructor===Number)t.push(n);else if(n.constructor===Object)break}for(r>0&&s.push(t.join(""));r<e.length;r++){const n=e[r];n instanceof Symbol||s.push(n)}return s},i0={[Jp]:Es("font-weight","bold"),[Qp]:Es("font-weight","normal"),[Q_]:Es("color","blue"),[e0]:Es("color","green"),[t0]:Es("color","grey"),[tg]:Es("color","red"),[s0]:Es("color","purple"),[ph]:Es("color","orange"),[r0]:Es("color","black")},o0=e=>{e.length===1&&e[0]?.constructor===Function&&(e=e[0]());const t=[],s=[],r=Dt();let n=[],i=0;for(;i<e.length;i++){const o=e[i],a=i0[o];if(a!==void 0)r.set(a.left,a.right);else{if(o===void 0)break;if(o.constructor===String||o.constructor===Number){const l=J_(r);i>0||l.length>0?(t.push("%c"+o),s.push(l)):t.push(o)}else break}}for(i>0&&(n=s,n.unshift(t.join("")));i<e.length;i++){const o=e[i];o instanceof Symbol||n.push(o)}return n},eg=w_?o0:n0,gc=(...e)=>{console.log(...eg(e)),rg.forEach(t=>t.print(e))},sg=(...e)=>{console.warn(...eg(e)),e.unshift(ph),rg.forEach(t=>t.print(e))},rg=Nr(),ng=e=>({[Symbol.iterator](){return this},next:e}),a0=(e,t)=>ng(()=>{let s;do s=e.next();while(!s.done&&!t(s.value));return s}),Rl=(e,t)=>ng(()=>{const{done:s,value:r}=e.next();return{done:s,value:s?void 0:t(r)}});class l0 extends fh{constructor(t,s){super(),this.doc=t,this.awareness=s}}class gh{constructor(t,s){this.clock=t,this.len=s}}class Pn{constructor(){this.clients=new Map}}const Br=(e,t,s)=>t.clients.forEach((r,n)=>{const i=e.doc.store.clients.get(n);if(i!=null){const o=i[i.length-1],a=o.id.clock+o.length;for(let l=0,c=r[l];l<r.length&&c.clock<a;c=r[++l])mg(e,i,c.clock,c.len,s)}}),c0=(e,t)=>{let s=0,r=e.length-1;for(;s<=r;){const n=Js((s+r)/2),i=e[n],o=i.clock;if(o<=t){if(t<o+i.len)return n;s=n+1}else r=n-1}return null},Kr=(e,t)=>{const s=e.clients.get(t.client);return s!==void 0&&c0(s,t.clock)!==null},mh=e=>{e.clients.forEach(t=>{t.sort((n,i)=>n.clock-i.clock);let s,r;for(s=1,r=1;s<t.length;s++){const n=t[r-1],i=t[s];n.clock+n.len>=i.clock?n.len=Xr(n.len,i.clock+i.len-n.clock):(r<s&&(t[r]=i),r++)}t.length=r})},zr=e=>{const t=new Pn;for(let s=0;s<e.length;s++)e[s].clients.forEach((r,n)=>{if(!t.clients.has(n)){const i=r.slice();for(let o=s+1;o<e.length;o++)Zy(i,e[o].clients.get(n)||[]);t.clients.set(n,i)}});return mh(t),t},Oi=(e,t,s,r)=>{de(e.clients,t,()=>[]).push(new gh(s,r))},Ha=()=>new Pn,bh=e=>{const t=Ha();return e.clients.forEach((s,r)=>{const n=[];for(let i=0;i<s.length;i++){const o=s[i];if(o.deleted){const a=o.id.clock;let l=o.length;if(i+1<s.length)for(let c=s[i+1];i+1<s.length&&c.deleted;c=s[++i+1])l+=c.length;n.push(new gh(a,l))}}n.length>0&&t.clients.set(r,n)}),t},gs=(e,t)=>{V(e.restEncoder,t.clients.size),Ms(t.clients.entries()).sort((s,r)=>r[0]-s[0]).forEach(([s,r])=>{e.resetDsCurVal(),V(e.restEncoder,s);const n=r.length;V(e.restEncoder,n);for(let i=0;i<n;i++){const o=r[i];e.writeDsClock(o.clock),e.writeDsLen(o.len)}})},Ds=e=>{const t=new Pn,s=Y(e.restDecoder);for(let r=0;r<s;r++){e.resetDsCurVal();const n=Y(e.restDecoder),i=Y(e.restDecoder);if(i>0){const o=de(t.clients,n,()=>[]);for(let a=0;a<i;a++)o.push(new gh(e.readDsClock(),e.readDsLen()))}}return t},Td=(e,t,s)=>{const r=new Pn,n=Y(e.restDecoder);for(let i=0;i<n;i++){e.resetDsCurVal();const o=Y(e.restDecoder),a=Y(e.restDecoder),l=s.clients.get(o)||[],c=wt(s,o);for(let h=0;h<a;h++){const u=e.readDsClock(),d=u+e.readDsLen();if(u<c){c<d&&Oi(r,o,c,d-c);let f=Be(l,u),p=l[f];for(!p.deleted&&p.id.clock<u&&(l.splice(f+1,0,da(t,p,u-p.id.clock)),f++);f<l.length&&(p=l[f++],p.id.clock<d);)p.deleted||(d<p.id.clock+p.length&&l.splice(f,0,da(t,p,d-p.id.clock)),p.delete(t))}else Oi(r,o,u,d-u)}}if(r.clients.size>0){const i=new Ke;return V(i.restEncoder,0),gs(i,r),i.toUint8Array()}return null},ig=(e,t)=>{if(e.clients.size!==t.clients.size)return!1;for(const[s,r]of e.clients.entries()){const n=t.clients.get(s);if(n===void 0||r.length!==n.length)return!1;for(let i=0;i<r.length;i++){const o=r[i],a=n[i];if(o.clock!==a.clock||o.len!==a.len)return!1}}return!0},og=Xp;class ur extends fh{constructor({guid:t=Kp(),collectionid:s=null,gc:r=!0,gcFilter:n=()=>!0,meta:i=null,autoLoad:o=!1,shouldLoad:a=!0}={}){super(),this.gc=r,this.gcFilter=n,this.clientID=og(),this.guid=t,this.collectionid=s,this.share=new Map,this.store=new pg,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=a,this.autoLoad=o,this.meta=i,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=$d(c=>{this.on("load",()=>{this.isLoaded=!0,c(this)})});const l=()=>$d(c=>{const h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),c())};this.on("sync",h)});this.on("sync",c=>{c===!1&&this.isSynced&&(this.whenSynced=l()),this.isSynced=c===void 0||c===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=l()}load(){const t=this._item;t!==null&&!this.shouldLoad&&dt(t.parent.doc,s=>{s.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Ms(this.subdocs).map(t=>t.guid))}transact(t,s=null){return dt(this,t,s)}get(t,s=$t){const r=de(this.share,t,()=>{const i=new s;return i._integrate(this,null),i}),n=r.constructor;if(s!==$t&&n!==s)if(n===$t){const i=new s;i._map=r._map,r._map.forEach(o=>{for(;o!==null;o=o.left)o.parent=i}),i._start=r._start;for(let o=i._start;o!==null;o=o.right)o.parent=i;return i._length=r._length,this.share.set(t,i),i._integrate(this,null),i}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return r}getArray(t=""){return this.get(t,Pt)}getText(t=""){return this.get(t,fe)}getMap(t=""){return this.get(t,Vt)}getXmlElement(t=""){return this.get(t,sr)}getXmlFragment(t=""){return this.get(t,er)}toJSON(){const t={};return this.share.forEach((s,r)=>{t[r]=s.toJSON()}),t}destroy(){this.isDestroyed=!0,Ms(this.subdocs).forEach(s=>s.destroy());const t=this._item;if(t!==null){this._item=null;const s=t.content;s.doc=new ur({guid:this.guid,...s.opts,shouldLoad:!1}),s.doc._item=t,dt(t.parent.doc,r=>{const n=s.doc;t.deleted||r.subdocsAdded.add(n),r.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}}class Ri{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return Y(this.restDecoder)}readDsLen(){return Y(this.restDecoder)}}class Ue extends Ri{readLeftID(){return j(Y(this.restDecoder),Y(this.restDecoder))}readRightID(){return j(Y(this.restDecoder),Y(this.restDecoder))}readClient(){return Y(this.restDecoder)}readInfo(){return mn(this.restDecoder)}readString(){return Rr(this.restDecoder)}readParentInfo(){return Y(this.restDecoder)===1}readTypeRef(){return Y(this.restDecoder)}readLen(){return Y(this.restDecoder)}readAny(){return Ai(this.restDecoder)}readBuf(){return Y_(xe(this.restDecoder))}readJSON(){return JSON.parse(Rr(this.restDecoder))}readKey(){return Rr(this.restDecoder)}}class ag{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=Y(this.restDecoder),this.dsCurrVal}readDsLen(){const t=Y(this.restDecoder)+1;return this.dsCurrVal+=t,t}}class Ee extends ag{constructor(t){super(t),this.keys=[],Y(t),this.keyClockDecoder=new Ol(xe(t)),this.clientDecoder=new sa(xe(t)),this.leftClockDecoder=new Ol(xe(t)),this.rightClockDecoder=new Ol(xe(t)),this.infoDecoder=new Ed(xe(t),mn),this.stringDecoder=new F_(xe(t)),this.parentInfoDecoder=new Ed(xe(t),mn),this.typeRefDecoder=new sa(xe(t)),this.lenDecoder=new sa(xe(t))}readLeftID(){return new Ir(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Ir(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return Ai(this.restDecoder)}readBuf(){return xe(this.restDecoder)}readJSON(){return Ai(this.restDecoder)}readKey(){const t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{const s=this.stringDecoder.read();return this.keys.push(s),s}}}class bn{constructor(){this.restEncoder=Dn()}toUint8Array(){return Le(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){V(this.restEncoder,t)}writeDsLen(t){V(this.restEncoder,t)}}class dr extends bn{writeLeftID(t){V(this.restEncoder,t.client),V(this.restEncoder,t.clock)}writeRightID(t){V(this.restEncoder,t.client),V(this.restEncoder,t.clock)}writeClient(t){V(this.restEncoder,t)}writeInfo(t){$i(this.restEncoder,t)}writeString(t){Or(this.restEncoder,t)}writeParentInfo(t){V(this.restEncoder,t?1:0)}writeTypeRef(t){V(this.restEncoder,t)}writeLen(t){V(this.restEncoder,t)}writeAny(t){Ti(this.restEncoder,t)}writeBuf(t){we(this.restEncoder,t)}writeJSON(t){Or(this.restEncoder,JSON.stringify(t))}writeKey(t){Or(this.restEncoder,t)}}class Wa{constructor(){this.restEncoder=Dn(),this.dsCurrVal=0}toUint8Array(){return Le(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){const s=t-this.dsCurrVal;this.dsCurrVal=t,V(this.restEncoder,s)}writeDsLen(t){t===0&&be(),V(this.restEncoder,t-1),this.dsCurrVal+=t}}class Ke extends Wa{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new Al,this.clientEncoder=new ea,this.leftClockEncoder=new Al,this.rightClockEncoder=new Al,this.infoEncoder=new kd($i),this.stringEncoder=new D_,this.parentInfoEncoder=new kd($i),this.typeRefEncoder=new ea,this.lenEncoder=new ea}toUint8Array(){const t=Dn();return V(t,0),we(t,this.keyClockEncoder.toUint8Array()),we(t,this.clientEncoder.toUint8Array()),we(t,this.leftClockEncoder.toUint8Array()),we(t,this.rightClockEncoder.toUint8Array()),we(t,Le(this.infoEncoder)),we(t,this.stringEncoder.toUint8Array()),we(t,Le(this.parentInfoEncoder)),we(t,this.typeRefEncoder.toUint8Array()),we(t,this.lenEncoder.toUint8Array()),lo(t,Le(this.restEncoder)),Le(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){Ti(this.restEncoder,t)}writeBuf(t){we(this.restEncoder,t)}writeJSON(t){Ti(this.restEncoder,t)}writeKey(t){const s=this.keyMap.get(t);s===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(s)}}const h0=(e,t,s,r)=>{r=Xr(r,t[0].id.clock);const n=Be(t,r);V(e.restEncoder,t.length-n),e.writeClient(s),V(e.restEncoder,r);const i=t[n];i.write(e,r-i.id.clock);for(let o=n+1;o<t.length;o++)t[o].write(e,0)},vh=(e,t,s)=>{const r=new Map;s.forEach((n,i)=>{wt(t,i)>n&&r.set(i,n)}),co(t).forEach((n,i)=>{s.has(i)||r.set(i,0)}),V(e.restEncoder,r.size),Ms(r.entries()).sort((n,i)=>i[0]-n[0]).forEach(([n,i])=>{h0(e,t.clients.get(n),n,i)})},u0=(e,t)=>{const s=Dt(),r=Y(e.restDecoder);for(let n=0;n<r;n++){const i=Y(e.restDecoder),o=new Array(i),a=e.readClient();let l=Y(e.restDecoder);s.set(a,{i:0,refs:o});for(let c=0;c<i;c++){const h=e.readInfo();switch(Va&h){case 0:{const u=e.readLen();o[c]=new pe(j(a,l),u),l+=u;break}case 10:{const u=Y(e.restDecoder);o[c]=new ne(j(a,l),u),l+=u;break}default:{const u=(h&(Rs|ke))===0,d=new ht(j(a,l),null,(h&ke)===ke?e.readLeftID():null,null,(h&Rs)===Rs?e.readRightID():null,u?e.readParentInfo()?t.get(e.readString()):e.readLeftID():null,u&&(h&Ei)===Ei?e.readString():null,Jg(e,h));o[c]=d,l+=d.length}}}}return s},d0=(e,t,s)=>{const r=[];let n=Ms(s.keys()).sort((f,p)=>f-p);if(n.length===0)return null;const i=()=>{if(n.length===0)return null;let f=s.get(n[n.length-1]);for(;f.refs.length===f.i;)if(n.pop(),n.length>0)f=s.get(n[n.length-1]);else return null;return f};let o=i();if(o===null)return null;const a=new pg,l=new Map,c=(f,p)=>{const b=l.get(f);(b==null||b>p)&&l.set(f,p)};let h=o.refs[o.i++];const u=new Map,d=()=>{for(const f of r){const p=f.id.client,b=s.get(p);b?(b.i--,a.clients.set(p,b.refs.slice(b.i)),s.delete(p),b.i=0,b.refs=[]):a.clients.set(p,[f]),n=n.filter(v=>v!==p)}r.length=0};for(;;){if(h.constructor!==ne){const p=de(u,h.id.client,()=>wt(t,h.id.client))-h.id.clock;if(p<0)r.push(h),c(h.id.client,h.id.clock-1),d();else{const b=h.getMissing(e,t);if(b!==null){r.push(h);const v=s.get(b)||{refs:[],i:0};if(v.refs.length===v.i)c(b,wt(t,b)),d();else{h=v.refs[v.i++];continue}}else(p===0||p<h.length)&&(h.integrate(e,p),u.set(h.id.client,h.id.clock+h.length))}}if(r.length>0)h=r.pop();else if(o!==null&&o.i<o.refs.length)h=o.refs[o.i++];else{if(o=i(),o===null)break;h=o.refs[o.i++]}}if(a.clients.size>0){const f=new Ke;return vh(f,a,new Map),V(f.restEncoder,0),{missing:l,update:f.toUint8Array()}}return null},f0=(e,t)=>vh(e,t.doc.store,t.beforeState),yh=(e,t,s,r=new Ee(e))=>dt(t,n=>{n.local=!1;let i=!1;const o=n.doc,a=o.store,l=u0(r,o),c=d0(n,a,l),h=a.pendingStructs;if(h){for(const[d,f]of h.missing)if(f<wt(a,d)){i=!0;break}if(c){for(const[d,f]of c.missing){const p=h.missing.get(d);(p==null||p>f)&&h.missing.set(d,f)}h.update=Mi([h.update,c.update])}}else a.pendingStructs=c;const u=Td(r,n,a);if(a.pendingDs){const d=new Ee(Xt(a.pendingDs));Y(d.restDecoder);const f=Td(d,n,a);u&&f?a.pendingDs=Mi([u,f]):a.pendingDs=u||f}else a.pendingDs=u;if(i){const d=a.pendingStructs.update;a.pendingStructs=null,Ya(n.doc,d)}},s,!1),p0=(e,t,s)=>yh(e,t,s,new Ue(e)),Ya=(e,t,s,r=Ee)=>{const n=Xt(t);yh(n,e,s,new r(n))},g0=(e,t,s)=>Ya(e,t,s,Ue),m0=(e,t,s=new Map)=>{vh(e,t.store,s),gs(e,bh(t.store))},lg=(e,t=new Uint8Array([0]),s=new Ke)=>{const r=_h(t);m0(s,e,r);const n=[s.toUint8Array()];if(e.store.pendingDs&&n.push(e.store.pendingDs),e.store.pendingStructs&&n.push(Eh(e.store.pendingStructs.update,t)),n.length>1){if(s.constructor===dr)return kg(n.map((i,o)=>o===0?i:Tg(i)));if(s.constructor===Ke)return Mi(n)}return n[0]},b0=(e,t)=>lg(e,t,new dr),cg=e=>{const t=new Map,s=Y(e.restDecoder);for(let r=0;r<s;r++){const n=Y(e.restDecoder),i=Y(e.restDecoder);t.set(n,i)}return t},_h=e=>cg(new Ri(Xt(e))),wh=(e,t)=>(V(e.restEncoder,t.size),Ms(t.entries()).sort((s,r)=>r[0]-s[0]).forEach(([s,r])=>{V(e.restEncoder,s),V(e.restEncoder,r)}),e),v0=(e,t)=>wh(e,co(t.store)),y0=(e,t=new Wa)=>(e instanceof Map?wh(t,e):v0(t,e),t.toUint8Array()),_0=e=>y0(e,new bn);class w0{constructor(){this.l=[]}}const Ad=()=>new w0,Od=(e,t)=>e.l.push(t),Rd=(e,t)=>{const s=e.l,r=s.length;e.l=s.filter(n=>t!==n),r===e.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},hg=(e,t,s)=>hh(e.l,[t,s]);class Ir{constructor(t,s){this.client=t,this.clock=s}}const Sr=(e,t)=>e===t||e!==null&&t!==null&&e.client===t.client&&e.clock===t.clock,j=(e,t)=>new Ir(e,t),Id=(e,t)=>{V(e,t.client),V(e,t.clock)},Md=e=>j(Y(e),Y(e)),xh=e=>{for(const[t,s]of e.doc.share.entries())if(s===e)return t;throw be()},Ii=(e,t)=>{for(;t!==null;){if(t.parent===e)return!0;t=t.parent._item}return!1},x0=e=>{const t=[];let s=e._start;for(;s;)t.push(s),s=s.right;console.log("Children: ",t),console.log("Children content: ",t.filter(r=>!r.deleted).map(r=>r.content))};class k0{constructor(t,s=t.getMap("users")){const r=new Map;this.yusers=s,this.doc=t,this.clients=new Map,this.dss=r;const n=(i,o)=>{const a=i.get("ds"),l=i.get("ids"),c=h=>this.clients.set(h,o);a.observe(h=>{h.changes.added.forEach(u=>{u.content.getContent().forEach(d=>{d instanceof Uint8Array&&this.dss.set(o,zr([this.dss.get(o)||Ha(),Ds(new Ri(Xt(d)))]))})})}),this.dss.set(o,zr(a.map(h=>Ds(new Ri(Xt(h)))))),l.observe(h=>h.changes.added.forEach(u=>u.content.getContent().forEach(c))),l.forEach(c)};s.observe(i=>{i.keysChanged.forEach(o=>n(s.get(o),o))}),s.forEach(n)}setUserMapping(t,s,r,{filter:n=()=>!0}={}){const i=this.yusers;let o=i.get(r);o||(o=new Vt,o.set("ids",new Pt),o.set("ds",new Pt),i.set(r,o)),o.get("ids").push([s]),i.observe(a=>{setTimeout(()=>{const l=i.get(r);if(l!==o){o=l,this.clients.forEach((u,d)=>{r===u&&o.get("ids").push([d])});const c=new bn,h=this.dss.get(r);h&&(gs(c,h),o.get("ds").push([c.toUint8Array()]))}},0)}),t.on("afterTransaction",a=>{setTimeout(()=>{const l=o.get("ds"),c=a.deleteSet;if(a.local&&c.clients.size>0&&n(a,c)){const h=new bn;gs(h,c),l.push([h.toUint8Array()])}})})}getUserByClientId(t){return this.clients.get(t)||null}getUserByDeletedId(t){for(const[s,r]of this.dss.entries())if(Kr(r,t))return s;return null}}class qa{constructor(t,s,r,n=0){this.type=t,this.tname=s,this.item=r,this.assoc=n}}const S0=e=>{const t={};return e.type&&(t.type=e.type),e.tname&&(t.tname=e.tname),e.item&&(t.item=e.item),e.assoc!=null&&(t.assoc=e.assoc),t},C0=e=>new qa(e.type==null?null:j(e.type.client,e.type.clock),e.tname??null,e.item==null?null:j(e.item.client,e.item.clock),e.assoc==null?0:e.assoc);class ug{constructor(t,s,r=0){this.type=t,this.index=s,this.assoc=r}}const E0=(e,t,s=0)=>new ug(e,t,s),Lo=(e,t,s)=>{let r=null,n=null;return e._item===null?n=xh(e):r=j(e._item.id.client,e._item.id.clock),new qa(r,n,t,s)},mc=(e,t,s=0)=>{let r=e._start;if(s<0){if(t===0)return Lo(e,null,s);t--}for(;r!==null;){if(!r.deleted&&r.countable){if(r.length>t)return Lo(e,j(r.id.client,r.id.clock+t),s);t-=r.length}if(r.right===null&&s<0)return Lo(e,r.lastId,s);r=r.right}return Lo(e,null,s)},$0=(e,t)=>{const{type:s,tname:r,item:n,assoc:i}=t;if(n!==null)V(e,0),Id(e,n);else if(r!==null)$i(e,1),Or(e,r);else if(s!==null)$i(e,2),Id(e,s);else throw be();return Ua(e,i),e},T0=e=>{const t=Dn();return $0(t,e),Le(t)},A0=e=>{let t=null,s=null,r=null;switch(Y(e)){case 0:r=Md(e);break;case 1:s=Rr(e);break;case 2:t=Md(e)}const n=Gp(e)?ja(e):0;return new qa(t,s,r,n)},O0=e=>A0(Xt(e)),R0=(e,t)=>{const s=Mr(e,t),r=t.clock-s.id.clock;return{item:s,diff:r}},bc=(e,t,s=!0)=>{const r=t.store,n=e.item,i=e.type,o=e.tname,a=e.assoc;let l=null,c=0;if(n!==null){if(wt(r,n.client)<=n.clock)return null;const h=s?xc(r,n):R0(r,n),u=h.item;if(!(u instanceof ht))return null;if(l=u.parent,l._item===null||!l._item.deleted){c=u.deleted||!u.countable?0:h.diff+(a>=0?0:1);let d=u.left;for(;d!==null;)!d.deleted&&d.countable&&(c+=d.length),d=d.left}}else{if(o!==null)l=t.get(o);else if(i!==null){if(wt(r,i.client)<=i.clock)return null;const{item:h}=s?xc(r,i):{item:Mr(r,i)};if(h instanceof ht&&h.content instanceof Fe)l=h.content.type;else return null}else throw be();a>=0?c=l._length:c=0}return E0(l,c,e.assoc)},I0=(e,t)=>e===t||e!==null&&t!==null&&e.tname===t.tname&&Sr(e.item,t.item)&&Sr(e.type,t.type)&&e.assoc===t.assoc;class kh{constructor(t,s){this.ds=t,this.sv=s}}const M0=(e,t)=>{const s=e.ds.clients,r=t.ds.clients,n=e.sv,i=t.sv;if(n.size!==i.size||s.size!==r.size)return!1;for(const[o,a]of n.entries())if(i.get(o)!==a)return!1;for(const[o,a]of s.entries()){const l=r.get(o)||[];if(a.length!==l.length)return!1;for(let c=0;c<a.length;c++){const h=a[c],u=l[c];if(h.clock!==u.clock||h.len!==u.len)return!1}}return!0},dg=(e,t=new Wa)=>(gs(t,e.ds),wh(t,e.sv),t.toUint8Array()),D0=e=>dg(e,new bn),fg=(e,t=new ag(Xt(e)))=>new kh(Ds(t),cg(t)),P0=e=>fg(e,new Ri(Xt(e))),Sh=(e,t)=>new kh(e,t),L0=Sh(Ha(),new Map),N0=e=>Sh(bh(e.store),co(e.store)),Ys=(e,t)=>t===void 0?!e.deleted:t.sv.has(e.id.client)&&(t.sv.get(e.id.client)||0)>e.id.clock&&!Kr(t.ds,e.id),vc=(e,t)=>{const s=de(e.meta,vc,Nr),r=e.doc.store;s.has(t)||(t.sv.forEach((n,i)=>{n<wt(r,i)&&Gt(e,j(i,n))}),Br(e,t.ds,n=>{}),s.add(t))},B0=(e,t,s=new ur)=>{if(e.gc)throw new Error("Garbage-collection must be disabled in `originDoc`!");const{sv:r,ds:n}=t,i=new Ke;return e.transact(o=>{let a=0;r.forEach(l=>{l>0&&a++}),V(i.restEncoder,a);for(const[l,c]of r){if(c===0)continue;c<wt(e.store,l)&&Gt(o,j(l,c));const h=e.store.clients.get(l)||[],u=Be(h,c-1);V(i.restEncoder,u+1),i.writeClient(l),V(i.restEncoder,0);for(let d=0;d<=u;d++)h[d].write(i,0)}gs(i,n)}),Ya(s,i.toUint8Array(),"snapshot"),s},z0=(e,t,s=Ee)=>{const r=new s(Xt(t)),n=new fr(r,!1);for(let o=n.curr;o!==null;o=n.next())if((e.sv.get(o.id.client)||0)<o.id.clock+o.length)return!1;const i=zr([e.ds,Ds(r)]);return ig(e.ds,i)},V0=(e,t)=>z0(e,t,Ue);class pg{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const co=e=>{const t=new Map;return e.clients.forEach((s,r)=>{const n=s[s.length-1];t.set(r,n.id.clock+n.length)}),t},wt=(e,t)=>{const s=e.clients.get(t);if(s===void 0)return 0;const r=s[s.length-1];return r.id.clock+r.length},gg=(e,t)=>{let s=e.clients.get(t.id.client);if(s===void 0)s=[],e.clients.set(t.id.client,s);else{const r=s[s.length-1];if(r.id.clock+r.length!==t.id.clock)throw be()}s.push(t)},Be=(e,t)=>{let s=0,r=e.length-1,n=e[r],i=n.id.clock;if(i===t)return r;let o=Js(t/(i+n.length-1)*r);for(;s<=r;){if(n=e[o],i=n.id.clock,i<=t){if(t<i+n.length)return o;s=o+1}else r=o-1;o=Js((s+r)/2)}throw be()},U0=(e,t)=>{const s=e.clients.get(t.client);return s[Be(s,t.clock)]},Mr=U0,yc=(e,t,s)=>{const r=Be(t,s),n=t[r];return n.id.clock<s&&n instanceof ht?(t.splice(r+1,0,da(e,n,s-n.id.clock)),r+1):r},Gt=(e,t)=>{const s=e.doc.store.clients.get(t.client);return s[yc(e,s,t.clock)]},_c=(e,t,s)=>{const r=t.clients.get(s.client),n=Be(r,s.clock),i=r[n];return s.clock!==i.id.clock+i.length-1&&i.constructor!==pe&&r.splice(n+1,0,da(e,i,s.clock-i.id.clock+1)),i},F0=(e,t,s)=>{const r=e.clients.get(t.id.client);r[Be(r,t.id.clock)]=s},mg=(e,t,s,r,n)=>{if(r===0)return;const i=s+r;let o=yc(e,t,s),a;do a=t[o++],i<a.id.clock+a.length&&yc(e,t,i),n(a);while(o<t.length&&t[o].id.clock<i)};class bg{constructor(t,s,r){this.doc=t,this.deleteSet=new Pn,this.beforeState=co(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=s,this.meta=new Map,this.local=r,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const Dd=(e,t)=>t.deleteSet.clients.size===0&&!a_(t.afterState,(s,r)=>t.beforeState.get(r)!==s)?!1:(mh(t.deleteSet),f0(e,t),gs(e,t.deleteSet),!0),Pd=(e,t,s)=>{const r=t._item;(r===null||r.id.clock<(e.beforeState.get(r.id.client)||0)&&!r.deleted)&&de(e.changed,t,Nr).add(s)},ra=(e,t)=>{let s=e[t],r=e[t-1],n=t;for(;n>0;s=r,r=e[--n-1]){if(r.deleted===s.deleted&&r.constructor===s.constructor&&r.mergeWith(s)){s instanceof ht&&s.parentSub!==null&&s.parent._map.get(s.parentSub)===s&&s.parent._map.set(s.parentSub,r);continue}break}const i=t-n;return i&&e.splice(t+1-i,i),i},vg=(e,t,s)=>{for(const[r,n]of e.clients.entries()){const i=t.clients.get(r);for(let o=n.length-1;o>=0;o--){const a=n[o],l=a.clock+a.len;for(let c=Be(i,a.clock),h=i[c];c<i.length&&h.id.clock<l;h=i[++c]){const u=i[c];if(a.clock+a.len<=u.id.clock)break;u instanceof ht&&u.deleted&&!u.keep&&s(u)&&u.gc(t,!1)}}}},yg=(e,t)=>{e.clients.forEach((s,r)=>{const n=t.clients.get(r);for(let i=s.length-1;i>=0;i--){const o=s[i],a=Hp(n.length-1,1+Be(n,o.clock+o.len-1));for(let l=a,c=n[l];l>0&&c.id.clock>=o.clock;c=n[l])l-=1+ra(n,l)}})},j0=(e,t,s)=>{vg(e,t,s),yg(e,t)},_g=(e,t)=>{if(t<e.length){const s=e[t],r=s.doc,n=r.store,i=s.deleteSet,o=s._mergeStructs;try{mh(i),s.afterState=co(s.doc.store),r.emit("beforeObserverCalls",[s,r]);const a=[];s.changed.forEach((l,c)=>a.push(()=>{(c._item===null||!c._item.deleted)&&c._callObserver(s,l)})),a.push(()=>{s.changedParentTypes.forEach((l,c)=>{c._dEH.l.length>0&&(c._item===null||!c._item.deleted)&&(l=l.filter(h=>h.target._item===null||!h.target._item.deleted),l.forEach(h=>{h.currentTarget=c,h._path=null}),l.sort((h,u)=>h.path.length-u.path.length),hg(c._dEH,l,s))})}),a.push(()=>r.emit("afterTransaction",[s,r])),hh(a,[]),s._needFormattingCleanup&&fw(s)}finally{r.gc&&vg(i,n,r.gcFilter),yg(i,n),s.afterState.forEach((h,u)=>{const d=s.beforeState.get(u)||0;if(d!==h){const f=n.clients.get(u),p=Xr(Be(f,d),1);for(let b=f.length-1;b>=p;)b-=1+ra(f,b)}});for(let h=o.length-1;h>=0;h--){const{client:u,clock:d}=o[h].id,f=n.clients.get(u),p=Be(f,d);p+1<f.length&&ra(f,p+1)>1||p>0&&ra(f,p)}if(!s.local&&s.afterState.get(r.clientID)!==s.beforeState.get(r.clientID)&&(gc(ph,Jp,"[yjs] ",Qp,tg,"Changed the client-id because another client seems to be using it."),r.clientID=og()),r.emit("afterTransactionCleanup",[s,r]),r._observers.has("update")){const h=new dr;Dd(h,s)&&r.emit("update",[h.toUint8Array(),s.origin,r,s])}if(r._observers.has("updateV2")){const h=new Ke;Dd(h,s)&&r.emit("updateV2",[h.toUint8Array(),s.origin,r,s])}const{subdocsAdded:a,subdocsLoaded:l,subdocsRemoved:c}=s;(a.size>0||c.size>0||l.size>0)&&(a.forEach(h=>{h.clientID=r.clientID,h.collectionid==null&&(h.collectionid=r.collectionid),r.subdocs.add(h)}),c.forEach(h=>r.subdocs.delete(h)),r.emit("subdocs",[{loaded:l,added:a,removed:c},r,s]),c.forEach(h=>h.destroy())),e.length<=t+1?(r._transactionCleanups=[],r.emit("afterAllTransactions",[r,e])):_g(e,t+1)}}},dt=(e,t,s=null,r=!0)=>{const n=e._transactionCleanups;let i=!1,o=null;e._transaction===null&&(i=!0,e._transaction=new bg(e,s,r),n.push(e._transaction),n.length===1&&e.emit("beforeAllTransactions",[e]),e.emit("beforeTransaction",[e._transaction,e]));try{o=t(e._transaction)}finally{if(i){const a=e._transaction===n[0];e._transaction=null,a&&_g(n,0)}}return o};class H0{constructor(t,s){this.insertions=s,this.deletions=t,this.meta=new Map}}const Ld=(e,t,s)=>{Br(e,s.deletions,r=>{r instanceof ht&&t.scope.some(n=>n===e.doc||Ii(n,r))&&Rh(r,!1)})},Nd=(e,t,s)=>{let r=null;const n=e.doc,i=e.scope;dt(n,a=>{for(;t.length>0&&e.currStackItem===null;){const l=n.store,c=t.pop(),h=new Set,u=[];let d=!1;Br(a,c.insertions,f=>{if(f instanceof ht){if(f.redone!==null){let{item:p,diff:b}=xc(l,f.id);b>0&&(p=Gt(a,j(p.id.client,p.id.clock+b))),f=p}!f.deleted&&i.some(p=>p===a.doc||Ii(p,f))&&u.push(f)}}),Br(a,c.deletions,f=>{f instanceof ht&&i.some(p=>p===a.doc||Ii(p,f))&&!Kr(c.insertions,f.id)&&h.add(f)}),h.forEach(f=>{d=Kg(a,f,h,c.insertions,e.ignoreRemoteMapChanges,e)!==null||d});for(let f=u.length-1;f>=0;f--){const p=u[f];e.deleteFilter(p)&&(p.delete(a),d=!0)}e.currStackItem=d?c:null}a.changed.forEach((l,c)=>{l.has(null)&&c._searchMarker&&(c._searchMarker.length=0)}),r=a},e);const o=e.currStackItem;if(o!=null){const a=r.changedParentTypes;e.emit("stack-item-popped",[{stackItem:o,type:s,changedParentTypes:a,origin:e},e]),e.currStackItem=null}return o};class tr extends fh{constructor(t,{captureTimeout:s=500,captureTransaction:r=l=>!0,deleteFilter:n=()=>!0,trackedOrigins:i=new Set([null]),ignoreRemoteMapChanges:o=!1,doc:a=hc(t)?t[0].doc:t instanceof ur?t:t.doc}={}){super(),this.scope=[],this.doc=a,this.addToScope(t),this.deleteFilter=n,i.add(this),this.trackedOrigins=i,this.captureTransaction=r,this.undoStack=[],this.redoStack=[],this.undoing=!1,this.redoing=!1,this.currStackItem=null,this.lastChange=0,this.ignoreRemoteMapChanges=o,this.captureTimeout=s,this.afterTransactionHandler=l=>{if(!this.captureTransaction(l)||!this.scope.some(v=>l.changedParentTypes.has(v)||v===this.doc)||!this.trackedOrigins.has(l.origin)&&(!l.origin||!this.trackedOrigins.has(l.origin.constructor)))return;const c=this.undoing,h=this.redoing,u=c?this.redoStack:this.undoStack;c?this.stopCapturing():h||this.clear(!1,!0);const d=new Pn;l.afterState.forEach((v,x)=>{const w=l.beforeState.get(x)||0,S=v-w;S>0&&Oi(d,x,w,S)});const f=X_();let p=!1;if(this.lastChange>0&&f-this.lastChange<this.captureTimeout&&u.length>0&&!c&&!h){const v=u[u.length-1];v.deletions=zr([v.deletions,l.deleteSet]),v.insertions=zr([v.insertions,d])}else u.push(new H0(l.deleteSet,d)),p=!0;!c&&!h&&(this.lastChange=f),Br(l,l.deleteSet,v=>{v instanceof ht&&this.scope.some(x=>x===l.doc||Ii(x,v))&&Rh(v,!0)});const b=[{stackItem:u[u.length-1],origin:l.origin,type:c?"redo":"undo",changedParentTypes:l.changedParentTypes},this];p?this.emit("stack-item-added",b):this.emit("stack-item-updated",b)},this.doc.on("afterTransaction",this.afterTransactionHandler),this.doc.on("destroy",()=>{this.destroy()})}addToScope(t){const s=new Set(this.scope);t=hc(t)?t:[t],t.forEach(r=>{s.has(r)||(s.add(r),(r instanceof $t?r.doc!==this.doc:r!==this.doc)&&sg("[yjs#509] Not same Y.Doc"),this.scope.push(r))})}addTrackedOrigin(t){this.trackedOrigins.add(t)}removeTrackedOrigin(t){this.trackedOrigins.delete(t)}clear(t=!0,s=!0){(t&&this.canUndo()||s&&this.canRedo())&&this.doc.transact(r=>{t&&(this.undoStack.forEach(n=>Ld(r,this,n)),this.undoStack=[]),s&&(this.redoStack.forEach(n=>Ld(r,this,n)),this.redoStack=[]),this.emit("stack-cleared",[{undoStackCleared:t,redoStackCleared:s}])})}stopCapturing(){this.lastChange=0}undo(){this.undoing=!0;let t;try{t=Nd(this,this.undoStack,"undo")}finally{this.undoing=!1}return t}redo(){this.redoing=!0;let t;try{t=Nd(this,this.redoStack,"redo")}finally{this.redoing=!1}return t}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}destroy(){this.trackedOrigins.delete(this),this.doc.off("afterTransaction",this.afterTransactionHandler),super.destroy()}}function*W0(e){const t=Y(e.restDecoder);for(let s=0;s<t;s++){const r=Y(e.restDecoder),n=e.readClient();let i=Y(e.restDecoder);for(let o=0;o<r;o++){const a=e.readInfo();if(a===10){const l=Y(e.restDecoder);yield new ne(j(n,i),l),i+=l}else if((Va&a)!==0){const l=(a&(Rs|ke))===0,c=new ht(j(n,i),null,(a&ke)===ke?e.readLeftID():null,null,(a&Rs)===Rs?e.readRightID():null,l?e.readParentInfo()?e.readString():e.readLeftID():null,l&&(a&Ei)===Ei?e.readString():null,Jg(e,a));yield c,i+=c.length}else{const l=e.readLen();yield new pe(j(n,i),l),i+=l}}}}class fr{constructor(t,s){this.gen=W0(t),this.curr=null,this.done=!1,this.filterSkips=s,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===ne);return this.curr}}const Y0=e=>wg(e,Ue),wg=(e,t=Ee)=>{const s=[],r=new t(Xt(e)),n=new fr(r,!1);for(let o=n.curr;o!==null;o=n.next())s.push(o);gc("Structs: ",s);const i=Ds(r);gc("DeleteSet: ",i)},q0=e=>xg(e,Ue),xg=(e,t=Ee)=>{const s=[],r=new t(Xt(e)),n=new fr(r,!1);for(let i=n.curr;i!==null;i=n.next())s.push(i);return{structs:s,ds:Ds(r)}};class Ch{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}}const kg=e=>Mi(e,Ue,dr),Sg=(e,t=Wa,s=Ee)=>{const r=new t,n=new fr(new s(Xt(e)),!1);let i=n.curr;if(i!==null){let o=0,a=i.id.client,l=i.id.clock!==0,c=l?0:i.id.clock+i.length;for(;i!==null;i=n.next())a!==i.id.client&&(c!==0&&(o++,V(r.restEncoder,a),V(r.restEncoder,c)),a=i.id.client,c=0,l=i.id.clock!==0),i.constructor===ne&&(l=!0),l||(c=i.id.clock+i.length);c!==0&&(o++,V(r.restEncoder,a),V(r.restEncoder,c));const h=Dn();return V(h,o),A_(h,r.restEncoder),r.restEncoder=h,r.toUint8Array()}else return V(r.restEncoder,0),r.toUint8Array()},Z0=e=>Sg(e,bn,Ue),Cg=(e,t=Ee)=>{const s=new Map,r=new Map,n=new fr(new t(Xt(e)),!1);let i=n.curr;if(i!==null){let o=i.id.client,a=i.id.clock;for(s.set(o,a);i!==null;i=n.next())o!==i.id.client&&(r.set(o,a),s.set(i.id.client,i.id.clock),o=i.id.client),a=i.id.clock+i.length;r.set(o,a)}return{from:s,to:r}},G0=e=>Cg(e,Ue),X0=(e,t)=>{if(e.constructor===pe){const{client:s,clock:r}=e.id;return new pe(j(s,r+t),e.length-t)}else if(e.constructor===ne){const{client:s,clock:r}=e.id;return new ne(j(s,r+t),e.length-t)}else{const s=e,{client:r,clock:n}=s.id;return new ht(j(r,n+t),null,j(r,n+t-1),null,s.rightOrigin,s.parent,s.parentSub,s.content.splice(t))}},Mi=(e,t=Ee,s=Ke)=>{if(e.length===1)return e[0];const r=e.map(h=>new t(Xt(h)));let n=r.map(h=>new fr(h,!0)),i=null;const o=new s,a=new Ch(o);for(;n=n.filter(d=>d.curr!==null),n.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){const p=d.curr.id.clock-f.curr.id.clock;return p===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===ne?1:-1:p}else return f.curr.id.client-d.curr.id.client}),n.length!==0;){const h=n[0],u=h.curr.id.client;if(i!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=i.struct.id.clock+i.struct.length&&d.id.client>=i.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>i.struct.id.clock+i.struct.length)continue;if(u!==i.struct.id.client)qs(a,i.struct,i.offset),i={struct:d,offset:0},h.next();else if(i.struct.id.clock+i.struct.length<d.id.clock)if(i.struct.constructor===ne)i.struct.length=d.id.clock+d.length-i.struct.id.clock;else{qs(a,i.struct,i.offset);const p=d.id.clock-i.struct.id.clock-i.struct.length;i={struct:new ne(j(u,i.struct.id.clock+i.struct.length),p),offset:0}}else{const p=i.struct.id.clock+i.struct.length-d.id.clock;p>0&&(i.struct.constructor===ne?i.struct.length-=p:d=X0(d,p)),i.struct.mergeWith(d)||(qs(a,i.struct,i.offset),i={struct:d,offset:0},h.next())}}else i={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===i.struct.id.clock+i.struct.length&&d.constructor!==ne;d=h.next())qs(a,i.struct,i.offset),i={struct:d,offset:0}}i!==null&&(qs(a,i.struct,i.offset),i=null),$h(a);const l=r.map(h=>Ds(h)),c=zr(l);return gs(o,c),o.toUint8Array()},Eh=(e,t,s=Ee,r=Ke)=>{const n=_h(t),i=new r,o=new Ch(i),a=new s(Xt(e)),l=new fr(a,!1);for(;l.curr;){const h=l.curr,u=h.id.client,d=n.get(u)||0;if(l.curr.constructor===ne){l.next();continue}if(h.id.clock+h.length>d)for(qs(o,h,Xr(d-h.id.clock,0)),l.next();l.curr&&l.curr.id.client===u;)qs(o,l.curr,0),l.next();else for(;l.curr&&l.curr.id.client===u&&l.curr.id.clock+l.curr.length<=d;)l.next()}$h(o);const c=Ds(a);return gs(i,c),i.toUint8Array()},K0=(e,t)=>Eh(e,t,Ue,dr),Eg=e=>{e.written>0&&(e.clientStructs.push({written:e.written,restEncoder:Le(e.encoder.restEncoder)}),e.encoder.restEncoder=Dn(),e.written=0)},qs=(e,t,s)=>{e.written>0&&e.currClient!==t.id.client&&Eg(e),e.written===0&&(e.currClient=t.id.client,e.encoder.writeClient(t.id.client),V(e.encoder.restEncoder,t.id.clock+s)),t.write(e.encoder,s),e.written++},$h=e=>{Eg(e);const t=e.encoder.restEncoder;V(t,e.clientStructs.length);for(let s=0;s<e.clientStructs.length;s++){const r=e.clientStructs[s];V(t,r.written),lo(t,r.restEncoder)}},Za=(e,t,s,r)=>{const n=new s(Xt(e)),i=new fr(n,!1),o=new r,a=new Ch(o);for(let c=i.curr;c!==null;c=i.next())qs(a,t(c),0);$h(a);const l=Ds(n);return gs(o,l),o.toUint8Array()},$g=({formatting:e=!0,subdocs:t=!0,yxml:s=!0}={})=>{let r=0;const n=Dt(),i=Dt(),o=Dt(),a=Dt();return a.set(null,null),l=>{switch(l.constructor){case pe:case ne:return l;case ht:{const c=l,h=c.content;switch(h.constructor){case Vr:break;case Fe:{if(s){const u=h.type;u instanceof sr&&(u.nodeName=de(i,u.nodeName,()=>"node-"+r)),u instanceof vn&&(u.hookName=de(i,u.hookName,()=>"hook-"+r))}break}case Ps:{const u=h;u.arr=u.arr.map(()=>r);break}case Jr:{const u=h;u.content=new Uint8Array([r]);break}case Qr:{const u=h;t&&(u.opts={},u.doc.guid=r+"");break}case Bs:{const u=h;u.embed={};break}case Ct:{const u=h;e&&(u.key=de(o,u.key,()=>r+""),u.value=de(a,u.value,()=>({i:r})));break}case yn:{const u=h;u.arr=u.arr.map(()=>r);break}case ze:{const u=h;u.str=i_(r%10+"",u.str.length);break}default:be()}return c.parentSub&&(c.parentSub=de(n,c.parentSub,()=>r+"")),r++,l}default:be()}}},J0=(e,t)=>Za(e,$g(t),Ue,dr),Q0=(e,t)=>Za(e,$g(t),Ee,Ke),tw=e=>Za(e,Up,Ue,Ke),Tg=e=>Za(e,Up,Ee,dr),Bd="You must not compute changes after the event-handler fired.";class ho{constructor(t,s){this.target=t,this.currentTarget=t,this.transaction=s,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=ew(this.currentTarget,this.target))}deletes(t){return Kr(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Qs(Bd);const t=new Map,s=this.target;this.transaction.changed.get(s).forEach(n=>{if(n!==null){const i=s._map.get(n);let o,a;if(this.adds(i)){let l=i.left;for(;l!==null&&this.adds(l);)l=l.left;if(this.deletes(i))if(l!==null&&this.deletes(l))o="delete",a=Cl(l.content.getContent());else return;else l!==null&&this.deletes(l)?(o="update",a=Cl(l.content.getContent())):(o="add",a=void 0)}else if(this.deletes(i))o="delete",a=Cl(i.content.getContent());else return;t.set(n,{action:o,oldValue:a})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw Qs(Bd);const s=this.target,r=Nr(),n=Nr(),i=[];if(t={added:r,deleted:n,delta:i,keys:this.keys},this.transaction.changed.get(s).has(null)){let a=null;const l=()=>{a&&i.push(a)};for(let c=s._start;c!==null;c=c.right)c.deleted?this.deletes(c)&&!this.adds(c)&&((a===null||a.delete===void 0)&&(l(),a={delete:0}),a.delete+=c.length,n.add(c)):this.adds(c)?((a===null||a.insert===void 0)&&(l(),a={insert:[]}),a.insert=a.insert.concat(c.content.getContent()),r.add(c)):((a===null||a.retain===void 0)&&(l(),a={retain:0}),a.retain+=c.length);a!==null&&a.retain===void 0&&l()}this._changes=t}return t}}const ew=(e,t)=>{const s=[];for(;t._item!==null&&t!==e;){if(t._item.parentSub!==null)s.unshift(t._item.parentSub);else{let r=0,n=t._item.parent._start;for(;n!==t._item&&n!==null;)!n.deleted&&n.countable&&(r+=n.length),n=n.right;s.unshift(r)}t=t._item.parent}return s},Bt=()=>{sg("Invalid access: Add Yjs type to a document before reading data.")},Ag=80;let Th=0;class sw{constructor(t,s){t.marker=!0,this.p=t,this.index=s,this.timestamp=Th++}}const rw=e=>{e.timestamp=Th++},Og=(e,t,s)=>{e.p.marker=!1,e.p=t,t.marker=!0,e.index=s,e.timestamp=Th++},nw=(e,t,s)=>{if(e.length>=Ag){const r=e.reduce((n,i)=>n.timestamp<i.timestamp?n:i);return Og(r,t,s),r}else{const r=new sw(t,s);return e.push(r),r}},Ga=(e,t)=>{if(e._start===null||t===0||e._searchMarker===null)return null;const s=e._searchMarker.length===0?null:e._searchMarker.reduce((i,o)=>ta(t-i.index)<ta(t-o.index)?i:o);let r=e._start,n=0;for(s!==null&&(r=s.p,n=s.index,rw(s));r.right!==null&&n<t;){if(!r.deleted&&r.countable){if(t<n+r.length)break;n+=r.length}r=r.right}for(;r.left!==null&&n>t;)r=r.left,!r.deleted&&r.countable&&(n-=r.length);for(;r.left!==null&&r.left.id.client===r.id.client&&r.left.id.clock+r.left.length===r.id.clock;)r=r.left,!r.deleted&&r.countable&&(n-=r.length);return s!==null&&ta(s.index-n)<r.parent.length/Ag?(Og(s,r,n),s):nw(e._searchMarker,r,n)},Di=(e,t,s)=>{for(let r=e.length-1;r>=0;r--){const n=e[r];if(s>0){let i=n.p;for(i.marker=!1;i&&(i.deleted||!i.countable);)i=i.left,i&&!i.deleted&&i.countable&&(n.index-=i.length);if(i===null||i.marker===!0){e.splice(r,1);continue}n.p=i,i.marker=!0}(t<n.index||s>0&&t===n.index)&&(n.index=Xr(t,n.index+s))}},iw=e=>{e.doc??Bt();let t=e._start;const s=[];for(;t;)s.push(t),t=t.right;return s},Xa=(e,t,s)=>{const r=e,n=t.changedParentTypes;for(;de(n,e,()=>[]).push(s),e._item!==null;)e=e._item.parent;hg(r._eH,s,t)};class $t{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=Ad(),this._dEH=Ad(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,s){this.doc=t,this._item=s}_copy(){throw hs()}clone(){throw hs()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,s){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){Od(this._eH,t)}observeDeep(t){Od(this._dEH,t)}unobserve(t){Rd(this._eH,t)}unobserveDeep(t){Rd(this._dEH,t)}toJSON(){}}const Rg=(e,t,s)=>{e.doc??Bt(),t<0&&(t=e._length+t),s<0&&(s=e._length+s);let r=s-t;const n=[];let i=e._start;for(;i!==null&&r>0;){if(i.countable&&!i.deleted){const o=i.content.getContent();if(o.length<=t)t-=o.length;else{for(let a=t;a<o.length&&r>0;a++)n.push(o[a]),r--;t=0}}i=i.right}return n},Ig=e=>{e.doc??Bt();const t=[];let s=e._start;for(;s!==null;){if(s.countable&&!s.deleted){const r=s.content.getContent();for(let n=0;n<r.length;n++)t.push(r[n])}s=s.right}return t},ow=(e,t)=>{const s=[];let r=e._start;for(;r!==null;){if(r.countable&&Ys(r,t)){const n=r.content.getContent();for(let i=0;i<n.length;i++)s.push(n[i])}r=r.right}return s},Pi=(e,t)=>{let s=0,r=e._start;for(e.doc??Bt();r!==null;){if(r.countable&&!r.deleted){const n=r.content.getContent();for(let i=0;i<n.length;i++)t(n[i],s++,e)}r=r.right}},Mg=(e,t)=>{const s=[];return Pi(e,(r,n)=>{s.push(t(r,n,e))}),s},aw=e=>{let t=e._start,s=null,r=0;return{[Symbol.iterator](){return this},next:()=>{if(s===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};s=t.content.getContent(),r=0,t=t.right}const n=s[r++];return s.length<=r&&(s=null),{done:!1,value:n}}}},Dg=(e,t)=>{e.doc??Bt();const s=Ga(e,t);let r=e._start;for(s!==null&&(r=s.p,t-=s.index);r!==null;r=r.right)if(!r.deleted&&r.countable){if(t<r.length)return r.content.getContent()[t];t-=r.length}},ha=(e,t,s,r)=>{let n=s;const i=e.doc,o=i.clientID,a=i.store,l=s===null?t._start:s.right;let c=[];const h=()=>{c.length>0&&(n=new ht(j(o,wt(a,o)),n,n&&n.lastId,l,l&&l.id,t,null,new Ps(c)),n.integrate(e,0),c=[])};r.forEach(u=>{if(u===null)c.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:c.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:n=new ht(j(o,wt(a,o)),n,n&&n.lastId,l,l&&l.id,t,null,new Jr(new Uint8Array(u))),n.integrate(e,0);break;case ur:n=new ht(j(o,wt(a,o)),n,n&&n.lastId,l,l&&l.id,t,null,new Qr(u)),n.integrate(e,0);break;default:if(u instanceof $t)n=new ht(j(o,wt(a,o)),n,n&&n.lastId,l,l&&l.id,t,null,new Fe(u)),n.integrate(e,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},Pg=()=>Qs("Length exceeded!"),Lg=(e,t,s,r)=>{if(s>t._length)throw Pg();if(s===0)return t._searchMarker&&Di(t._searchMarker,s,r.length),ha(e,t,null,r);const n=s,i=Ga(t,s);let o=t._start;for(i!==null&&(o=i.p,s-=i.index,s===0&&(o=o.prev,s+=o&&o.countable&&!o.deleted?o.length:0));o!==null;o=o.right)if(!o.deleted&&o.countable){if(s<=o.length){s<o.length&&Gt(e,j(o.id.client,o.id.clock+s));break}s-=o.length}return t._searchMarker&&Di(t._searchMarker,n,r.length),ha(e,t,o,r)},lw=(e,t,s)=>{let n=(t._searchMarker||[]).reduce((i,o)=>o.index>i.index?o:i,{index:0,p:t._start}).p;if(n)for(;n.right;)n=n.right;return ha(e,t,n,s)},Ng=(e,t,s,r)=>{if(r===0)return;const n=s,i=r,o=Ga(t,s);let a=t._start;for(o!==null&&(a=o.p,s-=o.index);a!==null&&s>0;a=a.right)!a.deleted&&a.countable&&(s<a.length&&Gt(e,j(a.id.client,a.id.clock+s)),s-=a.length);for(;r>0&&a!==null;)a.deleted||(r<a.length&&Gt(e,j(a.id.client,a.id.clock+r)),a.delete(e),r-=a.length),a=a.right;if(r>0)throw Pg();t._searchMarker&&Di(t._searchMarker,n,-i+r)},ua=(e,t,s)=>{const r=t._map.get(s);r!==void 0&&r.delete(e)},Ah=(e,t,s,r)=>{const n=t._map.get(s)||null,i=e.doc,o=i.clientID;let a;if(r==null)a=new Ps([r]);else switch(r.constructor){case Number:case Object:case Boolean:case Array:case String:case Date:case BigInt:a=new Ps([r]);break;case Uint8Array:a=new Jr(r);break;case ur:a=new Qr(r);break;default:if(r instanceof $t)a=new Fe(r);else throw new Error("Unexpected content type")}new ht(j(o,wt(i.store,o)),n,n&&n.lastId,null,null,t,s,a).integrate(e,0)},Oh=(e,t)=>{e.doc??Bt();const s=e._map.get(t);return s!==void 0&&!s.deleted?s.content.getContent()[s.length-1]:void 0},Bg=e=>{const t={};return e.doc??Bt(),e._map.forEach((s,r)=>{s.deleted||(t[r]=s.content.getContent()[s.length-1])}),t},zg=(e,t)=>{e.doc??Bt();const s=e._map.get(t);return s!==void 0&&!s.deleted},cw=(e,t,s)=>{let r=e._map.get(t)||null;for(;r!==null&&(!s.sv.has(r.id.client)||r.id.clock>=(s.sv.get(r.id.client)||0));)r=r.left;return r!==null&&Ys(r,s)?r.content.getContent()[r.length-1]:void 0},Vg=(e,t)=>{const s={};return e._map.forEach((r,n)=>{let i=r;for(;i!==null&&(!t.sv.has(i.id.client)||i.id.clock>=(t.sv.get(i.id.client)||0));)i=i.left;i!==null&&Ys(i,t)&&(s[n]=i.content.getContent()[i.length-1])}),s},No=e=>(e.doc??Bt(),a0(e._map.entries(),t=>!t[1].deleted));class Ug extends ho{}class Pt extends $t{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){const s=new Pt;return s.push(t),s}_integrate(t,s){super._integrate(t,s),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Pt}clone(){const t=new Pt;return t.insert(0,this.toArray().map(s=>s instanceof $t?s.clone():s)),t}get length(){return this.doc??Bt(),this._length}_callObserver(t,s){super._callObserver(t,s),Xa(this,t,new Ug(this,t))}insert(t,s){this.doc!==null?dt(this.doc,r=>{Lg(r,this,t,s)}):this._prelimContent.splice(t,0,...s)}push(t){this.doc!==null?dt(this.doc,s=>{lw(s,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,s=1){this.doc!==null?dt(this.doc,r=>{Ng(r,this,t,s)}):this._prelimContent.splice(t,s)}get(t){return Dg(this,t)}toArray(){return Ig(this)}slice(t=0,s=this.length){return Rg(this,t,s)}toJSON(){return this.map(t=>t instanceof $t?t.toJSON():t)}map(t){return Mg(this,t)}forEach(t){Pi(this,t)}[Symbol.iterator](){return aw(this)}_write(t){t.writeTypeRef(Ow)}}const hw=e=>new Pt;class Fg extends ho{constructor(t,s,r){super(t,s),this.keysChanged=r}}class Vt extends $t{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,s){super._integrate(t,s),this._prelimContent.forEach((r,n)=>{this.set(n,r)}),this._prelimContent=null}_copy(){return new Vt}clone(){const t=new Vt;return this.forEach((s,r)=>{t.set(r,s instanceof $t?s.clone():s)}),t}_callObserver(t,s){Xa(this,t,new Fg(this,t,s))}toJSON(){this.doc??Bt();const t={};return this._map.forEach((s,r)=>{if(!s.deleted){const n=s.content.getContent()[s.length-1];t[r]=n instanceof $t?n.toJSON():n}}),t}get size(){return[...No(this)].length}keys(){return Rl(No(this),t=>t[0])}values(){return Rl(No(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return Rl(No(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??Bt(),this._map.forEach((s,r)=>{s.deleted||t(s.content.getContent()[s.length-1],r,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?dt(this.doc,s=>{ua(s,this,t)}):this._prelimContent.delete(t)}set(t,s){return this.doc!==null?dt(this.doc,r=>{Ah(r,this,t,s)}):this._prelimContent.set(t,s),s}get(t){return Oh(this,t)}has(t){return zg(this,t)}clear(){this.doc!==null?dt(this.doc,t=>{this.forEach(function(s,r,n){ua(t,n,r)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(Rw)}}const uw=e=>new Vt,Gs=(e,t)=>e===t||typeof e=="object"&&typeof t=="object"&&e&&t&&g_(e,t);class wc{constructor(t,s,r,n){this.left=t,this.right=s,this.index=r,this.currentAttributes=n}forward(){switch(this.right===null&&be(),this.right.content.constructor){case Ct:this.right.deleted||Ln(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const zd=(e,t,s)=>{for(;t.right!==null&&s>0;){switch(t.right.content.constructor){case Ct:t.right.deleted||Ln(t.currentAttributes,t.right.content);break;default:t.right.deleted||(s<t.right.length&&Gt(e,j(t.right.id.client,t.right.id.clock+s)),t.index+=t.right.length,s-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},Bo=(e,t,s,r)=>{const n=new Map,i=r?Ga(t,s):null;if(i){const o=new wc(i.p.left,i.p,i.index,n);return zd(e,o,s-i.index)}else{const o=new wc(null,t._start,0,n);return zd(e,o,s)}},jg=(e,t,s,r)=>{for(;s.right!==null&&(s.right.deleted===!0||s.right.content.constructor===Ct&&Gs(r.get(s.right.content.key),s.right.content.value));)s.right.deleted||r.delete(s.right.content.key),s.forward();const n=e.doc,i=n.clientID;r.forEach((o,a)=>{const l=s.left,c=s.right,h=new ht(j(i,wt(n.store,i)),l,l&&l.lastId,c,c&&c.id,t,null,new Ct(a,o));h.integrate(e,0),s.right=h,s.forward()})},Ln=(e,t)=>{const{key:s,value:r}=t;r===null?e.delete(s):e.set(s,r)},Hg=(e,t)=>{for(;e.right!==null;){if(!(e.right.deleted||e.right.content.constructor===Ct&&Gs(t[e.right.content.key]??null,e.right.content.value)))break;e.forward()}},Wg=(e,t,s,r)=>{const n=e.doc,i=n.clientID,o=new Map;for(const a in r){const l=r[a],c=s.currentAttributes.get(a)??null;if(!Gs(c,l)){o.set(a,c);const{left:h,right:u}=s;s.right=new ht(j(i,wt(n.store,i)),h,h&&h.lastId,u,u&&u.id,t,null,new Ct(a,l)),s.right.integrate(e,0),s.forward()}}return o},Il=(e,t,s,r,n)=>{s.currentAttributes.forEach((d,f)=>{n[f]===void 0&&(n[f]=null)});const i=e.doc,o=i.clientID;Hg(s,n);const a=Wg(e,t,s,n),l=r.constructor===String?new ze(r):r instanceof $t?new Fe(r):new Bs(r);let{left:c,right:h,index:u}=s;t._searchMarker&&Di(t._searchMarker,s.index,l.getLength()),h=new ht(j(o,wt(i.store,o)),c,c&&c.lastId,h,h&&h.id,t,null,l),h.integrate(e,0),s.right=h,s.index=u,s.forward(),jg(e,t,s,a)},Vd=(e,t,s,r,n)=>{const i=e.doc,o=i.clientID;Hg(s,n);const a=Wg(e,t,s,n);t:for(;s.right!==null&&(r>0||a.size>0&&(s.right.deleted||s.right.content.constructor===Ct));){if(!s.right.deleted)switch(s.right.content.constructor){case Ct:{const{key:l,value:c}=s.right.content,h=n[l];if(h!==void 0){if(Gs(h,c))a.delete(l);else{if(r===0)break t;a.set(l,c)}s.right.delete(e)}else s.currentAttributes.set(l,c);break}default:r<s.right.length&&Gt(e,j(s.right.id.client,s.right.id.clock+r)),r-=s.right.length;break}s.forward()}if(r>0){let l="";for(;r>0;r--)l+=`
`;s.right=new ht(j(o,wt(i.store,o)),s.left,s.left&&s.left.lastId,s.right,s.right&&s.right.id,t,null,new ze(l)),s.right.integrate(e,0),s.forward()}jg(e,t,s,a)},Yg=(e,t,s,r,n)=>{let i=t;const o=Dt();for(;i&&(!i.countable||i.deleted);){if(!i.deleted&&i.content.constructor===Ct){const c=i.content;o.set(c.key,c)}i=i.right}let a=0,l=!1;for(;t!==i;){if(s===t&&(l=!0),!t.deleted){const c=t.content;switch(c.constructor){case Ct:{const{key:h,value:u}=c,d=r.get(h)??null;(o.get(h)!==c||d===u)&&(t.delete(e),a++,!l&&(n.get(h)??null)===u&&d!==u&&(d===null?n.delete(h):n.set(h,d))),!l&&!t.deleted&&Ln(n,c);break}}}t=t.right}return a},dw=(e,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;const s=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===Ct){const r=t.content.key;s.has(r)?t.delete(e):s.add(r)}t=t.left}},qg=e=>{let t=0;return dt(e.doc,s=>{let r=e._start,n=e._start,i=Dt();const o=uc(i);for(;n;){if(n.deleted===!1)switch(n.content.constructor){case Ct:Ln(o,n.content);break;default:t+=Yg(s,r,n,i,o),i=uc(o),r=n;break}n=n.right}}),t},fw=e=>{const t=new Set,s=e.doc;for(const[r,n]of e.afterState.entries()){const i=e.beforeState.get(r)||0;n!==i&&mg(e,s.store.clients.get(r),i,n,o=>{!o.deleted&&o.content.constructor===Ct&&o.constructor!==pe&&t.add(o.parent)})}dt(s,r=>{Br(e,e.deleteSet,n=>{if(n instanceof pe||!n.parent._hasFormatting||t.has(n.parent))return;const i=n.parent;n.content.constructor===Ct?t.add(i):dw(r,n)});for(const n of t)qg(n)})},Ud=(e,t,s)=>{const r=s,n=uc(t.currentAttributes),i=t.right;for(;s>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case Fe:case Bs:case ze:s<t.right.length&&Gt(e,j(t.right.id.client,t.right.id.clock+s)),s-=t.right.length,t.right.delete(e);break}t.forward()}i&&Yg(e,i,t.right,n,t.currentAttributes);const o=(t.left||t.right).parent;return o._searchMarker&&Di(o._searchMarker,t.index,-r+s),t};class Zg extends ho{constructor(t,s,r){super(t,s),this.childListChanged=!1,this.keysChanged=new Set,r.forEach(n=>{n===null?this.childListChanged=!0:this.keysChanged.add(n)})}get changes(){if(this._changes===null){const t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){const t=this.target.doc,s=[];dt(t,r=>{const n=new Map,i=new Map;let o=this.target._start,a=null;const l={};let c="",h=0,u=0;const d=()=>{if(a!==null){let f=null;switch(a){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof c=="object"||c.length>0)&&(f={insert:c},n.size>0&&(f.attributes={},n.forEach((p,b)=>{p!==null&&(f.attributes[b]=p)}))),c="";break;case"retain":h>0&&(f={retain:h},f_(l)||(f.attributes=u_({},l))),h=0;break}f&&s.push(f),a=null}};for(;o!==null;){switch(o.content.constructor){case Fe:case Bs:this.adds(o)?this.deletes(o)||(d(),a="insert",c=o.content.getContent()[0],d()):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=1):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=1);break;case ze:this.adds(o)?this.deletes(o)||(a!=="insert"&&(d(),a="insert"),c+=o.content.str):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=o.length):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=o.length);break;case Ct:{const{key:f,value:p}=o.content;if(this.adds(o)){if(!this.deletes(o)){const b=n.get(f)??null;Gs(b,p)?p!==null&&o.delete(r):(a==="retain"&&d(),Gs(p,i.get(f)??null)?delete l[f]:l[f]=p)}}else if(this.deletes(o)){i.set(f,p);const b=n.get(f)??null;Gs(b,p)||(a==="retain"&&d(),l[f]=b)}else if(!o.deleted){i.set(f,p);const b=l[f];b!==void 0&&(Gs(b,p)?b!==null&&o.delete(r):(a==="retain"&&d(),p===null?delete l[f]:l[f]=p))}o.deleted||(a==="insert"&&d(),Ln(n,o.content));break}}o=o.right}for(d();s.length>0;){const f=s[s.length-1];if(f.retain!==void 0&&f.attributes===void 0)s.pop();else break}}),this._delta=s}return this._delta}}class fe extends $t{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??Bt(),this._length}_integrate(t,s){super._integrate(t,s);try{this._pending.forEach(r=>r())}catch(r){console.error(r)}this._pending=null}_copy(){return new fe}clone(){const t=new fe;return t.applyDelta(this.toDelta()),t}_callObserver(t,s){super._callObserver(t,s);const r=new Zg(this,t,s);Xa(this,t,r),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??Bt();let t="",s=this._start;for(;s!==null;)!s.deleted&&s.countable&&s.content.constructor===ze&&(t+=s.content.str),s=s.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:s=!0}={}){this.doc!==null?dt(this.doc,r=>{const n=new wc(null,this._start,0,new Map);for(let i=0;i<t.length;i++){const o=t[i];if(o.insert!==void 0){const a=!s&&typeof o.insert=="string"&&i===t.length-1&&n.right===null&&o.insert.slice(-1)===`
`?o.insert.slice(0,-1):o.insert;(typeof a!="string"||a.length>0)&&Il(r,this,n,a,o.attributes||{})}else o.retain!==void 0?Vd(r,this,n,o.retain,o.attributes||{}):o.delete!==void 0&&Ud(r,n,o.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,s,r){this.doc??Bt();const n=[],i=new Map,o=this.doc;let a="",l=this._start;function c(){if(a.length>0){const u={};let d=!1;i.forEach((p,b)=>{d=!0,u[b]=p});const f={insert:a};d&&(f.attributes=u),n.push(f),a=""}}const h=()=>{for(;l!==null;){if(Ys(l,t)||s!==void 0&&Ys(l,s))switch(l.content.constructor){case ze:{const u=i.get("ychange");t!==void 0&&!Ys(l,t)?(u===void 0||u.user!==l.id.client||u.type!=="removed")&&(c(),i.set("ychange",r?r("removed",l.id):{type:"removed"})):s!==void 0&&!Ys(l,s)?(u===void 0||u.user!==l.id.client||u.type!=="added")&&(c(),i.set("ychange",r?r("added",l.id):{type:"added"})):u!==void 0&&(c(),i.delete("ychange")),a+=l.content.str;break}case Fe:case Bs:{c();const u={insert:l.content.getContent()[0]};if(i.size>0){const d={};u.attributes=d,i.forEach((f,p)=>{d[p]=f})}n.push(u);break}case Ct:Ys(l,t)&&(c(),Ln(i,l.content));break}l=l.right}c()};return t||s?dt(o,u=>{t&&vc(u,t),s&&vc(u,s),h()},"cleanup"):h(),n}insert(t,s,r){if(s.length<=0)return;const n=this.doc;n!==null?dt(n,i=>{const o=Bo(i,this,t,!r);r||(r={},o.currentAttributes.forEach((a,l)=>{r[l]=a})),Il(i,this,o,s,r)}):this._pending.push(()=>this.insert(t,s,r))}insertEmbed(t,s,r){const n=this.doc;n!==null?dt(n,i=>{const o=Bo(i,this,t,!r);Il(i,this,o,s,r||{})}):this._pending.push(()=>this.insertEmbed(t,s,r||{}))}delete(t,s){if(s===0)return;const r=this.doc;r!==null?dt(r,n=>{Ud(n,Bo(n,this,t,!0),s)}):this._pending.push(()=>this.delete(t,s))}format(t,s,r){if(s===0)return;const n=this.doc;n!==null?dt(n,i=>{const o=Bo(i,this,t,!1);o.right!==null&&Vd(i,this,o,s,r)}):this._pending.push(()=>this.format(t,s,r))}removeAttribute(t){this.doc!==null?dt(this.doc,s=>{ua(s,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,s){this.doc!==null?dt(this.doc,r=>{Ah(r,this,t,s)}):this._pending.push(()=>this.setAttribute(t,s))}getAttribute(t){return Oh(this,t)}getAttributes(){return Bg(this)}_write(t){t.writeTypeRef(Iw)}}const pw=e=>new fe;class Ml{constructor(t,s=()=>!0){this._filter=s,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??Bt()}[Symbol.iterator](){return this}next(){let t=this._currentNode,s=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(s)))do if(s=t.content.type,!t.deleted&&(s.constructor===sr||s.constructor===er)&&s._start!==null)t=s._start;else for(;t!==null;){const r=t.next;if(r!==null){t=r;break}else t.parent===this._root?t=null:t=t.parent._item}while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}}class er extends $t{constructor(){super(),this._prelimContent=[]}get firstChild(){const t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,s){super._integrate(t,s),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new er}clone(){const t=new er;return t.insert(0,this.toArray().map(s=>s instanceof $t?s.clone():s)),t}get length(){return this.doc??Bt(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new Ml(this,t)}querySelector(t){t=t.toUpperCase();const r=new Ml(this,n=>n.nodeName&&n.nodeName.toUpperCase()===t).next();return r.done?null:r.value}querySelectorAll(t){return t=t.toUpperCase(),Ms(new Ml(this,s=>s.nodeName&&s.nodeName.toUpperCase()===t))}_callObserver(t,s){Xa(this,t,new Gg(this,s,t))}toString(){return Mg(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,s={},r){const n=t.createDocumentFragment();return r!==void 0&&r._createAssociation(n,this),Pi(this,i=>{n.insertBefore(i.toDOM(t,s,r),null)}),n}insert(t,s){this.doc!==null?dt(this.doc,r=>{Lg(r,this,t,s)}):this._prelimContent.splice(t,0,...s)}insertAfter(t,s){if(this.doc!==null)dt(this.doc,r=>{const n=t&&t instanceof $t?t._item:t;ha(r,this,n,s)});else{const r=this._prelimContent,n=t===null?0:r.findIndex(i=>i===t)+1;if(n===0&&t!==null)throw Qs("Reference item not found");r.splice(n,0,...s)}}delete(t,s=1){this.doc!==null?dt(this.doc,r=>{Ng(r,this,t,s)}):this._prelimContent.splice(t,s)}toArray(){return Ig(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return Dg(this,t)}slice(t=0,s=this.length){return Rg(this,t,s)}forEach(t){Pi(this,t)}_write(t){t.writeTypeRef(Dw)}}const gw=e=>new er;class sr extends er{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,s){super._integrate(t,s),this._prelimAttrs.forEach((r,n)=>{this.setAttribute(n,r)}),this._prelimAttrs=null}_copy(){return new sr(this.nodeName)}clone(){const t=new sr(this.nodeName),s=this.getAttributes();return d_(s,(r,n)=>{typeof r=="string"&&t.setAttribute(n,r)}),t.insert(0,this.toArray().map(r=>r instanceof $t?r.clone():r)),t}toString(){const t=this.getAttributes(),s=[],r=[];for(const a in t)r.push(a);r.sort();const n=r.length;for(let a=0;a<n;a++){const l=r[a];s.push(l+'="'+t[l]+'"')}const i=this.nodeName.toLocaleLowerCase(),o=s.length>0?" "+s.join(" "):"";return`<${i}${o}>${super.toString()}</${i}>`}removeAttribute(t){this.doc!==null?dt(this.doc,s=>{ua(s,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,s){this.doc!==null?dt(this.doc,r=>{Ah(r,this,t,s)}):this._prelimAttrs.set(t,s)}getAttribute(t){return Oh(this,t)}hasAttribute(t){return zg(this,t)}getAttributes(t){return t?Vg(this,t):Bg(this)}toDOM(t=document,s={},r){const n=t.createElement(this.nodeName),i=this.getAttributes();for(const o in i){const a=i[o];typeof a=="string"&&n.setAttribute(o,a)}return Pi(this,o=>{n.appendChild(o.toDOM(t,s,r))}),r!==void 0&&r._createAssociation(n,this),n}_write(t){t.writeTypeRef(Mw),t.writeKey(this.nodeName)}}const mw=e=>new sr(e.readKey());class Gg extends ho{constructor(t,s,r){super(t,r),this.childListChanged=!1,this.attributesChanged=new Set,s.forEach(n=>{n===null?this.childListChanged=!0:this.attributesChanged.add(n)})}}class vn extends Vt{constructor(t){super(),this.hookName=t}_copy(){return new vn(this.hookName)}clone(){const t=new vn(this.hookName);return this.forEach((s,r)=>{t.set(r,s)}),t}toDOM(t=document,s={},r){const n=s[this.hookName];let i;return n!==void 0?i=n.createDom(this):i=document.createElement(this.hookName),i.setAttribute("data-yjs-hook",this.hookName),r!==void 0&&r._createAssociation(i,this),i}_write(t){t.writeTypeRef(Pw),t.writeKey(this.hookName)}}const bw=e=>new vn(e.readKey());class Li extends fe{get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new Li}clone(){const t=new Li;return t.applyDelta(this.toDelta()),t}toDOM(t=document,s,r){const n=t.createTextNode(this.toString());return r!==void 0&&r._createAssociation(n,this),n}toString(){return this.toDelta().map(t=>{const s=[];for(const n in t.attributes){const i=[];for(const o in t.attributes[n])i.push({key:o,value:t.attributes[n][o]});i.sort((o,a)=>o.key<a.key?-1:1),s.push({nodeName:n,attrs:i})}s.sort((n,i)=>n.nodeName<i.nodeName?-1:1);let r="";for(let n=0;n<s.length;n++){const i=s[n];r+=`<${i.nodeName}`;for(let o=0;o<i.attrs.length;o++){const a=i.attrs[o];r+=` ${a.key}="${a.value}"`}r+=">"}r+=t.insert;for(let n=s.length-1;n>=0;n--)r+=`</${s[n].nodeName}>`;return r}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(Lw)}}const vw=e=>new Li;class Ka{constructor(t,s){this.id=t,this.length=s}get deleted(){throw hs()}mergeWith(t){return!1}write(t,s,r){throw hs()}integrate(t,s){throw hs()}}const yw=0;class pe extends Ka{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,s){s>0&&(this.id.clock+=s,this.length-=s),gg(t.doc.store,this)}write(t,s){t.writeInfo(yw),t.writeLen(this.length-s)}getMissing(t,s){return null}}class Jr{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new Jr(this.content)}splice(t){throw hs()}mergeWith(t){return!1}integrate(t,s){}delete(t){}gc(t){}write(t,s){t.writeBuf(this.content)}getRef(){return 3}}const _w=e=>new Jr(e.readBuf());class Vr{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new Vr(this.len)}splice(t){const s=new Vr(this.len-t);return this.len=t,s}mergeWith(t){return this.len+=t.len,!0}integrate(t,s){Oi(t.deleteSet,s.id.client,s.id.clock,this.len),s.markDeleted()}delete(t){}gc(t){}write(t,s){t.writeLen(this.len-s)}getRef(){return 1}}const ww=e=>new Vr(e.readLen()),Xg=(e,t)=>new ur({guid:e,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1});class Qr{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;const s={};this.opts=s,t.gc||(s.gc=!1),t.autoLoad&&(s.autoLoad=!0),t.meta!==null&&(s.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new Qr(Xg(this.doc.guid,this.opts))}splice(t){throw hs()}mergeWith(t){return!1}integrate(t,s){this.doc._item=s,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,s){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}}const xw=e=>new Qr(Xg(e.readString(),e.readAny()));class Bs{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new Bs(this.embed)}splice(t){throw hs()}mergeWith(t){return!1}integrate(t,s){}delete(t){}gc(t){}write(t,s){t.writeJSON(this.embed)}getRef(){return 5}}const kw=e=>new Bs(e.readJSON());class Ct{constructor(t,s){this.key=t,this.value=s}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new Ct(this.key,this.value)}splice(t){throw hs()}mergeWith(t){return!1}integrate(t,s){const r=s.parent;r._searchMarker=null,r._hasFormatting=!0}delete(t){}gc(t){}write(t,s){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}}const Sw=e=>new Ct(e.readKey(),e.readJSON());class yn{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new yn(this.arr)}splice(t){const s=new yn(this.arr.slice(t));return this.arr=this.arr.slice(0,t),s}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,s){}delete(t){}gc(t){}write(t,s){const r=this.arr.length;t.writeLen(r-s);for(let n=s;n<r;n++){const i=this.arr[n];t.writeString(i===void 0?"undefined":JSON.stringify(i))}}getRef(){return 2}}const Cw=e=>{const t=e.readLen(),s=[];for(let r=0;r<t;r++){const n=e.readString();n==="undefined"?s.push(void 0):s.push(JSON.parse(n))}return new yn(s)},Ew=ca("node_env")==="development";class Ps{constructor(t){this.arr=t,Ew&&Vp(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new Ps(this.arr)}splice(t){const s=new Ps(this.arr.slice(t));return this.arr=this.arr.slice(0,t),s}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,s){}delete(t){}gc(t){}write(t,s){const r=this.arr.length;t.writeLen(r-s);for(let n=s;n<r;n++){const i=this.arr[n];t.writeAny(i)}}getRef(){return 8}}const $w=e=>{const t=e.readLen(),s=[];for(let r=0;r<t;r++)s.push(e.readAny());return new Ps(s)};class ze{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new ze(this.str)}splice(t){const s=new ze(this.str.slice(t));this.str=this.str.slice(0,t);const r=this.str.charCodeAt(t-1);return r>=55296&&r<=56319&&(this.str=this.str.slice(0,t-1)+"�",s.str="�"+s.str.slice(1)),s}mergeWith(t){return this.str+=t.str,!0}integrate(t,s){}delete(t){}gc(t){}write(t,s){t.writeString(s===0?this.str:this.str.slice(s))}getRef(){return 4}}const Tw=e=>new ze(e.readString()),Aw=[hw,uw,pw,mw,gw,bw,vw],Ow=0,Rw=1,Iw=2,Mw=3,Dw=4,Pw=5,Lw=6;class Fe{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new Fe(this.type._copy())}splice(t){throw hs()}mergeWith(t){return!1}integrate(t,s){this.type._integrate(t.doc,s)}delete(t){let s=this.type._start;for(;s!==null;)s.deleted?s.id.clock<(t.beforeState.get(s.id.client)||0)&&t._mergeStructs.push(s):s.delete(t),s=s.right;this.type._map.forEach(r=>{r.deleted?r.id.clock<(t.beforeState.get(r.id.client)||0)&&t._mergeStructs.push(r):r.delete(t)}),t.changed.delete(this.type)}gc(t){let s=this.type._start;for(;s!==null;)s.gc(t,!0),s=s.right;this.type._start=null,this.type._map.forEach(r=>{for(;r!==null;)r.gc(t,!0),r=r.left}),this.type._map=new Map}write(t,s){this.type._write(t)}getRef(){return 7}}const Nw=e=>new Fe(Aw[e.readTypeRef()](e)),xc=(e,t)=>{let s=t,r=0,n;do r>0&&(s=j(s.client,s.clock+r)),n=Mr(e,s),r=s.clock-n.id.clock,s=n.redone;while(s!==null&&n instanceof ht);return{item:n,diff:r}},Rh=(e,t)=>{for(;e!==null&&e.keep!==t;)e.keep=t,e=e.parent._item},da=(e,t,s)=>{const{client:r,clock:n}=t.id,i=new ht(j(r,n+s),t,j(r,n+s-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(s));return t.deleted&&i.markDeleted(),t.keep&&(i.keep=!0),t.redone!==null&&(i.redone=j(t.redone.client,t.redone.clock+s)),t.right=i,i.right!==null&&(i.right.left=i),e._mergeStructs.push(i),i.parentSub!==null&&i.right===null&&i.parent._map.set(i.parentSub,i),t.length=s,i},Fd=(e,t)=>Gy(e,s=>Kr(s.deletions,t)),Kg=(e,t,s,r,n,i)=>{const o=e.doc,a=o.store,l=o.clientID,c=t.redone;if(c!==null)return Gt(e,c);let h=t.parent._item,u=null,d;if(h!==null&&h.deleted===!0){if(h.redone===null&&(!s.has(h)||Kg(e,h,s,r,n,i)===null))return null;for(;h.redone!==null;)h=Gt(e,h.redone)}const f=h===null?t.parent:h.content.type;if(t.parentSub===null){for(u=t.left,d=t;u!==null;){let x=u;for(;x!==null&&x.parent._item!==h;)x=x.redone===null?null:Gt(e,x.redone);if(x!==null&&x.parent._item===h){u=x;break}u=u.left}for(;d!==null;){let x=d;for(;x!==null&&x.parent._item!==h;)x=x.redone===null?null:Gt(e,x.redone);if(x!==null&&x.parent._item===h){d=x;break}d=d.right}}else if(d=null,t.right&&!n){for(u=t;u!==null&&u.right!==null&&(u.right.redone||Kr(r,u.right.id)||Fd(i.undoStack,u.right.id)||Fd(i.redoStack,u.right.id));)for(u=u.right;u.redone;)u=Gt(e,u.redone);if(u&&u.right!==null)return null}else u=f._map.get(t.parentSub)||null;const p=wt(a,l),b=j(l,p),v=new ht(b,u,u&&u.lastId,d,d&&d.id,f,t.parentSub,t.content.copy());return t.redone=b,Rh(v,!0),v.integrate(e,0),v};class ht extends Ka{constructor(t,s,r,n,i,o,a,l){super(t,l.getLength()),this.origin=r,this.left=s,this.right=n,this.rightOrigin=i,this.parent=o,this.parentSub=a,this.redone=null,this.content=l,this.info=this.content.isCountable()?wd:0}set marker(t){(this.info&Tl)>0!==t&&(this.info^=Tl)}get marker(){return(this.info&Tl)>0}get keep(){return(this.info&_d)>0}set keep(t){this.keep!==t&&(this.info^=_d)}get countable(){return(this.info&wd)>0}get deleted(){return(this.info&$l)>0}set deleted(t){this.deleted!==t&&(this.info^=$l)}markDeleted(){this.info|=$l}getMissing(t,s){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=wt(s,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=wt(s,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Ir&&this.id.client!==this.parent.client&&this.parent.clock>=wt(s,this.parent.client))return this.parent.client;if(this.origin&&(this.left=_c(t,s,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=Gt(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===pe||this.right&&this.right.constructor===pe)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===ht?(this.parent=this.left.parent,this.parentSub=this.left.parentSub):this.right&&this.right.constructor===ht&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Ir){const r=Mr(s,this.parent);r.constructor===pe?this.parent=null:this.parent=r.content.type}return null}integrate(t,s){if(s>0&&(this.id.clock+=s,this.left=_c(t,t.doc.store,j(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(s),this.length-=s),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let r=this.left,n;if(r!==null)n=r.right;else if(this.parentSub!==null)for(n=this.parent._map.get(this.parentSub)||null;n!==null&&n.left!==null;)n=n.left;else n=this.parent._start;const i=new Set,o=new Set;for(;n!==null&&n!==this.right;){if(o.add(n),i.add(n),Sr(this.origin,n.origin)){if(n.id.client<this.id.client)r=n,i.clear();else if(Sr(this.rightOrigin,n.rightOrigin))break}else if(n.origin!==null&&o.has(Mr(t.doc.store,n.origin)))i.has(Mr(t.doc.store,n.origin))||(r=n,i.clear());else break;n=n.right}this.left=r}if(this.left!==null){const r=this.left.right;this.right=r,this.left.right=this}else{let r;if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start,this.parent._start=this;this.right=r}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),gg(t.doc.store,this),this.content.integrate(t,this),Pd(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new pe(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:j(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&Sr(t.origin,this.lastId)&&this.right===t&&Sr(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){const s=this.parent._searchMarker;return s&&s.forEach(r=>{r.p===t&&(r.p=this,!this.deleted&&this.countable&&(r.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){const s=this.parent;this.countable&&this.parentSub===null&&(s._length-=this.length),this.markDeleted(),Oi(t.deleteSet,this.id.client,this.id.clock,this.length),Pd(t,s,this.parentSub),this.content.delete(t)}}gc(t,s){if(!this.deleted)throw be();this.content.gc(t),s?F0(t,this,new pe(this.id,this.length)):this.content=new Vr(this.length)}write(t,s){const r=s>0?j(this.id.client,this.id.clock+s-1):this.origin,n=this.rightOrigin,i=this.parentSub,o=this.content.getRef()&Va|(r===null?0:ke)|(n===null?0:Rs)|(i===null?0:Ei);if(t.writeInfo(o),r!==null&&t.writeLeftID(r),n!==null&&t.writeRightID(n),r===null&&n===null){const a=this.parent;if(a._item!==void 0){const l=a._item;if(l===null){const c=xh(a);t.writeParentInfo(!0),t.writeString(c)}else t.writeParentInfo(!1),t.writeLeftID(l.id)}else a.constructor===String?(t.writeParentInfo(!0),t.writeString(a)):a.constructor===Ir?(t.writeParentInfo(!1),t.writeLeftID(a)):be();i!==null&&t.writeString(i)}this.content.write(t,s)}}const Jg=(e,t)=>Bw[t&Va](e),Bw=[()=>{be()},ww,Cw,_w,Tw,kw,Sw,Nw,$w,xw,()=>{be()}],zw=10;class ne extends Ka{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,s){be()}write(t,s){t.writeInfo(zw),V(t.restEncoder,this.length-s)}getMissing(t,s){return null}}const Qg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},tm="__ $YJS$ __";Qg[tm]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");Qg[tm]=!0;const GA=Object.freeze(Object.defineProperty({__proto__:null,AbsolutePosition:ug,AbstractConnector:l0,AbstractStruct:Ka,AbstractType:$t,Array:Pt,ContentAny:Ps,ContentBinary:Jr,ContentDeleted:Vr,ContentDoc:Qr,ContentEmbed:Bs,ContentFormat:Ct,ContentJSON:yn,ContentString:ze,ContentType:Fe,Doc:ur,GC:pe,ID:Ir,Item:ht,Map:Vt,PermanentUserData:k0,RelativePosition:qa,Skip:ne,Snapshot:kh,Text:fe,Transaction:bg,UndoManager:tr,UpdateDecoderV1:Ue,UpdateDecoderV2:Ee,UpdateEncoderV1:dr,UpdateEncoderV2:Ke,XmlElement:sr,XmlFragment:er,XmlHook:vn,XmlText:Li,YArrayEvent:Ug,YEvent:ho,YMapEvent:Fg,YTextEvent:Zg,YXmlEvent:Gg,applyUpdate:g0,applyUpdateV2:Ya,cleanupYTextFormatting:qg,compareIDs:Sr,compareRelativePositions:I0,convertUpdateFormatV1ToV2:tw,convertUpdateFormatV2ToV1:Tg,createAbsolutePositionFromRelativePosition:bc,createDeleteSet:Ha,createDeleteSetFromStructStore:bh,createDocFromSnapshot:B0,createID:j,createRelativePositionFromJSON:C0,createRelativePositionFromTypeIndex:mc,createSnapshot:Sh,decodeRelativePosition:O0,decodeSnapshot:P0,decodeSnapshotV2:fg,decodeStateVector:_h,decodeUpdate:q0,decodeUpdateV2:xg,diffUpdate:K0,diffUpdateV2:Eh,emptySnapshot:L0,encodeRelativePosition:T0,encodeSnapshot:D0,encodeSnapshotV2:dg,encodeStateAsUpdate:b0,encodeStateAsUpdateV2:lg,encodeStateVector:_0,encodeStateVectorFromUpdate:Z0,encodeStateVectorFromUpdateV2:Sg,equalDeleteSets:ig,equalSnapshots:M0,findIndexSS:Be,findRootTypeKey:xh,getItem:Mr,getItemCleanEnd:_c,getItemCleanStart:Gt,getState:wt,getTypeChildren:iw,isDeleted:Kr,isParentOf:Ii,iterateDeletedStructs:Br,logType:x0,logUpdate:Y0,logUpdateV2:wg,mergeDeleteSets:zr,mergeUpdates:kg,mergeUpdatesV2:Mi,obfuscateUpdate:J0,obfuscateUpdateV2:Q0,parseUpdateMeta:G0,parseUpdateMetaV2:Cg,readUpdate:p0,readUpdateV2:yh,relativePositionToJSON:S0,snapshot:N0,snapshotContainsUpdate:V0,transact:dt,tryGc:j0,typeListToArraySnapshot:ow,typeMapGetAllSnapshot:Vg,typeMapGetSnapshot:cw},Symbol.toStringTag,{value:"Module"}));var Vw=Symbol.for("preact-signals");function Ja(){if(Ks>1)Ks--;else{for(var e,t=!1;_i!==void 0;){var s=_i;for(_i=void 0,kc++;s!==void 0;){var r=s.o;if(s.o=void 0,s.f&=-3,!(8&s.f)&&rm(s))try{s.c()}catch(n){t||(e=n,t=!0)}s=r}}if(kc=0,Ks--,t)throw e}}function Dl(e){if(Ks>0)return e();Ks++;try{return e()}finally{Ja()}}var ot=void 0;function em(e){var t=ot;ot=void 0;try{return e()}finally{ot=t}}var _i=void 0,Ks=0,kc=0,fa=0;function sm(e){if(ot!==void 0){var t=e.n;if(t===void 0||t.t!==ot)return t={i:0,S:e,p:ot.s,n:void 0,t:ot,e:void 0,x:void 0,r:t},ot.s!==void 0&&(ot.s.n=t),ot.s=t,e.n=t,32&ot.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=ot.s,t.n=void 0,ot.s.n=t,ot.s=t),t}}function oe(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t?.watched,this.Z=t?.unwatched}oe.prototype.brand=Vw;oe.prototype.h=function(){return!0};oe.prototype.S=function(e){var t=this,s=this.t;s!==e&&e.e===void 0&&(e.x=s,this.t=e,s!==void 0?s.e=e:em(function(){var r;(r=t.W)==null||r.call(t)}))};oe.prototype.U=function(e){var t=this;if(this.t!==void 0){var s=e.e,r=e.x;s!==void 0&&(s.x=r,e.e=void 0),r!==void 0&&(r.e=s,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&em(function(){var n;(n=t.Z)==null||n.call(t)}))}};oe.prototype.subscribe=function(e){var t=this;return Nn(function(){var s=t.value,r=ot;ot=void 0;try{e(s)}finally{ot=r}})};oe.prototype.valueOf=function(){return this.value};oe.prototype.toString=function(){return this.value+""};oe.prototype.toJSON=function(){return this.value};oe.prototype.peek=function(){var e=ot;ot=void 0;try{return this.value}finally{ot=e}};Object.defineProperty(oe.prototype,"value",{get:function(){var e=sm(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(kc>100)throw new Error("Cycle detected");this.v=e,this.i++,fa++,Ks++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Ja()}}}});function Kt(e,t){return new oe(e,t)}function rm(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function nm(e){for(var t=e.s;t!==void 0;t=t.n){var s=t.S.n;if(s!==void 0&&(t.r=s),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function im(e){for(var t=e.s,s=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):s=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=s}function tn(e,t){oe.call(this,void 0),this.x=e,this.s=void 0,this.g=fa-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched}tn.prototype=new oe;tn.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fa))return!0;if(this.g=fa,this.f|=1,this.i>0&&!rm(this))return this.f&=-2,!0;var e=ot;try{nm(this),ot=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(s){this.v=s,this.f|=16,this.i++}return ot=e,im(this),this.f&=-2,!0};tn.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}oe.prototype.S.call(this,e)};tn.prototype.U=function(e){if(this.t!==void 0&&(oe.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};tn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(tn.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=sm(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Ur(e,t){return new tn(e,t)}function om(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Ks++;var s=ot;ot=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,Ih(e),r}finally{ot=s,Ja()}}}function Ih(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,om(e)}function Uw(e){if(ot!==this)throw new Error("Out-of-order effect");im(this),ot=e,this.f&=-2,8&this.f&&Ih(this),Ja()}function uo(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}uo.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};uo.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,om(this),nm(this),Ks++;var e=ot;return ot=this,Uw.bind(this,e)};uo.prototype.N=function(){2&this.f||(this.f|=2,this.o=_i,_i=this)};uo.prototype.d=function(){this.f|=8,1&this.f||Ih(this)};function Nn(e){var t=new uo(e);try{t.c()}catch(s){throw t.d(),s}return t.d.bind(t)}class Mh{constructor(){this._getOrigin=t=>({doc:t,proxy:!0,target:this}),this._onObserve=(t,s)=>{var r,n,i,o;(((r=t.transaction.origin)==null?void 0:r.force)===!0||((n=t.transaction.origin)==null?void 0:n.proxy)!==!0&&(!t.transaction.local||t.transaction.origin instanceof tr))&&s();const a=!t.transaction.origin||!this._ySource.doc||t.transaction.origin instanceof tr||t.transaction.origin.proxy?!0:t.transaction.origin===this._ySource.doc.clientID;(o=(i=this._options)==null?void 0:i.onChange)==null||o.call(i,this._proxy,a)},this._skipNext=!1,this._stashed=new Set,this._transact=(t,s)=>{t.transact(s,this._getOrigin(t))},this._updateWithSkip=t=>{this._skipNext||(this._skipNext=!0,t(),this._skipNext=!1)}}get proxy(){return this._proxy}}const Pl="Schema not found. The block flavour may not be registered.",am="$blocksuite:internal:text$",Ni="$blocksuite:internal:native$",lm=new Set(["id","flavour","children","version"]),pa=class{constructor(t){this.getValue=()=>this._map.get("value"),this.setValue=s=>this._map.set("value",s),t instanceof Vt&&t.doc&&t.get("type")===Ni?this._map=t:(this._map=new Vt,this._map.set("type",Ni),this._map.set("value",t)),this._map.observeDeep(s=>{s.forEach(r=>{var n;const i=!r.transaction.origin||!this._map.doc||r.transaction.origin instanceof tr||r.transaction.origin.proxy?!0:r.transaction.origin===this._map.doc.clientID;(n=this._onChange)==null||n.call(this,this.getValue(),i)})})}get yMap(){return this._map}bind(t){this._onChange=t}};pa.from=(e,t)=>{const s=new pa(e.get("value"));return t&&s.bind(t),s};pa.is=e=>e instanceof Vt&&e.get("type")===Ni;let Ve=pa;const ls=new WeakMap;function en(e){return e!==null&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&[Object,void 0,null].some(t=>t===e.constructor)}var et;(function(e){e.assertEqual=n=>{};function t(n){}e.assertIs=t;function s(n){throw new Error}e.assertNever=s,e.arrayToEnum=n=>{const i={};for(const o of n)i[o]=o;return i},e.getValidEnumValues=n=>{const i=e.objectKeys(n).filter(a=>typeof n[n[a]]!="number"),o={};for(const a of i)o[a]=n[a];return e.objectValues(o)},e.objectValues=n=>e.objectKeys(n).map(function(i){return n[i]}),e.objectKeys=typeof Object.keys=="function"?n=>Object.keys(n):n=>{const i=[];for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&i.push(o);return i},e.find=(n,i)=>{for(const o of n)if(i(o))return o},e.isInteger=typeof Number.isInteger=="function"?n=>Number.isInteger(n):n=>typeof n=="number"&&Number.isFinite(n)&&Math.floor(n)===n;function r(n,i=" | "){return n.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}e.joinValues=r,e.jsonStringifyReplacer=(n,i)=>typeof i=="bigint"?i.toString():i})(et||(et={}));var Sc;(function(e){e.mergeShapes=(t,s)=>({...t,...s})})(Sc||(Sc={}));const M=et.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ts=e=>{switch(typeof e){case"undefined":return M.undefined;case"string":return M.string;case"number":return Number.isNaN(e)?M.nan:M.number;case"boolean":return M.boolean;case"function":return M.function;case"bigint":return M.bigint;case"symbol":return M.symbol;case"object":return Array.isArray(e)?M.array:e===null?M.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?M.promise:typeof Map<"u"&&e instanceof Map?M.map:typeof Set<"u"&&e instanceof Set?M.set:typeof Date<"u"&&e instanceof Date?M.date:M.object;default:return M.unknown}},E=et.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Fw=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Se extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const s=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,s):this.__proto__=s,this.name="ZodError",this.issues=t}format(t){const s=t||function(i){return i.message},r={_errors:[]},n=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(n);else if(o.code==="invalid_return_type")n(o.returnTypeError);else if(o.code==="invalid_arguments")n(o.argumentsError);else if(o.path.length===0)r._errors.push(s(o));else{let a=r,l=0;for(;l<o.path.length;){const c=o.path[l];l===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(s(o))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return n(this),r}static assert(t){if(!(t instanceof Se))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,et.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=s=>s.message){const s={},r=[];for(const n of this.issues)n.path.length>0?(s[n.path[0]]=s[n.path[0]]||[],s[n.path[0]].push(t(n))):r.push(t(n));return{formErrors:r,fieldErrors:s}}get formErrors(){return this.flatten()}}Se.create=e=>new Se(e);const _n=(e,t)=>{let s;switch(e.code){case E.invalid_type:e.received===M.undefined?s="Required":s=`Expected ${e.expected}, received ${e.received}`;break;case E.invalid_literal:s=`Invalid literal value, expected ${JSON.stringify(e.expected,et.jsonStringifyReplacer)}`;break;case E.unrecognized_keys:s=`Unrecognized key(s) in object: ${et.joinValues(e.keys,", ")}`;break;case E.invalid_union:s="Invalid input";break;case E.invalid_union_discriminator:s=`Invalid discriminator value. Expected ${et.joinValues(e.options)}`;break;case E.invalid_enum_value:s=`Invalid enum value. Expected ${et.joinValues(e.options)}, received '${e.received}'`;break;case E.invalid_arguments:s="Invalid function arguments";break;case E.invalid_return_type:s="Invalid function return type";break;case E.invalid_date:s="Invalid date";break;case E.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(s=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(s=`${s} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?s=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?s=`Invalid input: must end with "${e.validation.endsWith}"`:et.assertNever(e.validation):e.validation!=="regex"?s=`Invalid ${e.validation}`:s="Invalid";break;case E.too_small:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:s="Invalid input";break;case E.too_big:e.type==="array"?s=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?s=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?s=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?s=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?s=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:s="Invalid input";break;case E.custom:s="Invalid input";break;case E.invalid_intersection_types:s="Intersection results could not be merged";break;case E.not_multiple_of:s=`Number must be a multiple of ${e.multipleOf}`;break;case E.not_finite:s="Number must be finite";break;default:s=t.defaultError,et.assertNever(e)}return{message:s}};let cm=_n;function jw(e){cm=e}function ga(){return cm}const ma=e=>{const{data:t,path:s,errorMaps:r,issueData:n}=e,i=[...s,...n.path||[]],o={...n,path:i};if(n.message!==void 0)return{...n,path:i,message:n.message};let a="";const l=r.filter(c=>!!c).slice().reverse();for(const c of l)a=c(o,{data:t,defaultError:a}).message;return{...n,path:i,message:a}},Hw=[];function O(e,t){const s=ga(),r=ma({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,s,s===_n?void 0:_n].filter(n=>!!n)});e.common.issues.push(r)}class Jt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,s){const r=[];for(const n of s){if(n.status==="aborted")return B;n.status==="dirty"&&t.dirty(),r.push(n.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,s){const r=[];for(const n of s){const i=await n.key,o=await n.value;r.push({key:i,value:o})}return Jt.mergeObjectSync(t,r)}static mergeObjectSync(t,s){const r={};for(const n of s){const{key:i,value:o}=n;if(i.status==="aborted"||o.status==="aborted")return B;i.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||n.alwaysSet)&&(r[i.value]=o.value)}return{status:t.value,value:r}}}const B=Object.freeze({status:"aborted"}),an=e=>({status:"dirty",value:e}),ie=e=>({status:"valid",value:e}),Cc=e=>e.status==="aborted",Ec=e=>e.status==="dirty",Fr=e=>e.status==="valid",Bi=e=>typeof Promise<"u"&&e instanceof Promise;var P;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(P||(P={}));class ms{constructor(t,s,r,n){this._cachedPath=[],this.parent=t,this.data=s,this._path=r,this._key=n}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const jd=(e,t)=>{if(Fr(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const s=new Se(e.common.issues);return this._error=s,this._error}}};function W(e){if(!e)return{};const{errorMap:t,invalid_type_error:s,required_error:r,description:n}=e;if(t&&(s||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:n}:{errorMap:(o,a)=>{const{message:l}=e;return o.code==="invalid_enum_value"?{message:l??a.defaultError}:typeof a.data>"u"?{message:l??r??a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:l??s??a.defaultError}},description:n}}class q{get description(){return this._def.description}_getType(t){return Ts(t.data)}_getOrReturnCtx(t,s){return s||{common:t.parent.common,data:t.data,parsedType:Ts(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Jt,ctx:{common:t.parent.common,data:t.data,parsedType:Ts(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const s=this._parse(t);if(Bi(s))throw new Error("Synchronous parse encountered promise.");return s}_parseAsync(t){const s=this._parse(t);return Promise.resolve(s)}parse(t,s){const r=this.safeParse(t,s);if(r.success)return r.data;throw r.error}safeParse(t,s){const r={common:{issues:[],async:s?.async??!1,contextualErrorMap:s?.errorMap},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Ts(t)},n=this._parseSync({data:t,path:r.path,parent:r});return jd(r,n)}"~validate"(t){const s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Ts(t)};if(!this["~standard"].async)try{const r=this._parseSync({data:t,path:[],parent:s});return Fr(r)?{value:r.value}:{issues:s.common.issues}}catch(r){r?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:s}).then(r=>Fr(r)?{value:r.value}:{issues:s.common.issues})}async parseAsync(t,s){const r=await this.safeParseAsync(t,s);if(r.success)return r.data;throw r.error}async safeParseAsync(t,s){const r={common:{issues:[],contextualErrorMap:s?.errorMap,async:!0},path:s?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Ts(t)},n=this._parse({data:t,path:r.path,parent:r}),i=await(Bi(n)?n:Promise.resolve(n));return jd(r,i)}refine(t,s){const r=n=>typeof s=="string"||typeof s>"u"?{message:s}:typeof s=="function"?s(n):s;return this._refinement((n,i)=>{const o=t(n),a=()=>i.addIssue({code:E.custom,...r(n)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(t,s){return this._refinement((r,n)=>t(r)?!0:(n.addIssue(typeof s=="function"?s(r,n):s),!1))}_refinement(t){return new Je({schema:this,typeName:z.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:s=>this["~validate"](s)}}optional(){return us.create(this,this._def)}nullable(){return or.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Ge.create(this)}promise(){return xn.create(this,this._def)}or(t){return Fi.create([this,t],this._def)}and(t){return ji.create(this,t,this._def)}transform(t){return new Je({...W(this._def),schema:this,typeName:z.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const s=typeof t=="function"?t:()=>t;return new Zi({...W(this._def),innerType:this,defaultValue:s,typeName:z.ZodDefault})}brand(){return new Dh({typeName:z.ZodBranded,type:this,...W(this._def)})}catch(t){const s=typeof t=="function"?t:()=>t;return new Gi({...W(this._def),innerType:this,catchValue:s,typeName:z.ZodCatch})}describe(t){const s=this.constructor;return new s({...this._def,description:t})}pipe(t){return fo.create(this,t)}readonly(){return Xi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ww=/^c[^\s-]{8,}$/i,Yw=/^[0-9a-z]+$/,qw=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Zw=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Gw=/^[a-z0-9_-]{21}$/i,Xw=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Kw=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Jw=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Qw="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ll;const tx=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ex=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,sx=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,rx=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,nx=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,ix=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,hm="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",ox=new RegExp(`^${hm}$`);function um(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`);const s=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${s}`}function ax(e){return new RegExp(`^${um(e)}$`)}function dm(e){let t=`${hm}T${um(e)}`;const s=[];return s.push(e.local?"Z?":"Z"),e.offset&&s.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${s.join("|")})`,new RegExp(`^${t}$`)}function lx(e,t){return!!((t==="v4"||!t)&&tx.test(e)||(t==="v6"||!t)&&sx.test(e))}function cx(e,t){if(!Xw.test(e))return!1;try{const[s]=e.split("."),r=s.replace(/-/g,"+").replace(/_/g,"/").padEnd(s.length+(4-s.length%4)%4,"="),n=JSON.parse(atob(r));return!(typeof n!="object"||n===null||"typ"in n&&n?.typ!=="JWT"||!n.alg||t&&n.alg!==t)}catch{return!1}}function hx(e,t){return!!((t==="v4"||!t)&&ex.test(e)||(t==="v6"||!t)&&rx.test(e))}class qe extends q{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==M.string){const i=this._getOrReturnCtx(t);return O(i,{code:E.invalid_type,expected:M.string,received:i.parsedType}),B}const r=new Jt;let n;for(const i of this._def.checks)if(i.kind==="min")t.data.length<i.value&&(n=this._getOrReturnCtx(t,n),O(n,{code:E.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")t.data.length>i.value&&(n=this._getOrReturnCtx(t,n),O(n,{code:E.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=t.data.length>i.value,a=t.data.length<i.value;(o||a)&&(n=this._getOrReturnCtx(t,n),o?O(n,{code:E.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&O(n,{code:E.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")Jw.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"email",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Ll||(Ll=new RegExp(Qw,"u")),Ll.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"emoji",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Zw.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"uuid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")Gw.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"nanoid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Ww.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"cuid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")Yw.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"cuid2",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")qw.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"ulid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(t.data)}catch{n=this._getOrReturnCtx(t,n),O(n,{validation:"url",code:E.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"regex",code:E.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?t.data=t.data.trim():i.kind==="includes"?t.data.includes(i.value,i.position)||(n=this._getOrReturnCtx(t,n),O(n,{code:E.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?t.data=t.data.toLowerCase():i.kind==="toUpperCase"?t.data=t.data.toUpperCase():i.kind==="startsWith"?t.data.startsWith(i.value)||(n=this._getOrReturnCtx(t,n),O(n,{code:E.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?t.data.endsWith(i.value)||(n=this._getOrReturnCtx(t,n),O(n,{code:E.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?dm(i).test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{code:E.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?ox.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{code:E.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?ax(i).test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{code:E.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?Kw.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"duration",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?lx(t.data,i.version)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"ip",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?cx(t.data,i.alg)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"jwt",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?hx(t.data,i.version)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"cidr",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?nx.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"base64",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?ix.test(t.data)||(n=this._getOrReturnCtx(t,n),O(n,{validation:"base64url",code:E.invalid_string,message:i.message}),r.dirty()):et.assertNever(i);return{status:r.value,value:t.data}}_regex(t,s,r){return this.refinement(n=>t.test(n),{validation:s,code:E.invalid_string,...P.errToObj(r)})}_addCheck(t){return new qe({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...P.errToObj(t)})}url(t){return this._addCheck({kind:"url",...P.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...P.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...P.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...P.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...P.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...P.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...P.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...P.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...P.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...P.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...P.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...P.errToObj(t)})}datetime(t){return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:t?.offset??!1,local:t?.local??!1,...P.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...P.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...P.errToObj(t)})}regex(t,s){return this._addCheck({kind:"regex",regex:t,...P.errToObj(s)})}includes(t,s){return this._addCheck({kind:"includes",value:t,position:s?.position,...P.errToObj(s?.message)})}startsWith(t,s){return this._addCheck({kind:"startsWith",value:t,...P.errToObj(s)})}endsWith(t,s){return this._addCheck({kind:"endsWith",value:t,...P.errToObj(s)})}min(t,s){return this._addCheck({kind:"min",value:t,...P.errToObj(s)})}max(t,s){return this._addCheck({kind:"max",value:t,...P.errToObj(s)})}length(t,s){return this._addCheck({kind:"length",value:t,...P.errToObj(s)})}nonempty(t){return this.min(1,P.errToObj(t))}trim(){return new qe({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new qe({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new qe({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxLength(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}}qe.create=e=>new qe({checks:[],typeName:z.ZodString,coerce:e?.coerce??!1,...W(e)});function ux(e,t){const s=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,n=s>r?s:r,i=Number.parseInt(e.toFixed(n).replace(".","")),o=Number.parseInt(t.toFixed(n).replace(".",""));return i%o/10**n}class rr extends q{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==M.number){const i=this._getOrReturnCtx(t);return O(i,{code:E.invalid_type,expected:M.number,received:i.parsedType}),B}let r;const n=new Jt;for(const i of this._def.checks)i.kind==="int"?et.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),O(r,{code:E.invalid_type,expected:"integer",received:"float",message:i.message}),n.dirty()):i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),O(r,{code:E.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),O(r,{code:E.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty()):i.kind==="multipleOf"?ux(t.data,i.value)!==0&&(r=this._getOrReturnCtx(t,r),O(r,{code:E.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):i.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),O(r,{code:E.not_finite,message:i.message}),n.dirty()):et.assertNever(i);return{status:n.value,value:t.data}}gte(t,s){return this.setLimit("min",t,!0,P.toString(s))}gt(t,s){return this.setLimit("min",t,!1,P.toString(s))}lte(t,s){return this.setLimit("max",t,!0,P.toString(s))}lt(t,s){return this.setLimit("max",t,!1,P.toString(s))}setLimit(t,s,r,n){return new rr({...this._def,checks:[...this._def.checks,{kind:t,value:s,inclusive:r,message:P.toString(n)}]})}_addCheck(t){return new rr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:P.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:P.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:P.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:P.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:P.toString(t)})}multipleOf(t,s){return this._addCheck({kind:"multipleOf",value:t,message:P.toString(s)})}finite(t){return this._addCheck({kind:"finite",message:P.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:P.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:P.toString(t)})}get minValue(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxValue(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&et.isInteger(t.value))}get isFinite(){let t=null,s=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(s===null||r.value>s)&&(s=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(s)&&Number.isFinite(t)}}rr.create=e=>new rr({checks:[],typeName:z.ZodNumber,coerce:e?.coerce||!1,...W(e)});class nr extends q{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==M.bigint)return this._getInvalidInput(t);let r;const n=new Jt;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),O(r,{code:E.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),O(r,{code:E.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty()):i.kind==="multipleOf"?t.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),O(r,{code:E.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):et.assertNever(i);return{status:n.value,value:t.data}}_getInvalidInput(t){const s=this._getOrReturnCtx(t);return O(s,{code:E.invalid_type,expected:M.bigint,received:s.parsedType}),B}gte(t,s){return this.setLimit("min",t,!0,P.toString(s))}gt(t,s){return this.setLimit("min",t,!1,P.toString(s))}lte(t,s){return this.setLimit("max",t,!0,P.toString(s))}lt(t,s){return this.setLimit("max",t,!1,P.toString(s))}setLimit(t,s,r,n){return new nr({...this._def,checks:[...this._def.checks,{kind:t,value:s,inclusive:r,message:P.toString(n)}]})}_addCheck(t){return new nr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:P.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:P.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:P.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:P.toString(t)})}multipleOf(t,s){return this._addCheck({kind:"multipleOf",value:t,message:P.toString(s)})}get minValue(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t}get maxValue(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t}}nr.create=e=>new nr({checks:[],typeName:z.ZodBigInt,coerce:e?.coerce??!1,...W(e)});class zi extends q{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==M.boolean){const r=this._getOrReturnCtx(t);return O(r,{code:E.invalid_type,expected:M.boolean,received:r.parsedType}),B}return ie(t.data)}}zi.create=e=>new zi({typeName:z.ZodBoolean,coerce:e?.coerce||!1,...W(e)});class jr extends q{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==M.date){const i=this._getOrReturnCtx(t);return O(i,{code:E.invalid_type,expected:M.date,received:i.parsedType}),B}if(Number.isNaN(t.data.getTime())){const i=this._getOrReturnCtx(t);return O(i,{code:E.invalid_date}),B}const r=new Jt;let n;for(const i of this._def.checks)i.kind==="min"?t.data.getTime()<i.value&&(n=this._getOrReturnCtx(t,n),O(n,{code:E.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?t.data.getTime()>i.value&&(n=this._getOrReturnCtx(t,n),O(n,{code:E.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):et.assertNever(i);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new jr({...this._def,checks:[...this._def.checks,t]})}min(t,s){return this._addCheck({kind:"min",value:t.getTime(),message:P.toString(s)})}max(t,s){return this._addCheck({kind:"max",value:t.getTime(),message:P.toString(s)})}get minDate(){let t=null;for(const s of this._def.checks)s.kind==="min"&&(t===null||s.value>t)&&(t=s.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const s of this._def.checks)s.kind==="max"&&(t===null||s.value<t)&&(t=s.value);return t!=null?new Date(t):null}}jr.create=e=>new jr({checks:[],coerce:e?.coerce||!1,typeName:z.ZodDate,...W(e)});class ba extends q{_parse(t){if(this._getType(t)!==M.symbol){const r=this._getOrReturnCtx(t);return O(r,{code:E.invalid_type,expected:M.symbol,received:r.parsedType}),B}return ie(t.data)}}ba.create=e=>new ba({typeName:z.ZodSymbol,...W(e)});class Vi extends q{_parse(t){if(this._getType(t)!==M.undefined){const r=this._getOrReturnCtx(t);return O(r,{code:E.invalid_type,expected:M.undefined,received:r.parsedType}),B}return ie(t.data)}}Vi.create=e=>new Vi({typeName:z.ZodUndefined,...W(e)});class Ui extends q{_parse(t){if(this._getType(t)!==M.null){const r=this._getOrReturnCtx(t);return O(r,{code:E.invalid_type,expected:M.null,received:r.parsedType}),B}return ie(t.data)}}Ui.create=e=>new Ui({typeName:z.ZodNull,...W(e)});class wn extends q{constructor(){super(...arguments),this._any=!0}_parse(t){return ie(t.data)}}wn.create=e=>new wn({typeName:z.ZodAny,...W(e)});class Dr extends q{constructor(){super(...arguments),this._unknown=!0}_parse(t){return ie(t.data)}}Dr.create=e=>new Dr({typeName:z.ZodUnknown,...W(e)});class Ls extends q{_parse(t){const s=this._getOrReturnCtx(t);return O(s,{code:E.invalid_type,expected:M.never,received:s.parsedType}),B}}Ls.create=e=>new Ls({typeName:z.ZodNever,...W(e)});class va extends q{_parse(t){if(this._getType(t)!==M.undefined){const r=this._getOrReturnCtx(t);return O(r,{code:E.invalid_type,expected:M.void,received:r.parsedType}),B}return ie(t.data)}}va.create=e=>new va({typeName:z.ZodVoid,...W(e)});class Ge extends q{_parse(t){const{ctx:s,status:r}=this._processInputParams(t),n=this._def;if(s.parsedType!==M.array)return O(s,{code:E.invalid_type,expected:M.array,received:s.parsedType}),B;if(n.exactLength!==null){const o=s.data.length>n.exactLength.value,a=s.data.length<n.exactLength.value;(o||a)&&(O(s,{code:o?E.too_big:E.too_small,minimum:a?n.exactLength.value:void 0,maximum:o?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),r.dirty())}if(n.minLength!==null&&s.data.length<n.minLength.value&&(O(s,{code:E.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),r.dirty()),n.maxLength!==null&&s.data.length>n.maxLength.value&&(O(s,{code:E.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),r.dirty()),s.common.async)return Promise.all([...s.data].map((o,a)=>n.type._parseAsync(new ms(s,o,s.path,a)))).then(o=>Jt.mergeArray(r,o));const i=[...s.data].map((o,a)=>n.type._parseSync(new ms(s,o,s.path,a)));return Jt.mergeArray(r,i)}get element(){return this._def.type}min(t,s){return new Ge({...this._def,minLength:{value:t,message:P.toString(s)}})}max(t,s){return new Ge({...this._def,maxLength:{value:t,message:P.toString(s)}})}length(t,s){return new Ge({...this._def,exactLength:{value:t,message:P.toString(s)}})}nonempty(t){return this.min(1,t)}}Ge.create=(e,t)=>new Ge({type:e,minLength:null,maxLength:null,exactLength:null,typeName:z.ZodArray,...W(t)});function nn(e){if(e instanceof _t){const t={};for(const s in e.shape){const r=e.shape[s];t[s]=us.create(nn(r))}return new _t({...e._def,shape:()=>t})}else return e instanceof Ge?new Ge({...e._def,type:nn(e.element)}):e instanceof us?us.create(nn(e.unwrap())):e instanceof or?or.create(nn(e.unwrap())):e instanceof bs?bs.create(e.items.map(t=>nn(t))):e}class _t extends q{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),s=et.objectKeys(t);return this._cached={shape:t,keys:s},this._cached}_parse(t){if(this._getType(t)!==M.object){const c=this._getOrReturnCtx(t);return O(c,{code:E.invalid_type,expected:M.object,received:c.parsedType}),B}const{status:r,ctx:n}=this._processInputParams(t),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Ls&&this._def.unknownKeys==="strip"))for(const c in n.data)o.includes(c)||a.push(c);const l=[];for(const c of o){const h=i[c],u=n.data[c];l.push({key:{status:"valid",value:c},value:h._parse(new ms(n,u,n.path,c)),alwaysSet:c in n.data})}if(this._def.catchall instanceof Ls){const c=this._def.unknownKeys;if(c==="passthrough")for(const h of a)l.push({key:{status:"valid",value:h},value:{status:"valid",value:n.data[h]}});else if(c==="strict")a.length>0&&(O(n,{code:E.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const h of a){const u=n.data[h];l.push({key:{status:"valid",value:h},value:c._parse(new ms(n,u,n.path,h)),alwaysSet:h in n.data})}}return n.common.async?Promise.resolve().then(async()=>{const c=[];for(const h of l){const u=await h.key,d=await h.value;c.push({key:u,value:d,alwaysSet:h.alwaysSet})}return c}).then(c=>Jt.mergeObjectSync(r,c)):Jt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return P.errToObj,new _t({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(s,r)=>{const n=this._def.errorMap?.(s,r).message??r.defaultError;return s.code==="unrecognized_keys"?{message:P.errToObj(t).message??n}:{message:n}}}:{}})}strip(){return new _t({...this._def,unknownKeys:"strip"})}passthrough(){return new _t({...this._def,unknownKeys:"passthrough"})}extend(t){return new _t({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new _t({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:z.ZodObject})}setKey(t,s){return this.augment({[t]:s})}catchall(t){return new _t({...this._def,catchall:t})}pick(t){const s={};for(const r of et.objectKeys(t))t[r]&&this.shape[r]&&(s[r]=this.shape[r]);return new _t({...this._def,shape:()=>s})}omit(t){const s={};for(const r of et.objectKeys(this.shape))t[r]||(s[r]=this.shape[r]);return new _t({...this._def,shape:()=>s})}deepPartial(){return nn(this)}partial(t){const s={};for(const r of et.objectKeys(this.shape)){const n=this.shape[r];t&&!t[r]?s[r]=n:s[r]=n.optional()}return new _t({...this._def,shape:()=>s})}required(t){const s={};for(const r of et.objectKeys(this.shape))if(t&&!t[r])s[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof us;)i=i._def.innerType;s[r]=i}return new _t({...this._def,shape:()=>s})}keyof(){return fm(et.objectKeys(this.shape))}}_t.create=(e,t)=>new _t({shape:()=>e,unknownKeys:"strip",catchall:Ls.create(),typeName:z.ZodObject,...W(t)});_t.strictCreate=(e,t)=>new _t({shape:()=>e,unknownKeys:"strict",catchall:Ls.create(),typeName:z.ZodObject,...W(t)});_t.lazycreate=(e,t)=>new _t({shape:e,unknownKeys:"strip",catchall:Ls.create(),typeName:z.ZodObject,...W(t)});class Fi extends q{_parse(t){const{ctx:s}=this._processInputParams(t),r=this._def.options;function n(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return s.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new Se(a.ctx.common.issues));return O(s,{code:E.invalid_union,unionErrors:o}),B}if(s.common.async)return Promise.all(r.map(async i=>{const o={...s,common:{...s.common,issues:[]},parent:null};return{result:await i._parseAsync({data:s.data,path:s.path,parent:o}),ctx:o}})).then(n);{let i;const o=[];for(const l of r){const c={...s,common:{...s.common,issues:[]},parent:null},h=l._parseSync({data:s.data,path:s.path,parent:c});if(h.status==="valid")return h;h.status==="dirty"&&!i&&(i={result:h,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(i)return s.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(l=>new Se(l));return O(s,{code:E.invalid_union,unionErrors:a}),B}}get options(){return this._def.options}}Fi.create=(e,t)=>new Fi({options:e,typeName:z.ZodUnion,...W(t)});const $s=e=>e instanceof Wi?$s(e.schema):e instanceof Je?$s(e.innerType()):e instanceof Yi?[e.value]:e instanceof ir?e.options:e instanceof qi?et.objectValues(e.enum):e instanceof Zi?$s(e._def.innerType):e instanceof Vi?[void 0]:e instanceof Ui?[null]:e instanceof us?[void 0,...$s(e.unwrap())]:e instanceof or?[null,...$s(e.unwrap())]:e instanceof Dh||e instanceof Xi?$s(e.unwrap()):e instanceof Gi?$s(e._def.innerType):[];class Qa extends q{_parse(t){const{ctx:s}=this._processInputParams(t);if(s.parsedType!==M.object)return O(s,{code:E.invalid_type,expected:M.object,received:s.parsedType}),B;const r=this.discriminator,n=s.data[r],i=this.optionsMap.get(n);return i?s.common.async?i._parseAsync({data:s.data,path:s.path,parent:s}):i._parseSync({data:s.data,path:s.path,parent:s}):(O(s,{code:E.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),B)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,s,r){const n=new Map;for(const i of s){const o=$s(i.shape[t]);if(!o.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of o){if(n.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);n.set(a,i)}}return new Qa({typeName:z.ZodDiscriminatedUnion,discriminator:t,options:s,optionsMap:n,...W(r)})}}function $c(e,t){const s=Ts(e),r=Ts(t);if(e===t)return{valid:!0,data:e};if(s===M.object&&r===M.object){const n=et.objectKeys(t),i=et.objectKeys(e).filter(a=>n.indexOf(a)!==-1),o={...e,...t};for(const a of i){const l=$c(e[a],t[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(s===M.array&&r===M.array){if(e.length!==t.length)return{valid:!1};const n=[];for(let i=0;i<e.length;i++){const o=e[i],a=t[i],l=$c(o,a);if(!l.valid)return{valid:!1};n.push(l.data)}return{valid:!0,data:n}}else return s===M.date&&r===M.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class ji extends q{_parse(t){const{status:s,ctx:r}=this._processInputParams(t),n=(i,o)=>{if(Cc(i)||Cc(o))return B;const a=$c(i.value,o.value);return a.valid?((Ec(i)||Ec(o))&&s.dirty(),{status:s.value,value:a.data}):(O(r,{code:E.invalid_intersection_types}),B)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>n(i,o)):n(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}ji.create=(e,t,s)=>new ji({left:e,right:t,typeName:z.ZodIntersection,...W(s)});class bs extends q{_parse(t){const{status:s,ctx:r}=this._processInputParams(t);if(r.parsedType!==M.array)return O(r,{code:E.invalid_type,expected:M.array,received:r.parsedType}),B;if(r.data.length<this._def.items.length)return O(r,{code:E.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),B;!this._def.rest&&r.data.length>this._def.items.length&&(O(r,{code:E.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),s.dirty());const i=[...r.data].map((o,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new ms(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>Jt.mergeArray(s,o)):Jt.mergeArray(s,i)}get items(){return this._def.items}rest(t){return new bs({...this._def,rest:t})}}bs.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new bs({items:e,typeName:z.ZodTuple,rest:null,...W(t)})};class Hi extends q{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:s,ctx:r}=this._processInputParams(t);if(r.parsedType!==M.object)return O(r,{code:E.invalid_type,expected:M.object,received:r.parsedType}),B;const n=[],i=this._def.keyType,o=this._def.valueType;for(const a in r.data)n.push({key:i._parse(new ms(r,a,r.path,a)),value:o._parse(new ms(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?Jt.mergeObjectAsync(s,n):Jt.mergeObjectSync(s,n)}get element(){return this._def.valueType}static create(t,s,r){return s instanceof q?new Hi({keyType:t,valueType:s,typeName:z.ZodRecord,...W(r)}):new Hi({keyType:qe.create(),valueType:t,typeName:z.ZodRecord,...W(s)})}}class ya extends q{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:s,ctx:r}=this._processInputParams(t);if(r.parsedType!==M.map)return O(r,{code:E.invalid_type,expected:M.map,received:r.parsedType}),B;const n=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([a,l],c)=>({key:n._parse(new ms(r,a,r.path,[c,"key"])),value:i._parse(new ms(r,l,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of o){const c=await l.key,h=await l.value;if(c.status==="aborted"||h.status==="aborted")return B;(c.status==="dirty"||h.status==="dirty")&&s.dirty(),a.set(c.value,h.value)}return{status:s.value,value:a}})}else{const a=new Map;for(const l of o){const c=l.key,h=l.value;if(c.status==="aborted"||h.status==="aborted")return B;(c.status==="dirty"||h.status==="dirty")&&s.dirty(),a.set(c.value,h.value)}return{status:s.value,value:a}}}}ya.create=(e,t,s)=>new ya({valueType:t,keyType:e,typeName:z.ZodMap,...W(s)});class Hr extends q{_parse(t){const{status:s,ctx:r}=this._processInputParams(t);if(r.parsedType!==M.set)return O(r,{code:E.invalid_type,expected:M.set,received:r.parsedType}),B;const n=this._def;n.minSize!==null&&r.data.size<n.minSize.value&&(O(r,{code:E.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),s.dirty()),n.maxSize!==null&&r.data.size>n.maxSize.value&&(O(r,{code:E.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),s.dirty());const i=this._def.valueType;function o(l){const c=new Set;for(const h of l){if(h.status==="aborted")return B;h.status==="dirty"&&s.dirty(),c.add(h.value)}return{status:s.value,value:c}}const a=[...r.data.values()].map((l,c)=>i._parse(new ms(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(t,s){return new Hr({...this._def,minSize:{value:t,message:P.toString(s)}})}max(t,s){return new Hr({...this._def,maxSize:{value:t,message:P.toString(s)}})}size(t,s){return this.min(t,s).max(t,s)}nonempty(t){return this.min(1,t)}}Hr.create=(e,t)=>new Hr({valueType:e,minSize:null,maxSize:null,typeName:z.ZodSet,...W(t)});class dn extends q{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:s}=this._processInputParams(t);if(s.parsedType!==M.function)return O(s,{code:E.invalid_type,expected:M.function,received:s.parsedType}),B;function r(a,l){return ma({data:a,path:s.path,errorMaps:[s.common.contextualErrorMap,s.schemaErrorMap,ga(),_n].filter(c=>!!c),issueData:{code:E.invalid_arguments,argumentsError:l}})}function n(a,l){return ma({data:a,path:s.path,errorMaps:[s.common.contextualErrorMap,s.schemaErrorMap,ga(),_n].filter(c=>!!c),issueData:{code:E.invalid_return_type,returnTypeError:l}})}const i={errorMap:s.common.contextualErrorMap},o=s.data;if(this._def.returns instanceof xn){const a=this;return ie(async function(...l){const c=new Se([]),h=await a._def.args.parseAsync(l,i).catch(f=>{throw c.addIssue(r(l,f)),c}),u=await Reflect.apply(o,this,h);return await a._def.returns._def.type.parseAsync(u,i).catch(f=>{throw c.addIssue(n(u,f)),c})})}else{const a=this;return ie(function(...l){const c=a._def.args.safeParse(l,i);if(!c.success)throw new Se([r(l,c.error)]);const h=Reflect.apply(o,this,c.data),u=a._def.returns.safeParse(h,i);if(!u.success)throw new Se([n(h,u.error)]);return u.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new dn({...this._def,args:bs.create(t).rest(Dr.create())})}returns(t){return new dn({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,s,r){return new dn({args:t||bs.create([]).rest(Dr.create()),returns:s||Dr.create(),typeName:z.ZodFunction,...W(r)})}}class Wi extends q{get schema(){return this._def.getter()}_parse(t){const{ctx:s}=this._processInputParams(t);return this._def.getter()._parse({data:s.data,path:s.path,parent:s})}}Wi.create=(e,t)=>new Wi({getter:e,typeName:z.ZodLazy,...W(t)});class Yi extends q{_parse(t){if(t.data!==this._def.value){const s=this._getOrReturnCtx(t);return O(s,{received:s.data,code:E.invalid_literal,expected:this._def.value}),B}return{status:"valid",value:t.data}}get value(){return this._def.value}}Yi.create=(e,t)=>new Yi({value:e,typeName:z.ZodLiteral,...W(t)});function fm(e,t){return new ir({values:e,typeName:z.ZodEnum,...W(t)})}class ir extends q{_parse(t){if(typeof t.data!="string"){const s=this._getOrReturnCtx(t),r=this._def.values;return O(s,{expected:et.joinValues(r),received:s.parsedType,code:E.invalid_type}),B}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(t.data)){const s=this._getOrReturnCtx(t),r=this._def.values;return O(s,{received:s.data,code:E.invalid_enum_value,options:r}),B}return ie(t.data)}get options(){return this._def.values}get enum(){const t={};for(const s of this._def.values)t[s]=s;return t}get Values(){const t={};for(const s of this._def.values)t[s]=s;return t}get Enum(){const t={};for(const s of this._def.values)t[s]=s;return t}extract(t,s=this._def){return ir.create(t,{...this._def,...s})}exclude(t,s=this._def){return ir.create(this.options.filter(r=>!t.includes(r)),{...this._def,...s})}}ir.create=fm;class qi extends q{_parse(t){const s=et.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==M.string&&r.parsedType!==M.number){const n=et.objectValues(s);return O(r,{expected:et.joinValues(n),received:r.parsedType,code:E.invalid_type}),B}if(this._cache||(this._cache=new Set(et.getValidEnumValues(this._def.values))),!this._cache.has(t.data)){const n=et.objectValues(s);return O(r,{received:r.data,code:E.invalid_enum_value,options:n}),B}return ie(t.data)}get enum(){return this._def.values}}qi.create=(e,t)=>new qi({values:e,typeName:z.ZodNativeEnum,...W(t)});class xn extends q{unwrap(){return this._def.type}_parse(t){const{ctx:s}=this._processInputParams(t);if(s.parsedType!==M.promise&&s.common.async===!1)return O(s,{code:E.invalid_type,expected:M.promise,received:s.parsedType}),B;const r=s.parsedType===M.promise?s.data:Promise.resolve(s.data);return ie(r.then(n=>this._def.type.parseAsync(n,{path:s.path,errorMap:s.common.contextualErrorMap})))}}xn.create=(e,t)=>new xn({type:e,typeName:z.ZodPromise,...W(t)});class Je extends q{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===z.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:s,ctx:r}=this._processInputParams(t),n=this._def.effect||null,i={addIssue:o=>{O(r,o),o.fatal?s.abort():s.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),n.type==="preprocess"){const o=n.transform(r.data,i);if(r.common.async)return Promise.resolve(o).then(async a=>{if(s.value==="aborted")return B;const l=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return l.status==="aborted"?B:l.status==="dirty"||s.value==="dirty"?an(l.value):l});{if(s.value==="aborted")return B;const a=this._def.schema._parseSync({data:o,path:r.path,parent:r});return a.status==="aborted"?B:a.status==="dirty"||s.value==="dirty"?an(a.value):a}}if(n.type==="refinement"){const o=a=>{const l=n.refinement(a,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?B:(a.status==="dirty"&&s.dirty(),o(a.value),{status:s.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?B:(a.status==="dirty"&&s.dirty(),o(a.value).then(()=>({status:s.value,value:a.value}))))}if(n.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Fr(o))return B;const a=n.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:s.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Fr(o)?Promise.resolve(n.transform(o.value,i)).then(a=>({status:s.value,value:a})):B);et.assertNever(n)}}Je.create=(e,t,s)=>new Je({schema:e,typeName:z.ZodEffects,effect:t,...W(s)});Je.createWithPreprocess=(e,t,s)=>new Je({schema:t,effect:{type:"preprocess",transform:e},typeName:z.ZodEffects,...W(s)});class us extends q{_parse(t){return this._getType(t)===M.undefined?ie(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}us.create=(e,t)=>new us({innerType:e,typeName:z.ZodOptional,...W(t)});class or extends q{_parse(t){return this._getType(t)===M.null?ie(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}or.create=(e,t)=>new or({innerType:e,typeName:z.ZodNullable,...W(t)});class Zi extends q{_parse(t){const{ctx:s}=this._processInputParams(t);let r=s.data;return s.parsedType===M.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:s.path,parent:s})}removeDefault(){return this._def.innerType}}Zi.create=(e,t)=>new Zi({innerType:e,typeName:z.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...W(t)});class Gi extends q{_parse(t){const{ctx:s}=this._processInputParams(t),r={...s,common:{...s.common,issues:[]}},n=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Bi(n)?n.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Se(r.common.issues)},input:r.data})})):{status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new Se(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Gi.create=(e,t)=>new Gi({innerType:e,typeName:z.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...W(t)});class _a extends q{_parse(t){if(this._getType(t)!==M.nan){const r=this._getOrReturnCtx(t);return O(r,{code:E.invalid_type,expected:M.nan,received:r.parsedType}),B}return{status:"valid",value:t.data}}}_a.create=e=>new _a({typeName:z.ZodNaN,...W(e)});const dx=Symbol("zod_brand");class Dh extends q{_parse(t){const{ctx:s}=this._processInputParams(t),r=s.data;return this._def.type._parse({data:r,path:s.path,parent:s})}unwrap(){return this._def.type}}class fo extends q{_parse(t){const{status:s,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?B:i.status==="dirty"?(s.dirty(),an(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const n=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return n.status==="aborted"?B:n.status==="dirty"?(s.dirty(),{status:"dirty",value:n.value}):this._def.out._parseSync({data:n.value,path:r.path,parent:r})}}static create(t,s){return new fo({in:t,out:s,typeName:z.ZodPipeline})}}class Xi extends q{_parse(t){const s=this._def.innerType._parse(t),r=n=>(Fr(n)&&(n.value=Object.freeze(n.value)),n);return Bi(s)?s.then(n=>r(n)):r(s)}unwrap(){return this._def.innerType}}Xi.create=(e,t)=>new Xi({innerType:e,typeName:z.ZodReadonly,...W(t)});function Hd(e,t){const s=typeof e=="function"?e(t):typeof e=="string"?{message:e}:e;return typeof s=="string"?{message:s}:s}function ln(e,t={},s){return e?wn.create().superRefine((r,n)=>{const i=e(r);if(i instanceof Promise)return i.then(o=>{if(!o){const a=Hd(t,r),l=a.fatal??s??!0;n.addIssue({code:"custom",...a,fatal:l})}});if(!i){const o=Hd(t,r),a=o.fatal??s??!0;n.addIssue({code:"custom",...o,fatal:a})}}):wn.create()}const fx={object:_t.lazycreate};var z;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(z||(z={}));const px=(e,t={message:`Input not instance of ${e.name}`})=>ln(s=>s instanceof e,t),me=qe.create,po=rr.create,gx=_a.create,mx=nr.create,Ph=zi.create,bx=jr.create,vx=ba.create,yx=Vi.create,_x=Ui.create,pm=wn.create,gm=Dr.create,wx=Ls.create,xx=va.create,tl=Ge.create,ar=_t.create,kx=_t.strictCreate,Sx=Fi.create,Cx=Qa.create,Ex=ji.create,$x=bs.create,Lh=Hi.create,Tx=ya.create,Ax=Hr.create,na=dn.create,mm=Wi.create,As=Yi.create,Ox=ir.create,Rx=qi.create,Ix=xn.create,Wd=Je.create,Mx=us.create,Dx=or.create,Px=Je.createWithPreprocess,Lx=fo.create,Nx=()=>me().optional(),Bx=()=>po().optional(),zx=()=>Ph().optional(),Vx={string:e=>qe.create({...e,coerce:!0}),number:e=>rr.create({...e,coerce:!0}),boolean:e=>zi.create({...e,coerce:!0}),bigint:e=>nr.create({...e,coerce:!0}),date:e=>jr.create({...e,coerce:!0})},Ux=B,Ws=Object.freeze(Object.defineProperty({__proto__:null,BRAND:dx,DIRTY:an,EMPTY_PATH:Hw,INVALID:B,NEVER:Ux,OK:ie,ParseStatus:Jt,Schema:q,ZodAny:wn,ZodArray:Ge,ZodBigInt:nr,ZodBoolean:zi,ZodBranded:Dh,ZodCatch:Gi,ZodDate:jr,ZodDefault:Zi,ZodDiscriminatedUnion:Qa,ZodEffects:Je,ZodEnum:ir,ZodError:Se,get ZodFirstPartyTypeKind(){return z},ZodFunction:dn,ZodIntersection:ji,ZodIssueCode:E,ZodLazy:Wi,ZodLiteral:Yi,ZodMap:ya,ZodNaN:_a,ZodNativeEnum:qi,ZodNever:Ls,ZodNull:Ui,ZodNullable:or,ZodNumber:rr,ZodObject:_t,ZodOptional:us,ZodParsedType:M,ZodPipeline:fo,ZodPromise:xn,ZodReadonly:Xi,ZodRecord:Hi,ZodSchema:q,ZodSet:Hr,ZodString:qe,ZodSymbol:ba,ZodTransformer:Je,ZodTuple:bs,ZodType:q,ZodUndefined:Vi,ZodUnion:Fi,ZodUnknown:Dr,ZodVoid:va,addIssueToContext:O,any:pm,array:tl,bigint:mx,boolean:Ph,coerce:Vx,custom:ln,date:bx,datetimeRegex:dm,defaultErrorMap:_n,discriminatedUnion:Cx,effect:Wd,enum:Ox,function:na,getErrorMap:ga,getParsedType:Ts,instanceof:px,intersection:Ex,isAborted:Cc,isAsync:Bi,isDirty:Ec,isValid:Fr,late:fx,lazy:mm,literal:As,makeIssue:ma,map:Tx,nan:gx,nativeEnum:Rx,never:wx,null:_x,nullable:Dx,number:po,object:ar,get objectUtil(){return Sc},oboolean:zx,onumber:Bx,optional:Mx,ostring:Nx,pipeline:Lx,preprocess:Px,promise:Ix,quotelessJson:Fw,record:Lh,set:Ax,setErrorMap:jw,strictObject:kx,string:me,symbol:vx,transformer:Wd,tuple:$x,undefined:yx,union:Sx,unknown:gm,get util(){return et},void:xx},Symbol.toStringTag,{value:"Module"})),Fx=ar({bold:As(!0).optional().nullable().catch(void 0),italic:As(!0).optional().nullable().catch(void 0),underline:As(!0).optional().nullable().catch(void 0),strike:As(!0).optional().nullable().catch(void 0),code:As(!0).optional().nullable().catch(void 0),link:me().optional().nullable().catch(void 0)});let zs=class Tc{get deltas$(){return this._deltas$}get length(){return this._length$.value}get yText(){return this._yText}constructor(t){let s=0;if(typeof t=="string"){const r=t.replaceAll(`\r
`,`
`);s=r.length,this._yText=new fe(r)}else if(t instanceof fe)this._yText=t,t.doc&&(s=t.length);else if(t instanceof Array){for(const n of t)n.insert&&(n.insert=n.insert.replaceAll(`\r
`,`
`),s+=n.insert.length);const r=new fe;r.applyDelta(t),this._yText=r}else this._yText=new fe;this._length$=Kt(s),this._deltas$=Kt(this._yText.doc?this._yText.toDelta():[]),this._yText.observe(r=>{var n;const i=!r.transaction.origin||!this._yText.doc||r.transaction.origin instanceof tr||r.transaction.origin.proxy?!0:r.transaction.origin===this._yText.doc.clientID;this._length$.value=this._yText.length,this._deltas$.value=this._yText.toDelta(),(n=this._onChange)==null||n.call(this,this._yText,i)})}_transact(t){const s=this._yText.doc;if(!s)throw new T(R.ReactiveProxyError,"Failed to transact text! yText is not attached to a doc");s.transact(()=>{t()},s.clientID)}applyDelta(t){this._transact(()=>{var s;(s=this._yText)==null||s.applyDelta(t)})}bind(t){this._onChange=t}clear(){this._yText.length&&this._transact(()=>{this._yText.delete(0,this._yText.length)})}clone(){const t=new Tc(this._yText.clone());return t.bind(this._onChange),t}delete(t,s){if(s!==0){if(t<0||s<0||t+s>this._yText.length)throw new T(R.ReactiveProxyError,"Failed to delete text! Index or length out of range, index: "+t+", length: "+s+", text length: "+this._yText.length);this._transact(()=>{this._yText.delete(t,s)})}}format(t,s,r){if(s!==0){if(t<0||s<0||t+s>this._yText.length)throw new T(R.ReactiveProxyError,"Failed to format text! Index or length out of range, index: "+t+", length: "+s+", text length: "+this._yText.length);this._transact(()=>{this._yText.format(t,s,r)})}}insert(t,s,r){if(t.length){if(s<0||s>this._yText.length)throw new T(R.ReactiveProxyError,"Failed to insert text! Index or length out of range, index: "+s+", length: "+t.length+", text length: "+this._yText.length);this._transact(()=>{this._yText.insert(s,t,r)})}}join(t){!t||!t.toDelta().length||this._transact(()=>{const r=t._yText.toDelta();r.unshift({retain:this._yText.length}),this._yText.applyDelta(r)})}replace(t,s,r,n){if(t<0||s<0||t+s>this._yText.length)throw new T(R.ReactiveProxyError,"Failed to replace text! The length of the text is"+this._yText.length+", but you are trying to replace from"+t+"to"+t+s);this._transact(()=>{this._yText.delete(t,s),this._yText.insert(t,r,n)})}sliceToDelta(t,s){const r=[];if(s&&t>=s)return r;if(t===0&&s===0)return[];const n=this.toDelta();if(t<1&&!s)return n;if(n&&n instanceof Array){let i=0;for(let o=0;o<n.length;o++){const a=n[o];let l=a.insert||"";const c=l.length,h=s&&i+c>s,u=i+c>t&&r.length===0;if(u&&h){l=l.slice(t-i,s-i),r.push({...a,insert:l});break}else u||h?(l=h?l.slice(0,s-i):l.slice(t-i),r.push({...a,insert:l})):r.length>0&&r.push(a);if(s&&i+c>s)break;i=i+c}}return r}split(t,s=0){if(t<0||s<0||t+s>this._yText.length)throw new T(R.ReactiveProxyError,"Failed to split text! Index or length out of range, index: "+t+", length: "+s+", text length: "+this._yText.length);const r=this._yText.toDelta();if(!(r instanceof Array))throw new T(R.ReactiveProxyError,"This text cannot be split because we failed to get the deltas of it.");let n=0;const i=[];for(let l=0;l<r.length;l++){const c=r[l].insert;if(typeof c=="string"){if(n+c.length>=t+s){const h=c.slice(t+s-n);i.push({insert:h,attributes:r[l].attributes}),i.push(...r.slice(l+1));break}n+=c.length}else throw new T(R.ReactiveProxyError,"This text cannot be split because it contains non-string insert.")}this.delete(t,this.length-t);const o=new fe;o.applyDelta(i);const a=new Tc(o);return a.bind(this._onChange),a}toDelta(){var t;return((t=this._yText)==null?void 0:t.toDelta())||[]}toString(){var t;return((t=this._yText)==null?void 0:t.toString())||""}};function Ne(e,{deep:t=!0,transform:s=r=>r}={}){if(e instanceof Ve)return s(e.yMap,e);if(e instanceof zs)return e.yText.doc?s(e.yText.clone(),e):s(e.yText,e);if(Array.isArray(e)){const r=new Pt,n=e.map(i=>t?Ne(i,{deep:t,transform:s}):i);return r.insert(0,n),s(r,e)}if(en(e)){const r=new Vt;return Object.entries(e).forEach(([n,i])=>{r.set(n,t?Ne(i,{deep:t,transform:s}):i)}),s(r,e)}return s(e,e)}function Pr(e,{deep:t=!0,transform:s=r=>r}={}){if(Ve.is(e)){const r=new Ve(e);return s(r,e)}if(e instanceof fe){const r=new zs(e);return s(r,e)}if(e instanceof Pt){const r=e.toArray().map(n=>t?Pr(n,{deep:t,transform:s}):n);return s(r,e)}if(e instanceof Vt){const r=Object.fromEntries(Array.from(e.entries()).map(([n,i])=>[n,t?Pr(i,{deep:t,transform:s}):i]));return s(r,e)}return s(e,e)}class bm extends Mh{constructor(t,s,r){super(),this._source=t,this._ySource=s,this._options=r,this._observer=n=>{this._onObserve(n,()=>{let i=0;n.changes.delta.forEach(o=>{if(o.retain){i+=o.retain;return}if(o.delete){this._updateWithSkip(()=>{this._source.splice(i,o.delete)});return}if(o.insert){const l=[o.insert].flat().map(c=>Cr(c));this._updateWithSkip(()=>{this._source.splice(i,0,...l)}),i+=o.insert.length}})})},this._getProxy=()=>new Proxy(this._source,{has:(n,i)=>Reflect.has(n,i),set:(n,i,o,a)=>{var l,c;if(typeof i!="string")throw new T(R.ReactiveProxyError,"key cannot be a symbol");const h=Number(i);if(this._skipNext||Number.isNaN(h))return Reflect.set(n,i,o,a);if(this._stashed.has(h)){const b=Reflect.set(n,i,o,a);return(c=(l=this._options).onChange)==null||c.call(l,this._proxy,!0),b}if(!ls.get(this._ySource))throw new T(R.ReactiveProxyError,"YData is not subscribed before changes");const d=this._ySource.doc;if(!d)throw new T(R.ReactiveProxyError,"YData is not bound to a Y.Doc");const f=Ne(o);this._transact(d,()=>{h<this._ySource.length&&this._ySource.delete(h,1),this._ySource.insert(h,[f])});const p=Cr(f,this._options);return Reflect.set(n,i,p,a)},get:(n,i,o)=>i==="splice"?(a,l,...c)=>{const h=this._ySource.doc;if(!h)throw new T(R.ReactiveProxyError,"YData is not bound to a Y.Doc");const u=l??n.length-a,d=c.map(p=>Ne(p));return this._transact(h,()=>{this._ySource.delete(a,u),this._ySource.insert(a,d)}),Array.prototype.splice.apply(n,[a,u,...d.map(p=>Cr(p,this._options))])}:i==="shift"?()=>{const a=this._ySource.doc;if(!a)throw new T(R.ReactiveProxyError,"YData is not bound to a Y.Doc");if(n.length===0)return;const l=Array.prototype.shift.call(n);return this._transact(a,()=>{this._ySource.delete(0,1)}),l}:i==="unshift"?(...a)=>{const l=this._ySource.doc;if(!l)throw new T(R.ReactiveProxyError,"YData is not bound to a Y.Doc");const c=a.map(h=>Ne(h));return this._transact(l,()=>{this._ySource.insert(0,c)}),Array.prototype.unshift.apply(n,c.map(h=>Cr(h,this._options)))}:Reflect.get(n,i,o),deleteProperty:(n,i)=>{if(typeof i!="string")throw new T(R.ReactiveProxyError,"key cannot be a symbol");if(!ls.get(this._ySource))throw new T(R.ReactiveProxyError,"YData is not subscribed before changes");const a=this._ySource.doc;if(!a)throw new T(R.ReactiveProxyError,"YData is not bound to a Y.Doc");const l=Number(i);return this._skipNext||Number.isNaN(l)||this._transact(a,()=>{this._ySource.delete(l,1)}),Reflect.deleteProperty(n,i)}}),this._proxy=this._getProxy(),ls.set(s,this),s.observe(this._observer)}pop(t){const s=this._source[t];this._stashed.delete(t),this._proxy[t]=s}stash(t){this._stashed.add(t)}}class jx extends Mh{constructor(t,s,r){super(),this._source=t,this._ySource=s,this._options=r,this._observer=n=>{this._onObserve(n,()=>{n.keysChanged.forEach(i=>{const o=n.changes.keys.get(i);if(o){if(o.action==="delete")this._updateWithSkip(()=>{delete this._source[i]});else if(o.action==="add"||o.action==="update"){const a=this._ySource.get(i);this._updateWithSkip(()=>{this._source[i]=ls.has(a)?ls.get(a):Cr(a,this._options)})}}})})},this._getProxy=()=>new Proxy(this._source,{has:(n,i)=>Reflect.has(n,i),set:(n,i,o,a)=>{var l,c;if(typeof i!="string")throw new T(R.ReactiveProxyError,"key cannot be a symbol");if(this._skipNext)return Reflect.set(n,i,o,a);if(this._stashed.has(i)){const p=Reflect.set(n,i,o,a);return(c=(l=this._options).onChange)==null||c.call(l,this._proxy,!0),p}if(!ls.get(this._ySource))throw new T(R.ReactiveProxyError,"YData is not subscribed before changes");const u=this._ySource.doc;if(!u)throw new T(R.ReactiveProxyError,"YData is not bound to a Y.Doc");const d=Ne(o);this._transact(u,()=>{this._ySource.set(i,d)});const f=Cr(d,this._options);return Reflect.set(n,i,f,a)},get:(n,i,o)=>Reflect.get(n,i,o),deleteProperty:(n,i)=>{if(typeof i!="string")throw new T(R.ReactiveProxyError,"key cannot be a symbol");if(this._skipNext)return Reflect.deleteProperty(n,i);if(!ls.get(this._ySource))throw new T(R.ReactiveProxyError,"YData is not subscribed before changes");const a=this._ySource.doc;if(!a)throw new T(R.ReactiveProxyError,"YData is not bound to a Y.Doc");return this._transact(a,()=>{this._ySource.delete(i)}),Reflect.deleteProperty(n,i)}}),this._proxy=this._getProxy(),ls.set(s,this),s.observe(this._observer)}pop(t){const s=this._source[t];this._stashed.delete(t),this._proxy[t]=s}stash(t){this._stashed.add(t)}}function Cr(e,t={}){return ls.has(e)?ls.get(e).proxy:Pr(e,{transform:(r,n)=>r instanceof zs||Ve.is(n)?(r.bind(t.onChange),r):n instanceof Pt?new bm(r,n,t).proxy:n instanceof Vt?new jx(r,n,t).proxy:r})}const go=e=>e.replace(/(prop|sys):/,""),Ac=e=>lm.has(e)?`sys:${e}`:`prop:${e}`,vm=Symbol("proxy");function ym(e){return vm in Object.getPrototypeOf(e)}function Hx(e){return Object.setPrototypeOf(e,{[vm]:!0}),e}function _m(e){return Object.keys(e).length===0}function Wx(e,t,s){_m(e)&&delete s[t]}function Wr(e){const t=e.split(".").at(0);if(!t)throw new Error(`Invalid key for: ${e}`);return t}function wm(e,t){(e instanceof zs||Ve.is(e))&&e.bind(t)}const Yx=({getProxy:e,transform:t,yMap:s})=>{const r={};return Array.from(s.entries()).forEach(([n,i])=>{if(n.startsWith("sys"))return;const o=go(n).split("."),a=o[0];let l=i;if(Ve.is(i))l=t(a,new Ve(i),i);else if(i instanceof Pt)l=t(a,i.toArray(),i);else if(i instanceof fe){const h=new zs(i);l=t(a,h,i)}else{if(i instanceof Vt)throw new T(T.ErrorCode.ReactiveProxyError,"flatY2Native does not support Y.Map as value of Y.Map");l=t(a,i,i)}const c=o.length;o.reduce((h,u,d)=>{if(!h[u]&&d!==c-1){const f=o.slice(0,d+1).join("."),p=e({},r,f);h[u]=p}return d===c-1&&(h[u]=l),h[u]},r)}),r};function qx({root:e,firstKey:t,shouldByPassSignal:s,byPassSignalUpdate:r,onChange:n,basePath:i,value:o,handleNestedUpdate:a,shouldByPassYjs:l}){const c=!i;if(s())return;const h=`${t}$`;if(!(h in e)){if(!c)return;a(h);return}r(()=>{const u=e[t],d=c?o:en(u)?{...u}:Array.isArray(u)?[...u]:u;e[h].value=d,l()||n?.(t,!0)})}function Zx({shouldByPassYjs:e,yMap:t,initialized:s,onChange:r,fullPath:n,value:i}){var o;const a=Wr(n);if(e())return;const l=[];t.forEach((h,u)=>{s()&&go(u).startsWith(n)&&t.delete(u)});const c=(h,u)=>{Object.entries(h).forEach(([d,f])=>{const p=u?`${u}.${d}`:d;en(f)?c(f,p):l.push(()=>{wm(f,()=>{r?.(a,!0)}),t.set(Ac(p),Ne(f))})})};c(i,n),l.length&&s()&&((o=t.doc)==null||o.transact(()=>{l.forEach(h=>h())},{proxy:!0}))}function Nh(e){const{base:t}=e;if(ym(t))return t;Gx(e);const s=Xx(e),r=new Proxy(t,s);return Hx(r),r}function Gx(e){const{basePath:t,yMap:s,base:r,root:n}=e;Object.entries(r).forEach(([i,o])=>{if(en(o)&&!ym(o)){const a=Nh({...e,yMap:s,base:o,root:n,basePath:t?`${t}.${i}`:i});r[i]=a}})}function Nl(e,t,s,r){const{root:n,shouldByPassSignal:i,byPassSignalUpdate:o,onChange:a,basePath:l,initialized:c,onDispose:h,shouldByPassYjs:u}=r,d=l?`${l}.${t}`:t,f=Wr(d);qx({root:n,firstKey:f,shouldByPassSignal:i,shouldByPassYjs:u,byPassSignalUpdate:o,onChange:a,basePath:l,value:e,handleNestedUpdate:p=>{if(e===void 0){delete n[p];return}const b=Kt(e);n[p]=b;const v=b.subscribe(w=>{c()&&o(()=>{s[t]=w,a?.(f,!0)})}),x=h.subscribe(()=>{x.unsubscribe(),v()})}})}function Xx(e){const{yMap:t,shouldByPassYjs:s,basePath:r,onChange:n,initialized:i,transform:o,stashed:a}=e;return{has:(l,c)=>Reflect.has(l,c),get:(l,c,h)=>Reflect.get(l,c,h),set:(l,c,h,u)=>{var d;if(typeof c=="string"){const f=r?`${r}.${c}`:c,p=Wr(f),b=a.has(p);if(en(h)){b||Zx({shouldByPassYjs:s,yMap:t,initialized:i,onChange:n,fullPath:f,value:h});const k=Nh({...e,basePath:f,base:h}),A=Reflect.set(l,c,k,u);return Nl(k,c,u,e),A}wm(h,()=>{n?.(p,!0)});const v=Ne(h),x=o(p,h,v);!b&&i()&&!s()&&((d=t.doc)==null||d.transact(()=>{t.set(Ac(f),v)},{proxy:!0}));const w=Reflect.set(l,c,x,u);return Nl(x,c,u,e),w}return Reflect.set(l,c,h,u)},deleteProperty:(l,c)=>{var h;if(typeof c=="string"){const u=r?`${r}.${c}`:c,d=Wr(u);!a.has(d)&&i()&&!s()&&((h=t.doc)==null||h.transact(()=>{const b=Ac(u);t.forEach((v,x)=>{x.startsWith(b)&&t.delete(x)})},{proxy:!0}));const p=Reflect.deleteProperty(l,c);return Nl(void 0,c,void 0,e),p}return Reflect.deleteProperty(l,c)}}}const Kx=e=>{const{event:t}=e,{keysChanged:s,changes:r}=t;s.forEach(n=>{const i=r.keys.get(n);if(i){if(i.action==="update"||i.action==="add")return Jx(n,e);if(i.action==="delete")return Qx(n,e)}})};function xm(e,t){const s=go(e),r=Wr(s);return t.has(r)}function Jx(e,{yMap:t,proxy:s,stashed:r,updateWithYjsSkip:n,transform:i,onChange:o}){if(xm(e,r))return;const a=go(e),l=Wr(a);n(()=>{const c=t.get(e);a.split(".").reduce((u,d,f,p)=>(!u[d]&&f!==p.length-1&&(u[d]={}),f===p.length-1&&(u[d]=Pr(c,{transform:(b,v)=>i(l,b,v)})),u[d]),s)}),o?.(l,!1)}function Qx(e,{proxy:t,stashed:s,updateWithYjsSkip:r,onChange:n}){if(xm(e,s))return;const i=go(e),o=Wr(i);r(()=>{const a=i.split(".");a.reduce((l,c,h)=>{if(h===a.length-1){delete l[c];let u=l,d=a[h-1],f=t,p=a.slice(0,-2);for(let b=a.length-2;b>0;b--){for(const v of p)f=f[v];if(!_m(u))break;Wx(u,d,f),u=f,d=a[b-1],p=p.slice(0,-1),f=t}}return l[c]},t)}),n?.(o,!1)}class tk extends Mh{constructor(t,s,r){super(),this._ySource=t,this._onDispose=s,this._onChange=r,this._observer=o=>{const a=this._ySource,l=this._proxy;this._onObserve(o,()=>{Kx({yMap:a,proxy:l,stashed:this._stashed,updateWithYjsSkip:this._updateWithYjsSkip,transform:this._transform,onChange:this._onChange,event:o})})},this._transform=(o,a,l)=>{const c=this._getPropOnChange(o);return a instanceof zs||Ve.is(l)?(a.bind(c),a):l instanceof Pt?new bm(a,l,{onChange:c}).proxy:a},this._getPropOnChange=o=>(a,l)=>{var c;(c=this._onChange)==null||c.call(this,o,l)},this._byPassYjs=!1,this._getProxy=(o,a,l)=>Nh({yMap:this._ySource,base:o,root:a,onDispose:this._onDispose,shouldByPassSignal:()=>this._skipNext,byPassSignalUpdate:this._updateWithSkip,shouldByPassYjs:()=>this._byPassYjs,basePath:l,onChange:this._onChange,transform:this._transform,stashed:this._stashed,initialized:()=>this._initialized}),this._updateWithYjsSkip=o=>{this._byPassYjs=!0,o(),this._byPassYjs=!1},this.pop=o=>{const a=this._source[o];this._stashed.delete(o),this._proxy[o]=a},this.stash=o=>{this._stashed.add(o)},this._initialized=!1;const n=Yx({getProxy:this._getProxy,transform:this._transform,yMap:this._ySource});this._source=n;const i=this._getProxy(n,n);Object.entries(n).forEach(([o,a])=>{const l=Kt(a);n[`${o}$`]=l;const c=l.subscribe(u=>{this._initialized&&this._updateWithSkip(()=>{var d;i[o]=u,(d=this._onChange)==null||d.call(this,o,!0)})}),h=s.subscribe(()=>{h.unsubscribe(),c()})}),this._proxy=i,this._ySource.observe(this._observer),this._initialized=!0}}var Oc=function(e,t){return Oc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,r){s.__proto__=r}||function(s,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])},Oc(e,t)};function Vs(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Oc(e,t);function s(){this.constructor=e}e.prototype=t===null?Object.create(t):(s.prototype=t.prototype,new s)}function KA(e,t,s,r){function n(i){return i instanceof s?i:new s(function(o){o(i)})}return new(s||(s=Promise))(function(i,o){function a(h){try{c(r.next(h))}catch(u){o(u)}}function l(h){try{c(r.throw(h))}catch(u){o(u)}}function c(h){h.done?i(h.value):n(h.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function JA(e,t){var s={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(h){return l([c,h])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(s=0)),s;)try{if(r=1,n&&(i=c[0]&2?n.return:c[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;switch(n=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,n=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){s=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){s.label=c[1];break}if(c[0]===6&&s.label<i[1]){s.label=i[1],i=c;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(c);break}i[2]&&s.ops.pop(),s.trys.pop();continue}c=t.call(e,s)}catch(h){c=[6,h],n=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Ki(e){var t=typeof Symbol=="function"&&Symbol.iterator,s=t&&e[t],r=0;if(s)return s.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function wa(e,t){var s=typeof Symbol=="function"&&e[Symbol.iterator];if(!s)return e;var r=s.call(e),n,i=[],o;try{for(;(t===void 0||t-- >0)&&!(n=r.next()).done;)i.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(s=r.return)&&s.call(r)}finally{if(o)throw o.error}}return i}function xa(e,t,s){if(s||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Rc(e){return this instanceof Rc?(this.v=e,this):new Rc(e)}function QA(e,t,s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=s.apply(e,t||[]),n,i=[];return n=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),n[Symbol.asyncIterator]=function(){return this},n;function o(f){return function(p){return Promise.resolve(p).then(f,u)}}function a(f,p){r[f]&&(n[f]=function(b){return new Promise(function(v,x){i.push([f,b,v,x])>1||l(f,b)})},p&&(n[f]=p(n[f])))}function l(f,p){try{c(r[f](p))}catch(b){d(i[0][3],b)}}function c(f){f.value instanceof Rc?Promise.resolve(f.value.v).then(h,u):d(i[0][2],f)}function h(f){l("next",f)}function u(f){l("throw",f)}function d(f,p){f(p),i.shift(),i.length&&l(i[0][0],i[0][1])}}function tO(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],s;return t?t.call(e):(e=typeof Ki=="function"?Ki(e):e[Symbol.iterator](),s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s);function r(i){s[i]=e[i]&&function(o){return new Promise(function(a,l){o=e[i](o),n(a,l,o.done,o.value)})}}function n(i,o,a,l){Promise.resolve(l).then(function(c){i({value:c,done:a})},o)}}function ds(e){return typeof e=="function"}function km(e){var t=function(r){Error.call(r),r.stack=new Error().stack},s=e(t);return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s}var Bl=km(function(e){return function(s){e(this),this.message=s?s.length+` errors occurred during unsubscription:
`+s.map(function(r,n){return n+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=s}});function ka(e,t){if(e){var s=e.indexOf(t);0<=s&&e.splice(s,1)}}var Bn=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,s,r,n,i;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Ki(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(b){t={error:b}}finally{try{l&&!l.done&&(s=a.return)&&s.call(a)}finally{if(t)throw t.error}}else o.remove(this);var h=this.initialTeardown;if(ds(h))try{h()}catch(b){i=b instanceof Bl?b.errors:[b]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var d=Ki(u),f=d.next();!f.done;f=d.next()){var p=f.value;try{Yd(p)}catch(b){i=i??[],b instanceof Bl?i=xa(xa([],wa(i)),wa(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{f&&!f.done&&(n=d.return)&&n.call(d)}finally{if(r)throw r.error}}}if(i)throw new Bl(i)}},e.prototype.add=function(t){var s;if(t&&t!==this)if(this.closed)Yd(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(s=this._finalizers)!==null&&s!==void 0?s:[]).push(t)}},e.prototype._hasParent=function(t){var s=this._parentage;return s===t||Array.isArray(s)&&s.includes(t)},e.prototype._addParent=function(t){var s=this._parentage;this._parentage=Array.isArray(s)?(s.push(t),s):s?[s,t]:t},e.prototype._removeParent=function(t){var s=this._parentage;s===t?this._parentage=null:Array.isArray(s)&&ka(s,t)},e.prototype.remove=function(t){var s=this._finalizers;s&&ka(s,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),Sm=Bn.EMPTY;function Cm(e){return e instanceof Bn||e&&"closed"in e&&ds(e.remove)&&ds(e.add)&&ds(e.unsubscribe)}function Yd(e){ds(e)?e():e.unsubscribe()}var ek={Promise:void 0},sk={setTimeout:function(e,t){for(var s=[],r=2;r<arguments.length;r++)s[r-2]=arguments[r];return setTimeout.apply(void 0,xa([e,t],wa(s)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function rk(e){sk.setTimeout(function(){throw e})}function qd(){}function ia(e){e()}var Bh=function(e){Vs(t,e);function t(s){var r=e.call(this)||this;return r.isStopped=!1,s?(r.destination=s,Cm(s)&&s.add(r)):r.destination=ok,r}return t.create=function(s,r,n){return new Ic(s,r,n)},t.prototype.next=function(s){this.isStopped||this._next(s)},t.prototype.error=function(s){this.isStopped||(this.isStopped=!0,this._error(s))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(s){this.destination.next(s)},t.prototype._error=function(s){try{this.destination.error(s)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(Bn),nk=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var s=this.partialObserver;if(s.next)try{s.next(t)}catch(r){zo(r)}},e.prototype.error=function(t){var s=this.partialObserver;if(s.error)try{s.error(t)}catch(r){zo(r)}else zo(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(s){zo(s)}},e}(),Ic=function(e){Vs(t,e);function t(s,r,n){var i=e.call(this)||this,o;return ds(s)||!s?o={next:s??void 0,error:r??void 0,complete:n??void 0}:o=s,i.destination=new nk(o),i}return t}(Bh);function zo(e){rk(e)}function ik(e){throw e}var ok={closed:!0,next:qd,error:ik,complete:qd},ak=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function lk(e){return e}function ck(e){return e.length===0?lk:e.length===1?e[0]:function(s){return e.reduce(function(r,n){return n(r)},s)}}var Mc=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var s=new e;return s.source=this,s.operator=t,s},e.prototype.subscribe=function(t,s,r){var n=this,i=uk(t)?t:new Ic(t,s,r);return ia(function(){var o=n,a=o.operator,l=o.source;i.add(a?a.call(i,l):l?n._subscribe(i):n._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(s){t.error(s)}},e.prototype.forEach=function(t,s){var r=this;return s=Zd(s),new s(function(n,i){var o=new Ic({next:function(a){try{t(a)}catch(l){i(l),o.unsubscribe()}},error:i,complete:n});r.subscribe(o)})},e.prototype._subscribe=function(t){var s;return(s=this.source)===null||s===void 0?void 0:s.subscribe(t)},e.prototype[ak]=function(){return this},e.prototype.pipe=function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];return ck(t)(this)},e.prototype.toPromise=function(t){var s=this;return t=Zd(t),new t(function(r,n){var i;s.subscribe(function(o){return i=o},function(o){return n(o)},function(){return r(i)})})},e.create=function(t){return new e(t)},e}();function Zd(e){var t;return(t=e??ek.Promise)!==null&&t!==void 0?t:Promise}function hk(e){return e&&ds(e.next)&&ds(e.error)&&ds(e.complete)}function uk(e){return e&&e instanceof Bh||hk(e)&&Cm(e)}function dk(e){return ds(e?.lift)}function Em(e){return function(t){if(dk(t))return t.lift(function(s){try{return e(s,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function $m(e,t,s,r,n){return new fk(e,t,s,r,n)}var fk=function(e){Vs(t,e);function t(s,r,n,i,o,a){var l=e.call(this,s)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(c){try{r(c)}catch(h){s.error(h)}}:e.prototype._next,l._error=i?function(c){try{i(c)}catch(h){s.error(h)}finally{this.unsubscribe()}}:e.prototype._error,l._complete=n?function(){try{n()}catch(c){s.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,l}return t.prototype.unsubscribe=function(){var s;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((s=this.onFinalize)===null||s===void 0||s.call(this))}},t}(Bh),pk=km(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),at=function(e){Vs(t,e);function t(){var s=e.call(this)||this;return s.closed=!1,s.currentObservers=null,s.observers=[],s.isStopped=!1,s.hasError=!1,s.thrownError=null,s}return t.prototype.lift=function(s){var r=new Gd(this,this);return r.operator=s,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new pk},t.prototype.next=function(s){var r=this;ia(function(){var n,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Ki(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(s)}}catch(c){n={error:c}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}}})},t.prototype.error=function(s){var r=this;ia(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=s;for(var n=r.observers;n.length;)n.shift().error(s)}})},t.prototype.complete=function(){var s=this;ia(function(){if(s._throwIfClosed(),!s.isStopped){s.isStopped=!0;for(var r=s.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var s;return((s=this.observers)===null||s===void 0?void 0:s.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(s){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,s)},t.prototype._subscribe=function(s){return this._throwIfClosed(),this._checkFinalizedStatuses(s),this._innerSubscribe(s)},t.prototype._innerSubscribe=function(s){var r=this,n=this,i=n.hasError,o=n.isStopped,a=n.observers;return i||o?Sm:(this.currentObservers=null,a.push(s),new Bn(function(){r.currentObservers=null,ka(a,s)}))},t.prototype._checkFinalizedStatuses=function(s){var r=this,n=r.hasError,i=r.thrownError,o=r.isStopped;n?s.error(i):o&&s.complete()},t.prototype.asObservable=function(){var s=new Mc;return s.source=this,s},t.create=function(s,r){return new Gd(s,r)},t}(Mc),Gd=function(e){Vs(t,e);function t(s,r){var n=e.call(this)||this;return n.destination=s,n.source=r,n}return t.prototype.next=function(s){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.next)===null||n===void 0||n.call(r,s)},t.prototype.error=function(s){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.error)===null||n===void 0||n.call(r,s)},t.prototype.complete=function(){var s,r;(r=(s=this.destination)===null||s===void 0?void 0:s.complete)===null||r===void 0||r.call(s)},t.prototype._subscribe=function(s){var r,n;return(n=(r=this.source)===null||r===void 0?void 0:r.subscribe(s))!==null&&n!==void 0?n:Sm},t}(at),Xd=function(e){Vs(t,e);function t(s){var r=e.call(this)||this;return r._value=s,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(s){var r=e.prototype._subscribe.call(this,s);return!r.closed&&s.next(this._value),r},t.prototype.getValue=function(){var s=this,r=s.hasError,n=s.thrownError,i=s._value;if(r)throw n;return this._throwIfClosed(),i},t.prototype.next=function(s){e.prototype.next.call(this,this._value=s)},t}(at),Tm={now:function(){return(Tm.delegate||Date).now()},delegate:void 0},gk=function(e){Vs(t,e);function t(s,r){return e.call(this)||this}return t.prototype.schedule=function(s,r){return this},t}(Bn),Kd={setInterval:function(e,t){for(var s=[],r=2;r<arguments.length;r++)s[r-2]=arguments[r];return setInterval.apply(void 0,xa([e,t],wa(s)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},mk=function(e){Vs(t,e);function t(s,r){var n=e.call(this,s,r)||this;return n.scheduler=s,n.work=r,n.pending=!1,n}return t.prototype.schedule=function(s,r){var n;if(r===void 0&&(r=0),this.closed)return this;this.state=s;var i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,r)),this.pending=!0,this.delay=r,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(o,this.id,r),this},t.prototype.requestAsyncId=function(s,r,n){return n===void 0&&(n=0),Kd.setInterval(s.flush.bind(s,this),n)},t.prototype.recycleAsyncId=function(s,r,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return r;r!=null&&Kd.clearInterval(r)},t.prototype.execute=function(s,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(s,r);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(s,r){var n=!1,i;try{this.work(s)}catch(o){n=!0,i=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i},t.prototype.unsubscribe=function(){if(!this.closed){var s=this,r=s.id,n=s.scheduler,i=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,ka(i,this),r!=null&&(this.id=this.recycleAsyncId(n,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(gk),Jd=function(){function e(t,s){s===void 0&&(s=e.now),this.schedulerActionCtor=t,this.now=s}return e.prototype.schedule=function(t,s,r){return s===void 0&&(s=0),new this.schedulerActionCtor(this,t).schedule(r,s)},e.now=Tm.now,e}(),bk=function(e){Vs(t,e);function t(s,r){r===void 0&&(r=Jd.now);var n=e.call(this,s,r)||this;return n.actions=[],n._active=!1,n}return t.prototype.flush=function(s){var r=this.actions;if(this._active){r.push(s);return}var n;this._active=!0;do if(n=s.execute(s.state,s.delay))break;while(s=r.shift());if(this._active=!1,n){for(;s=r.shift();)s.unsubscribe();throw n}},t}(Jd),Am=new bk(mk),eO=Am,vk=new Mc(function(e){return e.complete()});function yk(e,t){return t===void 0&&(t=Am),Em(function(s,r){var n=null,i=null,o=null,a=function(){if(n){n.unsubscribe(),n=null;var c=i;i=null,r.next(c)}};function l(){var c=o+e,h=t.now();if(h<c){n=this.schedule(void 0,c-h),r.add(n);return}a()}s.subscribe($m(r,function(c){i=c,o=t.now(),n||(n=t.schedule(l,e),r.add(n))},function(){a(),r.complete()},void 0,function(){i=n=null}))})}function Qd(e){return e<=0?function(){return vk}:Em(function(t,s){var r=0;t.subscribe($m(s,function(n){++r<=e&&(s.next(n),e<=r&&s.complete())}))})}var tf;const _k=Symbol("model_label");class lr{constructor(){this._children=Kt([]),this._childModels=Ur(()=>{const t=[];return this._children.value.forEach(s=>{const r=this._store.getBlock$(s);r&&t.push(r.model)}),t}),this.childMap=Ur(()=>this._children.value.reduce((t,s,r)=>(t.set(s,r),t),new Map)),this.created=new at,this.deleted=new at,this[tf]="type_info_label",this.propsUpdated=new at,this._onCreated={dispose:this.created.pipe(Qd(1)).subscribe(()=>{this._children.value=this.yBlock.get("sys:children").toArray(),this.yBlock.get("sys:children").observe(t=>{this._children.value=t.target.toArray()}),this.yBlock.observe(t=>{t.keysChanged.has("sys:children")&&(this._children.value=this.yBlock.get("sys:children").toArray())})}).unsubscribe},this._onDeleted={dispose:this.deleted.pipe(Qd(1)).subscribe(()=>{this._onCreated.dispose()}).unsubscribe}}isEmpty(){return this.children.length===0}get text(){return this.props.text}set text(t){this.keys.includes("text")&&(this.props.text=t)}get props(){if(!this._props)throw new Error("props is only supported in flat data model");return this._props}get flavour(){return this.schema.model.flavour}get version(){return this.schema.version}get children(){return this._childModels.value}get store(){return this._store}set store(t){this._store=t}get parent(){return this.store.getParent(this)}get role(){return this.schema.model.role}dispose(){this.created.complete(),this.deleted.complete(),this.propsUpdated.complete()}firstChild(){return this.children[0]||null}lastChild(){return this.children.length?this.children[this.children.length-1].lastChild():this}[(tf=_k,Symbol.dispose)](){this._onCreated.dispose(),this._onDeleted.dispose()}}const wk=me(),xk=tl(me()).optional(),kk=tl(me()).optional(),Sk=me(),kn=Object.freeze({Text:(e="")=>new zs(e),Boxed:e=>new Ve(e)}),Om=ar({version:po(),model:ar({role:Sk,flavour:wk,parent:xk,children:kk,isFlatData:Ph().optional(),props:na().args(ln()).returns(Lh(pm())).optional(),toModel:na().args().returns(ln()).optional()}),transformer:na().args(ln()).returns(ln()).optional()});function sO({flavour:e,props:t,metadata:s,toModel:r,transformer:n}){const i={version:s.version,model:{role:s.role,parent:s.parent,children:s.children,flavour:e,props:t,toModel:r,isFlatData:s.isFlatData},transformer:n};return Om.parse(i),i}class Ck{constructor(t,s,r,n){this.schema=t,this.yBlock=s,this.doc=r,this.onChange=n;const{id:i,flavour:o,version:a,yChildren:l,props:c}=this._parseYBlock();this.id=i,this.flavour=o,this.yChildren=l,this.version=a,this.model=this._createModel(c)}_createModel(t){var s,r,n,i,o;const a=this.schema.flavourSchemaMap.get(this.flavour);if(!a)throw new T(R.ModelCRUDError,`schema for flavour: ${this.flavour} not found`);const l=(n=(r=(s=a.model).toModel)==null?void 0:r.call(s))!=null?n:new lr;l.schema=a,l.id=this.id,l.keys=Array.from(t),l.yBlock=this.yBlock;const c=new tk(this.yBlock,l.deleted,this.onChange);this._reactive=c;const h=c.proxy;l._props=h,l.stash=this.stash,l.pop=this.pop,this.doc&&(l.store=this.doc);const u=(o=(i=a.model).props)==null?void 0:o.call(i,kn);return u&&Object.entries(u).forEach(([d,f])=>{d in h||f!==void 0&&(h[d]=f)}),l}_parseYBlock(){var t,s;let r,n,i,o;const a=new Set;if(this.yBlock.forEach((h,u)=>{if(u==="sys:id"&&typeof h=="string"){r=h;return}if(u==="sys:flavour"&&typeof h=="string"){n=h;return}if(u==="sys:children"&&h instanceof Pt){o=h;return}if(u==="sys:version"&&typeof h=="number"){i=h;return}if(u.startsWith("prop:")){const p=u.replace("prop:","").split(".")[0];a.add(p);return}}),!r)throw new T(R.ModelCRUDError,"block id is not found when creating model");if(!n)throw new T(R.ModelCRUDError,"block flavour is not found when creating model");if(!o)throw new T(R.ModelCRUDError,"block children is not found when creating model");const l=this.schema.flavourSchemaMap.get(n);if(!l)throw new T(R.ModelCRUDError,`schema for flavour: ${n} not found`);typeof i!="number"&&(i=l.version);const c=(s=(t=l.model).props)==null?void 0:s.call(t,kn);return c&&Object.keys(c).forEach(h=>{a.has(h)||a.add(h)}),{id:r,flavour:n,version:i,props:a,yChildren:o}}get stash(){return this._reactive.stash}get pop(){return this._reactive.pop}}const Ek=()=>{let e=!0;return(t,s)=>{if(e){e=!1;try{t()}finally{e=!0}}else s!==void 0&&s()}};class $k{constructor(t,s,r,n){this.schema=t,this.yBlock=s,this.doc=r,this.onChange=n,this._byPassProxy=!1,this._byPassUpdate=h=>{this._byPassProxy=!0,h(),this._byPassProxy=!1},this._mutex=Ek(),this._observeYBlockChanges=()=>{this.yBlock.observe(h=>{h.keysChanged.forEach(u=>{var d,f;const p=h.changes.keys.get(u);if(!p)return;const b=!this.yBlock.doc||!h.transaction.origin||h.transaction.origin instanceof tr||h.transaction.origin.proxy?!0:h.transaction.origin===this.yBlock.doc.clientID;if(p.action==="update"||p.action==="add"){const v=this.yBlock.get(u),x=u.replace("prop:",""),w=this._getPropsProxy(x,v);this._byPassUpdate(()=>{this.model.props[x]=w;const S=`${x}$`;this._mutex(()=>{S in this.model.props&&(this.model.props[S].value=Pr(v))})}),(d=this.onChange)==null||d.call(this,x,b);return}if(p.action==="delete"){const v=u.replace("prop:","");this._byPassUpdate(()=>{delete this.model.props[v],`${v}$`in this.model.props&&(this.model.props[`${v}$`].value=void 0)}),(f=this.onChange)==null||f.call(this,v,b);return}})})},this._stashed=new Set,this.pop=h=>{this._stashed.has(h)&&this._popProp(h)},this.stash=h=>{this._stashed.has(h)||(this._stashed.add(h),this._stashProp(h))};const{id:i,flavour:o,version:a,yChildren:l,props:c}=this._parseYBlock();this.id=i,this.flavour=o,this.yChildren=l,this.version=a,this.model=this._createModel(c),this._observeYBlockChanges()}_createModel(t){var s,r,n;const i=this._mutex,o=this.schema.flavourSchemaMap.get(this.flavour);if(!o)throw new T(R.ModelCRUDError,`schema for flavour: ${this.flavour} not found`);const a=(n=(r=(s=o.model).toModel)==null?void 0:r.call(s))!=null?n:new lr;a.schema=o;const l=Object.entries(t).reduce((u,[d,f])=>{const p=Kt(f),b=Nn(()=>{const x=p.value;this.model&&i(()=>{this.model.props[d]=x})}),v=a.deleted.subscribe(()=>{v.unsubscribe(),b()});return{...u,[`${d}$`]:p,[d]:f}},{});a.id=this.id,a.keys=Object.keys(t),a.yBlock=this.yBlock,a.stash=this.stash,a.pop=this.pop,this.doc&&(a.store=this.doc);const c=new Proxy(l,{has:(u,d)=>Reflect.has(u,d),set:(u,d,f,p)=>{var b;if(!this._byPassProxy&&typeof d=="string"&&a.keys.includes(d)){if(this._stashed.has(d)){h(u,d,f);const w=Reflect.set(u,d,f,p);return(b=this.onChange)==null||b.call(this,d,!0),w}const v=Ne(f);if(this.yBlock.get(`prop:${d}`)===v)return Reflect.set(u,d,f,p);this.yBlock.set(`prop:${d}`,v);const x=this._getPropsProxy(d,v);return h(u,d,f),Reflect.set(u,d,x,p)}return Reflect.set(u,d,f,p)},get:(u,d,f)=>Reflect.get(u,d,f),deleteProperty:(u,d)=>(!this._byPassProxy&&typeof d=="string"&&a.keys.includes(d)&&(this.yBlock.delete(`prop:${d}`),h(u,d,void 0)),Reflect.deleteProperty(u,d))});a._props=c;function h(u,d,f){i(()=>{u[`${d}$`].value=f})}return a}_getPropsProxy(t,s){return Cr(s,{onChange:(r,n)=>{var i;(i=this.onChange)==null||i.call(this,t,n);const o=`${t}$`;o in this.model.props&&this._mutex(()=>{this.model.props[o].value=Pr(s)})}})}_parseYBlock(){var t,s;let r,n,i,o;const a={};if(this.yBlock.forEach((h,u)=>{if(u.startsWith("prop:")){const d=u.replace("prop:","");a[d]=this._getPropsProxy(d,h);return}if(u==="sys:id"&&typeof h=="string"){r=h;return}if(u==="sys:flavour"&&typeof h=="string"){n=h;return}if(u==="sys:children"&&h instanceof Pt){o=h;return}if(u==="sys:version"&&typeof h=="number"){i=h;return}}),!r)throw new T(R.ModelCRUDError,"block id is not found when creating model");if(!n)throw new T(R.ModelCRUDError,"block flavour is not found when creating model");if(!o)throw new T(R.ModelCRUDError,"block children is not found when creating model");const l=this.schema.flavourSchemaMap.get(n);if(!l)throw new T(R.ModelCRUDError,`schema for flavour: ${n} not found`);const c=(s=(t=l.model).props)==null?void 0:s.call(t,kn);return typeof i!="number"&&(i=l.version),c&&Object.entries(c).forEach(([h,u])=>{if(h in a)return;const d=Ne(u);u!==void 0&&this.yBlock.set(`prop:${h}`,d),a[h]=this._getPropsProxy(h,d)}),{id:r,flavour:n,version:i,props:a,yChildren:o}}_popProp(t){const s=this.model,r=s.props[t];this._stashed.delete(t),s.props[t]=r}_stashProp(t){this.model.props[t]=Pr(this.yBlock.get(`prop:${t}`),{transform:(s,r)=>Ve.is(r)?s:r instanceof Vt?new Proxy(s,{get:(n,i,o)=>Reflect.get(n,i,o),set:(n,i,o,a)=>{var l;const c=Reflect.set(n,i,o,a);return(l=this.onChange)==null||l.call(this,t,!0),c},deleteProperty:(n,i)=>{var o;const a=Reflect.deleteProperty(n,i);return(o=this.onChange)==null||o.call(this,t,!0),a}}):r instanceof Pt?new Proxy(s,{get:(n,i,o)=>Reflect.get(n,i,o),set:(n,i,o,a)=>{var l;const c=Number(i);if(Number.isNaN(c))return Reflect.set(n,i,o,a);const h=Reflect.set(n,i,o,a);return(l=this.onChange)==null||l.call(this,t,!0),h},deleteProperty:(n,i)=>{var o;const a=Reflect.deleteProperty(n,i);return(o=this.onChange)==null||o.call(this,i,!0),a}}):s})}}class Tk{constructor(t,s,r,n={}){this.schema=t,this.yBlock=s,this.doc=r,this.options=n,this.blockViewType="display";const i=n.onChange?(l,c)=>{var h;!this._syncController||!this.model||(h=n.onChange)==null||h.call(n,this,l,c)}:void 0,o=s.get("sys:flavour"),a=this.schema.get(o);a?.model.isFlatData?this._syncController=new Ck(t,s,r,i):this._syncController=new $k(t,s,r,i)}get flavour(){return this._syncController.flavour}get id(){return this._syncController.id}get model(){return this._syncController.model}get pop(){return this._syncController.pop}get stash(){return this._syncController.stash}get version(){return this._syncController.version}}function fn(e){const{id:t,version:s,flavour:r,role:n,keys:i,text:o,children:a}=e,l=e.keys.reduce((c,h)=>{const d=e.props[h];return{...c,[h]:d}},{});return{id:t,version:s,flavour:r,role:n,keys:i,text:o,children:a.map(fn),props:l}}const Sa="default",cn=[];class Ak extends Error{constructor(){super("Dynamic resolve recursion limit reached")}}class Ok extends Error{constructor(t){super(`A circular dependency was detected.
`+Rm(t)),this.dependencyStack=t}}class zl extends Error{constructor(t){super(`Service ${Ji(t)} not found in container`),this.identifier=t}}class ef extends Error{constructor(t,s,r){super(`Missing dependency ${Ji(s)} in creating service ${Ji(t)}.
${Rm(r)}`),this.from=t,this.target=s,this.dependencyStack=r}}class Rk extends Error{constructor(t){super(`Service ${Ji(t)} already exists`),this.identifier=t}}function Ji(e){return`[${e.identifierName}]${e.variant!==Sa?`(${e.variant})`:""}`}function Rm(e){return e.map(t=>`${Ji(t)}`).join(" -> ")}const Vo=new WeakMap;let Ik=0;function Dc(e){const t=typeof e,s=e&&e.constructor,r=s===Date;if(Object(e)===e&&!r&&s!==RegExp){let n=Vo.get(e);if(n)return n;n=++Ik+"~",Vo.set(e,n);let i;if(s===Array){for(n="@",i=0;i<e.length;i++)n+=Dc(e[i])+",";Vo.set(e,n)}else if(s===Object){n="#";const o=Object.keys(e).sort();for(;(i=o.pop())!==void 0;)e[i]!==void 0&&(n+=i+":"+Dc(e[i])+",");Vo.set(e,n)}return n}return r?e.toJSON():t==="symbol"?e.toString():t==="string"?JSON.stringify(e):""+e}function Qt(e,t=Sa){return Object.assign(s=>Qt(e,s),{identifierName:e,variant:t})}function Mk(e){return Qt(`${e.name}${Dc(e)}`)}function wi(e){if(e.identifierName)return e;if(typeof e=="function"&&e.name)return Mk(e);throw new Error("Input is not a service identifier.")}class Pc{get(t,s){return this.getRaw(wi(t),{...s,optional:!1})}getAll(t,s){return this.getAllRaw(wi(t),{...s})}getOptional(t,s){return this.getRaw(wi(t),{...s,optional:!0})}}class Dk{constructor(){this.cache=new Map}getOrInsert(t,s){var r;const n=(r=this.cache.get(t.identifierName))!=null?r:new Map;n.has(t.variant)||n.set(t.variant,s());const i=n.get(t.variant);return this.cache.set(t.identifierName,n),i}}class Ca extends Pc{constructor(t,s=0,r=[]){super(),this.provider=t,this.depth=s,this.stack=r,this.container=this.provider.container}getAllRaw(t,{sameScope:s=!1}={}){const r=this.provider.container.getFactoryAll(t,this.provider.scope);if(r===void 0)return this.provider.parent&&!s?this.provider.parent.getAllRaw(t):new Map;const n=new Map;for(const[i,o]of r){const a=this.provider.cache.getOrInsert({identifierName:t.identifierName,variant:i},()=>{const l=this.track(t);try{return o(l)}catch(c){throw c instanceof zl?new ef(t,c.identifier,this.stack):c}});n.set(i,a)}return n}getRaw(t,{sameScope:s=!1,optional:r=!1}={}){const n=this.provider.container.getFactory(t,this.provider.scope);if(!n){if(this.provider.parent&&!s)return this.provider.parent.getRaw(t,{sameScope:s,optional:r});if(r)return;throw new zl(t)}return this.provider.cache.getOrInsert(t,()=>{const i=this.track(t);try{return n(i)}catch(o){throw o instanceof zl?new ef(t,o.identifier,this.stack):o}})}track(t){const s=this.depth+1;if(s>=100)throw new Ak;if(this.stack.find(n=>n.identifierName===t.identifierName&&n.variant===t.variant))throw new Ok([...this.stack,t]);return new Ca(this.provider,s,[...this.stack,t])}}class Pk extends Pc{constructor(t,s,r){super(),this.scope=s,this.parent=r,this.cache=new Dk,this.container=t.clone(),this.container.addValue(Pc,this,{scope:s,override:!0})}getAllRaw(t,s){return new Ca(this).getAllRaw(t,s)}getRaw(t,s){return new Ca(this).getRaw(t,s)}}function rO(e,t=cn){return[...t,e]}function Vl(e){return e.join("/")}class Ea{constructor(){this.services=new Map}get add(){return new Uo(this).add}get addImpl(){return new Uo(this).addImpl}static get EMPTY(){return new Ea}get override(){return new Uo(this).override}get scope(){return new Uo(this).scope}get size(){let t=0;for(const[,s]of this.services)for(const[,r]of s)t+=r.size;return t}addFactory(t,s,{scope:r,override:n}={}){var i,o,a;const l=Vl(r??cn),c=wi(t),h=(i=c.variant)!=null?i:Sa,u=(o=this.services.get(l))!=null?o:new Map,d=(a=u.get(c.identifierName))!=null?a:new Map;if(d.has(h)&&!n)throw new Rk(c);d.set(h,s),u.set(c.identifierName,d),this.services.set(l,u)}addValue(t,s,{scope:r,override:n}={}){this.addFactory(wi(t),()=>s,{scope:r,override:n})}clone(){const t=new Ea;for(const[s,r]of this.services){const n=new Map;for(const[i,o]of r)n.set(i,new Map(o));t.services.set(s,n)}return t}getFactory(t,s=cn){var r,n,i;return(i=(r=this.services.get(Vl(s)))==null?void 0:r.get(t.identifierName))==null?void 0:i.get((n=t.variant)!=null?n:Sa)}getFactoryAll(t,s=cn){var r;return new Map((r=this.services.get(Vl(s)))==null?void 0:r.get(t.identifierName))}provider(t=cn,s=null){return new Pk(this,t,s)}}class Uo{constructor(t){this.container=t,this.currentScope=cn,this.add=(s,...[r])=>(this.container.addFactory(s,Ul(s,r),{scope:this.currentScope}),this),this.addImpl=(s,r,...[n])=>(r instanceof Function?this.container.addFactory(s,Ul(r,n),{scope:this.currentScope}):this.container.addValue(s,r,{scope:this.currentScope}),this),this.override=(s,r,...[n])=>(r instanceof Function?this.container.addFactory(s,Ul(r,n),{scope:this.currentScope,override:!0}):this.container.addValue(s,r,{scope:this.currentScope,override:!0}),this),this.scope=s=>(this.currentScope=s,this)}}function Ul(e,t=[]){return s=>{const r=[];for(const n of t){let i,o;if(Array.isArray(n)){if(n.length!==1)throw new Error("Invalid dependency");i=!0,o=n[0]}else i=!1,o=n;i?r.push(Array.from(s.getAll(o).values())):r.push(s.get(o))}return Lk(e)?new e(...r,s):e(...r,s)}}function Lk(e){try{return Reflect.construct(function(){},[],e),!0}catch{return!1}}const Im=Qt("Store");var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hi={exports:{}};hi.exports;var sf;function Nk(){return sf||(sf=1,function(e,t){var s=200,r="__lodash_hash_undefined__",n=1,i=2,o=9007199254740991,a="[object Arguments]",l="[object Array]",c="[object Boolean]",h="[object Date]",u="[object Error]",d="[object Function]",f="[object GeneratorFunction]",p="[object Map]",b="[object Number]",v="[object Object]",x="[object Promise]",w="[object RegExp]",S="[object Set]",k="[object String]",A="[object Symbol]",I="[object WeakMap]",U="[object ArrayBuffer]",Q="[object DataView]",nt="[object Float32Array]",F="[object Float64Array]",gt="[object Int8Array]",X="[object Int16Array]",ft="[object Int32Array]",yt="[object Uint8Array]",Wt="[object Uint8ClampedArray]",Yt="[object Uint16Array]",Ot="[object Uint32Array]",Rt=/[\\^$.*+?()[\]{}|]/g,Ae=/^\[object .+?Constructor\]$/,Gn=/^(?:0|[1-9]\d*)$/,rt={};rt[nt]=rt[F]=rt[gt]=rt[X]=rt[ft]=rt[yt]=rt[Wt]=rt[Yt]=rt[Ot]=!0,rt[a]=rt[l]=rt[U]=rt[c]=rt[Q]=rt[h]=rt[u]=rt[d]=rt[p]=rt[b]=rt[v]=rt[w]=rt[S]=rt[k]=rt[I]=!1;var ve=typeof Fo=="object"&&Fo&&Fo.Object===Object&&Fo,So=typeof self=="object"&&self&&self.Object===Object&&self,He=ve||So||Function("return this")(),is=t&&!t.nodeType&&t,Co=is&&!0&&e&&!e.nodeType&&e,Ov=Co&&Co.exports===is,Ku=Ov&&ve.process,Ju=function(){try{return Ku&&Ku.binding("util")}catch{}}(),Qu=Ju&&Ju.isTypedArray;function Rv(g,_){for(var $=-1,L=g?g.length:0;++$<L;)if(_(g[$],$,g))return!0;return!1}function Iv(g,_){for(var $=-1,L=Array(g);++$<g;)L[$]=_($);return L}function Mv(g){return function(_){return g(_)}}function Dv(g,_){return g?.[_]}function pl(g){var _=!1;if(g!=null&&typeof g.toString!="function")try{_=!!(g+"")}catch{}return _}function Pv(g){var _=-1,$=Array(g.size);return g.forEach(function(L,it){$[++_]=[it,L]}),$}function Lv(g,_){return function($){return g(_($))}}function Nv(g){var _=-1,$=Array(g.size);return g.forEach(function(L){$[++_]=L}),$}var Bv=Array.prototype,zv=Function.prototype,Eo=Object.prototype,gl=He["__core-js_shared__"],td=function(){var g=/[^.]+$/.exec(gl&&gl.keys&&gl.keys.IE_PROTO||"");return g?"Symbol(src)_1."+g:""}(),ed=zv.toString,xs=Eo.hasOwnProperty,Xn=Eo.toString,Vv=RegExp("^"+ed.call(xs).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),sd=He.Symbol,rd=He.Uint8Array,Uv=Eo.propertyIsEnumerable,Fv=Bv.splice,jv=Lv(Object.keys,Object),ml=rn(He,"DataView"),Kn=rn(He,"Map"),bl=rn(He,"Promise"),vl=rn(He,"Set"),yl=rn(He,"WeakMap"),Jn=rn(Object,"create"),Hv=br(ml),Wv=br(Kn),Yv=br(bl),qv=br(vl),Zv=br(yl),nd=sd?sd.prototype:void 0,_l=nd?nd.valueOf:void 0;function gr(g){var _=-1,$=g?g.length:0;for(this.clear();++_<$;){var L=g[_];this.set(L[0],L[1])}}function Gv(){this.__data__=Jn?Jn(null):{}}function Xv(g){return this.has(g)&&delete this.__data__[g]}function Kv(g){var _=this.__data__;if(Jn){var $=_[g];return $===r?void 0:$}return xs.call(_,g)?_[g]:void 0}function Jv(g){var _=this.__data__;return Jn?_[g]!==void 0:xs.call(_,g)}function Qv(g,_){var $=this.__data__;return $[g]=Jn&&_===void 0?r:_,this}gr.prototype.clear=Gv,gr.prototype.delete=Xv,gr.prototype.get=Kv,gr.prototype.has=Jv,gr.prototype.set=Qv;function ks(g){var _=-1,$=g?g.length:0;for(this.clear();++_<$;){var L=g[_];this.set(L[0],L[1])}}function ty(){this.__data__=[]}function ey(g){var _=this.__data__,$=To(_,g);if($<0)return!1;var L=_.length-1;return $==L?_.pop():Fv.call(_,$,1),!0}function sy(g){var _=this.__data__,$=To(_,g);return $<0?void 0:_[$][1]}function ry(g){return To(this.__data__,g)>-1}function ny(g,_){var $=this.__data__,L=To($,g);return L<0?$.push([g,_]):$[L][1]=_,this}ks.prototype.clear=ty,ks.prototype.delete=ey,ks.prototype.get=sy,ks.prototype.has=ry,ks.prototype.set=ny;function mr(g){var _=-1,$=g?g.length:0;for(this.clear();++_<$;){var L=g[_];this.set(L[0],L[1])}}function iy(){this.__data__={hash:new gr,map:new(Kn||ks),string:new gr}}function oy(g){return Ao(this,g).delete(g)}function ay(g){return Ao(this,g).get(g)}function ly(g){return Ao(this,g).has(g)}function cy(g,_){return Ao(this,g).set(g,_),this}mr.prototype.clear=iy,mr.prototype.delete=oy,mr.prototype.get=ay,mr.prototype.has=ly,mr.prototype.set=cy;function $o(g){var _=-1,$=g?g.length:0;for(this.__data__=new mr;++_<$;)this.add(g[_])}function hy(g){return this.__data__.set(g,r),this}function uy(g){return this.__data__.has(g)}$o.prototype.add=$o.prototype.push=hy,$o.prototype.has=uy;function Ss(g){this.__data__=new ks(g)}function dy(){this.__data__=new ks}function fy(g){return this.__data__.delete(g)}function py(g){return this.__data__.get(g)}function gy(g){return this.__data__.has(g)}function my(g,_){var $=this.__data__;if($ instanceof ks){var L=$.__data__;if(!Kn||L.length<s-1)return L.push([g,_]),this;$=this.__data__=new mr(L)}return $.set(g,_),this}Ss.prototype.clear=dy,Ss.prototype.delete=fy,Ss.prototype.get=py,Ss.prototype.has=gy,Ss.prototype.set=my;function by(g,_){var $=wl(g)||Iy(g)?Iv(g.length,String):[],L=$.length,it=!!L;for(var H in g)xs.call(g,H)&&!(it&&(H=="length"||$y(H,L)))&&$.push(H);return $}function To(g,_){for(var $=g.length;$--;)if(ad(g[$][0],_))return $;return-1}function vy(g){return Xn.call(g)}function id(g,_,$,L,it){return g===_?!0:g==null||_==null||!Oo(g)&&!xl(_)?g!==g&&_!==_:yy(g,_,id,$,L,it)}function yy(g,_,$,L,it,H){var bt=wl(g),Lt=wl(_),Et=l,qt=l;bt||(Et=Fs(g),Et=Et==a?v:Et),Lt||(qt=Fs(_),qt=qt==a?v:qt);var le=Et==v&&!pl(g),ce=qt==v&&!pl(_),ee=Et==qt;if(ee&&!le)return H||(H=new Ss),bt||Py(g)?od(g,_,$,L,it,H):Sy(g,_,Et,$,L,it,H);if(!(it&i)){var Oe=le&&xs.call(g,"__wrapped__"),Re=ce&&xs.call(_,"__wrapped__");if(Oe||Re){var js=Oe?g.value():g,Cs=Re?_.value():_;return H||(H=new Ss),$(js,Cs,L,it,H)}}return ee?(H||(H=new Ss),Cy(g,_,$,L,it,H)):!1}function _y(g,_,$,L){var it=$.length,H=it;if(g==null)return!H;for(g=Object(g);it--;){var bt=$[it];if(bt[2]?bt[1]!==g[bt[0]]:!(bt[0]in g))return!1}for(;++it<H;){bt=$[it];var Lt=bt[0],Et=g[Lt],qt=bt[1];if(bt[2]){if(Et===void 0&&!(Lt in g))return!1}else{var le=new Ss,ce;if(!(ce===void 0?id(qt,Et,L,n|i,le):ce))return!1}}return!0}function wy(g){if(!Oo(g)||Ay(g))return!1;var _=cd(g)||pl(g)?Vv:Ae;return _.test(br(g))}function xy(g){return xl(g)&&hd(g.length)&&!!rt[Xn.call(g)]}function ky(g){if(!Oy(g))return jv(g);var _=[];for(var $ in Object(g))xs.call(g,$)&&$!="constructor"&&_.push($);return _}function od(g,_,$,L,it,H){var bt=it&i,Lt=g.length,Et=_.length;if(Lt!=Et&&!(bt&&Et>Lt))return!1;var qt=H.get(g);if(qt&&H.get(_))return qt==_;var le=-1,ce=!0,ee=it&n?new $o:void 0;for(H.set(g,_),H.set(_,g);++le<Lt;){var Oe=g[le],Re=_[le];if(L)var js=bt?L(Re,Oe,le,_,g,H):L(Oe,Re,le,g,_,H);if(js!==void 0){if(js)continue;ce=!1;break}if(ee){if(!Rv(_,function(Cs,vr){if(!ee.has(vr)&&(Oe===Cs||$(Oe,Cs,L,it,H)))return ee.add(vr)})){ce=!1;break}}else if(!(Oe===Re||$(Oe,Re,L,it,H))){ce=!1;break}}return H.delete(g),H.delete(_),ce}function Sy(g,_,$,L,it,H,bt){switch($){case Q:if(g.byteLength!=_.byteLength||g.byteOffset!=_.byteOffset)return!1;g=g.buffer,_=_.buffer;case U:return!(g.byteLength!=_.byteLength||!L(new rd(g),new rd(_)));case c:case h:case b:return ad(+g,+_);case u:return g.name==_.name&&g.message==_.message;case w:case k:return g==_+"";case p:var Lt=Pv;case S:var Et=H&i;if(Lt||(Lt=Nv),g.size!=_.size&&!Et)return!1;var qt=bt.get(g);if(qt)return qt==_;H|=n,bt.set(g,_);var le=od(Lt(g),Lt(_),L,it,H,bt);return bt.delete(g),le;case A:if(_l)return _l.call(g)==_l.call(_)}return!1}function Cy(g,_,$,L,it,H){var bt=it&i,Lt=kl(g),Et=Lt.length,qt=kl(_),le=qt.length;if(Et!=le&&!bt)return!1;for(var ce=Et;ce--;){var ee=Lt[ce];if(!(bt?ee in _:xs.call(_,ee)))return!1}var Oe=H.get(g);if(Oe&&H.get(_))return Oe==_;var Re=!0;H.set(g,_),H.set(_,g);for(var js=bt;++ce<Et;){ee=Lt[ce];var Cs=g[ee],vr=_[ee];if(L)var ud=bt?L(vr,Cs,ee,_,g,H):L(Cs,vr,ee,g,_,H);if(!(ud===void 0?Cs===vr||$(Cs,vr,L,it,H):ud)){Re=!1;break}js||(js=ee=="constructor")}if(Re&&!js){var Ro=g.constructor,Io=_.constructor;Ro!=Io&&"constructor"in g&&"constructor"in _&&!(typeof Ro=="function"&&Ro instanceof Ro&&typeof Io=="function"&&Io instanceof Io)&&(Re=!1)}return H.delete(g),H.delete(_),Re}function Ao(g,_){var $=g.__data__;return Ty(_)?$[typeof _=="string"?"string":"hash"]:$.map}function Ey(g){for(var _=kl(g),$=_.length;$--;){var L=_[$],it=g[L];_[$]=[L,it,Ry(it)]}return _}function rn(g,_){var $=Dv(g,_);return wy($)?$:void 0}var Fs=vy;(ml&&Fs(new ml(new ArrayBuffer(1)))!=Q||Kn&&Fs(new Kn)!=p||bl&&Fs(bl.resolve())!=x||vl&&Fs(new vl)!=S||yl&&Fs(new yl)!=I)&&(Fs=function(g){var _=Xn.call(g),$=_==v?g.constructor:void 0,L=$?br($):void 0;if(L)switch(L){case Hv:return Q;case Wv:return p;case Yv:return x;case qv:return S;case Zv:return I}return _});function $y(g,_){return _=_??o,!!_&&(typeof g=="number"||Gn.test(g))&&g>-1&&g%1==0&&g<_}function Ty(g){var _=typeof g;return _=="string"||_=="number"||_=="symbol"||_=="boolean"?g!=="__proto__":g===null}function Ay(g){return!!td&&td in g}function Oy(g){var _=g&&g.constructor,$=typeof _=="function"&&_.prototype||Eo;return g===$}function Ry(g){return g===g&&!Oo(g)}function br(g){if(g!=null){try{return ed.call(g)}catch{}try{return g+""}catch{}}return""}function ad(g,_){return g===_||g!==g&&_!==_}function Iy(g){return My(g)&&xs.call(g,"callee")&&(!Uv.call(g,"callee")||Xn.call(g)==a)}var wl=Array.isArray;function ld(g){return g!=null&&hd(g.length)&&!cd(g)}function My(g){return xl(g)&&ld(g)}function cd(g){var _=Oo(g)?Xn.call(g):"";return _==d||_==f}function hd(g){return typeof g=="number"&&g>-1&&g%1==0&&g<=o}function Oo(g){var _=typeof g;return!!g&&(_=="object"||_=="function")}function xl(g){return!!g&&typeof g=="object"}function Dy(g,_){return g===_||_y(g,_,Ey(_))}var Py=Qu?Mv(Qu):xy;function kl(g){return ld(g)?by(g):ky(g)}e.exports=Dy}(hi,hi.exports)),hi.exports}var Bk=Nk();const zk=Mm(Bk);function Vk(e,t){const s=Uk(e,t);if(t.blockViewType=s,s!=="hidden"){const r=e.mode;Fk(r,t)}}function Uk(e,t){const s=t.model.flavour,r=t.model.id,n=e.mode,i=t.model.keys.reduce((a,l)=>({...a,[l]:t.model.props[l]}),{});let o=n==="loose"?"display":"hidden";return e.match.some(a=>{const{id:l,flavour:c,props:h,viewType:u}=a,d=l==null?!0:l===r,f=c==null?!0:c===s,p=h==null?!0:zk(i,h);return d&&f&&p?(o=u,!0):!1}),o}function Fk(e,t){const s=t.model.store;let r=s.getParent(t.model);for(;r;){const n=s.getBlock(r.id);n&&n.blockViewType==="hidden"&&(n.blockViewType=e==="include"?"display":"bypass"),r=s.getParent(r)}}class Yr{constructor(){this._disposables=[],this._disposed=!1}get disposed(){return this._disposed}add(t){if(this._disposed){Dm(t);return}this._disposables.push(t)}addFromEvent(t,s,r,n){this.add({dispose:()=>{t.removeEventListener(s,r,n)}}),t.addEventListener(s,r,n)}dispose(){jk(this._disposables),this._disposables=[],this._disposed=!0}}function Dm(e){try{e instanceof Bn?e.unsubscribe():e instanceof at?e.complete():typeof e=="function"?e():e.dispose()}catch(t){console.error(t)}}function jk(e){e.forEach(Dm)}class Hk{static setup(t){}}var Pm,rf;const Lc=Qt("StoreExtension"),Lm=Symbol("StoreExtension");class zh extends(rf=Hk,Pm=Lm,rf){constructor(t){super(),this.store=t}loaded(){}disposed(){}static setup(t){if(!this.key)throw new T(R.ValueNotExists,"Key is not defined in the StoreExtension");t.add(this,[Im]),t.addImpl(Lc(this.key),s=>s.get(this))}}zh[Pm]=!0;function nO(e){return Lm in e}class Vh extends zh{constructor(t){super(t),this._canRedo=Kt(!1),this._canUndo=Kt(!1),this.onUpdated=new at,this._updateCanUndoRedoSignals=()=>{const s=this._history.canRedo(),r=this._history.canUndo();this._canRedo.peek()!==s&&(this._canRedo.value=s),this._canUndo.peek()!==r&&(this._canUndo.value=r)},this._historyObserver=()=>{this._updateCanUndoRedoSignals(),this.onUpdated.next()},this._history=new tr([this.store.doc.yBlocks],{trackedOrigins:new Set([this.store.doc.spaceDoc.clientID])})}get canRedo(){return this._canRedo.peek()}get canUndo(){return this._canUndo.peek()}get canRedo$(){return this._canRedo}get canUndo$(){return this._canUndo}get undoManager(){return this._history}loaded(){this._updateCanUndoRedoSignals(),this._history.on("stack-cleared",this._historyObserver),this._history.on("stack-item-added",this._historyObserver),this._history.on("stack-item-popped",this._historyObserver),this._history.on("stack-item-updated",this._historyObserver)}disposed(){super.disposed(),this._history.off("stack-cleared",this._historyObserver),this._history.off("stack-item-added",this._historyObserver),this._history.off("stack-item-popped",this._historyObserver),this._history.off("stack-item-updated",this._historyObserver),this.onUpdated.complete()}}Vh.key="history";const Nm=Qt("BlockSchema");function iO(e){return{setup:t=>{t.addImpl(Nm(e.model.flavour),()=>e)}}}class Uh{get group(){return this.constructor.group}get type(){return this.constructor.type}constructor({blockId:t}){this.blockId=t}static fromJSON(t){throw new T(R.SelectionError,"You must override this method")}is(t){return this.type===t.type}}Uh.recoverable=!1;const Bm=Qt("Selection");function zm(e){return{setup:t=>{t.addImpl(Bm(e.type),()=>e)}}}const Wk="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Yk=(e=21)=>{let t="",s=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=Wk[s[e]&63];return t};const oO=()=>Kp(),qk=()=>Yk(10);class Vm extends zh{constructor(){super(...arguments),this._id=`${this.store.id}:${qk()}`,this._selectionConstructors={},this._selections=Kt([]),this._remoteSelections=Kt(new Map),this._itemAdded=t=>{t.stackItem.meta.set("selection-state",this._selections.value)},this._itemPopped=t=>{const s=t.stackItem.meta.get("selection-state");s&&this.set(s)},this._jsonToSelection=t=>{const s=this._selectionConstructors[t.type];if(!s)throw new T(R.SelectionError,`Unknown selection type: ${t.type}`);return s.fromJSON(t)},this.slots={changed:new at,remoteChanged:new at}}loaded(){this.store.provider.getAll(Bm).forEach(t=>{[t].flat().forEach(s=>{this._selectionConstructors[s.type]=s})}),this.store.awarenessStore.awareness.on("change",t=>{const s=t.updated.concat(t.added).concat(t.removed),r=this.store.awarenessStore.awareness.clientID;if(s.filter(i=>i!==r).length>0){const i=new Map;this.store.awarenessStore.getStates().forEach((o,a)=>{if(a===this.store.awarenessStore.awareness.clientID)return;const c=Object.entries(o.selectionV2).filter(([h])=>h.startsWith(this.store.id)).flatMap(([h,u])=>u).map(h=>{try{return this._jsonToSelection(h)}catch(u){return console.error("Parse remote selection failed:",a,h,u),null}}).filter(h=>!!h);i.set(a,c)}),this._remoteSelections.value=i,this.slots.remoteChanged.next(i)}}),this.store.history.undoManager.on("stack-item-added",this._itemAdded),this.store.history.undoManager.on("stack-item-popped",this._itemPopped)}disposed(){super.disposed(),this.store.history.undoManager.off("stack-item-added",this._itemAdded),this.store.history.undoManager.off("stack-item-popped",this._itemPopped)}get value(){return this._selections.value}get remoteSelections(){return this._remoteSelections.value}clear(t){if(t){const s=this.value.filter(r=>!t.includes(r.type));this.set(s)}else this.set([])}create(t,...s){return new t(...s)}getGroup(t){return this.value.filter(s=>s.group===t)}filter(t){return this.filter$(t).value}filter$(t){return Ur(()=>this.value.filter(s=>s.is(t)))}find(t){return this.find$(t).value}find$(t){return Ur(()=>this.value.find(s=>s.is(t)))}set(t){this.store.awarenessStore.setLocalSelection(this._id,t.map(s=>s.toJSON())),this._selections.value=t,this.slots.changed.next(t)}setGroup(t,s){const r=this.value.filter(n=>n.group!==t);this.set([...r,...s])}clearRemote(){this.store.awarenessStore.setLocalSelection(this._id,[])}update(t){const s=t(this.value);this.set(s)}fromJSON(t){const s=t.map(r=>this._jsonToSelection(r));return this.set(s)}}Vm.key="selection";const Zk=Qt("store-doc");var Fl,nf;function Gk(){if(nf)return Fl;nf=1,Fl=e;function e(r,n,i){r instanceof RegExp&&(r=t(r,i)),n instanceof RegExp&&(n=t(n,i));var o=s(r,n,i);return o&&{start:o[0],end:o[1],pre:i.slice(0,o[0]),body:i.slice(o[0]+r.length,o[1]),post:i.slice(o[1]+n.length)}}function t(r,n){var i=n.match(r);return i?i[0]:null}e.range=s;function s(r,n,i){var o,a,l,c,h,u=i.indexOf(r),d=i.indexOf(n,u+1),f=u;if(u>=0&&d>0){if(r===n)return[u,d];for(o=[],l=i.length;f>=0&&!h;)f==u?(o.push(f),u=i.indexOf(r,f+1)):o.length==1?h=[o.pop(),d]:(a=o.pop(),a<l&&(l=a,c=d),d=i.indexOf(n,f+1)),f=u<d&&u>=0?u:d;o.length&&(h=[l,c])}return h}return Fl}var jl,of;function Xk(){if(of)return jl;of=1;var e=Gk();jl=h;var t="\0SLASH"+Math.random()+"\0",s="\0OPEN"+Math.random()+"\0",r="\0CLOSE"+Math.random()+"\0",n="\0COMMA"+Math.random()+"\0",i="\0PERIOD"+Math.random()+"\0";function o(v){return parseInt(v,10)==v?parseInt(v,10):v.charCodeAt(0)}function a(v){return v.split("\\\\").join(t).split("\\{").join(s).split("\\}").join(r).split("\\,").join(n).split("\\.").join(i)}function l(v){return v.split(t).join("\\").split(s).join("{").split(r).join("}").split(n).join(",").split(i).join(".")}function c(v){if(!v)return[""];var x=[],w=e("{","}",v);if(!w)return v.split(",");var S=w.pre,k=w.body,A=w.post,I=S.split(",");I[I.length-1]+="{"+k+"}";var U=c(A);return A.length&&(I[I.length-1]+=U.shift(),I.push.apply(I,U)),x.push.apply(x,I),x}function h(v){return v?(v.substr(0,2)==="{}"&&(v="\\{\\}"+v.substr(2)),b(a(v),!0).map(l)):[]}function u(v){return"{"+v+"}"}function d(v){return/^-?0\d/.test(v)}function f(v,x){return v<=x}function p(v,x){return v>=x}function b(v,x){var w=[],S=e("{","}",v);if(!S)return[v];var k=S.pre,A=S.post.length?b(S.post,!1):[""];if(/\$$/.test(S.pre))for(var I=0;I<A.length;I++){var U=k+"{"+S.body+"}"+A[I];w.push(U)}else{var Q=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(S.body),nt=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(S.body),F=Q||nt,gt=S.body.indexOf(",")>=0;if(!F&&!gt)return S.post.match(/,.*\}/)?(v=S.pre+"{"+S.body+r+S.post,b(v)):[v];var X;if(F)X=S.body.split(/\.\./);else if(X=c(S.body),X.length===1&&(X=b(X[0],!1).map(u),X.length===1))return A.map(function(Co){return S.pre+X[0]+Co});var ft;if(F){var yt=o(X[0]),Wt=o(X[1]),Yt=Math.max(X[0].length,X[1].length),Ot=X.length==3?Math.abs(o(X[2])):1,Rt=f,Ae=Wt<yt;Ae&&(Ot*=-1,Rt=p);var Gn=X.some(d);ft=[];for(var rt=yt;Rt(rt,Wt);rt+=Ot){var ve;if(nt)ve=String.fromCharCode(rt),ve==="\\"&&(ve="");else if(ve=String(rt),Gn){var So=Yt-ve.length;if(So>0){var He=new Array(So+1).join("0");rt<0?ve="-"+He+ve.slice(1):ve=He+ve}}ft.push(ve)}}else{ft=[];for(var is=0;is<X.length;is++)ft.push.apply(ft,b(X[is],!1))}for(var is=0;is<ft.length;is++)for(var I=0;I<A.length;I++){var U=k+ft[is]+A[I];(!x||F||U)&&w.push(U)}}return w}return jl}var Kk=Xk();const Jk=Mm(Kk),Qk=1024*64,$a=e=>{if(typeof e!="string")throw new TypeError("invalid pattern");if(e.length>Qk)throw new TypeError("pattern is too long")},t1={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},Qn=e=>e.replace(/[[\]\\-]/g,"\\$&"),e1=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),af=e=>e.join(""),s1=(e,t)=>{const s=t;if(e.charAt(s)!=="[")throw new Error("not in a brace expression");const r=[],n=[];let i=s+1,o=!1,a=!1,l=!1,c=!1,h=s,u="";t:for(;i<e.length;){const b=e.charAt(i);if((b==="!"||b==="^")&&i===s+1){c=!0,i++;continue}if(b==="]"&&o&&!l){h=i+1;break}if(o=!0,b==="\\"&&!l){l=!0,i++;continue}if(b==="["&&!l){for(const[v,[x,w,S]]of Object.entries(t1))if(e.startsWith(v,i)){if(u)return["$.",!1,e.length-s,!0];i+=v.length,S?n.push(x):r.push(x),a=a||w;continue t}}if(l=!1,u){b>u?r.push(Qn(u)+"-"+Qn(b)):b===u&&r.push(Qn(b)),u="",i++;continue}if(e.startsWith("-]",i+1)){r.push(Qn(b+"-")),i+=2;continue}if(e.startsWith("-",i+1)){u=b,i+=2;continue}r.push(Qn(b)),i++}if(h<i)return["",!1,0,!1];if(!r.length&&!n.length)return["$.",!1,e.length-s,!0];if(n.length===0&&r.length===1&&/^\\?.$/.test(r[0])&&!c){const b=r[0].length===2?r[0].slice(-1):r[0];return[e1(b),!1,h-s,!1]}const d="["+(c?"^":"")+af(r)+"]",f="["+(c?"":"^")+af(n)+"]";return[r.length&&n.length?"("+d+"|"+f+")":r.length?d:f,a,h-s,!0]},ui=(e,{windowsPathsNoEscape:t=!1}={})=>t?e.replace(/\[([^\/\\])\]/g,"$1"):e.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1"),r1=new Set(["!","?","+","*","@"]),lf=e=>r1.has(e),n1="(?!(?:^|/)\\.\\.?(?:$|/))",jo="(?!\\.)",i1=new Set(["[","."]),o1=new Set(["..","."]),a1=new Set("().*{}+?[]^$\\!"),l1=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),Fh="[^/]",cf=Fh+"*?",hf=Fh+"+?";class re{type;#s;#r;#i=!1;#t=[];#e;#o;#l;#a=!1;#n;#c;#u=!1;constructor(t,s,r={}){this.type=t,t&&(this.#r=!0),this.#e=s,this.#s=this.#e?this.#e.#s:this,this.#n=this.#s===this?r:this.#s.#n,this.#l=this.#s===this?[]:this.#s.#l,t==="!"&&!this.#s.#a&&this.#l.push(this),this.#o=this.#e?this.#e.#t.length:0}get hasMagic(){if(this.#r!==void 0)return this.#r;for(const t of this.#t)if(typeof t!="string"&&(t.type||t.hasMagic))return this.#r=!0;return this.#r}toString(){return this.#c!==void 0?this.#c:this.type?this.#c=this.type+"("+this.#t.map(t=>String(t)).join("|")+")":this.#c=this.#t.map(t=>String(t)).join("")}#f(){if(this!==this.#s)throw new Error("should only call on root");if(this.#a)return this;this.toString(),this.#a=!0;let t;for(;t=this.#l.pop();){if(t.type!=="!")continue;let s=t,r=s.#e;for(;r;){for(let n=s.#o+1;!r.type&&n<r.#t.length;n++)for(const i of t.#t){if(typeof i=="string")throw new Error("string part in extglob AST??");i.copyIn(r.#t[n])}s=r,r=s.#e}}return this}push(...t){for(const s of t)if(s!==""){if(typeof s!="string"&&!(s instanceof re&&s.#e===this))throw new Error("invalid part: "+s);this.#t.push(s)}}toJSON(){const t=this.type===null?this.#t.slice().map(s=>typeof s=="string"?s:s.toJSON()):[this.type,...this.#t.map(s=>s.toJSON())];return this.isStart()&&!this.type&&t.unshift([]),this.isEnd()&&(this===this.#s||this.#s.#a&&this.#e?.type==="!")&&t.push({}),t}isStart(){if(this.#s===this)return!0;if(!this.#e?.isStart())return!1;if(this.#o===0)return!0;const t=this.#e;for(let s=0;s<this.#o;s++){const r=t.#t[s];if(!(r instanceof re&&r.type==="!"))return!1}return!0}isEnd(){if(this.#s===this||this.#e?.type==="!")return!0;if(!this.#e?.isEnd())return!1;if(!this.type)return this.#e?.isEnd();const t=this.#e?this.#e.#t.length:0;return this.#o===t-1}copyIn(t){typeof t=="string"?this.push(t):this.push(t.clone(this))}clone(t){const s=new re(this.type,t);for(const r of this.#t)s.copyIn(r);return s}static#h(t,s,r,n){let i=!1,o=!1,a=-1,l=!1;if(s.type===null){let f=r,p="";for(;f<t.length;){const b=t.charAt(f++);if(i||b==="\\"){i=!i,p+=b;continue}if(o){f===a+1?(b==="^"||b==="!")&&(l=!0):b==="]"&&!(f===a+2&&l)&&(o=!1),p+=b;continue}else if(b==="["){o=!0,a=f,l=!1,p+=b;continue}if(!n.noext&&lf(b)&&t.charAt(f)==="("){s.push(p),p="";const v=new re(b,s);f=re.#h(t,v,f,n),s.push(v);continue}p+=b}return s.push(p),f}let c=r+1,h=new re(null,s);const u=[];let d="";for(;c<t.length;){const f=t.charAt(c++);if(i||f==="\\"){i=!i,d+=f;continue}if(o){c===a+1?(f==="^"||f==="!")&&(l=!0):f==="]"&&!(c===a+2&&l)&&(o=!1),d+=f;continue}else if(f==="["){o=!0,a=c,l=!1,d+=f;continue}if(lf(f)&&t.charAt(c)==="("){h.push(d),d="";const p=new re(f,h);h.push(p),c=re.#h(t,p,c,n);continue}if(f==="|"){h.push(d),d="",u.push(h),h=new re(null,s);continue}if(f===")")return d===""&&s.#t.length===0&&(s.#u=!0),h.push(d),d="",s.push(...u,h),c;d+=f}return s.type=null,s.#r=void 0,s.#t=[t.substring(r-1)],c}static fromGlob(t,s={}){const r=new re(null,void 0,s);return re.#h(t,r,0,s),r}toMMPattern(){if(this!==this.#s)return this.#s.toMMPattern();const t=this.toString(),[s,r,n,i]=this.toRegExpSource();if(!(n||this.#r||this.#n.nocase&&!this.#n.nocaseMagicOnly&&t.toUpperCase()!==t.toLowerCase()))return r;const a=(this.#n.nocase?"i":"")+(i?"u":"");return Object.assign(new RegExp(`^${s}$`,a),{_src:s,_glob:t})}get options(){return this.#n}toRegExpSource(t){const s=t??!!this.#n.dot;if(this.#s===this&&this.#f(),!this.type){const l=this.isStart()&&this.isEnd(),c=this.#t.map(f=>{const[p,b,v,x]=typeof f=="string"?re.#p(f,this.#r,l):f.toRegExpSource(t);return this.#r=this.#r||v,this.#i=this.#i||x,p}).join("");let h="";if(this.isStart()&&typeof this.#t[0]=="string"&&!(this.#t.length===1&&o1.has(this.#t[0]))){const p=i1,b=s&&p.has(c.charAt(0))||c.startsWith("\\.")&&p.has(c.charAt(2))||c.startsWith("\\.\\.")&&p.has(c.charAt(4)),v=!s&&!t&&p.has(c.charAt(0));h=b?n1:v?jo:""}let u="";return this.isEnd()&&this.#s.#a&&this.#e?.type==="!"&&(u="(?:$|\\/)"),[h+c+u,ui(c),this.#r=!!this.#r,this.#i]}const r=this.type==="*"||this.type==="+",n=this.type==="!"?"(?:(?!(?:":"(?:";let i=this.#d(s);if(this.isStart()&&this.isEnd()&&!i&&this.type!=="!"){const l=this.toString();return this.#t=[l],this.type=null,this.#r=void 0,[l,ui(this.toString()),!1,!1]}let o=!r||t||s||!jo?"":this.#d(!0);o===i&&(o=""),o&&(i=`(?:${i})(?:${o})*?`);let a="";if(this.type==="!"&&this.#u)a=(this.isStart()&&!s?jo:"")+hf;else{const l=this.type==="!"?"))"+(this.isStart()&&!s&&!t?jo:"")+cf+")":this.type==="@"?")":this.type==="?"?")?":this.type==="+"&&o?")":this.type==="*"&&o?")?":`)${this.type}`;a=n+i+l}return[a,ui(i),this.#r=!!this.#r,this.#i]}#d(t){return this.#t.map(s=>{if(typeof s=="string")throw new Error("string type in extglob ast??");const[r,n,i,o]=s.toRegExpSource(t);return this.#i=this.#i||o,r}).filter(s=>!(this.isStart()&&this.isEnd())||!!s).join("|")}static#p(t,s,r=!1){let n=!1,i="",o=!1;for(let a=0;a<t.length;a++){const l=t.charAt(a);if(n){n=!1,i+=(a1.has(l)?"\\":"")+l;continue}if(l==="\\"){a===t.length-1?i+="\\\\":n=!0;continue}if(l==="["){const[c,h,u,d]=s1(t,a);if(u){i+=c,o=o||h,a+=u-1,s=s||d;continue}}if(l==="*"){r&&t==="*"?i+=hf:i+=cf,s=!0;continue}if(l==="?"){i+=Fh,s=!0;continue}i+=l1(l)}return[i,ui(t),!!s,o]}}const c1=(e,{windowsPathsNoEscape:t=!1}={})=>t?e.replace(/[?*()[\]]/g,"[$&]"):e.replace(/[?*()[\]\\]/g,"\\$&");var Hl={};const Ut=(e,t,s={})=>($a(t),!s.nocomment&&t.charAt(0)==="#"?!1:new el(t,s).match(e)),h1=/^\*+([^+@!?\*\[\(]*)$/,u1=e=>t=>!t.startsWith(".")&&t.endsWith(e),d1=e=>t=>t.endsWith(e),f1=e=>(e=e.toLowerCase(),t=>!t.startsWith(".")&&t.toLowerCase().endsWith(e)),p1=e=>(e=e.toLowerCase(),t=>t.toLowerCase().endsWith(e)),g1=/^\*+\.\*+$/,m1=e=>!e.startsWith(".")&&e.includes("."),b1=e=>e!=="."&&e!==".."&&e.includes("."),v1=/^\.\*+$/,y1=e=>e!=="."&&e!==".."&&e.startsWith("."),_1=/^\*+$/,w1=e=>e.length!==0&&!e.startsWith("."),x1=e=>e.length!==0&&e!=="."&&e!=="..",k1=/^\?+([^+@!?\*\[\(]*)?$/,S1=([e,t=""])=>{const s=Um([e]);return t?(t=t.toLowerCase(),r=>s(r)&&r.toLowerCase().endsWith(t)):s},C1=([e,t=""])=>{const s=Fm([e]);return t?(t=t.toLowerCase(),r=>s(r)&&r.toLowerCase().endsWith(t)):s},E1=([e,t=""])=>{const s=Fm([e]);return t?r=>s(r)&&r.endsWith(t):s},$1=([e,t=""])=>{const s=Um([e]);return t?r=>s(r)&&r.endsWith(t):s},Um=([e])=>{const t=e.length;return s=>s.length===t&&!s.startsWith(".")},Fm=([e])=>{const t=e.length;return s=>s.length===t&&s!=="."&&s!==".."},jm=typeof process=="object"&&process?typeof Hl=="object"&&Hl&&Hl.__MINIMATCH_TESTING_PLATFORM__||process.platform:"posix",uf={win32:{sep:"\\"},posix:{sep:"/"}},T1=jm==="win32"?uf.win32.sep:uf.posix.sep;Ut.sep=T1;const Pe=Symbol("globstar **");Ut.GLOBSTAR=Pe;const A1="[^/]",O1=A1+"*?",R1="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",I1="(?:(?!(?:\\/|^)\\.).)*?",M1=(e,t={})=>s=>Ut(s,e,t);Ut.filter=M1;const Ie=(e,t={})=>Object.assign({},e,t),D1=e=>{if(!e||typeof e!="object"||!Object.keys(e).length)return Ut;const t=Ut;return Object.assign((r,n,i={})=>t(r,n,Ie(e,i)),{Minimatch:class extends t.Minimatch{constructor(n,i={}){super(n,Ie(e,i))}static defaults(n){return t.defaults(Ie(e,n)).Minimatch}},AST:class extends t.AST{constructor(n,i,o={}){super(n,i,Ie(e,o))}static fromGlob(n,i={}){return t.AST.fromGlob(n,Ie(e,i))}},unescape:(r,n={})=>t.unescape(r,Ie(e,n)),escape:(r,n={})=>t.escape(r,Ie(e,n)),filter:(r,n={})=>t.filter(r,Ie(e,n)),defaults:r=>t.defaults(Ie(e,r)),makeRe:(r,n={})=>t.makeRe(r,Ie(e,n)),braceExpand:(r,n={})=>t.braceExpand(r,Ie(e,n)),match:(r,n,i={})=>t.match(r,n,Ie(e,i)),sep:t.sep,GLOBSTAR:Pe})};Ut.defaults=D1;const Hm=(e,t={})=>($a(e),t.nobrace||!/\{(?:(?!\{).)*\}/.test(e)?[e]:Jk(e));Ut.braceExpand=Hm;const P1=(e,t={})=>new el(e,t).makeRe();Ut.makeRe=P1;const L1=(e,t,s={})=>{const r=new el(t,s);return e=e.filter(n=>r.match(n)),r.options.nonull&&!e.length&&e.push(t),e};Ut.match=L1;const df=/[?*]|[+@!]\(.*?\)|\[|\]/,N1=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");class el{options;set;pattern;windowsPathsNoEscape;nonegate;negate;comment;empty;preserveMultipleSlashes;partial;globSet;globParts;nocase;isWindows;platform;windowsNoMagicRoot;regexp;constructor(t,s={}){$a(t),s=s||{},this.options=s,this.pattern=t,this.platform=s.platform||jm,this.isWindows=this.platform==="win32",this.windowsPathsNoEscape=!!s.windowsPathsNoEscape||s.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!s.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!s.nonegate,this.comment=!1,this.empty=!1,this.partial=!!s.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=s.windowsNoMagicRoot!==void 0?s.windowsNoMagicRoot:!!(this.isWindows&&this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(const t of this.set)for(const s of t)if(typeof s!="string")return!0;return!1}debug(...t){}make(){const t=this.pattern,s=this.options;if(!s.nocomment&&t.charAt(0)==="#"){this.comment=!0;return}if(!t){this.empty=!0;return}this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],s.debug&&(this.debug=(...i)=>console.error(...i)),this.debug(this.pattern,this.globSet);const r=this.globSet.map(i=>this.slashSplit(i));this.globParts=this.preprocess(r),this.debug(this.pattern,this.globParts);let n=this.globParts.map((i,o,a)=>{if(this.isWindows&&this.windowsNoMagicRoot){const l=i[0]===""&&i[1]===""&&(i[2]==="?"||!df.test(i[2]))&&!df.test(i[3]),c=/^[a-z]:/i.test(i[0]);if(l)return[...i.slice(0,4),...i.slice(4).map(h=>this.parse(h))];if(c)return[i[0],...i.slice(1).map(h=>this.parse(h))]}return i.map(l=>this.parse(l))});if(this.debug(this.pattern,n),this.set=n.filter(i=>i.indexOf(!1)===-1),this.isWindows)for(let i=0;i<this.set.length;i++){const o=this.set[i];o[0]===""&&o[1]===""&&this.globParts[i][2]==="?"&&typeof o[3]=="string"&&/^[a-z]:$/i.test(o[3])&&(o[2]="?")}this.debug(this.pattern,this.set)}preprocess(t){if(this.options.noglobstar)for(let r=0;r<t.length;r++)for(let n=0;n<t[r].length;n++)t[r][n]==="**"&&(t[r][n]="*");const{optimizationLevel:s=1}=this.options;return s>=2?(t=this.firstPhasePreProcess(t),t=this.secondPhasePreProcess(t)):s>=1?t=this.levelOneOptimize(t):t=this.adjascentGlobstarOptimize(t),t}adjascentGlobstarOptimize(t){return t.map(s=>{let r=-1;for(;(r=s.indexOf("**",r+1))!==-1;){let n=r;for(;s[n+1]==="**";)n++;n!==r&&s.splice(r,n-r)}return s})}levelOneOptimize(t){return t.map(s=>(s=s.reduce((r,n)=>{const i=r[r.length-1];return n==="**"&&i==="**"?r:n===".."&&i&&i!==".."&&i!=="."&&i!=="**"?(r.pop(),r):(r.push(n),r)},[]),s.length===0?[""]:s))}levelTwoFileOptimize(t){Array.isArray(t)||(t=this.slashSplit(t));let s=!1;do{if(s=!1,!this.preserveMultipleSlashes){for(let n=1;n<t.length-1;n++){const i=t[n];n===1&&i===""&&t[0]===""||(i==="."||i==="")&&(s=!0,t.splice(n,1),n--)}t[0]==="."&&t.length===2&&(t[1]==="."||t[1]==="")&&(s=!0,t.pop())}let r=0;for(;(r=t.indexOf("..",r+1))!==-1;){const n=t[r-1];n&&n!=="."&&n!==".."&&n!=="**"&&(s=!0,t.splice(r-1,2),r-=2)}}while(s);return t.length===0?[""]:t}firstPhasePreProcess(t){let s=!1;do{s=!1;for(let r of t){let n=-1;for(;(n=r.indexOf("**",n+1))!==-1;){let o=n;for(;r[o+1]==="**";)o++;o>n&&r.splice(n+1,o-n);let a=r[n+1];const l=r[n+2],c=r[n+3];if(a!==".."||!l||l==="."||l===".."||!c||c==="."||c==="..")continue;s=!0,r.splice(n,1);const h=r.slice(0);h[n]="**",t.push(h),n--}if(!this.preserveMultipleSlashes){for(let o=1;o<r.length-1;o++){const a=r[o];o===1&&a===""&&r[0]===""||(a==="."||a==="")&&(s=!0,r.splice(o,1),o--)}r[0]==="."&&r.length===2&&(r[1]==="."||r[1]==="")&&(s=!0,r.pop())}let i=0;for(;(i=r.indexOf("..",i+1))!==-1;){const o=r[i-1];if(o&&o!=="."&&o!==".."&&o!=="**"){s=!0;const l=i===1&&r[i+1]==="**"?["."]:[];r.splice(i-1,2,...l),r.length===0&&r.push(""),i-=2}}}}while(s);return t}secondPhasePreProcess(t){for(let s=0;s<t.length-1;s++)for(let r=s+1;r<t.length;r++){const n=this.partsMatch(t[s],t[r],!this.preserveMultipleSlashes);if(n){t[s]=[],t[r]=n;break}}return t.filter(s=>s.length)}partsMatch(t,s,r=!1){let n=0,i=0,o=[],a="";for(;n<t.length&&i<s.length;)if(t[n]===s[i])o.push(a==="b"?s[i]:t[n]),n++,i++;else if(r&&t[n]==="**"&&s[i]===t[n+1])o.push(t[n]),n++;else if(r&&s[i]==="**"&&t[n]===s[i+1])o.push(s[i]),i++;else if(t[n]==="*"&&s[i]&&(this.options.dot||!s[i].startsWith("."))&&s[i]!=="**"){if(a==="b")return!1;a="a",o.push(t[n]),n++,i++}else if(s[i]==="*"&&t[n]&&(this.options.dot||!t[n].startsWith("."))&&t[n]!=="**"){if(a==="a")return!1;a="b",o.push(s[i]),n++,i++}else return!1;return t.length===s.length&&o}parseNegate(){if(this.nonegate)return;const t=this.pattern;let s=!1,r=0;for(let n=0;n<t.length&&t.charAt(n)==="!";n++)s=!s,r++;r&&(this.pattern=t.slice(r)),this.negate=s}matchOne(t,s,r=!1){const n=this.options;if(this.isWindows){const b=typeof t[0]=="string"&&/^[a-z]:$/i.test(t[0]),v=!b&&t[0]===""&&t[1]===""&&t[2]==="?"&&/^[a-z]:$/i.test(t[3]),x=typeof s[0]=="string"&&/^[a-z]:$/i.test(s[0]),w=!x&&s[0]===""&&s[1]===""&&s[2]==="?"&&typeof s[3]=="string"&&/^[a-z]:$/i.test(s[3]),S=v?3:b?0:void 0,k=w?3:x?0:void 0;if(typeof S=="number"&&typeof k=="number"){const[A,I]=[t[S],s[k]];A.toLowerCase()===I.toLowerCase()&&(s[k]=A,k>S?s=s.slice(k):S>k&&(t=t.slice(S)))}}const{optimizationLevel:i=1}=this.options;i>=2&&(t=this.levelTwoFileOptimize(t)),this.debug("matchOne",this,{file:t,pattern:s}),this.debug("matchOne",t.length,s.length);for(var o=0,a=0,l=t.length,c=s.length;o<l&&a<c;o++,a++){this.debug("matchOne loop");var h=s[a],u=t[o];if(this.debug(s,h,u),h===!1)return!1;if(h===Pe){this.debug("GLOBSTAR",[s,h,u]);var d=o,f=a+1;if(f===c){for(this.debug("** at the end");o<l;o++)if(t[o]==="."||t[o]===".."||!n.dot&&t[o].charAt(0)===".")return!1;return!0}for(;d<l;){var p=t[d];if(this.debug(`
globstar while`,t,d,s,f,p),this.matchOne(t.slice(d),s.slice(f),r))return this.debug("globstar found match!",d,l,p),!0;if(p==="."||p===".."||!n.dot&&p.charAt(0)==="."){this.debug("dot detected!",t,d,s,f);break}this.debug("globstar swallow a segment, and continue"),d++}return!!(r&&(this.debug(`
>>> no match, partial?`,t,d,s,f),d===l))}let b;if(typeof h=="string"?(b=u===h,this.debug("string match",h,u,b)):(b=h.test(u),this.debug("pattern match",h,u,b)),!b)return!1}if(o===l&&a===c)return!0;if(o===l)return r;if(a===c)return o===l-1&&t[o]==="";throw new Error("wtf?")}braceExpand(){return Hm(this.pattern,this.options)}parse(t){$a(t);const s=this.options;if(t==="**")return Pe;if(t==="")return"";let r,n=null;(r=t.match(_1))?n=s.dot?x1:w1:(r=t.match(h1))?n=(s.nocase?s.dot?p1:f1:s.dot?d1:u1)(r[1]):(r=t.match(k1))?n=(s.nocase?s.dot?C1:S1:s.dot?E1:$1)(r):(r=t.match(g1))?n=s.dot?b1:m1:(r=t.match(v1))&&(n=y1);const i=re.fromGlob(t,this.options).toMMPattern();return n&&typeof i=="object"&&Reflect.defineProperty(i,"test",{value:n}),i}makeRe(){if(this.regexp||this.regexp===!1)return this.regexp;const t=this.set;if(!t.length)return this.regexp=!1,this.regexp;const s=this.options,r=s.noglobstar?O1:s.dot?R1:I1,n=new Set(s.nocase?["i"]:[]);let i=t.map(l=>{const c=l.map(h=>{if(h instanceof RegExp)for(const u of h.flags.split(""))n.add(u);return typeof h=="string"?N1(h):h===Pe?Pe:h._src});return c.forEach((h,u)=>{const d=c[u+1],f=c[u-1];h!==Pe||f===Pe||(f===void 0?d!==void 0&&d!==Pe?c[u+1]="(?:\\/|"+r+"\\/)?"+d:c[u]=r:d===void 0?c[u-1]=f+"(?:\\/|"+r+")?":d!==Pe&&(c[u-1]=f+"(?:\\/|\\/"+r+"\\/)"+d,c[u+1]=Pe))}),c.filter(h=>h!==Pe).join("/")}).join("|");const[o,a]=t.length>1?["(?:",")"]:["",""];i="^"+o+i+a+"$",this.negate&&(i="^(?!"+i+").+$");try{this.regexp=new RegExp(i,[...n].join(""))}catch{this.regexp=!1}return this.regexp}slashSplit(t){return this.preserveMultipleSlashes?t.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(t)?["",...t.split(/\/+/)]:t.split(/\/+/)}match(t,s=this.partial){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return t==="";if(t==="/"&&s)return!0;const r=this.options;this.isWindows&&(t=t.split("\\").join("/"));const n=this.slashSplit(t);this.debug(this.pattern,"split",n);const i=this.set;this.debug(this.pattern,"set",i);let o=n[n.length-1];if(!o)for(let a=n.length-2;!o&&a>=0;a--)o=n[a];for(let a=0;a<i.length;a++){const l=i[a];let c=n;if(r.matchBase&&l.length===1&&(c=[o]),this.matchOne(c,l,s))return r.flipNegate?!0:!this.negate}return r.flipNegate?!1:this.negate}static defaults(t){return Ut.defaults(t).Minimatch}}Ut.AST=re;Ut.Minimatch=el;Ut.escape=c1;Ut.unescape=ui;class yr extends T{constructor(t,s){super(R.SchemaValidateError,`Invalid schema for ${t}: ${s}`)}}class B1{constructor(){this.flavourSchemaMap=new Map,this.safeValidate=(t,s,r)=>{try{return this.validate(t,s,r),!0}catch{return!1}},this.validate=(t,s,r)=>{const n=this.flavourSchemaMap.get(t);if(!n)throw new yr(t,Pl);const i=()=>{r?.forEach(a=>{const l=this.flavourSchemaMap.get(a);if(!l)throw new yr(a,Pl);this.validateSchema(l,n)})};if(n.model.role==="root"){if(s)throw new yr(n.model.flavour,"Root block cannot have parent.");i();return}if(!s)throw new yr(n.model.flavour,"None root block must have parent.");const o=this.flavourSchemaMap.get(s);if(!o)throw new yr(s,Pl);this.validateSchema(n,o),i()}}get(t){return this.flavourSchemaMap.get(t)}get versions(){return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map(t=>[t.model.flavour,t.version]))}_matchFlavour(t,s){return Ut(t,s)||Ut(s,t)}_matchFlavourOrRole(t,s,r,n){const i=t.startsWith("@"),o=s.startsWith("@");return i&&o?t===s:i?t===`@${n}`:o?s===`@${r}`:this._matchFlavour(t,s)}_validateParent(t,s){const r=t.model.flavour,n=s.model.flavour,i=t.model.role,o=s.model.role,a=t.model.parent||["*"];return(s.model.children||["*"]).some(c=>a.some(h=>c==="*"&&h==="*"?!0:c==="*"?this._matchFlavourOrRole(h,n,i,o):h==="*"?this._matchFlavourOrRole(r,c,i,o):this._matchFlavourOrRole(r,c,i,o)&&this._matchFlavourOrRole(h,n,i,o)))}_validateRole(t,s){const r=t.model.role,n=t.model.flavour,i=s.model.flavour;if(r==="root")throw new yr(n,`Root block cannot have parent: ${i}.`)}isValid(t,s){const r=this.flavourSchemaMap.get(t),n=this.flavourSchemaMap.get(s);if(!r||!n)return!1;try{return this.validateSchema(r,n),!0}catch{return!1}}register(t){return t.forEach(s=>{Om.parse(s),this.flavourSchemaMap.set(s.model.flavour,s)}),this}toJSON(){return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map(t=>[t.model.flavour,{role:t.model.role,parent:t.model.parent,children:t.model.children}]))}validateSchema(t,s){if(this._validateRole(t,s),!this._validateParent(t,s))throw new yr(t.model.flavour,`Block cannot have parent: ${s.model.flavour}.`)}}const z1="modulepreload",V1=function(e){return"/"+e},ff={},U1=function(t,s,r){let n=Promise.resolve();if(s&&s.length>0){let o=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");n=o(s.map(c=>{if(c=V1(c),c in ff)return;ff[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":z1,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function F1(e,t){var s;let r=1;const n=(s=t.split(".").at(-1))!=null?s:"";let i=t.replace(new RegExp(`.${n}$`),` (${r}).${n}`);for(;e.has(i);)i=t.replace(new RegExp(`.${n}$`),` (${r}).${n}`),r++;return i}class j1{constructor(t){this.uploadingAssetsMap=new Map,this._assetsMap=new Map,this._names=new Set,this._pathBlobIdMap=new Map,this._blob=t.blob}cleanup(){this._assetsMap.clear(),this._names.clear()}getAssets(){return this._assetsMap}getPathBlobIdMap(){return this._pathBlobIdMap}isEmpty(){return this._assetsMap.size===0}async readFromBlob(t){if(this._assetsMap.has(t))return;const s=await this._blob.get(t);if(!s){console.error(`Blob ${t} not found in blob manager`);return}if(s instanceof File){let o=s;if(this._names.has(s.name)){const a=F1(this._names,s.name);o=new File([s],a,{type:s.type})}this._assetsMap.set(t,o),this._names.add(o.name);return}if(s.type&&s.type!=="application/octet-stream"){this._assetsMap.set(t,s);return}const r=await s.arrayBuffer(),i=await(await U1(()=>import("./core-BZDMbBiB.js"),__vite__mapDeps([0,1]))).fileTypeFromBuffer(r);if(i){const o=new File([s],"",{type:i.mime});this._assetsMap.set(t,o);return}this._assetsMap.set(t,s)}async writeToBlob(t){const s=this._assetsMap.get(t);if(!s)throw new T(R.TransformerError,`Blob ${t} not found in assets manager`);await this._blob.set(t,s)}}function Nc(e){return e instanceof Ve?{[Ni]:!0,value:e.getValue()}:e instanceof zs?{[am]:!0,delta:e.yText.toDelta()}:Array.isArray(e)?e.map(Nc):en(e)?Object.fromEntries(Object.entries(e).map(([t,s])=>[t,Nc(s)])):e}function Bc(e){return Array.isArray(e)?e.map(Bc):typeof e=="object"&&e!=null?Reflect.has(e,Ni)?new Ve(Reflect.get(e,"value")):Reflect.has(e,am)?new zs(Reflect.get(e,"delta")):Object.fromEntries(Object.entries(e).map(([t,s])=>[t,Bc(s)])):e}class H1{constructor(t){this.transformerConfigs=t,this._internal=kn}_propsFromSnapshot(t){return Object.fromEntries(Object.entries(t).map(([s,r])=>[s,Bc(r)]))}_propsToSnapshot(t){let s;return t instanceof lr?s=fn(t):s=t,Object.fromEntries(s.keys.map(r=>{const n=s.props[r];return[r,Nc(n)]}))}fromSnapshot({json:t}){const{flavour:s,id:r,version:n,props:i}=t,o=this._propsFromSnapshot(i);return{id:r,flavour:s,version:n??-1,props:o}}toSnapshot({model:t}){const{id:s,flavour:r,version:n}=t,i=this._propsToSnapshot(t);return{id:s,flavour:r,version:n,props:i}}}class jh{constructor(t){this.data=t}get content(){return this.data.content}get docId(){return this.data.pageId}get workspaceId(){return this.data.workspaceId}static fromModels(t,s){const r=s.map(n=>n instanceof lr?fn(n):n);return new jh({content:r,workspaceId:t.workspace.id,pageId:t.id})}}const Qi=ar({type:As("block"),id:me(),flavour:me(),version:po().optional(),props:Lh(gm()),children:mm(()=>Qi.array())}),pf=ar({type:As("slice"),content:Qi.array(),workspaceId:me(),pageId:me()}),W1=ar({id:me(),title:me(),createDate:po(),tags:tl(me())}),gf=ar({type:As("page"),meta:W1,blocks:Qi}),Y1=100;class q1{constructor({blobCRUD:t,schema:s,docCRUD:r,middlewares:n=[]}){this._adapterConfigs=new Map,this._transformerConfigs=new Map,this._disposables=new Yr,this._slots={beforeImport:new at,afterImport:new at,beforeExport:new at,afterExport:new at},this.blockToSnapshot=i=>{try{const o=i instanceof lr?fn(i):i,a=this._blockToSnapshot(o);return a?(Qi.parse(a),a):void 0}catch(o){console.error("Error when transforming block to snapshot:"),console.error(o);return}},this.docToSnapshot=i=>{try{this._slots.beforeExport.next({type:"page",page:i});const o=i.root,a=this._exportDocMeta(i);if(!o)throw new T(R.TransformerError,"Root block not found in doc");const l=this.blockToSnapshot(fn(o));if(!l)return;const c={type:"page",meta:a,blocks:l};return this._slots.afterExport.next({type:"page",page:i,snapshot:c}),gf.parse(c),c}catch(o){console.error("Error when transforming doc to snapshot:"),console.error(o);return}},this.sliceToSnapshot=i=>{try{this._slots.beforeExport.next({type:"slice",slice:i});const{content:o,pageId:a,workspaceId:l}=i.data,c=[];for(const u of o){const d=this.blockToSnapshot(u);if(!d)return;c.push(d)}const h={type:"slice",workspaceId:l,pageId:a,content:c};return this._slots.afterExport.next({type:"slice",slice:i,snapshot:h}),pf.parse(h),h}catch(o){console.error("Error when transforming slice to snapshot:"),console.error(o);return}},this.snapshotToBlock=async(i,o,a,l)=>{try{Qi.parse(i);const c=await this._snapshotToBlock(i,o,a,l);return c||void 0}catch(c){console.error("Error when transforming snapshot to block:"),console.error(c);return}},this.snapshotToDoc=async i=>{try{this._slots.beforeImport.next({type:"page",snapshot:i}),gf.parse(i);const{meta:o,blocks:a}=i,l=this.docCRUD.create(o.id);return l.load(),await this.snapshotToBlock(a,l),this._slots.afterImport.next({type:"page",snapshot:i,page:l}),l}catch(o){console.error("Error when transforming snapshot to doc:"),console.error(o);return}},this.snapshotToModelData=async i=>{try{const{children:o,flavour:a,props:l,id:c}=i,h=this._getSchema(a),u={id:c,flavour:a,props:l};return await this._getTransformer(h).fromSnapshot({json:u,assets:this._assetsManager,children:o})}catch(o){console.error("Error when transforming snapshot to model data:"),console.error(o);return}},this.snapshotToSlice=async(i,o,a,l)=>{var c;try{pf.parse(i),this._slots.beforeImport.next({type:"slice",snapshot:i});const{content:h,workspaceId:u,pageId:d}=i,f={id:"temporary-root",flavour:"affine:page",props:{},type:"block",children:h};for(const S of h)this._triggerBeforeImportEvent(S,a,l);const p=[];this._flattenSnapshot(f,p,a,l);const b=await this._convertFlatSnapshots(p),v=h[0];if(v&&o.hasBlock(v.id)){const S=h.map(I=>{var U;return(U=o.getBlock(I.id))==null?void 0:U.model}).filter(Boolean),k=a?(c=o.getBlock(a))==null?void 0:c.model:void 0;if(!k)throw new T(R.TransformerError,"Parent block not found in doc when moving slice");const A=l!==void 0?k.children[l]:null;o.moveBlocks(S,k,A)}else await this._insertBlockTree(b.children,o,a,l);const x=b.children.map(S=>o.getModelById(S.draft.id)).filter(S=>S!==null).map(S=>fn(S)),w=new jh({content:x,workspaceId:u,pageId:d});return this._slots.afterImport.next({type:"slice",snapshot:i,slice:w}),w}catch(h){console.error("Error when transforming snapshot to slice:"),console.error(h);return}},this.walk=(i,o)=>{const a=l=>{try{o(l)}catch(c){console.error("Error when walking snapshot:"),console.error(c)}l.children&&l.children.forEach(a)};a(i.blocks)},this._assetsManager=new j1({blob:t}),this._schema=s,this._docCRUD=r,n.forEach(i=>{const o=i({slots:this._slots,docCRUD:this._docCRUD,assetsManager:this._assetsManager,adapterConfigs:this._adapterConfigs,transformerConfigs:this._transformerConfigs});o&&this._disposables.add(o)})}get adapterConfigs(){return this._adapterConfigs}get assets(){return this._assetsManager.getAssets()}get assetsManager(){return this._assetsManager}get schema(){return this._schema}get docCRUD(){return this._docCRUD}_blockToSnapshot(t){this._slots.beforeExport.next({type:"block",model:t});const s=this._getSchema(t.flavour),n=this._getTransformer(s).toSnapshot({model:t,assets:this._assetsManager}),i=t.children.map(a=>this._blockToSnapshot(a)).filter(Boolean),o={type:"block",...n,children:i};return this._slots.afterExport.next({type:"block",model:t,snapshot:o}),o}async _convertFlatSnapshots(t){const s=[];for(const i of t){const o=await this._convertSnapshotToDraftModel(i);o&&(o.id=i.snapshot.id),s.push({draft:o,snapshot:i.snapshot,parentId:i.parentId,index:i.index})}const r=s.filter(i=>!!i.draft);return this._rebuildBlockTree(r)}async _convertSnapshotToDraftModel(t){try{const{children:s,flavour:r}=t.snapshot,n=this._getSchema(r),i=this._getTransformer(n),{props:o}=await i.fromSnapshot({json:{id:t.snapshot.id,flavour:t.snapshot.flavour,props:t.snapshot.props},assets:this._assetsManager,children:s});return{id:t.snapshot.id,flavour:t.snapshot.flavour,children:[],props:o}}catch(s){console.error("Error when transforming snapshot to model data:"),console.error(s);return}}_exportDocMeta(t){const s=t.meta;if(!s)throw new T(R.TransformerError,"Doc meta not found");return{id:s.id,title:s.title,createDate:s.createDate,tags:[]}}_flattenSnapshot(t,s,r,n){s.push({snapshot:t,parentId:r,index:n}),t.children&&t.children.forEach((i,o)=>{this._flattenSnapshot(i,s,t.id,o)})}_getSchema(t){const s=this.schema.flavourSchemaMap.get(t);if(!s)throw new T(R.TransformerError,`Flavour schema not found for ${t}`);return s}_getTransformer(t){var s,r;return(r=(s=t.transformer)==null?void 0:s.call(t,this._transformerConfigs))!=null?r:new H1(this._transformerConfigs)}async _insertBlockTree(t,s,r,n,i=0){var o;for(let a=0;a<t.length;a++){const l=t[a],{draft:c}=l,{id:h,flavour:u,props:d}=c,f=n!==void 0?n+a:void 0;s.addBlock(u,{id:h,...d},r,f);const p=(o=s.getBlock(h))==null?void 0:o.model;if(!p)throw new T(R.TransformerError,`Block not found by id ${h}`);this._slots.afterImport.next({type:"block",model:p,snapshot:l.snapshot}),i++,i%Y1===0&&await q_(),l.children.length>0&&(i=await this._insertBlockTree(l.children,s,h,void 0,i))}return i}_rebuildBlockTree(t){const s=new Map;t.forEach(({draft:n,snapshot:i})=>{s.set(n.id,{draft:n,snapshot:i,children:[]})});const r=s.get(t[0].draft.id);if(t.forEach(({draft:n,parentId:i,index:o})=>{const a=s.get(n.id);if(a&&i){const l=s.get(i);l&&o!==void 0&&(l.children[o]=a)}}),!r)throw new Error("No root node found in the tree");return r}async _snapshotToBlock(t,s,r,n){var i,o;this._triggerBeforeImportEvent(t,r,n);const a=[];this._flattenSnapshot(t,a,r,n);const l=await this._convertFlatSnapshots(a);return await this._insertBlockTree([l],s,r,n),(o=(i=s.getBlock(t.id))==null?void 0:i.model)!=null?o:null}_triggerBeforeImportEvent(t,s,r){const n=(i,o,a)=>{this._slots.beforeImport.next({type:"block",snapshot:i,parent:o,index:a}),i.children&&i.children.forEach((l,c)=>{n(l,i.id,c)})};n(t,s,r)}reset(){this._assetsManager.cleanup()}[Symbol.dispose](){this._disposables.dispose(),this._assetsManager.cleanup()}}class Z1{constructor(t,s){this._yBlocks=t,this._schema=s}get root(){let t=null;return this._yBlocks.forEach(s=>{const r=s.get("sys:flavour"),n=this._schema.flavourSchemaMap.get(r);n&&n.model.role==="root"&&(t=s.get("sys:id"))}),t}_getSiblings(t,s){const r=this.getParent(t);if(!r)return null;const n=this._yBlocks.get(r);if(!n)return null;const o=n.get("sys:children").toArray().indexOf(t);return o===-1?null:s(o,n)}addBlock(t,s,r={},n,i){var o,a,l,c,h;const u=this._schema.flavourSchemaMap.get(s);if(!u)throw new T(R.ModelCRUDError,`schema for flavour: ${s} not found`);if(this._yBlocks.has(t))throw new T(R.ModelCRUDError,`Should not add existing block: ${t}`);const f=n?(o=this._yBlocks.get(n))==null?void 0:o.get("sys:flavour"):void 0;this._schema.validate(s,f);const p=new Vt;this._yBlocks.set(t,p);const b=u.version,v=(a=r.children)==null?void 0:a.map(Q=>typeof Q=="string"?Q:Q.id);p.set("sys:id",t),p.set("sys:flavour",s),p.set("sys:version",b),p.set("sys:children",Pt.from(v??[]));const w={...(h=(c=(l=u.model).props)==null?void 0:c.call(l,kn))!=null?h:{},...r};if(delete w.id,delete w.flavour,delete w.children,u.model.isFlatData){const Q=(nt,F)=>{en(nt)?Object.entries(nt).forEach(([gt,X])=>{const ft=F?`${F}.${gt}`:gt;Q(X,ft)}):p.set(`prop:${F}`,Ne(nt))};Q(w,"")}else Object.entries(w).forEach(([Q,nt])=>{nt!==void 0&&p.set(`prop:${Q}`,Ne(nt))});const k=n??(u.model.role==="root"?null:this.root);if(!k)return;const A=this._yBlocks.get(k);if(!A)return;const I=A.get("sys:children"),U=i!=null?i>I.length?I.length:i:I.length;I.insert(U,[t])}deleteBlock(t,s={deleteChildren:!0}){const{bringChildrenTo:r,deleteChildren:n}=s;if(r&&n){console.error("Cannot bring children to another block and delete them at the same time");return}const i=this._yBlocks.get(t);if(!i)return;const o=i.get("sys:children"),a=this.getParent(t);if(!a)return;const c=this._yBlocks.get(a).get("sys:children"),h=c.toArray().indexOf(t);h>-1&&c.delete(h,1),(()=>{if(r){(()=>{if(!r)throw new T(R.ModelCRUDError,"bringChildrenTo is not provided when deleting block");const f=this._yBlocks.get(r);if(!f)return;const p=f.get("sys:flavour");if(o.forEach(x=>{const w=this._yBlocks.get(x);w&&this._schema.validate(w.get("sys:flavour"),p)}),r===a){c.insert(h,o.toArray());return}const b=this._yBlocks.get(r);if(!b)return;b.get("sys:children").push(o.toArray())})();return}if(n){const d=f=>{this._yBlocks.get(f).get("sys:children").forEach(v=>d(v)),this._yBlocks.delete(f)};o.forEach(f=>d(f))}})(),this._yBlocks.delete(t)}getNext(t){return this._getSiblings(t,(s,r)=>{var n;return(n=r.get("sys:children").toArray().at(s+1))!=null?n:null})}getParent(t){const s=this.root;if(!s||s===t)return null;const r=n=>{const i=this._yBlocks.get(n);if(!i)return null;const o=i.get("sys:children");for(const a of o.toArray()){if(a===t)return n;const l=r(a);if(l!=null)return l}return null};return r(s)}getPrev(t){return this._getSiblings(t,(s,r)=>{var n;return(n=r.get("sys:children").toArray().at(s-1))!=null?n:null})}moveBlocks(t,s,r=null,n=!0){if(t.length>1&&r&&t.includes(r)){console.error("Cannot move blocks when the target sibling is in the blocks to move");return}if(t.length===1&&r===t[0])return;if(t.includes(s)){console.error("Cannot move blocks when the new parent is in the blocks to move");return}const i=new Map,o=this._yBlocks.get(s);if(!o)return;const a=o.get("sys:flavour");t.forEach(c=>{const h=this.getParent(c);if(!h)return;const u=this._yBlocks.get(c);if(!u)return;this._schema.validate(u.get("sys:flavour"),a);const d=i.get(h);if(!d){i.set(h,[c]);return}const f=d[d.length-1];if(this.getNext(f)!==c)throw new T(R.ModelCRUDError,"The blocks to move are not contiguous under their parent");d.push(c)});let l=0;Array.from(i.entries()).forEach(([c,h],u)=>{const d=this._yBlocks.get(s);if(!d)return;const f=d.get("sys:children"),p=this._yBlocks.get(c);if(!p)return;const b=p.get("sys:children"),v=b.toArray().findIndex(w=>w===h[0]);b.delete(v,h.length),(()=>{if(!(u===0)){l++;return}if(!r){l=f.length;return}let S=f.toArray().findIndex(k=>k===r);S===-1&&(console.error("Target sibling not found, just insert to the end"),S=f.length),l=n?S:S+1})(),f.insert(l,h)})}updateBlockChildren(t,s){const r=this._yBlocks.get(t);if(!r)return;const n=r.get("sys:children");n.delete(0,n.length),n.push(s)}}function G1(e,t,s,r){var n,i,o;const a=(o=(i=(n=e.model).props)==null?void 0:i.call(n,kn))!=null?o:{};Object.entries(r).forEach(([l,c])=>{lm.has(l)||c!==void 0&&(t.props[l]=c)}),Object.entries(a).forEach(([l,c])=>{(!s.has(`prop:${l}`)||s.get(`prop:${l}`)===void 0)&&(t[l]=c)})}const X1=[Vm,Vh];class Wm{constructor({readonly:t,query:s,provider:r,extensions:n}){this.disposableGroup=new Yr,this._shouldTransact=!0,this._runQuery=a=>{Vk(this._query,a)},this._blocks=Kt({}),this._query={match:[],mode:"loose"},this._readonly=Kt(!1),this._isEmpty=Ur(()=>{var a,l;return(l=(a=this.root)==null?void 0:a.isEmpty())!=null?l:!0}),this.undo=()=>{if(this.readonly){console.error("cannot undo in readonly mode");return}this._history.undoManager.undo()},this.redo=()=>{if(this.readonly){console.error("cannot undo in readonly mode");return}this._history.undoManager.redo()},this.resetHistory=()=>this._history.undoManager.clear(),this.captureSync=()=>{this._history.undoManager.stopCapturing()},this._isDisposed=!1,this._subscribeToSlots=()=>{this.disposableGroup.add(this.slots.yBlockUpdated.subscribe(({type:a,id:l,isLocal:c})=>{switch(a){case"add":{this._onBlockAdded(l,c,!1);return}case"delete":{this._onBlockRemoved(l,c);return}}})),this.disposableGroup.add(this.slots.ready),this.disposableGroup.add(this.slots.blockUpdated),this.disposableGroup.add(this.slots.rootAdded),this.disposableGroup.add(this.slots.rootDeleted)},this._handleYEvents=a=>{a.forEach(l=>this._handleYEvent(l))},this.slots={ready:new at,rootAdded:new at,rootDeleted:new at,blockUpdated:new at,yBlockUpdated:new at},this._schema=new B1;const i=new Ea;i.addImpl(Im,()=>this),X1.forEach(a=>{a.setup(i)});const o=n??[];this.userExtensions=o,o.forEach(a=>{a.setup(i)}),this._provider=i.provider(void 0,r),this._provider.getAll(Nm).forEach(a=>{this._schema.register([a])}),this._doc=this._provider.get(Zk),this._crud=new Z1(this._yBlocks,this._schema),t!==void 0&&(this._readonly.value=t),s&&(this._query=s),this._yBlocks.observeDeep(this._handleYEvents),this._yBlocks.forEach((a,l)=>{this._handleYBlockAdd(l,!1),!(l in this._blocks.peek())&&this._onBlockAdded(l,!1,!0)}),this._subscribeToSlots()}get id(){return this._doc.id}get _yBlocks(){return this._doc.yBlocks}get awarenessStore(){return this._doc.awarenessStore}get provider(){return this._provider}get blobSync(){return this.workspace.blobSync}get doc(){return this._doc}get blocks(){return this._blocks}get blockSize(){return Object.values(this._blocks.peek()).length}get canRedo(){return this.readonly?!1:this._history.canRedo}get canUndo(){return this.readonly?!1:this._history.canUndo}transact(t,s=this._shouldTransact){const r=this._doc.spaceDoc;r.transact(()=>{try{t()}catch(n){console.error(`An error occurred while Y.doc ${r.guid} transacting:`),console.error(n)}},s?this.spaceDoc.clientID:null)}withoutTransact(t){this._shouldTransact=!1,t(),this._shouldTransact=!0}get workspace(){return this._doc.workspace}get history(){return this._history}get isEmpty(){return this._isEmpty.peek()}get isEmpty$(){return this._isEmpty}get loaded(){return this._doc.loaded}get meta(){return this._doc.meta}get readonly(){return this._readonly.value===!0}get readonly$(){return this._readonly}set readonly(t){this._readonly.value=t}get ready(){return this._doc.ready}get root(){var t,s;const r=this._crud.root;return r&&(s=(t=this.getBlock(r))==null?void 0:t.model)!=null?s:null}get rootDoc(){return this._doc.rootDoc}get schema(){return this._schema}get spaceDoc(){return this._doc.spaceDoc}get _history(){return this._provider.get(Vh)}_getSiblings(t,s){var r;const n=this.getParent(t);if(!n)return null;const i=typeof t=="string"?(r=this.getBlock(t))==null?void 0:r.model:t;if(!i)return null;const o=n.children.indexOf(i);return o===-1?null:s(n,o)}_onBlockAdded(t,s,r){try{if(t in this._blocks.peek())return;const n=this._yBlocks.get(t);if(!n){console.warn(`Could not find block with id ${t}`);return}const i={onChange:(a,l,c)=>{l&&a.model.propsUpdated.next({key:l}),this.slots.blockUpdated.next({type:"update",id:t,flavour:a.flavour,props:{key:l},isLocal:c})}},o=new Tk(this._schema,n,this,i);this._runQuery(o),this._blocks.value={...this._blocks.value,[t]:o},o.model.created.next(),o.model.role==="root"&&this.slots.rootAdded.next(t),this.slots.blockUpdated.next({type:"add",id:t,init:r,flavour:o.model.flavour,model:o.model,isLocal:s})}catch(n){console.error("An error occurred while adding block:"),console.error(n)}}_onBlockRemoved(t,s){var r,n;try{const i=this.getBlock(t);if(!i)return;i.model.role==="root"&&this.slots.rootDeleted.next(t),this.slots.blockUpdated.next({type:"delete",id:t,flavour:i.flavour,parent:(n=(r=this.getParent(i.model))==null?void 0:r.id)!=null?n:"",model:i.model,isLocal:s});const{[t]:o,...a}=this._blocks.peek();this._blocks.value=a,i.model.deleted.next(),i.model.dispose()}catch(i){console.error("An error occurred while removing block:"),console.error(i)}}addBlock(t,s={},r,n){var i;if(this.readonly)throw new T(R.ModelCRUDError,"cannot modify data in readonly mode");const o=(i=s.id)!=null?i:this._doc.workspace.idGenerator();return this.transact(()=>{this._crud.addBlock(o,t,{...s},typeof r=="string"?r:r?.id,n)}),o}addBlocks(t,s,r){const n=[];return t.forEach(i=>{var o;const a=this.addBlock(i.flavour,(o=i.blockProps)!=null?o:{},s,r);n.push(a),typeof r=="number"&&r++}),n}addSiblingBlocks(t,s,r="after"){var n,i;if(!s.length)return[];const o=this.getParent(t);if(!o)return[];const a=(n=o.children.findIndex(({id:h})=>h===t.id))!=null?n:0,l=r==="before"?a:a+1;if(s.length<=1){if(!((i=s[0])!=null&&i.flavour))return[];const{flavour:h,...u}=s[0];return[this.addBlock(h,u,o.id,l)]}const c=[];return s.forEach(h=>{const{flavour:u,...d}=h;u&&c.push({flavour:u,blockProps:d})}),this.addBlocks(c,o.id,l)}updateBlock(t,s){var r,n;if(this.readonly){console.error("cannot modify data in readonly mode");return}const i=typeof s=="function",o=typeof t=="string"?(r=this.getBlock(t))==null?void 0:r.model:t;if(!o)throw new T(R.ModelCRUDError,`updating block: ${t} not found`);if(!i){const c=this.getParent(o);this.schema.validate(o.flavour,c?.flavour,(n=s.children)==null?void 0:n.map(h=>h.flavour))}const a=this._yBlocks.get(o.id);if(!a)throw new T(R.ModelCRUDError,`updating block: ${o.id} not found`);const l=this.getBlock(o.id);l&&this.transact(()=>{if(i){s(),this._runQuery(l);return}s.children&&this._crud.updateBlockChildren(o.id,s.children.map(h=>h.id));const c=this.schema.flavourSchemaMap.get(o.flavour);if(!c)throw new T(R.ModelCRUDError,`schema for flavour: ${o.flavour} not found`);G1(c,o,a,s),this._runQuery(l)})}deleteBlock(t,s={deleteChildren:!0}){if(this.readonly){console.error("cannot modify data in readonly mode");return}const r=s&&s.bringChildrenTo?{...s,bringChildrenTo:s.bringChildrenTo.id}:s;this.transact(()=>{this._crud.deleteBlock(typeof t=="string"?t:t.id,r)})}getBlock(t){return this._blocks.peek()[t]}getBlock$(t){return this._blocks.value[t]}getModelById(t){var s,r;return(r=(s=this.getBlock(t))==null?void 0:s.model)!=null?r:null}getBlocksByFlavour(t){const s=typeof t=="string"?[t]:t;return Object.values(this._blocks.peek()).filter(({flavour:r})=>s.includes(r))}getAllModels(){return Object.values(this._blocks.peek()).map(t=>t.model)}getModelsByFlavour(t){return this.getBlocksByFlavour(t).map(s=>s.model)}getParent(t){const s=typeof t=="string"?t:t.id,r=this._crud.getParent(s);if(!r)return null;const n=this._blocks.peek()[r];return n?n.model:null}getPrev(t){return this._getSiblings(t,(s,r)=>{var n;return(n=s.children[r-1])!=null?n:null})}getPrevs(t){var s;return(s=this._getSiblings(t,(r,n)=>r.children.slice(0,n)))!=null?s:[]}getNext(t){return this._getSiblings(t,(s,r)=>{var n;return(n=s.children[r+1])!=null?n:null})}getNexts(t){var s;return(s=this._getSiblings(t,(r,n)=>r.children.slice(n+1)))!=null?s:[]}hasBlock(t){return t in this._blocks.peek()}moveBlocks(t,s,r=null,n=!0){if(this.readonly){console.error("Cannot modify data in read-only mode");return}this.transact(()=>{var i;this._crud.moveBlocks(t.map(o=>o.id),s.id,(i=r?.id)!=null?i:null,n)})}getTransformer(t=[]){return new q1({schema:this.schema,blobCRUD:this.workspace.blobSync,docCRUD:{create:s=>this.workspace.createDoc(s).getStore({id:s}),get:s=>{var r,n;return(n=(r=this.workspace.getDoc(s))==null?void 0:r.getStore({id:s}))!=null?n:null},delete:s=>this.workspace.removeDoc(s)},middlewares:t})}get get(){return this.provider.get.bind(this.provider)}get getOptional(){return this.provider.getOptional.bind(this.provider)}load(t){var s,r;return this._isDisposed&&(this.disposableGroup=new Yr,this._subscribeToSlots(),this._isDisposed=!1),this._doc.load(t),this._provider.getAll(Lc).forEach(n=>{n.loaded()}),this.slots.ready.next(),this.slots.rootAdded.next((r=(s=this.root)==null?void 0:s.id)!=null?r:""),this}dispose(){this._provider.getAll(Lc).forEach(t=>{t.disposed()}),this._doc.ready&&this._yBlocks.unobserveDeep(this._handleYEvents),this.slots.ready.complete(),this.slots.rootAdded.complete(),this.slots.rootDeleted.complete(),this.slots.blockUpdated.complete(),this.slots.yBlockUpdated.complete(),this.disposableGroup.dispose(),this._isDisposed=!0}_handleYBlockAdd(t,s){this.slots.yBlockUpdated.next({type:"add",id:t,isLocal:s})}_handleYBlockDelete(t,s){this.slots.yBlockUpdated.next({type:"delete",id:t,isLocal:s})}_handleYEvent(t){if(t.target!==this._yBlocks)return;const s=!t.transaction.origin||!this._yBlocks.doc||t.transaction.origin instanceof tr||t.transaction.origin.proxy?!0:t.transaction.origin===this._yBlocks.doc.clientID;t.keys.forEach((r,n)=>{try{if(r.action==="add"){this._handleYBlockAdd(n,s);return}if(r.action==="delete"){this._handleYBlockDelete(n,s);return}}catch(i){console.error("An error occurred while handling Yjs event:"),console.error(i)}})}}function cO(e){const t=new Set(e);return e=[...new Set(e)],e.forEach(s=>{e.forEach(r=>{ah(s)&&s.hasDescendant(r)&&t.delete(r)})}),[...t]}function K1(e,t,s){const r=new Set,n=i=>{r.has(i)||(r.add(i),!(t&&t(i))&&ah(i)&&i.childElements.forEach(o=>{n(o)}))};n(e)}function hO(e){const t=[];return e.childElements.forEach(s=>{K1(s,r=>{t.push(r)})}),t}function uO(e,t){let s=t.group;for(;s;){if(s===e)return!0;s=s.group}return!1}function dO(e,t){return!(t===e||ah(t)&&t.hasDescendant(e))}function Ym(e){return e.groups.some(Hh)}function Hh(e){var t;return(t=e.lockedBySelf)!=null?t:!1}function J1(e){return Hh(e)||Ym(e)}function Q1(e,t){e.transact(()=>{t.lockedBySelf=!0})}function tS(e,t){e.transact(()=>{t.lockedBySelf=!1})}class zc extends lr{constructor(){super(...arguments),this._cacheDeserKey=null,this._cacheDeserXYWH=null,this._externalXYWH=void 0,this.connectable=!0,this.responseExtension=[0,0]}get xywh(){return this.props.xywh}get xywh$(){return this.props.xywh$}set xywh(t){this.props.xywh=t}get index(){return this.props.index}get index$(){return this.props.index$}set index(t){this.props.index=t}get lockedBySelf(){return this.props.lockedBySelf}get lockedBySelf$(){return this.props.lockedBySelf$}set lockedBySelf(t){this.props.lockedBySelf=t}get rotate(){return"rotate"in this.props?this.props.rotate:0}set rotate(t){"rotate"in this.props&&(this.props.rotate=t)}get deserializedXYWH(){return(this._cacheDeserKey!==this.xywh||!this._cacheDeserXYWH)&&(this._cacheDeserKey=this.xywh,this._cacheDeserXYWH=Pp(this.xywh)),this._cacheDeserXYWH}get elementBound(){return tt.from(cc(this))}get externalBound(){return this._externalXYWH?tt.deserialize(this._externalXYWH):null}get externalXYWH(){return this._externalXYWH}set externalXYWH(t){this._externalXYWH=t}get group(){var t;return this.surface&&(t=this.surface.getGroup(this.id))!=null?t:null}get groups(){return this.surface?this.surface.getGroups(this.id):[]}get h(){return this.deserializedXYWH[3]}get responseBound(){return this.elementBound.expand(this.responseExtension)}get surface(){const t=this.store.getBlocksByFlavour("affine:surface");return t.length===0?null:t[0].model}get w(){return this.deserializedXYWH[2]}get x(){return this.deserializedXYWH[0]}get y(){return this.deserializedXYWH[1]}containsBound(t){const s=tt.deserialize(this.xywh);return Lp({x:s.x,y:s.y,w:s.w,h:s.h,rotate:this.rotate}).some(n=>t.containsPoint(n))}getLineIntersections(t,s){var r;const n=tt.deserialize(this.xywh);return Fy(t,s,Mo(n.points,n.center,(r=this.rotate)!=null?r:0))}getNearestPoint(t){var s;const r=tt.deserialize(this.xywh);return Ip(Mo(r.points,r.center,(s=this.rotate)!=null?s:0),t)}getRelativePointLocation(t){var s,r;const n=tt.deserialize(this.xywh),i=n.getRelativePoint(t),o=Mo([i],n.center,(s=this.rotate)!=null?s:0)[0],a=Mo(n.points,n.center,(r=this.rotate)!=null?r:0),l=Uy(a,o);return new Lr(o,l)}includesPoint(t,s,r,n){return(r.useElementBound?this.elementBound:this.responseBound).isPointInBound([t,s],0)}intersectsBound(t){return this.containsBound(t)||t.points.some((s,r,n)=>this.getLineIntersections(s,n[(r+1)%n.length]))}isLocked(){return J1(this)}isLockedByAncestor(){return Ym(this)}isLockedBySelf(){return Hh(this)}lock(){Q1(this.store,this)}unlock(){tS(this.store,this)}}function fO(e){if(e===lr)return zc;{let t=e;for(;Object.getPrototypeOf(t.prototype)!==lr.prototype&&Object.getPrototypeOf(t.prototype)!==null;)t=Object.getPrototypeOf(t.prototype).constructor;if(Object.getPrototypeOf(t.prototype)===null)throw new T(R.GfxBlockElementError,"The SuperClass is not a subclass of BlockModel");Object.setPrototypeOf(t.prototype,zc.prototype)}return e}const eS=Qt("BlockService"),pO=Qt("BlockFlavour"),gO=Qt("Commands"),mO=Qt("Config"),bO=Qt("BlockView"),mf=Qt("WidgetView"),sS=Qt("LifeCycleWatcher"),vO=Qt("Std"),yO=Qt("Keymap");var rS=typeof global=="object"&&global&&global.Object===Object&&global,nS=typeof self=="object"&&self&&self.Object===Object&&self,qm=rS||nS||Function("return this")(),Ta=qm.Symbol,Zm=Object.prototype,iS=Zm.hasOwnProperty,oS=Zm.toString,ti=Ta?Ta.toStringTag:void 0;function aS(e){var t=iS.call(e,ti),s=e[ti];try{e[ti]=void 0;var r=!0}catch{}var n=oS.call(e);return r&&(t?e[ti]=s:delete e[ti]),n}var lS=Object.prototype,cS=lS.toString;function hS(e){return cS.call(e)}var uS="[object Null]",dS="[object Undefined]",bf=Ta?Ta.toStringTag:void 0;function fS(e){return e==null?e===void 0?dS:uS:bf&&bf in Object(e)?aS(e):hS(e)}function Vc(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function pS(e){return e!=null&&typeof e=="object"}const gS="GfxController",hn=sS(gS);var Wl=function(){return qm.Date.now()},mS=/\s/;function bS(e){for(var t=e.length;t--&&mS.test(e.charAt(t)););return t}var vS=/^\s+/;function yS(e){return e&&e.slice(0,bS(e)+1).replace(vS,"")}var _S="[object Symbol]";function wS(e){return typeof e=="symbol"||pS(e)&&fS(e)==_S}var vf=NaN,xS=/^[-+]0x[0-9a-f]+$/i,kS=/^0b[01]+$/i,SS=/^0o[0-7]+$/i,CS=parseInt;function yf(e){if(typeof e=="number")return e;if(wS(e))return vf;if(Vc(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Vc(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=yS(e);var s=kS.test(e);return s||SS.test(e)?CS(e.slice(2),s?2:8):xS.test(e)?vf:+e}var ES="Expected a function",$S=Math.max,TS=Math.min;function _f(e,t,s){var r,n,i,o,a,l,c=0,h=!1,u=!1,d=!0;if(typeof e!="function")throw new TypeError(ES);t=yf(t)||0,Vc(s)&&(h=!!s.leading,u="maxWait"in s,i=u?$S(yf(s.maxWait)||0,t):i,d="trailing"in s?!!s.trailing:d);function f(I){var U=r,Q=n;return r=n=void 0,c=I,o=e.apply(Q,U),o}function p(I){return c=I,a=setTimeout(x,t),h?f(I):o}function b(I){var U=I-l,Q=I-c,nt=t-U;return u?TS(nt,i-Q):nt}function v(I){var U=I-l,Q=I-c;return l===void 0||U>=t||U<0||u&&Q>=i}function x(){var I=Wl();if(v(I))return w(I);a=setTimeout(x,b(I))}function w(I){return a=void 0,d&&r?f(I):(r=n=void 0,o)}function S(){a!==void 0&&clearTimeout(a),c=0,r=l=n=a=void 0}function k(){return a===void 0?o:w(Wl())}function A(){var I=Wl(),U=v(I);if(r=arguments,n=this,l=I,U){if(a===void 0)return p(l);if(u)return clearTimeout(a),a=setTimeout(x,t),f(l)}return a===void 0&&(a=setTimeout(x,t)),o}return A.cancel=S,A.flush=k,A}function Yl(e,t,s){return s>0&&e>t||s<0&&e<t?t:e}const ql=6,Zl=.1,_O=.25,wO=1,xO=100;function AS(e,t){const{left:s,top:r,viewportX:n,viewportY:i,zoom:o,viewScale:a}=e,[l,c]=t,h=l-s,u=c-r,d=n+h/o/a,f=i+u/o/a;return[d,f]}class OS{constructor(){this._cachedBoundingClientRect=null,this._cachedOffsetWidth=null,this._resizeObserver=null,this._resizeSubject=new at,this._isResizing=!1,this._initialTopLeft=null,this._center={x:0,y:0},this._shell=null,this._element=null,this._height=0,this._left=0,this._locked=!1,this._rafId=null,this._top=0,this._width=0,this._zoom=1,this.elementReady=new at,this.sizeUpdated=new at,this.viewportMoved=new at,this.viewportUpdated=new at,this.zooming$=new Xd(!1),this.panning$=new Xd(!1),this.ZOOM_MAX=ql,this.ZOOM_MIN=Zl,this._resetZooming=_f(()=>{this.zooming$.next(!1)},200),this._resetPanning=_f(()=>{this.panning$.next(!1)},200);const t=this.elementReady.subscribe(s=>{this._element=s,t.unsubscribe()});this._setupResizeObserver()}_setupResizeObserver(){this._resizeSubject.pipe(yk(200)).subscribe(({width:t,height:s,left:r,top:n})=>{!this._shell||!this._initialTopLeft||this._completeResize(t,s,r,n)})}_completeResize(t,s,r,n){if(!this._initialTopLeft)return;const[i,o]=this._initialTopLeft,a=i+t/(2*this.zoom),l=o+s/(2*this.zoom);this.setCenter(a,l,!1),this._width=t,this._height=s,this._left=r,this._top=n,this._isResizing=!1,this._initialTopLeft=null,this.sizeUpdated.next({left:r,top:n,width:t,height:s})}_forceCompleteResize(){if(this._isResizing&&this._shell){const{width:t,height:s,left:r,top:n}=this.boundingClientRect;this._completeResize(t,s,r,n)}}get boundingClientRect(){return this._shell?(this._cachedBoundingClientRect||(this._cachedBoundingClientRect=this._shell.getBoundingClientRect()),this._cachedBoundingClientRect):new DOMRect(0,0,0,0)}get element(){return this._element}get center(){return this._center}get centerX(){return this._center.x}get centerY(){return this._center.y}get height(){return this.boundingClientRect.height}get left(){return this._left}get locked(){return this._locked}set locked(t){this._locked=t}get viewScale(){return!this._shell||this._cachedOffsetWidth===null||this._cachedOffsetWidth===0?1:this.boundingClientRect.width/this._cachedOffsetWidth}get top(){return this._top}get translateX(){return-this.viewportX*this.zoom}get translateY(){return-this.viewportY*this.zoom}get viewportBounds(){const{viewportMinXY:t,viewportMaxXY:s}=this;return tt.from({...t,w:s.x-t.x,h:s.y-t.y})}get viewportMaxXY(){const{centerX:t,centerY:s,width:r,height:n,zoom:i}=this;return{x:t+r/2/i,y:s+n/2/i}}get viewportMinXY(){const{centerX:t,centerY:s,width:r,height:n,zoom:i}=this;return{x:t-r/2/i,y:s-n/2/i}}get viewportX(){const{centerX:t,width:s,zoom:r}=this;return t-s/2/r}get viewportY(){const{centerY:t,height:s,zoom:r}=this;return t-s/2/r}get width(){return this.boundingClientRect.width}get zoom(){return this._zoom}applyDeltaCenter(t,s){this.setCenter(this.centerX+t,this.centerY+s)}clearViewportElement(){this._resizeObserver&&this._shell&&(this._resizeObserver.unobserve(this._shell),this._resizeObserver.disconnect()),this._resizeObserver=null,this._shell=null,this._cachedBoundingClientRect=null,this._cachedOffsetWidth=null}dispose(){this.clearViewportElement(),this.sizeUpdated.complete(),this.viewportMoved.complete(),this.viewportUpdated.complete(),this._resizeSubject.complete(),this.zooming$.complete(),this.panning$.complete()}getFitToScreenData(t,s=[0,0,0,0],r=ql,n=100){let{centerX:i,centerY:o,zoom:a}=this;if(!t)return{zoom:a,centerX:i,centerY:o};const{x:l,y:c,w:h,h:u}=t,[d,f,p,b]=s,{width:v,height:x}=this;return a=Math.min((v-n-(f+b))/h,(x-n-(d+p))/u),a=Qo(a,Zl,Qo(r,Zl,ql)),i=l+(h+f/a)/2-b/a/2,o=c+(u+p/a)/2-d/a/2,{zoom:a,centerX:i,centerY:o}}isInViewport(t){const s=tt.from(this.viewportBounds);return s.contains(t)||s.isIntersectWithBound(t)}onResize(){if(!this._shell)return;this._isResizing||(this._isResizing=!0,this._initialTopLeft=this.toModelCoord(0,0));const{left:t,top:s,width:r,height:n}=this.boundingClientRect;this._cachedOffsetWidth=this._shell.offsetWidth,this._left=t,this._top=s,this._resizeSubject.next({left:t,top:s,width:r,height:n})}setCenter(t,s,r=!0){r&&this._isResizing&&this._forceCompleteResize(),this._center.x=t,this._center.y=s,this.panning$.next(!0),this.viewportUpdated.next({zoom:this.zoom,center:D.toVec(this.center)}),this._resetPanning()}setRect(t,s,r,n){if(this._isResizing){this._left=t,this._top=s;return}this._left=t,this._top=s,this.sizeUpdated.next({left:t,top:s,width:r,height:n})}setViewport(t,s=D.toVec(this.center),r=!1,n=!0){n&&this._isResizing&&this._forceCompleteResize();const i=this._zoom;if(r){const o=i/t;if(o===1)this.smoothTranslate(s[0],s[1]);else{const a=[this.centerX,this.centerY],l=D.mul(D.sub(s,D.mul(a,o)),1/(1-o));this.smoothZoom(t,D.toPoint(l))}}else this._center.x=s[0],this._center.y=s[1],this.setZoom(t,void 0,!1,n)}setViewportByBound(t,s=[0,0,0,0],r=!1,n=!0){let[i,o,a,l]=s;i>0&&i<1&&(i*=this.height),o>0&&o<1&&(o*=this.width),a>0&&a<1&&(a*=this.height),l>0&&l<1&&(l*=this.width);let c=Math.min((this.width-(o+l))/t.w,(this.height-(i+a))/t.h);if(c<this.ZOOM_MIN){c=this.ZOOM_MIN;const u=this.width-t.w*c,d=this.height-t.h*c;o=l=Math.max(u/2,1),i=a=Math.max(d/2,1)}c>this.ZOOM_MAX&&(c=this.ZOOM_MAX);const h=[t.x+(t.w+o/c)/2-l/c/2,t.y+(t.h+a/c)/2-i/c/2];this.setViewport(c,h,r,n)}setShellElement(t){this._shell=t,this._cachedBoundingClientRect=t.getBoundingClientRect(),this._cachedOffsetWidth=t.offsetWidth;const{left:s,top:r,width:n,height:i}=this._cachedBoundingClientRect;this.setRect(s,r,n,i),this._resizeObserver=new ResizeObserver(()=>{this._cachedBoundingClientRect=null,this._cachedOffsetWidth=null,this.onResize()}),this._resizeObserver.observe(t)}setZoom(t,s,r=!1,n=!0){n&&this._isResizing&&this._forceCompleteResize();const i=this.zoom;s=s??this._center,this._zoom=Qo(t,this.ZOOM_MIN,this.ZOOM_MAX);const o=this.zoom,a=D.sub(D.toVec(this.center),D.toVec(s)),l=D.add(D.toVec(s),D.mul(a,i/o));r&&this.zooming$.next(!0),this.setCenter(l[0],l[1],n),this.viewportUpdated.next({zoom:this.zoom,center:D.toVec(this.center)}),this._resetZooming()}smoothTranslate(t,s,r=10){const{center:n}=this,i={x:t-n.x,y:s-n.y},o=()=>{this._rafId&&cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(()=>{const a={x:i.x/r,y:i.y/r},l={x:this.centerX+a.x,y:this.centerY+a.y},c=i.x>0?1:-1,h=i.y>0?1:-1;l.x=Yl(l.x,t,c),l.y=Yl(l.y,s,h),this.setCenter(l.x,l.y,!0),(l.x!=t||l.y!=s)&&o()})};o()}smoothZoom(t,s,r=10){const n=t-this.zoom;this._rafId&&cancelAnimationFrame(this._rafId);const i=()=>{this._rafId=requestAnimationFrame(()=>{const o=n>0?1:-1,a=n/r,l=Yl(this.zoom+a,t,o);this.setZoom(l,s,void 0,!0),l!=t&&i()})};i()}toModelBound(t){const{w:s,h:r}=t,[n,i]=this.toModelCoord(t.x,t.y);return new tt(n,i,s/this.zoom,r/this.zoom)}toModelCoord(t,s,r=this.zoom,n){const{viewScale:i}=this,o=n?n.x-this.width/2/r:this.viewportX,a=n?n.y-this.height/2/r:this.viewportY;return[o+t/r/i,a+s/r/i]}toModelCoordFromClientCoord([t,s]){return AS(this,[t,s])}toViewBound(t){const{w:s,h:r}=t,[n,i]=this.toViewCoord(t.x,t.y);return new tt(n,i,s*this.zoom,r*this.zoom)}toViewCoord(t,s){const{viewportX:r,viewportY:n,zoom:i,viewScale:o}=this;return[(t-r)*i*o,(s-n)*i*o]}toViewCoordFromClientCoord([t,s]){const{left:r,top:n}=this;return[t-r,s-n]}serializeRecord(){return JSON.stringify({left:this.left,top:this.top,viewportX:this.viewportX,viewportY:this.viewportY,zoom:this.zoom,viewScale:this.viewScale})}deserializeRecord(t){try{const s=JSON.parse(t||"{}");return"zoom"in s?s:null}catch(s){return console.error("Failed to deserialize viewport record:",s),null}}}const RS=Ws.object({blockId:Ws.string()}),Wh=class Uc extends Uh{static fromJSON(t){const s=RS.parse(t);return new Uc(s)}equals(t){return t instanceof Uc?this.blockId===t.blockId:!1}toJSON(){return{type:"block",blockId:this.blockId}}};Wh.group="note";Wh.type="block";let Gm=Wh;const kO=zm(Gm),IS=Ws.object({blockId:Ws.string(),elements:Ws.array(Ws.string()),editing:Ws.boolean(),inoperable:Ws.boolean().optional()}),sl=class Fc extends Uh{constructor(t,s,r,n=!1){super({blockId:t}),this.elements=s,this.editing=r,this.inoperable=n}static fromJSON(t){const{blockId:s,elements:r,editing:n,inoperable:i}=IS.parse(t);return new Fc(s,r,n,i)}equals(t){return t instanceof Fc?this.blockId===t.blockId&&this.editing===t.editing&&this.inoperable===t.inoperable&&this.elements.length===t.elements.length&&this.elements.every((s,r)=>s===t.elements[r]):!1}isEmpty(){return this.elements.length===0&&!this.editing}toJSON(){return{type:"surface",blockId:this.blockId,elements:this.elements,editing:this.editing,inoperable:this.inoperable}}};sl.group="gfx";sl.type="surface";sl.recoverable=!0;let Xm=sl;const SO=zm(Xm),Er={string:e=>typeof e=="string",number:e=>typeof e=="number",boolean:e=>typeof e=="boolean",object:e=>typeof e=="object",array:e=>Array.isArray(e),instanceOf:e=>t=>t instanceof e,arrayOf:e=>t=>Array.isArray(t)&&t.every(e),recordOf:e=>t=>typeof t!="object"||t===null?!1:Object.values(t).every(e),of:e=>t=>e(t)};function MS(e,t){for(const[s,r]of Object.entries(t)){const n=s;if(e[n]===void 0)throw new T(R.DefaultRuntimeError,`Property ${s} is required to ${e.constructor.name}.`);if(r&&!r(e[n]))throw new T(R.DefaultRuntimeError,`Property ${s} is invalid to ${e.constructor.name}.`)}}function Yh(e){return function(t){const s=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){s&&s.call(this),MS(this,e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qh(e){class t extends e{connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.__dispose)==null||r.call(this)}performUpdate(){var r;if(this.isUpdatePending===!1||this.isConnected===!1)return;(r=this.__dispose)==null||r.call(this);let n=!0;this.__dispose=Nn(()=>{n?(n=!1,super.performUpdate()):this.requestUpdate()})}}return t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zh=globalThis,Aa=Zh.trustedTypes,wf=Aa?Aa.createPolicy("lit-html",{createHTML:e=>e}):void 0,Km="$lit$",Zs=`lit$${Math.random().toFixed(9).slice(2)}$`,Jm="?"+Zs,DS=`<${Jm}>`,qr=document,to=()=>qr.createComment(""),eo=e=>e===null||typeof e!="object"&&typeof e!="function",Gh=Array.isArray,PS=e=>Gh(e)||typeof e?.[Symbol.iterator]=="function",Gl=`[ 	
\f\r]`,ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xf=/-->/g,kf=/>/g,_r=RegExp(`>|${Gl}(?:([^\\s"'>=/]+)(${Gl}*=${Gl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sf=/'/g,Cf=/"/g,Qm=/^(?:script|style|textarea|title)$/i,tb=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),N=tb(1),CO=tb(2),ge=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),Ef=new WeakMap,$r=qr.createTreeWalker(qr,129);function eb(e,t){if(!Gh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return wf!==void 0?wf.createHTML(t):t}const LS=(e,t)=>{const s=e.length-1,r=[];let n,i=t===2?"<svg>":t===3?"<math>":"",o=ei;for(let a=0;a<s;a++){const l=e[a];let c,h,u=-1,d=0;for(;d<l.length&&(o.lastIndex=d,h=o.exec(l),h!==null);)d=o.lastIndex,o===ei?h[1]==="!--"?o=xf:h[1]!==void 0?o=kf:h[2]!==void 0?(Qm.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=_r):h[3]!==void 0&&(o=_r):o===_r?h[0]===">"?(o=n??ei,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?_r:h[3]==='"'?Cf:Sf):o===Cf||o===Sf?o=_r:o===xf||o===kf?o=ei:(o=_r,n=void 0);const f=o===_r&&e[a+1].startsWith("/>")?" ":"";i+=o===ei?l+DS:u>=0?(r.push(c),l.slice(0,u)+Km+l.slice(u)+Zs+f):l+Zs+(u===-2?a:f)}return[eb(e,i+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class so{constructor({strings:t,_$litType$:s},r){let n;this.parts=[];let i=0,o=0;const a=t.length-1,l=this.parts,[c,h]=LS(t,s);if(this.el=so.createElement(c,r),$r.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=$r.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(Km)){const d=h[o++],f=n.getAttribute(u).split(Zs),p=/([.?@])?(.*)/.exec(d);l.push({type:1,index:i,name:p[2],strings:f,ctor:p[1]==="."?BS:p[1]==="?"?zS:p[1]==="@"?VS:rl}),n.removeAttribute(u)}else u.startsWith(Zs)&&(l.push({type:6,index:i}),n.removeAttribute(u));if(Qm.test(n.tagName)){const u=n.textContent.split(Zs),d=u.length-1;if(d>0){n.textContent=Aa?Aa.emptyScript:"";for(let f=0;f<d;f++)n.append(u[f],to()),$r.nextNode(),l.push({type:2,index:++i});n.append(u[d],to())}}}else if(n.nodeType===8)if(n.data===Jm)l.push({type:2,index:i});else{let u=-1;for(;(u=n.data.indexOf(Zs,u+1))!==-1;)l.push({type:7,index:i}),u+=Zs.length-1}i++}}static createElement(t,s){const r=qr.createElement("template");return r.innerHTML=t,r}}function Sn(e,t,s=e,r){if(t===ge)return t;let n=r!==void 0?s._$Co?.[r]:s._$Cl;const i=eo(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(e),n._$AT(e,s,r)),r!==void 0?(s._$Co??=[])[r]=n:s._$Cl=n),n!==void 0&&(t=Sn(e,n._$AS(e,t.values),n,r)),t}let NS=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,n=(t?.creationScope??qr).importNode(s,!0);$r.currentNode=n;let i=$r.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new zn(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new US(i,this,t)),this._$AV.push(c),l=r[++a]}o!==l?.index&&(i=$r.nextNode(),o++)}return $r.currentNode=qr,n}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}};class zn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,n){this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Sn(this,t,s),eo(t)?t===st||t==null||t===""?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==ge&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):PS(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==st&&eo(this._$AH)?this._$AA.nextSibling.data=t:this.T(qr.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=so.createElement(eb(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(s);else{const i=new NS(n,this),o=i.u(this.options);i.p(s),this.T(o),this._$AH=i}}_$AC(t){let s=Ef.get(t.strings);return s===void 0&&Ef.set(t.strings,s=new so(t)),s}k(t){Gh(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,n=0;for(const i of t)n===s.length?s.push(r=new zn(this.O(to()),this.O(to()),this,this.options)):r=s[n],r._$AI(i),n++;n<s.length&&(this._$AR(r&&r._$AB.nextSibling,n),s.length=n)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class rl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,n,i){this.type=1,this._$AH=st,this._$AN=void 0,this.element=t,this.name=s,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=st}_$AI(t,s=this,r,n){const i=this.strings;let o=!1;if(i===void 0)t=Sn(this,t,s,0),o=!eo(t)||t!==this._$AH&&t!==ge,o&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Sn(this,a[r+l],s,l),c===ge&&(c=this._$AH[l]),o||=!eo(c)||c!==this._$AH[l],c===st?t=st:t!==st&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}o&&!n&&this.j(t)}j(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class BS extends rl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===st?void 0:t}}class zS extends rl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==st)}}class VS extends rl{constructor(t,s,r,n,i){super(t,s,r,n,i),this.type=5}_$AI(t,s=this){if((t=Sn(this,t,s,0)??st)===ge)return;const r=this._$AH,n=t===st&&r!==st||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==st&&(r===st||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class US{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Sn(this,t)}}const FS={I:zn},jS=Zh.litHtmlPolyfillSupport;jS?.(so,zn),(Zh.litHtmlVersions??=[]).push("3.3.0");const Xh=(e,t,s)=>{const r=s?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const i=s?.renderBefore??null;r._$litPart$=n=new zn(t.insertBefore(to(),i),i,void 0,s??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:HS}=FS,WS=(e,t)=>e?._$litType$!==void 0,$O=e=>e?._$litType$?.h!=null,sb=e=>e.strings===void 0,$f=()=>document.createComment(""),si=(e,t,s)=>{const r=e._$AA.parentNode,n=t===void 0?e._$AB:t._$AA;if(s===void 0){const i=r.insertBefore($f(),n),o=r.insertBefore($f(),n);s=new HS(i,o,e,e.options)}else{const i=s._$AB.nextSibling,o=s._$AM,a=o!==e;if(a){let l;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(l=e._$AU)!==o._$AU&&s._$AP(l)}if(i!==n||a){let l=s._$AA;for(;l!==i;){const c=l.nextSibling;r.insertBefore(l,n),l=c}}}return s},wr=(e,t,s=e)=>(e._$AI(t,s),e),YS={},rb=(e,t=YS)=>e._$AH=t,qS=e=>e._$AH,Xl=e=>{e._$AP?.(!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const r=t.nextSibling;t.remove(),t=r}},TO=e=>{e._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Vn=e=>(...t)=>({_$litDirective$:e,values:t});let Un=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const r of s)r._$AO?.(t,!1),xi(r,t);return!0},Oa=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},nb=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),XS(t)}};function ZS(e){this._$AN!==void 0?(Oa(this),this._$AM=e,nb(this)):this._$AM=e}function GS(e,t=!1,s=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let i=s;i<r.length;i++)xi(r[i],!1),Oa(r[i]);else r!=null&&(xi(r,!1),Oa(r));else xi(this,e)}const XS=e=>{e.type==Ye.CHILD&&(e._$AP??=GS,e._$AQ??=ZS)};let KS=class extends Un{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,r){super._$AT(t,s,r),nb(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(xi(this,t),Oa(this))}setValue(t){if(sb(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};function Kh(e){class t extends e{constructor(){super(...arguments),this._disposables=new Yr}get disposables(){return this._disposables}connectedCallback(){super.connectedCallback(),this._disposables.disposed&&(this._disposables=new Yr)}disconnectedCallback(){super.disconnectedCallback(),this._disposables.dispose()}}return t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ib=class extends Event{constructor(t,s,r,n){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s,this.callback=r,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function IO(e){return e}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tf=class{constructor(t,s,r,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,o)),this.unsubscribe=o},this.host=t,s.context!==void 0){const i=s;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=s,this.callback=r,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ib(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let JS=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,s=!1){const r=s||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:r}]of this.subscriptions)s(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,s,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:s});const{disposer:n}=this.subscriptions.get(t);t(this.value,n)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let QS=class extends Event{constructor(t,s){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s}},Af=class extends JS{constructor(t,s,r){super(s.context!==void 0?s.initialValue:r),this.onContextRequest=n=>{if(n.context!==this.context)return;const i=n.contextTarget??n.composedPath()[0];i!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,i,n.subscribe))},this.onProviderRequest=n=>{if(n.context!==this.context||(n.contextTarget??n.composedPath()[0])===this.host)return;const i=new Set;for(const[o,{consumerHost:a}]of this.subscriptions)i.has(o)||(i.add(o),a.dispatchEvent(new ib(this.context,a,o,!0)));n.stopPropagation()},this.host=t,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new QS(this.context,this.host))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ra({context:e}){return(t,s)=>{const r=new WeakMap;if(typeof s=="object")return{get(){return t.get.call(this)},set(n){return r.get(this).setValue(n),t.set.call(this,n)},init(n){return r.set(this,new Af(this,{context:e,initialValue:n})),n}};{t.constructor.addInitializer(o=>{r.set(o,new Af(o,{context:e}))});const n=Object.getOwnPropertyDescriptor(t,s);let i;if(n===void 0){const o=new WeakMap;i={get(){return o.get(this)},set(a){r.get(this).setValue(a),o.set(this,a)},configurable:!0,enumerable:!0}}else{const o=n.set;i={...n,set(a){r.get(this).setValue(a),o?.call(this,a)}}}return void Object.defineProperty(t,s,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Of({context:e,subscribe:t}){return(s,r)=>{typeof r=="object"?r.addInitializer(function(){new Tf(this,{context:e,callback:n=>{s.set.call(this,n)},subscribe:t})}):s.constructor.addInitializer(n=>{new Tf(n,{context:e,callback:i=>{n[r]=i},subscribe:t})})}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa=globalThis,Jh=oa.ShadowRoot&&(oa.ShadyCSS===void 0||oa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qh=Symbol(),Rf=new WeakMap;let Ia=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==Qh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Jh&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=Rf.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Rf.set(s,t))}return t}toString(){return this.cssText}};const tC=e=>new Ia(typeof e=="string"?e:e+"",void 0,Qh),xt=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((r,n,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new Ia(s,e,Qh)},eC=(e,t)=>{if(Jh)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),n=oa.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)}},If=Jh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return tC(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sC,defineProperty:rC,getOwnPropertyDescriptor:nC,getOwnPropertyNames:iC,getOwnPropertySymbols:oC,getPrototypeOf:aC}=Object,nl=globalThis,Mf=nl.trustedTypes,lC=Mf?Mf.emptyScript:"",cC=nl.reactiveElementPolyfillSupport,ki=(e,t)=>e,Cn={toAttribute(e,t){switch(t){case Boolean:e=e?lC:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},tu=(e,t)=>!sC(e,t),Df={attribute:!0,type:String,converter:Cn,reflect:!1,useDefault:!1,hasChanged:tu};Symbol.metadata??=Symbol("metadata"),nl.litPropertyMetadata??=new WeakMap;class on extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Df){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,s);n!==void 0&&rC(this.prototype,t,n)}}static getPropertyDescriptor(t,s,r){const{get:n,set:i}=nC(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get:n,set(o){const a=n?.call(this);i?.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Df}static _$Ei(){if(this.hasOwnProperty(ki("elementProperties")))return;const t=aC(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ki("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ki("properties"))){const s=this.properties,r=[...iC(s),...oC(s)];for(const n of r)this.createProperty(n,s[n])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,n]of s)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const n=this._$Eu(s,r);n!==void 0&&this._$Eh.set(n,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)s.unshift(If(n))}else t!==void 0&&s.push(If(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eC(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Cn).toAttribute(s,r.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,s){const r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const i=r.getPropertyOptions(n),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Cn;this._$Em=n,this[n]=o.fromAttribute(s,i.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,s,r){if(t!==void 0){const n=this.constructor,i=this[t];if(r??=n.getPropertyOptions(t),!((r.hasChanged??tu)(i,s)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:n,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??s??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,i]of r){const{wrapped:o}=i,a=this[n];o!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,i,a)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}}on.elementStyles=[],on.shadowRootOptions={mode:"open"},on[ki("elementProperties")]=new Map,on[ki("finalized")]=new Map,cC?.({ReactiveElement:on}),(nl.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eu=globalThis;let fs=class extends on{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xh(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ge}};fs._$litElement$=!0,fs.finalized=!0,eu.litElementHydrateSupport?.({LitElement:fs});const hC=eu.litElementPolyfillSupport;hC?.({LitElement:fs});(eu.litElementVersions??=[]).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zO=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uC={attribute:!0,type:String,converter:Cn,reflect:!1,hasChanged:tu},dC=(e=uC,t,s)=>{const{kind:r,metadata:n}=s;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(s.name,e),r==="accessor"){const{name:o}=s;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(r==="setter"){const{name:o}=s;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+r)};function y(e){return(t,s)=>typeof s=="object"?dC(e,t,s):((r,n,i)=>{const o=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(n,i):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(e){return y({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ob(e){return(t,s)=>{const r=typeof t=="function"?t:t[s];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ab=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(e,t){return(s,r,n)=>{const i=o=>o.renderRoot?.querySelector(e)??null;return ab(s,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function VO(e){return(t,s)=>ab(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fC=(e,t,s)=>{for(const r of t)if(r[0]===e)return(0,r[1])();return s?.()};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pC(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const su=Symbol.for(""),gC=e=>{if(e?.r===su)return e?._$litStatic$},Pf=e=>({_$litStatic$:e,r:su}),Ma=(e,...t)=>({_$litStatic$:t.reduce((s,r,n)=>s+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[n+1],e[0]),r:su}),Lf=new Map,mC=e=>(t,...s)=>{const r=s.length;let n,i;const o=[],a=[];let l,c=0,h=!1;for(;c<r;){for(l=t[c];c<r&&(i=s[c],(n=gC(i))!==void 0);)l+=n+t[++c],h=!0;c!==r&&a.push(i),o.push(l),c++}if(c===r&&o.push(t[r]),h){const u=o.join("$$lit$$");(t=Lf.get(u))===void 0&&(o.raw=o,Lf.set(u,t=o)),s=a}return e(t,...s)},cs=mC(N),bC="model",vC="service",yC=Symbol("blockComponent"),_C="data-widget-id",wC="data-block-id";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nf=(e,t,s)=>{const r=new Map;for(let n=t;n<=s;n++)r.set(e[n],n);return r},lb=Vn(class extends Un{constructor(e){if(super(e),e.type!==Ye.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let r;s===void 0?s=t:t!==void 0&&(r=t);const n=[],i=[];let o=0;for(const a of e)n[o]=r?r(a,o):o,i[o]=s(a,o),o++;return{values:i,keys:n}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,r]){const n=qS(e),{values:i,keys:o}=this.dt(t,s,r);if(!Array.isArray(n))return this.ut=o,i;const a=this.ut??=[],l=[];let c,h,u=0,d=n.length-1,f=0,p=i.length-1;for(;u<=d&&f<=p;)if(n[u]===null)u++;else if(n[d]===null)d--;else if(a[u]===o[f])l[f]=wr(n[u],i[f]),u++,f++;else if(a[d]===o[p])l[p]=wr(n[d],i[p]),d--,p--;else if(a[u]===o[p])l[p]=wr(n[u],i[p]),si(e,l[p+1],n[u]),u++,p--;else if(a[d]===o[f])l[f]=wr(n[d],i[f]),si(e,n[u],n[d]),d--,f++;else if(c===void 0&&(c=Nf(o,f,p),h=Nf(a,u,d)),c.has(a[u]))if(c.has(a[d])){const b=h.get(o[f]),v=b!==void 0?n[b]:null;if(v===null){const x=si(e,n[u]);wr(x,i[f]),l[f]=x}else l[f]=wr(v,i[f]),si(e,n[u],v),n[b]=null;f++}else Xl(n[d]),d--;else Xl(n[u]),u++;for(;f<=p;){const b=si(e,l[p+1]);wr(b,i[f]),l[f++]=b}for(;u<=d;){const b=n[u++];b!==null&&Xl(b)}return this.ut=o,rb(e,l),ge}});class mo extends fs{static finalizeStyles(t){const s=super.finalizeStyles(t);return s.forEach(r=>{if(r instanceof Ia&&typeof document<"u"){const n=document.head,i=document.createElement("style");i.textContent=r.cssText,n.append(i)}}),s}getConnectedCount(){var t,s;const r=this.constructor;return(s=(t=r.connectedCount.get(r))==null?void 0:t.get(this.getRootNode()))!=null?s:0}setConnectedCount(t){var s;const r=this.constructor;r.connectedCount.has(r)||r.connectedCount.set(r,new WeakMap),(s=r.connectedCount.get(r))==null||s.set(this.getRootNode(),t)}connectedCallback(){var t;super.connectedCallback();const s=this.getRootNode(),r=this.constructor,n=s instanceof ShadowRoot,i=this.getConnectedCount();if(i===0&&n){const o=r.elementStyles,a=[];o.forEach(l=>{if(l instanceof Ia&&typeof document<"u"){const c=document.createElement("style");c.textContent=l.cssText,s.prepend(c),a.push(c)}}),r.onDisconnectedMap.has(r)||r.onDisconnectedMap.set(r,new WeakMap),(t=r.onDisconnectedMap.get(r))==null||t.set(s,()=>{a.forEach(l=>l.remove())})}this.setConnectedCount(i+1)}createRenderRoot(){return this}disconnectedCallback(){var t,s;const r=this.getRootNode();super.disconnectedCallback();const n=this.constructor;let i=this.getConnectedCount();i--,this.setConnectedCount(i),i===0&&((s=(t=n.onDisconnectedMap.get(n))==null?void 0:t.get(r))==null||s())}}mo.connectedCount=new WeakMap;mo.onDisconnectedMap=new WeakMap;var xC=Object.create,ru=Object.defineProperty,kC=Object.getOwnPropertyDescriptor,cb=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Fn=e=>{throw TypeError(e)},SC=(e,t,s)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Bf=(e,t)=>ru(e,"name",{value:t,configurable:!0}),CC=e=>{var t;return[,,,xC((t=e?.[cb("metadata")])!=null?t:null)]},hb=["class","method","getter","setter","accessor","field","value","get","set"],di=e=>e!==void 0&&typeof e!="function"?Fn("Function expected"):e,EC=(e,t,s,r,n)=>({kind:hb[e],name:t,metadata:r,addInitializer:i=>s._?Fn("Already initialized"):n.push(di(i||null))}),$C=(e,t)=>SC(t,cb("metadata"),e[3]),fi=(e,t,s,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)t&1?i[n].call(s):r=i[n].call(s,r);return r},nu=(e,t,s,r,n,i)=>{var o,a,l,c,h,u=t&7,d=!!(t&8),f=!!(t&16),p=u>3?e.length+1:u?d?1:2:0,b=hb[u+5],v=u>3&&(e[p-1]=[]),x=e[p]||(e[p]=[]),w=u&&(!f&&!d&&(n=n.prototype),u<5&&(u>3||!f)&&kC(u<4?n:{get[s](){return zf(this,i)},set[s](k){return Uf(this,i,k)}},s));u?f&&u<4&&Bf(i,(u>2?"set ":u>1?"get ":"")+s):Bf(n,s);for(var S=r.length-1;S>=0;S--)c=EC(u,s,l={},e[3],x),u&&(c.static=d,c.private=f,h=c.access={has:f?k=>TC(n,k):k=>s in k},u^3&&(h.get=f?k=>(u^1?zf:AC)(k,n,u^4?i:w.get):k=>k[s]),u>2&&(h.set=f?(k,A)=>Uf(k,n,A,u^4?i:w.set):(k,A)=>k[s]=A)),a=(0,r[S])(u?u<4?f?i:w[b]:u>4?void 0:{get:w.get,set:w.set}:n,c),l._=1,u^4||a===void 0?di(a)&&(u>4?v.unshift(a):u?f?i=a:w[b]=a:n=a):typeof a!="object"||a===null?Fn("Object expected"):(di(o=a.get)&&(w.get=o),di(o=a.set)&&(w.set=o),di(o=a.init)&&v.unshift(o));return u||$C(e,n),w&&ru(n,s,w),f?u^4?i:w:n},iu=(e,t,s)=>t.has(e)||Fn("Cannot "+s),TC=(e,t)=>Object(t)!==t?Fn('Cannot use the "in" operator on this value'):e.has(t),zf=(e,t,s)=>(iu(e,t,"read from private field"),s?s.call(e):t.get(e)),Vf=(e,t,s)=>t.has(e)?Fn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Uf=(e,t,s,r)=>(iu(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),AC=(e,t,s)=>(iu(e,t,"access private method"),s),ub,db,jc,fb,Os,ou,au;const pb="store",gb="std";fb=[Yh({store:Er.instanceOf(Wm),std:Er.object})];class Zr extends(jc=qh(Kh(mo)),db=[Ra({context:pb}),y({attribute:!1})],ub=[Ra({context:gb}),y({attribute:!1})],jc){constructor(){super(...arguments),this._renderModel=t=>{const{flavour:s}=t,r=this.store.getBlock(t.id);if(!r||r.blockViewType==="hidden")return cs`${st}`;const n=this.store.schema.flavourSchemaMap.get(s),i=this.std.getView(s);if(!n||!i)return console.warn(`Cannot find render flavour ${s}.`),cs`${st}`;const o=this.std.provider.getAll(mf),a=Array.from(o.entries()).reduce((c,[h,u])=>{const[d,f]=h.split("|");if(d===s){const p=cs`<${u} ${Pf(_C)}=${f}></${u}>`;c[f]=p}return c},{}),l=typeof i=="function"?i(t):i;return cs`<${l}
      ${Pf(wC)}=${t.id}
      .widgets=${a}
      .viewType=${r.blockViewType}
    ></${l}>`},this.renderChildren=(t,s)=>cs`${lb(t.children.filter(s??(()=>!0)),r=>r.id,r=>this._renderModel(r))}`,Vf(this,ou,fi(Os,8,this)),fi(Os,11,this),Vf(this,au,fi(Os,12,this)),fi(Os,15,this)}get command(){return this.std.command}get event(){return this.std.event}get range(){return this.std.range}get selection(){return this.std.selection}get view(){return this.std.view}connectedCallback(){if(super.connectedCallback(),!this.store.root)throw new T(R.NoRootModelError,"This doc is missing root block. Please initialize the default block structure before connecting the editor to DOM.");this.std.mount(),this.tabIndex=0}disconnectedCallback(){super.disconnectedCallback(),this.std.unmount()}async getUpdateComplete(){try{const t=await super.getUpdateComplete(),s=this.store.root;if(!s)return t;const r=this.std.getView(s.flavour);if(!r)return t;const n=this.std.provider.getAll(mf(s.flavour)),i=Object.entries(n).reduce((a,[l,c])=>{const[h,u]=l.split("|");return h===s.flavour&&(a[u]=c),a},{}),o=[typeof r=="function"?r(s):r,...Object.values(i)];return await Promise.all(o.map(a=>{const l=this.renderRoot.querySelector(a._$litStatic$);return l instanceof fs?l.updateComplete:null})),t}catch(t){return t instanceof Error?Ly(t):console.error(t),!0}}render(){const{root:t}=this.store;return t?this._renderModel(t):st}}Os=CC(jc);ou=new WeakMap;au=new WeakMap;nu(Os,4,"store",db,Zr,ou);nu(Os,4,"std",ub,Zr,au);Zr=nu(Os,0,"EditorHost",fb,Zr);Zr.styles=xt`
    editor-host {
      outline: none;
      isolation: isolate;
      display: block;
      height: 100%;
    }
  `;fi(Os,1,Zr);var OC=Object.create,lu=Object.defineProperty,RC=Object.getOwnPropertyDescriptor,mb=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),jn=e=>{throw TypeError(e)},IC=(e,t,s)=>t in e?lu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ff=(e,t)=>lu(e,"name",{value:t,configurable:!0}),MC=e=>{var t;return[,,,OC((t=e?.[mb("metadata")])!=null?t:null)]},bb=["class","method","getter","setter","accessor","field","value","get","set"],pi=e=>e!==void 0&&typeof e!="function"?jn("Function expected"):e,DC=(e,t,s,r,n)=>({kind:bb[e],name:t,metadata:r,addInitializer:i=>s._?jn("Already initialized"):n.push(pi(i||null))}),PC=(e,t)=>IC(t,mb("metadata"),e[3]),se=(e,t,s,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)t&1?i[n].call(s):r=i[n].call(s,r);return r},pr=(e,t,s,r,n,i)=>{var o,a,l,c,h,u=t&7,d=!!(t&8),f=!!(t&16),p=u>3?e.length+1:u?d?1:2:0,b=bb[u+5],v=u>3&&(e[p-1]=[]),x=e[p]||(e[p]=[]),w=u&&(!f&&!d&&(n=n.prototype),u<5&&(u>3||!f)&&RC(u<4?n:{get[s](){return jf(this,i)},set[s](k){return Hf(this,i,k)}},s));u?f&&u<4&&Ff(i,(u>2?"set ":u>1?"get ":"")+s):Ff(n,s);for(var S=r.length-1;S>=0;S--)c=DC(u,s,l={},e[3],x),u&&(c.static=d,c.private=f,h=c.access={has:f?k=>LC(n,k):k=>s in k},u^3&&(h.get=f?k=>(u^1?jf:NC)(k,n,u^4?i:w.get):k=>k[s]),u>2&&(h.set=f?(k,A)=>Hf(k,n,A,u^4?i:w.set):(k,A)=>k[s]=A)),a=(0,r[S])(u?u<4?f?i:w[b]:u>4?void 0:{get:w.get,set:w.set}:n,c),l._=1,u^4||a===void 0?pi(a)&&(u>4?v.unshift(a):u?f?i=a:w[b]=a:n=a):typeof a!="object"||a===null?jn("Object expected"):(pi(o=a.get)&&(w.get=o),pi(o=a.set)&&(w.set=o),pi(o=a.init)&&v.unshift(o));return u||PC(e,n),w&&lu(n,s,w),f?u^4?i:w:n},cu=(e,t,s)=>t.has(e)||jn("Cannot "+s),LC=(e,t)=>Object(t)!==t?jn('Cannot use the "in" operator on this value'):e.has(t),jf=(e,t,s)=>(cu(e,t,"read from private field"),s?s.call(e):t.get(e)),xr=(e,t,s)=>t.has(e)?jn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Hf=(e,t,s,r)=>(cu(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),NC=(e,t,s)=>(cu(e,t,"access private method"),s),vb,yb,_b,wb,xb,kb,Wf,Sb,Hc,Cb,vt,hu,uu,du,fu,pu,gu,mu;Cb=[Yh({store:Er.instanceOf(Wm),std:Er.object,widgets:Er.recordOf(Er.object)})];class Qe extends(Hc=qh(Kh(mo)),Sb=[Of({context:gb})],Wf=yC,kb=[Ra({context:bC}),pt()],xb=[pt()],wb=[Ra({context:vC}),pt()],_b=[Of({context:pb})],yb=[y({attribute:!1})],vb=[y({attribute:!1,hasChanged(t,s){return!t||!s?t!==s:!Object.keys(t).length&&!Object.keys(s).length?!1:t!==s}})],Hc){constructor(){super(...arguments),xr(this,hu,se(vt,8,this)),se(vt,11,this),this.selected$=Ur(()=>{const t=this.std.selection.value.find(s=>{var r;return s.blockId===((r=this.model)==null?void 0:r.id)});return t?t.is(Gm):!1}),this[Wf]=!0,this.handleEvent=(t,s,r)=>{var n;this._disposables.add(this.std.event.add(t,s,{flavour:r?.global?void 0:r?.flavour?(n=this.model)==null?void 0:n.flavour:void 0,blockId:r?.global||r?.flavour?void 0:this.blockId}))},xr(this,uu,se(vt,12,this,null)),se(vt,15,this),xr(this,du,se(vt,16,this,[this.renderBlock,this._renderMismatchBlock,this._renderViewType])),se(vt,19,this),xr(this,fu,se(vt,20,this,null)),se(vt,23,this),xr(this,pu,se(vt,24,this)),se(vt,27,this),xr(this,gu,se(vt,28,this,"display")),se(vt,31,this),xr(this,mu,se(vt,32,this)),se(vt,35,this)}get blockId(){return this.dataset.blockId}get childBlocks(){return this.model.children.map(s=>this.std.view.getBlock(s.id)).filter(s=>!!s)}get flavour(){return this.model.flavour}get host(){return this.std.host}get isVersionMismatch(){const t=this.store.schema.flavourSchemaMap.get(this.model.flavour);if(!t)return console.warn(`Schema not found for block ${this.model.id}, flavour ${this.model.flavour}`),!0;const s=t.version,r=this.model.version;return s!==r?(console.warn(`Version mismatch for block ${this.model.id}, expected ${s}, actual ${r}`),!0):!1}get model(){if(this._model)return this._model;const t=this.store.getModelById(this.blockId);if(!t)throw new T(R.MissingViewModelError,`Cannot find block model for id ${this.blockId}`);return this._model=t,t}get parentComponent(){const t=this.model.parent;return t?this.std.view.getBlock(t.id):null}get renderChildren(){return this.host.renderChildren.bind(this)}get rootComponent(){var t;const s=(t=this.store.root)==null?void 0:t.id;if(!s)return null;const r=this.std.view.getBlock(s);return r??null}get selection(){return this.std.selection}get service(){if(this._service)return this._service;const t=this.std.getOptional(eS(this.model.flavour));return this._service=t,t}get topContenteditableElement(){return this.rootComponent}get widgetComponents(){return Object.keys(this.widgets).reduce((t,s)=>({...t,[s]:this.std.view.getWidget(s,this.blockId)}),{})}_renderMismatchBlock(t){return pC(this.isVersionMismatch,()=>{var s;const r=this.model.version,n=this.store.schema.flavourSchemaMap.get(this.model.flavour),i=(s=n?.version)!=null?s:-1;return this.renderVersionMismatch(i,r)},()=>t)}_renderViewType(t){return fC(this.viewType,[["display",()=>t],["hidden",()=>st],["bypass",()=>this.renderChildren(this.model)]])}addRenderer(t){this._renderers.push(t)}bindHotKey(t,s){const r=this.std.event.bindHotkey(t,{flavour:s?.global?void 0:s?.flavour?this.model.flavour:void 0,blockId:s?.global||s?.flavour?void 0:this.blockId});return this._disposables.add(r),r}connectedCallback(){super.connectedCallback(),this.std.view.setBlock(this);const t=this.std.store.slots.blockUpdated.subscribe(({type:s,id:r})=>{r===this.model.id&&s==="delete"&&(this.std.view.deleteBlock(this),t.unsubscribe())});this._disposables.add(t),this._disposables.add(this.model.propsUpdated.subscribe(()=>{this.requestUpdate()}))}async getUpdateComplete(){const t=await super.getUpdateComplete();return await Promise.all(this.childBlocks.map(s=>s.updateComplete)),t}render(){return this._renderers.reduce((t,s)=>s.call(this,t),st)}renderBlock(){return st}renderVersionMismatch(t,s){return cs`
      <dl class="version-mismatch-warning" contenteditable="false">
        <dt>
          <h4>Block Version Mismatched</h4>
        </dt>
        <dd>
          <p>
            We can not render this <var>${this.model.flavour}</var> block
            because the version is mismatched.
          </p>
          <p>Editor version: <var>${t}</var></p>
          <p>Data version: <var>${s}</var></p>
        </dd>
      </dl>
    `}}vt=MC(Hc);hu=new WeakMap;uu=new WeakMap;du=new WeakMap;fu=new WeakMap;pu=new WeakMap;gu=new WeakMap;mu=new WeakMap;pr(vt,4,"std",Sb,Qe,hu);pr(vt,4,"_model",kb,Qe,uu);pr(vt,4,"_renderers",xb,Qe,du);pr(vt,4,"_service",wb,Qe,fu);pr(vt,4,"store",_b,Qe,pu);pr(vt,4,"viewType",yb,Qe,gu);pr(vt,4,"widgets",vb,Qe,mu);Qe=pr(vt,0,"BlockComponent",Cb,Qe);se(vt,1,Qe);var Yf,qf;function Ho(e){return e?.[bu]===!0}const bu=Symbol("GfxElement");function Kl(e){if(e.transformState$.value==="idle")return;const{viewport:t}=e.gfx;e.dataset.viewportState=t.serializeRecord(),e.style.transformOrigin="0 0",e.style.transform=e.getCSSTransform()}function BC(e){e.transformState$.value==="active"?(e.style.visibility="visible",e.style.pointerEvents="auto",e.classList.remove("block-idle"),e.classList.add("block-active")):(e.style.visibility="hidden",e.style.pointerEvents="none",e.classList.remove("block-active"),e.classList.add("block-idle"))}function Eb(e){e.style.position="absolute",e.disposables.add(e.gfx.viewport.viewportUpdated.subscribe(()=>{Kl(e)})),e.disposables.add(e.store.slots.blockUpdated.subscribe(({type:t,id:s})=>{s===e.model.id&&t==="update"&&Kl(e)})),e.disposables.add(Nn(()=>{BC(e),Kl(e)}))}class UO extends(qf=Qe,Yf=bu,qf){constructor(){super(...arguments),this[Yf]=!0,this.transformState$=Kt("active"),this.onDragMove=({dx:t,dy:s,currentBound:r})=>{this.model.xywh=r.moveDelta(t,s).serialize()}}get gfx(){return this.std.get(hn)}connectedCallback(){super.connectedCallback(),Eb(this)}onDragStart(){this.model.stash("xywh")}onDragEnd(){this.model.pop("xywh")}onBoxSelected(t){}getCSSTransform(){const t=this.gfx.viewport,{translateX:s,translateY:r,zoom:n}=t,i=tt.deserialize(this.model.xywh),o=i.x*n,a=i.y*n,l=o-i.x,c=a-i.y;return`translate(${s+l}px, ${r+c}px) scale(${n})`}getRenderingRect(){const{xywh$:t}=this.model;if(!t)throw new T(R.GfxBlockElementError,`Error on rendering '${this.model.flavour}': Gfx block's model should have 'xywh' property.`);const[s,r,n,i]=JSON.parse(t.value);return{x:s,y:r,w:n,h:i,zIndex:this.toZIndex()}}renderBlock(){const{x:t,y:s,w:r,h:n,zIndex:i}=this.getRenderingRect();return this.style.left!==`${t}px`&&(this.style.left=`${t}px`),this.style.top!==`${s}px`&&(this.style.top=`${s}px`),this.style.width!==`${r}px`&&(this.style.width=`${r}px`),this.style.height!==`${n}px`&&(this.style.height=`${n}px`),this.style.zIndex!==i&&(this.style.zIndex=i),this.renderGfxBlock()}renderGfxBlock(){return st}renderPageContent(){return st}async scheduleUpdate(){const t=this.parentElement;return this.hasUpdated||!t||!("scheduleUpdateChildren"in t)?super.scheduleUpdate():(await t.scheduleUpdateChildren(this.model.id),super.scheduleUpdate())}toZIndex(){var t;return(t=this.gfx.layer.getZIndex(this.model).toString())!=null?t:"0"}updateZIndex(){this.style.zIndex=this.toZIndex()}}function FO(e){var t,s;return class extends(s=e,t=bu,s){constructor(){super(...arguments),this[t]=!0,this.transformState$=Kt("active"),this.selected$=Ur(()=>{const r=this.std.selection.value.find(n=>{var i;return n.blockId===((i=this.model)==null?void 0:i.id)});return r?r.is(Xm):!1})}onDragMove({dx:r,dy:n,currentBound:i}){this.model.xywh=i.moveDelta(r,n).serialize()}onDragStart(){this.model.stash("xywh")}onDragEnd(){this.model.pop("xywh")}onBoxSelected(r){}get gfx(){return this.std.get(hn)}connectedCallback(){super.connectedCallback(),Eb(this)}getCSSTransform(){const r=this.gfx.viewport,{translateX:n,translateY:i,zoom:o}=r,a=tt.deserialize(this.model.xywh),l=a.x*o,c=a.y*o,h=l-a.x,u=c-a.y;return`translate(${n+h}px, ${i+u}px) scale(${o})`}getRenderingRect(){const{xywh$:r}=this.model;if(!r)throw new T(R.GfxBlockElementError,`Error on rendering '${this.model.flavour}': Gfx block's model should have 'xywh' property.`);const[n,i,o,a]=JSON.parse(r.value);return{x:n,y:i,w:o,h:a,zIndex:this.toZIndex()}}renderBlock(){const{x:r,y:n,w:i,h:o,zIndex:a}=this.getRenderingRect();return this.style.left=`${r}px`,this.style.top=`${n}px`,this.style.width=typeof i=="number"?`${i}px`:i,this.style.height=typeof o=="number"?`${o}px`:o,this.style.zIndex=a,this.renderGfxBlock()}renderGfxBlock(){return this.renderPageContent()}renderPageContent(){return super.renderBlock()}async scheduleUpdate(){const r=this.parentElement;return this.hasUpdated||!r||!("scheduleUpdateChildren"in r)?super.scheduleUpdate():(await r.scheduleUpdateChildren(this.model.id),super.scheduleUpdate())}toZIndex(){var r;return(r=this.gfx.layer.getZIndex(this.model).toString())!=null?r:"0"}updateZIndex(){this.style.zIndex=this.toZIndex()}}}var zC=Object.create,vu=Object.defineProperty,VC=Object.getOwnPropertyDescriptor,$b=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Hn=e=>{throw TypeError(e)},UC=(e,t,s)=>t in e?vu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Zf=(e,t)=>vu(e,"name",{value:t,configurable:!0}),FC=e=>{var t;return[,,,zC((t=e?.[$b("metadata")])!=null?t:null)]},Tb=["class","method","getter","setter","accessor","field","value","get","set"],gi=e=>e!==void 0&&typeof e!="function"?Hn("Function expected"):e,jC=(e,t,s,r,n)=>({kind:Tb[e],name:t,metadata:r,addInitializer:i=>s._?Hn("Already initialized"):n.push(gi(i||null))}),HC=(e,t)=>UC(t,$b("metadata"),e[3]),We=(e,t,s,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)t&1?i[n].call(s):r=i[n].call(s,r);return r},Wn=(e,t,s,r,n,i)=>{var o,a,l,c,h,u=t&7,d=!!(t&8),f=!!(t&16),p=u>3?e.length+1:u?d?1:2:0,b=Tb[u+5],v=u>3&&(e[p-1]=[]),x=e[p]||(e[p]=[]),w=u&&(!f&&!d&&(n=n.prototype),u<5&&(u>3||!f)&&VC(u<4?n:{get[s](){return Gf(this,i)},set[s](k){return Xf(this,i,k)}},s));u?f&&u<4&&Zf(i,(u>2?"set ":u>1?"get ":"")+s):Zf(n,s);for(var S=r.length-1;S>=0;S--)c=jC(u,s,l={},e[3],x),u&&(c.static=d,c.private=f,h=c.access={has:f?k=>WC(n,k):k=>s in k},u^3&&(h.get=f?k=>(u^1?Gf:YC)(k,n,u^4?i:w.get):k=>k[s]),u>2&&(h.set=f?(k,A)=>Xf(k,n,A,u^4?i:w.set):(k,A)=>k[s]=A)),a=(0,r[S])(u?u<4?f?i:w[b]:u>4?void 0:{get:w.get,set:w.set}:n,c),l._=1,u^4||a===void 0?gi(a)&&(u>4?v.unshift(a):u?f?i=a:w[b]=a:n=a):typeof a!="object"||a===null?Hn("Object expected"):(gi(o=a.get)&&(w.get=o),gi(o=a.set)&&(w.set=o),gi(o=a.init)&&v.unshift(o));return u||HC(e,n),w&&vu(n,s,w),f?u^4?i:w:n},yu=(e,t,s)=>t.has(e)||Hn("Cannot "+s),WC=(e,t)=>Object(t)!==t?Hn('Cannot use the "in" operator on this value'):e.has(t),Gf=(e,t,s)=>(yu(e,t,"read from private field"),s?s.call(e):t.get(e)),ri=(e,t,s)=>t.has(e)?Hn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Xf=(e,t,s,r)=>(yu(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),YC=(e,t,s)=>(yu(e,t,"access private method"),s),Ab,Ob,Rb,Ib,Mb,Wc,Db,Mt,_u,wu,xu,ku,Su;function qC(e,t){let s,r=[];return(...n)=>{r=n,s===void 0&&(s=requestAnimationFrame(()=>{s=void 0,(!t||t.isConnected)&&e(...r)}))}}Db=[Yh({viewport:Er.instanceOf(OS)})];class vs extends(Wc=Kh(mo),Mb=[y({attribute:!1})],Ib=[y({attribute:!1})],Rb=[y({type:Number})],Ob=[y({attribute:!1})],Ab=[y({attribute:!1})],Wc){constructor(){super(...arguments),this._hideOutsideAndNoSelectedBlock=()=>{if(!this.host)return;const t=this.host.std.get(hn),s=this.getModelsInViewport(),r=this._getSelectedModels(),n=new Set([...s,...r]),i=this._lastVisibleModels?new Set(this._lastVisibleModels):new Set;Dl(()=>{n.forEach(o=>{const a=t.view.get(o);Ho(a)&&(a.transformState$.value="active")}),i.forEach(o=>{if(n.has(o))return;const a=t.view.get(o);Ho(a)&&(a.transformState$.value="idle")})}),this._lastVisibleModels=n},this._lastVisibleModels=void 0,this._pendingChildrenUpdates=[],this._refreshViewport=qC(()=>{this._hideOutsideAndNoSelectedBlock()},this),this._updatingChildrenFlag=!1,this.scheduleUpdateChildren=t=>{const{promise:s,resolve:r}=Promise.withResolvers();if(this._pendingChildrenUpdates.push({id:t,resolve:r}),!this._updatingChildrenFlag){this._updatingChildrenFlag=!0;const n=()=>{this._pendingChildrenUpdates.length&&(this._pendingChildrenUpdates.splice(0,this.maxConcurrentRenders).forEach(({resolve:o})=>o()),this._pendingChildrenUpdates.length?requestAnimationFrame(()=>{this.isConnected&&n()}):this._updatingChildrenFlag=!1)};requestAnimationFrame(()=>{this.isConnected&&n()})}return s},ri(this,_u,We(Mt,8,this,()=>new Set)),We(Mt,11,this),ri(this,wu,We(Mt,12,this)),We(Mt,15,this),ri(this,xu,We(Mt,16,this,2)),We(Mt,19,this),ri(this,ku,We(Mt,20,this,!0)),We(Mt,23,this),ri(this,Su,We(Mt,24,this)),We(Mt,27,this)}connectedCallback(){super.connectedCallback();const t=()=>{this._refreshViewport()};this.enableChildrenSchedule||delete this.scheduleUpdateChildren,this._hideOutsideAndNoSelectedBlock(),this.disposables.add(this.viewport.viewportUpdated.subscribe(()=>t())),this.disposables.add(this.viewport.sizeUpdated.subscribe(()=>t()))}render(){return N``}_getSelectedModels(){if(!this.host)return new Set;const t=this.host.std.get(hn);return new Set(t.selection.surfaceSelections.flatMap(({elements:s})=>s).map(s=>t.getElementById(s)).filter(s=>s instanceof zc))}setBlocksActive(t){if(!this.host)return;const s=this.host.std.get(hn);Dl(()=>{t.forEach(r=>{const n=s.view.get(r);Ho(n)&&(n.transformState$.value="active")})})}setBlocksIdle(t){if(!this.host)return;const s=this.host.std.get(hn);Dl(()=>{t.forEach(r=>{const n=s.view.get(r);Ho(n)&&(n.transformState$.value="idle")})})}}Mt=FC(Wc);_u=new WeakMap;wu=new WeakMap;xu=new WeakMap;ku=new WeakMap;Su=new WeakMap;Wn(Mt,4,"getModelsInViewport",Mb,vs,_u);Wn(Mt,4,"host",Ib,vs,wu);Wn(Mt,4,"maxConcurrentRenders",Rb,vs,xu);Wn(Mt,4,"enableChildrenSchedule",Ob,vs,ku);Wn(Mt,4,"viewport",Ab,vs,Su);vs=Wn(Mt,0,"GfxViewportElement",Db,vs);vs.styles=xt`
    gfx-viewport {
      position: absolute;
      left: 0;
      top: 0;
      contain: size layout style;
      display: block;
      transform: none;
    }

    /* CSS for idle blocks that are hidden but maintain layout */
    .block-idle {
      visibility: hidden;
      pointer-events: none;
      will-change: transform;
      contain: size layout style;
    }

    /* CSS for active blocks participating in viewport transformations */
    .block-active {
      visibility: visible;
      pointer-events: auto;
    }
  `;We(Mt,1,vs);var Kf,Jf,Qf,tp,ep,sp,rp;const Da=(Jf=(Kf=globalThis.navigator)==null?void 0:Kf.userAgent)!=null?Jf:"",ro=((Qf=globalThis.navigator)==null?void 0:Qf.platform)||((tp=globalThis.process)==null?void 0:tp.platform),ZC=typeof window<"u"&&typeof document<"u",Cu=/Apple Computer/.test((ep=globalThis.navigator)==null?void 0:ep.vendor),jO=ZC&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1,GC=/Android \d/.test(Da),XC=Cu&&(/Mobile\/\w+/.test(Da)||((sp=globalThis.navigator)==null?void 0:sp.maxTouchPoints)>2),HO=/Mac/i.test(ro)||/darwin/.test(ro),KC=/iPad/i.test(ro)||/iPad/i.test(Da)||/Macintosh/i.test(Da)&&((rp=globalThis.navigator)==null?void 0:rp.maxTouchPoints)>2,WO=/Win/.test(ro)||/win32/.test(ro),YO=XC||KC||GC;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pb="important",JC=" !"+Pb,he=Vn(class extends Un{constructor(e){if(super(e),e.type!==Ye.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const r=e[s];return r==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?s.removeProperty(r):s[r]=null);for(const r in t){const n=t[r];if(n!=null){this.ft.add(r);const i=typeof n=="string"&&n.endsWith(JC);r.includes("-")||i?s.setProperty(r,i?n.slice(0,-11):n,i?Pb:""):s[r]=n}}return ge}}),bo=Cu?"‌":"​",qO=Cu?"​":"‌",Pa="data-v-root";function Yc(e,t){return e===t||(e&&t?QC(e,t):!1)}function QC(e,t){return e.index===t.index&&e.length===t.length}function Lb(e,t){return e.index<=t.index+t.length&&e.index+e.length>=t.index}function tE(e,t){if(!Lb(e,t))return null;const s=Math.max(e.index,t.index),r=Math.min(e.index+e.length,t.index+t.length)-s;return{index:s,length:r}}var eE=Object.create,Nb=Object.defineProperty,sE=Object.getOwnPropertyDescriptor,Bb=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),vo=e=>{throw TypeError(e)},rE=(e,t,s)=>t in e?Nb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,nE=e=>{var t;return[,,,eE((t=e?.[Bb("metadata")])!=null?t:null)]},zb=["class","method","getter","setter","accessor","field","value","get","set"],mi=e=>e!==void 0&&typeof e!="function"?vo("Function expected"):e,iE=(e,t,s,r,n)=>({kind:zb[e],name:t,metadata:r,addInitializer:i=>s._?vo("Already initialized"):n.push(mi(i||null))}),oE=(e,t)=>rE(t,Bb("metadata"),e[3]),as=(e,t,s,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)t&1?i[n].call(s):r=i[n].call(s,r);return r},yo=(e,t,s,r,n,i)=>{for(var o,a,l,c,h,u=t&7,d=!1,f=!1,p=e.length+1,b=zb[u+5],v=e[p-1]=[],x=e[p]||(e[p]=[]),w=(n=n.prototype,sE({get[s](){return aE(this,i)},set[s](k){return lE(this,i,k)}},s)),S=r.length-1;S>=0;S--)c=iE(u,s,l={},e[3],x),c.static=d,c.private=f,h=c.access={has:k=>s in k},h.get=k=>k[s],h.set=(k,A)=>k[s]=A,a=(0,r[S])({get:w.get,set:w.set},c),l._=1,a===void 0?mi(a)&&(w[b]=a):typeof a!="object"||a===null?vo("Object expected"):(mi(o=a.get)&&(w.get=o),mi(o=a.set)&&(w.set=o),mi(o=a.init)&&v.unshift(o));return w&&Nb(n,s,w),n},Vb=(e,t,s)=>t.has(e)||vo("Cannot "+s),aE=(e,t,s)=>(Vb(e,t,"read from private field"),t.get(e)),ni=(e,t,s)=>t.has(e)?vo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),lE=(e,t,s,r)=>(Vb(e,t,"write to private field"),t.set(e,s),s),Ub,Fb,jb,Hb,Wb,qc,Nt,Eu,$u,Tu,Au,Ou;class _s extends(qc=qh(fs),Wb=[y({type:Object})],Hb=[y({attribute:!1})],jb=[y({attribute:!1})],Fb=[y({attribute:!1})],Ub=[y({attribute:!1})],qc){constructor(){super(...arguments),this.disposables=new Yr,this.selected=Kt(!1),ni(this,Eu,as(Nt,8,this,{insert:bo})),as(Nt,11,this),ni(this,$u,as(Nt,12,this)),as(Nt,15,this),ni(this,Tu,as(Nt,16,this)),as(Nt,19,this),ni(this,Au,as(Nt,20,this)),as(Nt,23,this),ni(this,Ou,as(Nt,24,this)),as(Nt,27,this)}connectedCallback(){super.connectedCallback(),this.disposables.add(Nn(()=>{var t;const s=(t=this.inlineEditor)==null?void 0:t.inlineRange$.value;this.selected.value=!!s&&Lb(s,{index:this.startOffset,length:this.endOffset-this.startOffset})}))}createRenderRoot(){return this}async getUpdateComplete(){const t=await super.getUpdateComplete();await this.querySelector('[data-v-element="true"]').firstElementChild.updateComplete;const n=Array.from(this.querySelectorAll("v-text"));return await Promise.all(n.map(i=>i.updateComplete)),t}render(){const t=this.inlineEditor,s=t.attributeService.attributeRenderer,r={delta:this.delta,selected:this.selected.value,startOffset:this.startOffset,endOffset:this.endOffset,lineIndex:this.lineIndex,editor:t};if(t.isEmbed(this.delta)){if(this.delta.insert.length!==1)throw new T(R.InlineEditorError,`The length of embed node should only be 1.
          This seems to be an internal issue with inline editor.
          Please go to https://github.com/toeverything/blocksuite/issues
          to report it.`);return N`<span
        data-v-embed="true"
        data-v-element="true"
        contenteditable="false"
        style=${he({userSelect:"none"})}
        >${s(r)}</span
      >`}return N`<span data-v-element="true"
      >${s(r)}</span
    >`}}Nt=nE(qc);Eu=new WeakMap;$u=new WeakMap;Tu=new WeakMap;Au=new WeakMap;Ou=new WeakMap;yo(Nt,4,"delta",Wb,_s,Eu);yo(Nt,4,"endOffset",Hb,_s,$u);yo(Nt,4,"inlineEditor",jb,_s,Tu);yo(Nt,4,"lineIndex",Fb,_s,Au);yo(Nt,4,"startOffset",Ub,_s,Ou);oE(Nt,_s);const Wo=N`<span
  data-v-embed-gap="true"
  style=${he({userSelect:"text",padding:"0 0.5px",outline:"none"})}
  ><v-text></v-text
></span>`;var cE=Object.create,Yb=Object.defineProperty,hE=Object.getOwnPropertyDescriptor,qb=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),_o=e=>{throw TypeError(e)},uE=(e,t,s)=>t in e?Yb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,dE=e=>{var t;return[,,,cE((t=e?.[qb("metadata")])!=null?t:null)]},Zb=["class","method","getter","setter","accessor","field","value","get","set"],bi=e=>e!==void 0&&typeof e!="function"?_o("Function expected"):e,fE=(e,t,s,r,n)=>({kind:Zb[e],name:t,metadata:r,addInitializer:i=>s._?_o("Already initialized"):n.push(bi(i||null))}),pE=(e,t)=>uE(t,qb("metadata"),e[3]),Hs=(e,t,s,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)t&1?i[n].call(s):r=i[n].call(s,r);return r},il=(e,t,s,r,n,i)=>{for(var o,a,l,c,h,u=t&7,d=!1,f=!1,p=e.length+1,b=Zb[u+5],v=e[p-1]=[],x=e[p]||(e[p]=[]),w=(n=n.prototype,hE({get[s](){return gE(this,i)},set[s](k){return mE(this,i,k)}},s)),S=r.length-1;S>=0;S--)c=fE(u,s,l={},e[3],x),c.static=d,c.private=f,h=c.access={has:k=>s in k},h.get=k=>k[s],h.set=(k,A)=>k[s]=A,a=(0,r[S])({get:w.get,set:w.set},c),l._=1,a===void 0?bi(a)&&(w[b]=a):typeof a!="object"||a===null?_o("Object expected"):(bi(o=a.get)&&(w.get=o),bi(o=a.set)&&(w.set=o),bi(o=a.init)&&v.unshift(o));return w&&Yb(n,s,w),n},Gb=(e,t,s)=>t.has(e)||_o("Cannot "+s),gE=(e,t,s)=>(Gb(e,t,"read from private field"),t.get(e)),Yo=(e,t,s)=>t.has(e)?_o("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),mE=(e,t,s,r)=>(Gb(e,t,"write to private field"),t.set(e,s),s),Xb,Kb,Jb,Qb,Zc,ue,Ru,Iu,Mu,Du;class cr extends(Zc=fs,Qb=[y({attribute:!1})],Jb=[y({attribute:!1})],Kb=[y({attribute:!1})],Xb=[y({attribute:!1})],Zc){constructor(){super(...arguments),Yo(this,Ru,Hs(ue,8,this,[])),Hs(ue,11,this),Yo(this,Iu,Hs(ue,12,this)),Hs(ue,15,this),Yo(this,Mu,Hs(ue,16,this)),Hs(ue,19,this),Yo(this,Du,Hs(ue,20,this)),Hs(ue,23,this)}get inlineEditor(){const t=this.closest(`[${Pa}]`);if(!t)throw new T(T.ErrorCode.ValueNotExists,"v-line must be inside a v-root");const s=t.inlineEditor;if(!s)throw new T(T.ErrorCode.ValueNotExists,"v-line must be inside a v-root with inline-editor");return s}get vElements(){return Array.from(this.querySelectorAll("v-element"))}get vTextContent(){return this.vElements.reduce((t,s)=>t+s.delta.insert,"")}get vTextLength(){return this.vElements.reduce((t,s)=>t+s.delta.insert.length,0)}get vTexts(){return Array.from(this.querySelectorAll("v-text"))}createRenderRoot(){return this}firstUpdated(){this.style.display="block",this.addEventListener("mousedown",t=>{if(t.detail>=2&&this.startOffset===this.endOffset){t.preventDefault();return}t.detail>=3&&(t.preventDefault(),this.inlineEditor.setInlineRange({index:this.startOffset,length:this.endOffset-this.startOffset}))})}async getUpdateComplete(){const t=await super.getUpdateComplete();return await Promise.all(this.vElements.map(s=>s.updateComplete)),t}render(){if(this.isConnected)return this.inlineEditor.vLineRenderer?this.inlineEditor.vLineRenderer(this):this.renderVElements()}renderVElements(){if(this.elements.length===0)return N`
        <div><v-text .str=${bo}></v-text></div>
      `;const t=this.inlineEditor,s=this.elements.flatMap(([r,n],i)=>{var o,a;if(t.isEmbed(n)){if(n.insert.length!==1)throw new T(R.InlineEditorError,`The length of embed node should only be 1.
            This seems to be an internal issue with inline editor.
            Please go to https://github.com/toeverything/blocksuite/issues
            to report it.`);if(i===0){const l=(o=this.elements[i+1])==null?void 0:o[1];return!l||t.isEmbed(l)?[Wo,r,Wo]:[Wo,r]}else{const l=(a=this.elements[i+1])==null?void 0:a[1];return!l||t.isEmbed(l)?[r,Wo]:[r]}}return r});return N`<div style=${he({padding:"0 0.5px",display:"inline-block"})}>${s}</div>`}}ue=dE(Zc);Ru=new WeakMap;Iu=new WeakMap;Mu=new WeakMap;Du=new WeakMap;il(ue,4,"elements",Qb,cr,Ru);il(ue,4,"endOffset",Jb,cr,Iu);il(ue,4,"index",Kb,cr,Mu);il(ue,4,"startOffset",Xb,cr,Du);pE(ue,cr);var bE=Object.create,tv=Object.defineProperty,vE=Object.getOwnPropertyDescriptor,ev=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),wo=e=>{throw TypeError(e)},yE=(e,t,s)=>t in e?tv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_E=e=>{var t;return[,,,bE((t=e?.[ev("metadata")])!=null?t:null)]},sv=["class","method","getter","setter","accessor","field","value","get","set"],vi=e=>e!==void 0&&typeof e!="function"?wo("Function expected"):e,wE=(e,t,s,r,n)=>({kind:sv[e],name:t,metadata:r,addInitializer:i=>s._?wo("Already initialized"):n.push(vi(i||null))}),xE=(e,t)=>yE(t,ev("metadata"),e[3]),np=(e,t,s,r)=>{for(var n=0,i=e[t>>1],o=i&&i.length;n<o;n++)t&1?i[n].call(s):r=i[n].call(s,r);return r},kE=(e,t,s,r,n,i)=>{for(var o,a,l,c,h,u=t&7,d=!1,f=!1,p=e.length+1,b=sv[u+5],v=e[p-1]=[],x=e[p]||(e[p]=[]),w=(n=n.prototype,vE({get[s](){return SE(this,i)},set[s](k){return EE(this,i,k)}},s)),S=r.length-1;S>=0;S--)c=wE(u,s,l={},e[3],x),c.static=d,c.private=f,h=c.access={has:k=>s in k},h.get=k=>k[s],h.set=(k,A)=>k[s]=A,a=(0,r[S])({get:w.get,set:w.set},c),l._=1,a===void 0?vi(a)&&(w[b]=a):typeof a!="object"||a===null?wo("Object expected"):(vi(o=a.get)&&(w.get=o),vi(o=a.set)&&(w.set=o),vi(o=a.init)&&v.unshift(o));return w&&tv(n,s,w),n},rv=(e,t,s)=>t.has(e)||wo("Cannot "+s),SE=(e,t,s)=>(rv(e,t,"read from private field"),t.get(e)),CE=(e,t,s)=>t.has(e)?wo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),EE=(e,t,s,r)=>(rv(e,t,"write to private field"),t.set(e,s),s),nv,Gc,no,Pu;class Lu extends(Gc=fs,nv=[y({attribute:!1})],Gc){constructor(){super(...arguments),CE(this,Pu,np(no,8,this,bo)),np(no,11,this)}createRenderRoot(){return this}render(){return N`<span
      style=${he({"word-break":"break-word","text-wrap":"wrap","white-space-collapse":"break-spaces"})}
      data-v-text="true"
      >${this.str}</span
    >`}}no=_E(Gc);Pu=new WeakMap;kE(no,4,"str",nv,Lu,Pu);xE(no,Lu);function $E(e){let t="";e.underline&&(t+="underline"),e.strike&&(t+=" line-through");let s={};return e.code&&(s={"font-family":'"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',"line-height":"normal",background:"rgba(135,131,120,0.15)",color:"#EB5757","border-radius":"3px","font-size":"85%",padding:"0.2em 0.4em"}),he({"font-weight":e.bold?"bold":"normal","font-style":e.italic?"italic":"normal","text-decoration":t.length>0?t:"none",...s})}const TE=()=>({delta:e})=>{const t=e.attributes?$E(e.attributes):he({});return N`<span style=${t}
      ><v-text .str=${e.insert}></v-text
    ></span>`};class AE{constructor(t,s={}){this.editor=t,this.hooks=s}}function OE(e){const t=[];let s=e.insert;for(;s.length>0;){const r=s.indexOf(`
`);if(r===-1){t.push({insert:s,attributes:e.attributes});break}s.slice(0,r).length>0&&t.push({insert:s.slice(0,r),attributes:e.attributes}),t.push(`
`),s=s.slice(r+1)}return t}function RE(e){if(e.length===0)return[[]];const t=e.flatMap(OE);function*s(r){let n=0;for(let i=0;i<r.length;i++)if(r[i]===`
`){const o=r.slice(n,i);n=i+1,yield o}else i===r.length-1&&(yield r.slice(n));r.at(-1)===`
`&&(yield[])}return Array.from(s(t))}function La(e){var t;return e instanceof Element?e instanceof _s?e.querySelector('[data-v-embed="true"]')!==null:!!e.closest('[data-v-embed="true"]'):!!((t=e.parentElement)==null?void 0:t.closest('[data-v-embed="true"]'))}function iv(e){const t=e instanceof Element?e:e.parentElement;return t?!!t.closest('[data-v-embed-gap="true"]'):!1}function IE(e,t){const s=[];for(const r of t)if(e.isEmbed(r)){const n=[...r.insert].map(i=>({insert:i,attributes:r.attributes}));s.push(...n)}else s.push(r);return s}function ME(e){var t;return e instanceof Text&&((t=e.parentElement)==null?void 0:t.dataset.vText)==="true"}function DE(e){return e instanceof HTMLElement&&(e.dataset.vElement==="true"||e instanceof _s)}function PE(e){return e instanceof HTMLElement&&(e instanceof cr||e.parentElement instanceof cr)}function LE(e){const t=e instanceof Element?e:e.parentElement,s=t?.closest("v-line");return!!s&&s.vTextLength===0}function NE(e){return e instanceof HTMLElement&&e.dataset.vRoot==="true"}function io(e){return e.wholeText===bo?0:e.wholeText.length}function Is(e){return Array.from(e.querySelectorAll('[data-v-text="true"]')).flatMap(r=>{const n=Array.from(r.childNodes).find(i=>i instanceof Text);return n||[]})}function Xc(e,t){var s;if(ME(e))return[e,t];if(DE(e)){const n=Is(e),i=(s=n[0].parentElement)==null?void 0:s.closest('[data-v-element="true"]');if(n.length===1&&i instanceof HTMLElement&&i.dataset.vEmbed==="true")return[n[0],0];if(n.length>0)return n[t]?[n[t],0]:null}if(PE(e)||NE(e))return Kc(e,t,!0);if(!(e instanceof Node))return null;const r=BE(e);return r?zE(r,e,t):null}function En(e,t,s){if(s.dataset.vRoot!=="true")throw new T(R.InlineEditorError,"textRangeToDomPoint should be called with editor root element");if(!s.contains(e))return null;const r=Is(s);if(r.length===0)return null;const n=r.indexOf(e);let i=0;for(const c of r.slice(0,n))i+=io(c);e.wholeText!==bo&&(i+=t);const o=e.parentElement;if(!o)throw new T(R.InlineEditorError,"text element parent not found");const a=o.closest("v-line");if(!a)throw new T(R.InlineEditorError,"line element not found");const l=Array.from(s.querySelectorAll("v-line")).indexOf(a);return{text:e,index:i+l}}function BE(e){var t,s;const r=(t=e.parentElement)==null?void 0:t.closest("v-line");if(r)return Array.from(r.querySelectorAll("v-element"));const n=e instanceof Element?e.closest(`[${Pa}]`):(s=e.parentElement)==null?void 0:s.closest(`[${Pa}]`);return n?Array.from(n.querySelectorAll("v-line")):null}function zE(e,t,s){const r=e[0];for(let n=0;n<e.length;n++){const i=e[n];if(n===0&&op(t,i))return Kc(r,s,!0);if(VE(t,i))return Kc(r,s,!1);if(n===e.length-1&&ap(t,i)||n<e.length-1&&ap(t,i)&&op(t,e[n+1]))return ip(i)}return null}function ip(e){const t=Is(e);if(t.length===0)return null;const s=t[t.length-1];return[s,io(s)]}function Kc(e,t,s){const r=Is(e);if(r.length===0)return null;const n=s?r[0]:r[r.length-1];return[n,t===0?t:n.length]}function VE(e,t){return t.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_CONTAINED_BY||t.compareDocumentPosition(e)===(Node.DOCUMENT_POSITION_CONTAINED_BY|Node.DOCUMENT_POSITION_FOLLOWING)}function op(e,t){return e.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_FOLLOWING}function ap(e,t){return e.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_PRECEDING}const UE=({rootElement:e,startText:t,endText:s})=>e.contains(t)&&e.contains(s),FE=({rootElement:e,startText:t,endText:s,startTextOffset:r,endTextOffset:n})=>{const i=En(t,r,e),o=En(s,n,e);return!i||!o?null:{index:Math.min(i.index,o.index),length:Math.abs(i.index-o.index)}},jE=({rootElement:e,startText:t,endText:s})=>!e.contains(t)&&e.contains(s),HE=({rootElement:e,endText:t,endTextOffset:s})=>{const r=En(t,s,e);return r?{index:0,length:r.index}:null},WE=({rootElement:e,startText:t,endText:s})=>e.contains(t)&&!e.contains(s),YE=({yText:e,rootElement:t,startText:s,startTextOffset:r})=>{const n=En(s,r,t);return n?{index:n.index,length:e.length-n.index}:null},qE=({rootElement:e,startText:t,endText:s,range:r})=>!e.contains(t)&&!e.contains(s)&&r.intersectsNode(e),ZE=({yText:e})=>({index:0,length:e.length}),GE=(e,t,s)=>{const{startContainer:r,startOffset:n,endContainer:i,endOffset:o}=e,a=Xc(r,n),l=Xc(i,o);if(!a||!l)return null;const[c,h]=a,[u,d]=l;return{rootElement:t,range:e,yText:s,startNode:r,startOffset:n,endNode:i,endOffset:o,startText:c,startTextOffset:h,endText:u,endTextOffset:d}};function XE(e,t,s){const r=GE(e,t,s);if(!r)return null;if(r.startNode&&r.startNode===r.endNode&&La(r.startNode)){const n=En(r.startText,r.startTextOffset,t);if(n)return{index:n.index,length:1}}return UE(r)?FE(r):jE(r)?HE(r):WE(r)?YE(r):qE(r)?ZE(r):null}function KE(e,t){var s,r;const n=Array.from(e.querySelectorAll("v-line"));let i=null,o=null,a=0,l=0,c=0;for(let u=0;u<n.length&&!(i&&o);u++){const d=Is(n[u]);if(d.length===0)return null;for(const f of d){const p=io(f);if(!i&&c+p>=t.index&&(i=f,a=t.index-c),!o&&c+p>=t.index+t.length&&(o=f,l=t.index+t.length-c),i&&o)break;c+=p}c+=1}if(!i||!o)return null;if(La(i)){const u=(s=i.parentElement)==null?void 0:s.closest("v-element");if(!u)throw new T(R.InlineEditorError,"failed to find vElement for a text note in an embed element");const d=u.nextElementSibling;if(!d)throw new T(R.InlineEditorError,"failed to find nextSibling sibling of an embed element");const f=Is(d);if(f.length===0)throw new T(R.InlineEditorError,"text node in v-text not found");d instanceof _s?(i=f[f.length-1],a=io(i)):(i=f[0],a=0)}if(La(o)){const u=(r=o.parentElement)==null?void 0:r.closest("v-element");if(!u)throw new T(R.InlineEditorError,"failed to find vElement for a text note in an embed element");const d=u.nextElementSibling;if(!d)throw new T(R.InlineEditorError,"failed to find nextSibling sibling of an embed element");const f=Is(d);if(f.length===0)throw new T(R.InlineEditorError,"text node in v-text not found");o=f[0],l=0}const h=document.createRange();return h.setStart(i,a),h.setEnd(o,l),h}function JE(e,t,s,r){t&&(s.insertText(e,t,r),s.setInlineRange({index:e.index+t.length,length:0}))}function QE(e,t,s,r){s.getDeltasByInlineRange(e).forEach(n=>{r={...n[0].attributes,...r}}),t&&(s.insertText(e,t,r),s.setInlineRange({index:e.index+t.length,length:0}))}function t$(e,t){t.insertLineBreak(e),t.setInlineRange({index:e.index+1,length:0})}function e$(e,t){t.deleteText(e),t.setInlineRange({index:e.index,length:0})}function s$(e,t,s,r,n){if(n.isValidInlineRange(r))if(e==="insertText")JE(r,t,n,s);else if(e==="insertParagraph"||e==="insertLineBreak")t$(r,n);else if(e.startsWith("delete"))e$(r,n);else if(e==="insertReplacementText")QE(r,t,n,s);else return}class r${constructor(t){this.editor=t,this._attributeRenderer=TE(),this._attributeSchema=Fx,this._marks=null,this.getFormat=(s,r=!1)=>{const i=this.editor.deltaService.getDeltasByInlineRange(s).filter(([a,l])=>{const c=l.index,h=l.index+l.length,u=s.index,d=s.index+s.length;return u===d?c<u&&u<=h:h>u&&c<=d}).map(([a])=>a.attributes);return r?i.reduce((a,l)=>({...a,...l}),{}):!i.length||i.some(a=>!a)?{}:i.reduce((a,l)=>{const c={};for(const h in a){const u=h;a[u]===l[u]&&(c[u]=a[u])}return c})},this.normalizeAttributes=s=>{if(!s)return;const r=this._attributeSchema.safeParse(s);if(!r.success){console.error(r.error);return}return Object.fromEntries(Object.entries(r.data).filter(([n,i])=>i!==void 0))},this.resetMarks=()=>{this._marks=null},this.setAttributeRenderer=s=>{this._attributeRenderer=s},this.setAttributeSchema=s=>{this._attributeSchema=s},this.setMarks=s=>{this._marks=s}}get attributeRenderer(){return this._attributeRenderer}get marks(){return this._marks}}class n${constructor(t){this.editor=t,this.getDeltaByRangeIndex=s=>{const r=this.editor.embedDeltas;let n=0;for(const i of r){if(n+i.insert.length>=s)return i;n+=i.insert.length}return null},this.getDeltasByInlineRange=s=>this.mapDeltasInInlineRange(s,(r,n)=>[r,{index:n,length:r.insert.length}]),this.mapDeltasInInlineRange=(s,r)=>{const n=this.editor.embedDeltas,i=[];return n.reduce((o,a,l)=>{const c=a.insert.length,h=s.index-c,u=s.index+s.length;if(o>=h&&(o<u||s.length===0&&o===s.index)){const f=r(a,o,l);i.push(f)}return o+c},0),i}}get embedDeltas(){return IE(this.editor,this.editor.yTextDeltas)}}class i${constructor(t){this.editor=t,this._compositionInlineRange=null,this._isComposing=!1,this._isRangeCompletelyInRoot=s=>{if(s.commonAncestorContainer.ownerDocument!==document)return!1;const r=this.editor.rootElement;if(!r)return!1;const n=document.createRange();return n.selectNode(r),s.startContainer.compareDocumentPosition(s.endContainer)&Node.DOCUMENT_POSITION_FOLLOWING?n.comparePoint(s.startContainer,s.startOffset)>=0&&n.comparePoint(s.endContainer,s.endOffset)<=0:n.comparePoint(s.endContainer,s.startOffset)>=0&&n.comparePoint(s.startContainer,s.endOffset)<=0},this._onBeforeInput=s=>{var r,n,i,o,a,l;const c=this.editor.rangeService.getNativeRange();if(this.editor.isReadonly||this._isComposing||!c||!this._isRangeCompletelyInRoot(c))return;let h=this.editor.toInlineRange(c);if(!h)return;let u=!0;if(s.inputType.startsWith("delete")&&(iv(c.commonAncestorContainer)&&h.length===0&&h.index>0?(h={index:h.index-1,length:1},u=!1):LE(c.commonAncestorContainer)&&h.length===0&&h.index>0&&(h={index:h.index-1,length:1},u=!1)),u){const f=s.getTargetRanges();if(f.length>0){const p=f[0],b=document.createRange();b.setStart(p.startContainer,p.startOffset),b.setEnd(p.endContainer,p.endOffset);const v=this.editor.toInlineRange(b);Yc(h,v)||(h=v)}}if(!h)return;s.preventDefault();const d={inlineEditor:this.editor,raw:s,inlineRange:h,data:(i=(n=s.data)!=null?n:(r=s.dataTransfer)==null?void 0:r.getData("text/plain"))!=null?i:null,attributes:{}};(a=(o=this.editor.hooks).beforeinput)==null||a.call(o,d),s$(d.raw.inputType,d.data,d.attributes,d.inlineRange,this.editor),this.editor.slots.inputting.next((l=s.data)!=null?l:"")},this._onClick=s=>{var r;if(s.target instanceof Node&&La(s.target)){const n=document.getSelection();if(!n)return;if(s.target instanceof HTMLElement){const i=s.target.closest("v-element");i&&n.selectAllChildren(i)}else{const i=(r=s.target.parentElement)==null?void 0:r.closest("v-element");i&&n.selectAllChildren(i)}}},this._onCompositionEnd=async s=>{var r,n,i;if(this._isComposing=!1,!this.editor.rootElement||!this.editor.rootElement.isConnected)return;const o=this.editor.rangeService.getNativeRange();if(this.editor.isReadonly||!o||!this._isRangeCompletelyInRoot(o))return;this.editor.rerenderWholeEditor(),await this.editor.waitForUpdate();const a=this._compositionInlineRange;if(!a)return;s.preventDefault();const l={inlineEditor:this.editor,raw:s,inlineRange:a,data:s.data,attributes:{}};(n=(r=this.editor.hooks).compositionEnd)==null||n.call(r,l);const{inlineRange:c,data:h}=l;h&&h.length>0&&(this.editor.insertText(c,h,l.attributes),this.editor.setInlineRange({index:c.index+h.length,length:0})),this.editor.slots.inputting.next((i=s.data)!=null?i:"")},this._onCompositionStart=s=>{var r;if(this._isComposing=!0,!this.editor.rootElement)return;this.editor.rootElement.querySelectorAll('[data-v-embed="true"]').forEach(o=>{o.removeAttribute("contenteditable")});const i=this.editor.rangeService.getNativeRange();i?this._compositionInlineRange=this.editor.toInlineRange(i):this._compositionInlineRange=null,this.editor.slots.inputting.next((r=s.data)!=null?r:"")},this._onCompositionUpdate=s=>{var r;if(!this.editor.rootElement||!this.editor.rootElement.isConnected)return;const n=this.editor.rangeService.getNativeRange();this.editor.isReadonly||!n||!this._isRangeCompletelyInRoot(n)||this.editor.slots.inputting.next((r=s.data)!=null?r:"")},this._onKeyDown=s=>{const r=this.editor.getInlineRange();if(r&&(this.editor.slots.keydown.next(s),!s.shiftKey&&(s.key==="ArrowLeft"||s.key==="ArrowRight"))){if(r.length!==0)return;const n=()=>{s.preventDefault(),s.stopPropagation()},i=this.editor.getDeltasByInlineRange(r);if(i.length===2)s.key==="ArrowLeft"&&this.editor.isEmbed(i[0][0])?(n(),this.editor.setInlineRange({index:r.index-1,length:1})):s.key==="ArrowRight"&&this.editor.isEmbed(i[1][0])&&(n(),this.editor.setInlineRange({index:r.index,length:1}));else if(i.length===1){const o=i[0][0];this.editor.isEmbed(o)&&(s.key==="ArrowLeft"&&r.index-1>=0?(n(),this.editor.setInlineRange({index:r.index-1,length:1})):s.key==="ArrowRight"&&r.index+1<=this.editor.yTextLength&&(n(),this.editor.setInlineRange({index:r.index,length:1})))}}},this._onSelectionChange=()=>{const s=this.editor.rootElement;if(!s)return;const r=this.editor.getInlineRange();if(this._isComposing)return;const n=document.getSelection();if(!n)return;if(n.rangeCount===0){r!==null&&this.editor.setInlineRange(null);return}const i=n.getRangeAt(0);if(!i.intersectsNode(s))if(i.endContainer.contains(s)&&Array.from(i.endContainer.childNodes).filter(l=>l instanceof HTMLElement).length===1&&i.startContainer.contains(s)&&Array.from(i.startContainer.childNodes).filter(l=>l instanceof HTMLElement).length===1){this.editor.focusEnd();return}else{r!==null&&this.editor.setInlineRange(null);return}const o=this.editor.toInlineRange(n.getRangeAt(0));Yc(r,o)||(this.editor.rangeService.lockSyncInlineRange(),this.editor.setInlineRange(o),this.editor.rangeService.unlockSyncInlineRange())},this.mount=()=>{const s=this.editor.eventSource,r=this.editor.rootElement;if(this.editor.inlineRangeProviderOverride||this.editor.disposables.addFromEvent(document,"selectionchange",this._onSelectionChange),!s){console.error("Mount inline editor without event source ready");return}this.editor.disposables.addFromEvent(s,"beforeinput",this._onBeforeInput),this.editor.disposables.addFromEvent(s,"compositionstart",this._onCompositionStart),this.editor.disposables.addFromEvent(s,"compositionupdate",this._onCompositionUpdate),this.editor.disposables.addFromEvent(s,"compositionend",n=>{this._onCompositionEnd(n).catch(console.error)}),this.editor.disposables.addFromEvent(s,"keydown",this._onKeyDown),r&&this.editor.disposables.addFromEvent(r,"click",this._onClick)}}get isComposing(){return this._isComposing}}class o${constructor(t){this.editor=t,this._lastEndRelativePosition=null,this._lastStartRelativePosition=null,this.focusEnd=()=>{this.editor.setInlineRange({index:this.editor.yTextLength,length:0})},this.focusIndex=s=>{this.editor.setInlineRange({index:s,length:0})},this.focusStart=()=>{this.editor.setInlineRange({index:0,length:0})},this.getInlineRangeFromElement=s=>{var r,n;const i=document.createRange(),o=s.querySelector("[data-v-text]");if(!o)return null;const a=o.childNodes[1];return a instanceof Text?(i.setStart(a,0),i.setEnd(a,(n=(r=a.textContent)==null?void 0:r.length)!=null?n:0),this.toInlineRange(i)):null},this.getLine=s=>{const r=this.editor.rootElement;if(!r)return null;const n=Array.from(r.querySelectorAll("v-line"));let i=0;for(const[o,a]of n.entries()){if(s>=i&&s<i+a.vTextLength+1)return{line:a,lineIndex:o,rangeIndexRelatedToLine:s-i};i+=a.vTextLength+1}return console.error("failed to find line"),null},this.getNativeRange=()=>{const s=this.getNativeSelection();return s?s.getRangeAt(0):null},this.getNativeSelection=()=>{const s=document.getSelection();return!s||s.rangeCount===0?null:s},this.getTextPoint=s=>{const r=this.editor.rootElement;if(!r)return null;const n=Array.from(r.querySelectorAll("v-line"));let i=0;for(const o of n){const a=Is(o);if(a.length===0)return null;for(const l of a.filter(c=>!iv(c))){if(!l.textContent)return null;if(i+l.textContent.length>=s)return[l,s-i];i+=io(l)}i+=1}return null},this.isFirstLine=s=>{if(!s||s.length>0)return!1;const r=this.toDomRange(s);if(!r)return console.error("failed to convert inline range to domRange"),!1;if(this.editor.yTextString.slice(0,s.index).includes(`
`))return!1;const i=r.commonAncestorContainer.parentElement;if(!i)return console.error("failed to get container"),!1;const o=i.getBoundingClientRect(),a=r.getClientRects(),l=a[a.length-1];return Math.abs(l.top-o.top)<1},this.isLastLine=s=>{if(!s||s.length>0||this.editor.yTextString.slice(s.index).includes(`
`))return!1;const n=this.toDomRange(s);if(!n)return console.error("failed to convert inline range to domRange"),!1;const i=n.commonAncestorContainer.parentElement;if(!i)return console.error("failed to get container"),!1;const o=i.getBoundingClientRect(),a=n.getClientRects(),l=a[a.length-1];return Math.abs(l.bottom-o.bottom)<1},this.isValidInlineRange=s=>!(s&&(s.index<0||s.index+s.length>this.editor.yText.length)),this.mount=()=>{const s=this.editor;let r=s.inlineRange$.value;s.disposables.add(Nn(()=>{const n=s.inlineRange$.value;if(!s.mounted||Yc(r,n))return;r=n;const o=s.yText;if(n?(this._lastStartRelativePosition=mc(o,n.index),this._lastEndRelativePosition=mc(o,n.index+n.length)):(this._lastStartRelativePosition=null,this._lastEndRelativePosition=null),!s.inlineRangeProviderOverride)if(this.editor.renderService.rendering){const a=s.slots.renderComplete.subscribe(()=>{a.unsubscribe(),this.syncInlineRange(n)})}else this.syncInlineRange()}))},this.selectAll=()=>{this.editor.setInlineRange({index:0,length:this.editor.yTextLength})},this._syncInlineRangeLock=!1,this.lockSyncInlineRange=()=>{this._syncInlineRangeLock=!0},this.unlockSyncInlineRange=()=>{this._syncInlineRangeLock=!1},this.syncInlineRange=s=>{if(!this.editor.mounted||this._syncInlineRangeLock)return;s=s??this.editor.getInlineRange();const r=()=>{const n=document.getSelection();if(n&&this.editor.rootElement)if(s===null)n.rangeCount>0&&n.getRangeAt(0).intersectsNode(this.editor.rootElement)&&n.removeAllRanges();else try{const i=this.toDomRange(s);if(i)n.removeAllRanges(),n.addRange(i),this.editor.rootElement.focus(),this.editor.slots.inlineRangeSync.next(i);else{const o=this.editor.slots.renderComplete.subscribe(()=>{o.unsubscribe(),this.syncInlineRange(s)})}}catch(i){console.error("failed to apply inline range"),console.error(i)}};if(this.editor.renderService.rendering){const n=this.editor.slots.renderComplete.subscribe(()=>{n.unsubscribe(),r()})}else r()},this.toDomRange=s=>{const r=this.editor.rootElement;return r?KE(r,s):null},this.toInlineRange=s=>{const{rootElement:r,yText:n}=this.editor;return!r||!n?null:XE(s,r,n)}}get lastEndRelativePosition(){return this._lastEndRelativePosition}get lastStartRelativePosition(){return this._lastStartRelativePosition}}class a${constructor(t){this.editor=t,this._onYTextChange=(s,r)=>{if(this.editor.slots.textChange.next(),this.editor.yText.toString().includes("\r"))throw new T(R.InlineEditorError,'yText must not contain "\\r" because it will break the range synchronization');if(this.render(),!this.editor.inlineRange$.peek()||r.local)return;const o=this.editor.lastStartRelativePosition,a=this.editor.lastEndRelativePosition;if(!o||!a)return;const l=this.editor.yText.doc;if(!l){console.error("doc is not found when syncing yText");return}const c=bc(o,l),h=bc(a,l),u=c?.index,d=h?.index;if(!u||!d)return;const f={index:u,length:d-u};this.editor.isValidInlineRange(f)&&(this.editor.setInlineRange(f),this.editor.syncInlineRange())},this.mount=()=>{const s=this.editor,r=s.yText;r.observe(this._onYTextChange),s.disposables.add({dispose:()=>{r.unobserve(this._onYTextChange)}})},this._rendering=!1,this.render=()=>{if(!this.editor.rootElement)return;this._rendering=!0;const s=this.editor.rootElement,r=this.editor.deltaService.embedDeltas,n=RE(r);let i=0;const o=n.map((a,l)=>{l>0&&(i+=1);const c=i;if(a.length>0){const h=a.map(u=>{const d=i;i+=u.insert.length;const f=i;return[N`<v-element
              .inlineEditor=${this.editor}
              .delta=${{insert:u.insert,attributes:this.editor.attributeService.normalizeAttributes(u.attributes)}}
              .startOffset=${d}
              .endOffset=${f}
              .lineIndex=${l}
            ></v-element>`,u]});return N`<v-line
          .elements=${h}
          .index=${l}
          .startOffset=${c}
          .endOffset=${i}
        ></v-line>`}else return N`<v-line
          .elements=${[]}
          .index=${l}
          .startOffset=${c}
          .endOffset=${i}
        ></v-line>`});try{Xh(lb(o.map((a,l)=>({line:a,index:l})),a=>a.index,a=>a.line),s)}catch{this.editor.rerenderWholeEditor()}this.editor.waitForUpdate().then(()=>{this._rendering=!1,this.editor.slots.renderComplete.next(),this.editor.syncInlineRange()}).catch(console.error)},this.rerenderWholeEditor=()=>{const s=this.editor.rootElement;!s||!s.isConnected||(s.replaceChildren(),delete s._$litPart$,this.render())},this.waitForUpdate=async()=>{if(!this.editor.rootElement)return;const s=Array.from(this.editor.rootElement.querySelectorAll("v-line"));await Promise.all(s.map(r=>r.updateComplete))}}get rendering(){return this._rendering}}class l${constructor(t){this.editor=t,this.deleteText=s=>{this.editor.isReadonly||this.transact(()=>{this.yText.delete(s.index,s.length)})},this.formatText=(s,r,n={})=>{if(this.editor.isReadonly)return;const{match:i=()=>!0,mode:o="merge",withoutTransact:a=!1}=n;this.editor.deltaService.getDeltasByInlineRange(s).filter(([c,h])=>i(c,h)).forEach(([c,h])=>{const u=this.editor.attributeService.normalizeAttributes(r);if(!u)return;const d=tE(s,h);d&&(o==="replace"&&this.resetText(d),this.transact(()=>{this.yText.format(d.index,d.length,u)},a))})},this.insertLineBreak=s=>{this.editor.isReadonly||this.transact(()=>{this.yText.delete(s.index,s.length),this.yText.insert(s.index,`
`)})},this.insertText=(s,r,n={})=>{if(this.editor.isReadonly||!r||!r.length)return;this.editor.attributeService.marks&&(n={...n,...this.editor.attributeService.marks});const i=this.editor.attributeService.normalizeAttributes(n);this.transact(()=>{this.yText.delete(s.index,s.length),this.yText.insert(s.index,r,i)})},this.resetText=s=>{if(this.editor.isReadonly)return;const r=[];for(let i=s.index;i<=s.index+s.length;i++){const o=this.editor.getDeltaByRangeIndex(i);o&&r.push(o)}const n=Object.fromEntries(r.flatMap(i=>i.attributes?Object.keys(i.attributes).map(o=>[o,null]):[]));this.transact(()=>{this.yText.format(s.index,s.length,{...n})})},this.setText=(s,r={})=>{this.editor.isReadonly||this.transact(()=>{this.yText.delete(0,this.yText.length),this.yText.insert(0,s,r)})},this.transact=this.editor.transact}get yText(){return this.editor.yText}}class Nu{constructor(t,s={}){if(this.disposables=new Yr,this.attributeService=new r$(this),this.getFormat=this.attributeService.getFormat,this.normalizeAttributes=this.attributeService.normalizeAttributes,this.resetMarks=this.attributeService.resetMarks,this.setAttributeRenderer=this.attributeService.setAttributeRenderer,this.setAttributeSchema=this.attributeService.setAttributeSchema,this.setMarks=this.attributeService.setMarks,this.textService=new l$(this),this.deleteText=this.textService.deleteText,this.formatText=this.textService.formatText,this.insertLineBreak=this.textService.insertLineBreak,this.insertText=this.textService.insertText,this.resetText=this.textService.resetText,this.setText=this.textService.setText,this.deltaService=new n$(this),this.getDeltaByRangeIndex=this.deltaService.getDeltaByRangeIndex,this.getDeltasByInlineRange=this.deltaService.getDeltasByInlineRange,this.mapDeltasInInlineRange=this.deltaService.mapDeltasInInlineRange,this.rangeService=new o$(this),this.focusEnd=this.rangeService.focusEnd,this.focusIndex=this.rangeService.focusIndex,this.focusStart=this.rangeService.focusStart,this.getInlineRangeFromElement=this.rangeService.getInlineRangeFromElement,this.isFirstLine=this.rangeService.isFirstLine,this.isLastLine=this.rangeService.isLastLine,this.isValidInlineRange=this.rangeService.isValidInlineRange,this.selectAll=this.rangeService.selectAll,this.syncInlineRange=this.rangeService.syncInlineRange,this.toDomRange=this.rangeService.toDomRange,this.toInlineRange=this.rangeService.toInlineRange,this.getLine=this.rangeService.getLine,this.getNativeRange=this.rangeService.getNativeRange,this.getNativeSelection=this.rangeService.getNativeSelection,this.getTextPoint=this.rangeService.getTextPoint,this.eventService=new i$(this),this.renderService=new a$(this),this.waitForUpdate=this.renderService.waitForUpdate,this.rerenderWholeEditor=this.renderService.rerenderWholeEditor,this.render=this.renderService.render,this._eventSource=null,this._isReadonly=!1,this._mounted=!1,this._rootElement=null,this.inlineRangeProvider={inlineRange$:Kt(null),setInlineRange:a=>{this.inlineRange$.value=a}},this.setInlineRange=a=>{this.inlineRangeProvider.setInlineRange(a)},this.getInlineRange=()=>this.inlineRange$.peek(),this.slots={mounted:new at,unmounted:new at,renderComplete:new at,textChange:new at,inlineRangeSync:new at,inputting:new at,keydown:new at},!t.doc)throw new T(R.InlineEditorError,"yText must be attached to a Y.Doc");if(t.toString().includes("\r"))throw new T(R.InlineEditorError,'yText must not contain "\\r" because it will break the range synchronization');const{isEmbed:r=()=>!1,hooks:n={},inlineRangeProvider:i,vLineRenderer:o=null}=s;this._inlineRangeProviderOverride=!1,this.yText=t,this.isEmbed=r,this.vLineRenderer=o,this.hooksService=new AE(this,n),i&&(this.inlineRangeProvider=i,this._inlineRangeProviderOverride=!0)}get marks(){return this.attributeService.marks}get embedDeltas(){return this.deltaService.embedDeltas}get lastStartRelativePosition(){return this.rangeService.lastStartRelativePosition}get lastEndRelativePosition(){return this.rangeService.lastEndRelativePosition}get isComposing(){return this.eventService.isComposing}get rendering(){return this.renderService.rendering}get hooks(){return this.hooksService.hooks}get eventSource(){return this._eventSource}get isReadonly(){return this._isReadonly}get mounted(){return this._mounted}get rootElement(){return this._rootElement}get inlineRangeProviderOverride(){return this._inlineRangeProviderOverride}get inlineRange$(){return this.inlineRangeProvider.inlineRange$}get yTextDeltas(){return this.yText.toDelta()}get yTextLength(){return this.yText.length}get yTextString(){return this.yText.toString()}mount(t,s=t,r=!1){const n=t;n.inlineEditor=this,this._rootElement=n,this._eventSource=s,this._eventSource.style.outline="none",this._rootElement.dataset.vRoot="true",this.setReadonly(r),this._rootElement.replaceChildren(),delete this.rootElement._$litPart$,this.eventService.mount(),this.rangeService.mount(),this.renderService.mount(),this._mounted=!0,this.slots.mounted.next(),this.render()}unmount(){this.rootElement&&(this.rootElement.isConnected&&Xh(st,this.rootElement),this.rootElement.removeAttribute(Pa)),this._rootElement=null,this._mounted=!1,this.disposables.dispose(),this.slots.unmounted.next()}setReadonly(t){const s=t?"false":"true";this.rootElement&&this.rootElement.contentEditable!==s&&(this.rootElement.contentEditable=s),this._isReadonly=t}transact(t,s=!1){const r=this.yText.doc;if(!r)throw new T(R.InlineEditorError,"yText is not attached to a doc");r.transact(t,s?null:r.clientID)}}Nu.getTextNodesFromElement=Is;Nu.nativePointToTextPoint=Xc;Nu.textPointToDomPoint=En;const ov=["top","right","bottom","left"],lp=["start","end"],cp=ov.reduce((e,t)=>e.concat(t,t+"-"+lp[0],t+"-"+lp[1]),[]),ts=Math.min,Zt=Math.max,Na=Math.round,qo=Math.floor,ps=e=>({x:e,y:e}),c$={left:"right",right:"left",bottom:"top",top:"bottom"},h$={start:"end",end:"start"};function Jc(e,t,s){return Zt(e,ts(t,s))}function es(e,t){return typeof e=="function"?e(t):e}function $e(e){return e.split("-")[0]}function Xe(e){return e.split("-")[1]}function Bu(e){return e==="x"?"y":"x"}function zu(e){return e==="y"?"height":"width"}function Ze(e){return["top","bottom"].includes($e(e))?"y":"x"}function Vu(e){return Bu(Ze(e))}function av(e,t,s){s===void 0&&(s=!1);const r=Xe(e),n=Vu(e),i=zu(n);let o=n==="x"?r===(s?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(o=za(o)),[o,za(o)]}function u$(e){const t=za(e);return[Ba(e),t,Ba(t)]}function Ba(e){return e.replace(/start|end/g,t=>h$[t])}function d$(e,t,s){const r=["left","right"],n=["right","left"],i=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return s?t?n:r:t?r:n;case"left":case"right":return t?i:o;default:return[]}}function f$(e,t,s,r){const n=Xe(e);let i=d$($e(e),s==="start",r);return n&&(i=i.map(o=>o+"-"+n),t&&(i=i.concat(i.map(Ba)))),i}function za(e){return e.replace(/left|right|bottom|top/g,t=>c$[t])}function p$(e){return{top:0,right:0,bottom:0,left:0,...e}}function Uu(e){return typeof e!="number"?p$(e):{top:e,right:e,bottom:e,left:e}}function $n(e){const{x:t,y:s,width:r,height:n}=e;return{width:r,height:n,top:s,left:t,right:t+r,bottom:s+n,x:t,y:s}}function hp(e,t,s){let{reference:r,floating:n}=e;const i=Ze(t),o=Vu(t),a=zu(o),l=$e(t),c=i==="y",h=r.x+r.width/2-n.width/2,u=r.y+r.height/2-n.height/2,d=r[a]/2-n[a]/2;let f;switch(l){case"top":f={x:h,y:r.y-n.height};break;case"bottom":f={x:h,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:u};break;case"left":f={x:r.x-n.width,y:u};break;default:f={x:r.x,y:r.y}}switch(Xe(t)){case"start":f[o]-=d*(s&&c?-1:1);break;case"end":f[o]+=d*(s&&c?-1:1);break}return f}const g$=async(e,t,s)=>{const{placement:r="bottom",strategy:n="absolute",middleware:i=[],platform:o}=s,a=i.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:u}=hp(c,r,l),d=r,f={},p=0;for(let b=0;b<a.length;b++){const{name:v,fn:x}=a[b],{x:w,y:S,data:k,reset:A}=await x({x:h,y:u,initialPlacement:r,placement:d,strategy:n,middlewareData:f,rects:c,platform:o,elements:{reference:e,floating:t}});h=w??h,u=S??u,f={...f,[v]:{...f[v],...k}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(d=A.placement),A.rects&&(c=A.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:n}):A.rects),{x:h,y:u}=hp(c,d,l)),b=-1)}return{x:h,y:u,placement:d,strategy:n,middlewareData:f}};async function Tn(e,t){var s;t===void 0&&(t={});const{x:r,y:n,platform:i,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:d=!1,padding:f=0}=es(t,e),p=Uu(f),v=a[d?u==="floating"?"reference":"floating":u],x=$n(await i.getClippingRect({element:(s=await(i.isElement==null?void 0:i.isElement(v)))==null||s?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=u==="floating"?{x:r,y:n,width:o.floating.width,height:o.floating.height}:o.reference,S=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),k=await(i.isElement==null?void 0:i.isElement(S))?await(i.getScale==null?void 0:i.getScale(S))||{x:1,y:1}:{x:1,y:1},A=$n(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:S,strategy:l}):w);return{top:(x.top-A.top+p.top)/k.y,bottom:(A.bottom-x.bottom+p.bottom)/k.y,left:(x.left-A.left+p.left)/k.x,right:(A.right-x.right+p.right)/k.x}}const m$=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:r,placement:n,rects:i,platform:o,elements:a,middlewareData:l}=t,{element:c,padding:h=0}=es(e,t)||{};if(c==null)return{};const u=Uu(h),d={x:s,y:r},f=Vu(n),p=zu(f),b=await o.getDimensions(c),v=f==="y",x=v?"top":"left",w=v?"bottom":"right",S=v?"clientHeight":"clientWidth",k=i.reference[p]+i.reference[f]-d[f]-i.floating[p],A=d[f]-i.reference[f],I=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let U=I?I[S]:0;(!U||!await(o.isElement==null?void 0:o.isElement(I)))&&(U=a.floating[S]||i.floating[p]);const Q=k/2-A/2,nt=U/2-b[p]/2-1,F=ts(u[x],nt),gt=ts(u[w],nt),X=F,ft=U-b[p]-gt,yt=U/2-b[p]/2+Q,Wt=Jc(X,yt,ft),Yt=!l.arrow&&Xe(n)!=null&&yt!==Wt&&i.reference[p]/2-(yt<X?F:gt)-b[p]/2<0,Ot=Yt?yt<X?yt-X:yt-ft:0;return{[f]:d[f]+Ot,data:{[f]:Wt,centerOffset:yt-Wt-Ot,...Yt&&{alignmentOffset:Ot}},reset:Yt}}});function b$(e,t,s){return(e?[...s.filter(n=>Xe(n)===e),...s.filter(n=>Xe(n)!==e)]:s.filter(n=>$e(n)===n)).filter(n=>e?Xe(n)===e||(t?Ba(n)!==n:!1):!0)}const v$=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var s,r,n;const{rects:i,middlewareData:o,placement:a,platform:l,elements:c}=t,{crossAxis:h=!1,alignment:u,allowedPlacements:d=cp,autoAlignment:f=!0,...p}=es(e,t),b=u!==void 0||d===cp?b$(u||null,f,d):d,v=await Tn(t,p),x=((s=o.autoPlacement)==null?void 0:s.index)||0,w=b[x];if(w==null)return{};const S=av(w,i,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(a!==w)return{reset:{placement:b[0]}};const k=[v[$e(w)],v[S[0]],v[S[1]]],A=[...((r=o.autoPlacement)==null?void 0:r.overflows)||[],{placement:w,overflows:k}],I=b[x+1];if(I)return{data:{index:x+1,overflows:A},reset:{placement:I}};const U=A.map(F=>{const gt=Xe(F.placement);return[F.placement,gt&&h?F.overflows.slice(0,2).reduce((X,ft)=>X+ft,0):F.overflows[0],F.overflows]}).sort((F,gt)=>F[1]-gt[1]),nt=((n=U.filter(F=>F[2].slice(0,Xe(F[0])?2:3).every(gt=>gt<=0))[0])==null?void 0:n[0])||U[0][0];return nt!==a?{data:{index:x+1,overflows:A},reset:{placement:nt}}:{}}}},y$=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,r;const{placement:n,middlewareData:i,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:b=!0,...v}=es(e,t);if((s=i.arrow)!=null&&s.alignmentOffset)return{};const x=$e(n),w=Ze(a),S=$e(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=d||(S||!b?[za(a)]:u$(a)),I=p!=="none";!d&&I&&A.push(...f$(a,b,p,k));const U=[a,...A],Q=await Tn(t,v),nt=[];let F=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&nt.push(Q[x]),u){const yt=av(n,o,k);nt.push(Q[yt[0]],Q[yt[1]])}if(F=[...F,{placement:n,overflows:nt}],!nt.every(yt=>yt<=0)){var gt,X;const yt=(((gt=i.flip)==null?void 0:gt.index)||0)+1,Wt=U[yt];if(Wt&&(!(u==="alignment"?w!==Ze(Wt):!1)||F.every(Rt=>Rt.overflows[0]>0&&Ze(Rt.placement)===w)))return{data:{index:yt,overflows:F},reset:{placement:Wt}};let Yt=(X=F.filter(Ot=>Ot.overflows[0]<=0).sort((Ot,Rt)=>Ot.overflows[1]-Rt.overflows[1])[0])==null?void 0:X.placement;if(!Yt)switch(f){case"bestFit":{var ft;const Ot=(ft=F.filter(Rt=>{if(I){const Ae=Ze(Rt.placement);return Ae===w||Ae==="y"}return!0}).map(Rt=>[Rt.placement,Rt.overflows.filter(Ae=>Ae>0).reduce((Ae,Gn)=>Ae+Gn,0)]).sort((Rt,Ae)=>Rt[1]-Ae[1])[0])==null?void 0:ft[0];Ot&&(Yt=Ot);break}case"initialPlacement":Yt=a;break}if(n!==Yt)return{reset:{placement:Yt}}}return{}}}};function up(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function dp(e){return ov.some(t=>e[t]>=0)}const _$=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:r="referenceHidden",...n}=es(e,t);switch(r){case"referenceHidden":{const i=await Tn(t,{...n,elementContext:"reference"}),o=up(i,s.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:dp(o)}}}case"escaped":{const i=await Tn(t,{...n,altBoundary:!0}),o=up(i,s.floating);return{data:{escapedOffsets:o,escaped:dp(o)}}}default:return{}}}}};function lv(e){const t=ts(...e.map(i=>i.left)),s=ts(...e.map(i=>i.top)),r=Zt(...e.map(i=>i.right)),n=Zt(...e.map(i=>i.bottom));return{x:t,y:s,width:r-t,height:n-s}}function w$(e){const t=e.slice().sort((n,i)=>n.y-i.y),s=[];let r=null;for(let n=0;n<t.length;n++){const i=t[n];!r||i.y-r.y>r.height/2?s.push([i]):s[s.length-1].push(i),r=i}return s.map(n=>$n(lv(n)))}const x$=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:s,elements:r,rects:n,platform:i,strategy:o}=t,{padding:a=2,x:l,y:c}=es(e,t),h=Array.from(await(i.getClientRects==null?void 0:i.getClientRects(r.reference))||[]),u=w$(h),d=$n(lv(h)),f=Uu(a);function p(){if(u.length===2&&u[0].left>u[1].right&&l!=null&&c!=null)return u.find(v=>l>v.left-f.left&&l<v.right+f.right&&c>v.top-f.top&&c<v.bottom+f.bottom)||d;if(u.length>=2){if(Ze(s)==="y"){const F=u[0],gt=u[u.length-1],X=$e(s)==="top",ft=F.top,yt=gt.bottom,Wt=X?F.left:gt.left,Yt=X?F.right:gt.right,Ot=Yt-Wt,Rt=yt-ft;return{top:ft,bottom:yt,left:Wt,right:Yt,width:Ot,height:Rt,x:Wt,y:ft}}const v=$e(s)==="left",x=Zt(...u.map(F=>F.right)),w=ts(...u.map(F=>F.left)),S=u.filter(F=>v?F.left===w:F.right===x),k=S[0].top,A=S[S.length-1].bottom,I=w,U=x,Q=U-I,nt=A-k;return{top:k,bottom:A,left:I,right:U,width:Q,height:nt,x:I,y:k}}return d}const b=await i.getElementRects({reference:{getBoundingClientRect:p},floating:r.floating,strategy:o});return n.reference.x!==b.reference.x||n.reference.y!==b.reference.y||n.reference.width!==b.reference.width||n.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}};async function k$(e,t){const{placement:s,platform:r,elements:n}=e,i=await(r.isRTL==null?void 0:r.isRTL(n.floating)),o=$e(s),a=Xe(s),l=Ze(s)==="y",c=["left","top"].includes(o)?-1:1,h=i&&l?-1:1,u=es(t,e);let{mainAxis:d,crossAxis:f,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof p=="number"&&(f=a==="end"?p*-1:p),l?{x:f*h,y:d*c}:{x:d*c,y:f*h}}const S$=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,r;const{x:n,y:i,placement:o,middlewareData:a}=t,l=await k$(t,e);return o===((s=a.offset)==null?void 0:s.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:n+l.x,y:i+l.y,data:{...l,placement:o}}}}},C$=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:r,placement:n}=t,{mainAxis:i=!0,crossAxis:o=!1,limiter:a={fn:v=>{let{x,y:w}=v;return{x,y:w}}},...l}=es(e,t),c={x:s,y:r},h=await Tn(t,l),u=Ze($e(n)),d=Bu(u);let f=c[d],p=c[u];if(i){const v=d==="y"?"top":"left",x=d==="y"?"bottom":"right",w=f+h[v],S=f-h[x];f=Jc(w,f,S)}if(o){const v=u==="y"?"top":"left",x=u==="y"?"bottom":"right",w=p+h[v],S=p-h[x];p=Jc(w,p,S)}const b=a.fn({...t,[d]:f,[u]:p});return{...b,data:{x:b.x-s,y:b.y-r,enabled:{[d]:i,[u]:o}}}}}},E$=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:s,y:r,placement:n,rects:i,middlewareData:o}=t,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=es(e,t),h={x:s,y:r},u=Ze(n),d=Bu(u);let f=h[d],p=h[u];const b=es(a,t),v=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(l){const S=d==="y"?"height":"width",k=i.reference[d]-i.floating[S]+v.mainAxis,A=i.reference[d]+i.reference[S]-v.mainAxis;f<k?f=k:f>A&&(f=A)}if(c){var x,w;const S=d==="y"?"width":"height",k=["top","left"].includes($e(n)),A=i.reference[u]-i.floating[S]+(k&&((x=o.offset)==null?void 0:x[u])||0)+(k?0:v.crossAxis),I=i.reference[u]+i.reference[S]+(k?0:((w=o.offset)==null?void 0:w[u])||0)-(k?v.crossAxis:0);p<A?p=A:p>I&&(p=I)}return{[d]:f,[u]:p}}}},$$=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,r;const{placement:n,rects:i,platform:o,elements:a}=t,{apply:l=()=>{},...c}=es(e,t),h=await Tn(t,c),u=$e(n),d=Xe(n),f=Ze(n)==="y",{width:p,height:b}=i.floating;let v,x;u==="top"||u==="bottom"?(v=u,x=d===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(x=u,v=d==="end"?"top":"bottom");const w=b-h.top-h.bottom,S=p-h.left-h.right,k=ts(b-h[v],w),A=ts(p-h[x],S),I=!t.middlewareData.shift;let U=k,Q=A;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(Q=S),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(U=w),I&&!d){const F=Zt(h.left,0),gt=Zt(h.right,0),X=Zt(h.top,0),ft=Zt(h.bottom,0);f?Q=p-2*(F!==0||gt!==0?F+gt:Zt(h.left,h.right)):U=b-2*(X!==0||ft!==0?X+ft:Zt(h.top,h.bottom))}await l({...t,availableWidth:Q,availableHeight:U});const nt=await o.getDimensions(a.floating);return p!==nt.width||b!==nt.height?{reset:{rects:!0}}:{}}}};function ol(){return typeof window<"u"}function Yn(e){return cv(e)?(e.nodeName||"").toLowerCase():"#document"}function Ce(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ws(e){var t;return(t=(cv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function cv(e){return ol()?e instanceof Node||e instanceof Ce(e).Node:!1}function ss(e){return ol()?e instanceof Element||e instanceof Ce(e).Element:!1}function ys(e){return ol()?e instanceof HTMLElement||e instanceof Ce(e).HTMLElement:!1}function fp(e){return!ol()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ce(e).ShadowRoot}function xo(e){const{overflow:t,overflowX:s,overflowY:r,display:n}=rs(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+s)&&!["inline","contents"].includes(n)}function T$(e){return["table","td","th"].includes(Yn(e))}function al(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ll(e){const t=Fu(),s=ss(e)?rs(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>s[r]?s[r]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(s.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(s.contain||"").includes(r))}function A$(e){let t=hr(e);for(;ys(t)&&!An(t);){if(ll(t))return t;if(al(t))return null;t=hr(t)}return null}function Fu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function An(e){return["html","body","#document"].includes(Yn(e))}function rs(e){return Ce(e).getComputedStyle(e)}function cl(e){return ss(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function hr(e){if(Yn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||fp(e)&&e.host||ws(e);return fp(t)?t.host:t}function hv(e){const t=hr(e);return An(t)?e.ownerDocument?e.ownerDocument.body:e.body:ys(t)&&xo(t)?t:hv(t)}function oo(e,t,s){var r;t===void 0&&(t=[]),s===void 0&&(s=!0);const n=hv(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),o=Ce(n);if(i){const a=Qc(o);return t.concat(o,o.visualViewport||[],xo(n)?n:[],a&&s?oo(a):[])}return t.concat(n,oo(n,[],s))}function Qc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function uv(e){const t=rs(e);let s=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=ys(e),i=n?e.offsetWidth:s,o=n?e.offsetHeight:r,a=Na(s)!==i||Na(r)!==o;return a&&(s=i,r=o),{width:s,height:r,$:a}}function ju(e){return ss(e)?e:e.contextElement}function pn(e){const t=ju(e);if(!ys(t))return ps(1);const s=t.getBoundingClientRect(),{width:r,height:n,$:i}=uv(t);let o=(i?Na(s.width):s.width)/r,a=(i?Na(s.height):s.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const O$=ps(0);function dv(e){const t=Ce(e);return!Fu()||!t.visualViewport?O$:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function R$(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Ce(e)?!1:t}function Gr(e,t,s,r){t===void 0&&(t=!1),s===void 0&&(s=!1);const n=e.getBoundingClientRect(),i=ju(e);let o=ps(1);t&&(r?ss(r)&&(o=pn(r)):o=pn(e));const a=R$(i,s,r)?dv(i):ps(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,h=n.width/o.x,u=n.height/o.y;if(i){const d=Ce(i),f=r&&ss(r)?Ce(r):r;let p=d,b=Qc(p);for(;b&&r&&f!==p;){const v=pn(b),x=b.getBoundingClientRect(),w=rs(b),S=x.left+(b.clientLeft+parseFloat(w.paddingLeft))*v.x,k=x.top+(b.clientTop+parseFloat(w.paddingTop))*v.y;l*=v.x,c*=v.y,h*=v.x,u*=v.y,l+=S,c+=k,p=Ce(b),b=Qc(p)}}return $n({width:h,height:u,x:l,y:c})}function Hu(e,t){const s=cl(e).scrollLeft;return t?t.left+s:Gr(ws(e)).left+s}function fv(e,t,s){s===void 0&&(s=!1);const r=e.getBoundingClientRect(),n=r.left+t.scrollLeft-(s?0:Hu(e,r)),i=r.top+t.scrollTop;return{x:n,y:i}}function I$(e){let{elements:t,rect:s,offsetParent:r,strategy:n}=e;const i=n==="fixed",o=ws(r),a=t?al(t.floating):!1;if(r===o||a&&i)return s;let l={scrollLeft:0,scrollTop:0},c=ps(1);const h=ps(0),u=ys(r);if((u||!u&&!i)&&((Yn(r)!=="body"||xo(o))&&(l=cl(r)),ys(r))){const f=Gr(r);c=pn(r),h.x=f.x+r.clientLeft,h.y=f.y+r.clientTop}const d=o&&!u&&!i?fv(o,l,!0):ps(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+h.x+d.x,y:s.y*c.y-l.scrollTop*c.y+h.y+d.y}}function M$(e){return Array.from(e.getClientRects())}function D$(e){const t=ws(e),s=cl(e),r=e.ownerDocument.body,n=Zt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Zt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-s.scrollLeft+Hu(e);const a=-s.scrollTop;return rs(r).direction==="rtl"&&(o+=Zt(t.clientWidth,r.clientWidth)-n),{width:n,height:i,x:o,y:a}}function P$(e,t){const s=Ce(e),r=ws(e),n=s.visualViewport;let i=r.clientWidth,o=r.clientHeight,a=0,l=0;if(n){i=n.width,o=n.height;const c=Fu();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:i,height:o,x:a,y:l}}function L$(e,t){const s=Gr(e,!0,t==="fixed"),r=s.top+e.clientTop,n=s.left+e.clientLeft,i=ys(e)?pn(e):ps(1),o=e.clientWidth*i.x,a=e.clientHeight*i.y,l=n*i.x,c=r*i.y;return{width:o,height:a,x:l,y:c}}function pp(e,t,s){let r;if(t==="viewport")r=P$(e,s);else if(t==="document")r=D$(ws(e));else if(ss(t))r=L$(t,s);else{const n=dv(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return $n(r)}function pv(e,t){const s=hr(e);return s===t||!ss(s)||An(s)?!1:rs(s).position==="fixed"||pv(s,t)}function N$(e,t){const s=t.get(e);if(s)return s;let r=oo(e,[],!1).filter(a=>ss(a)&&Yn(a)!=="body"),n=null;const i=rs(e).position==="fixed";let o=i?hr(e):e;for(;ss(o)&&!An(o);){const a=rs(o),l=ll(o);!l&&a.position==="fixed"&&(n=null),(i?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||xo(o)&&!l&&pv(e,o))?r=r.filter(h=>h!==o):n=a,o=hr(o)}return t.set(e,r),r}function B$(e){let{element:t,boundary:s,rootBoundary:r,strategy:n}=e;const o=[...s==="clippingAncestors"?al(t)?[]:N$(t,this._c):[].concat(s),r],a=o[0],l=o.reduce((c,h)=>{const u=pp(t,h,n);return c.top=Zt(u.top,c.top),c.right=ts(u.right,c.right),c.bottom=ts(u.bottom,c.bottom),c.left=Zt(u.left,c.left),c},pp(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function z$(e){const{width:t,height:s}=uv(e);return{width:t,height:s}}function V$(e,t,s){const r=ys(t),n=ws(t),i=s==="fixed",o=Gr(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=ps(0);function c(){l.x=Hu(n)}if(r||!r&&!i)if((Yn(t)!=="body"||xo(n))&&(a=cl(t)),r){const f=Gr(t,!0,i,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else n&&c();i&&!r&&n&&c();const h=n&&!r&&!i?fv(n,a):ps(0),u=o.left+a.scrollLeft-l.x-h.x,d=o.top+a.scrollTop-l.y-h.y;return{x:u,y:d,width:o.width,height:o.height}}function Jl(e){return rs(e).position==="static"}function gp(e,t){if(!ys(e)||rs(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return ws(e)===s&&(s=s.ownerDocument.body),s}function gv(e,t){const s=Ce(e);if(al(e))return s;if(!ys(e)){let n=hr(e);for(;n&&!An(n);){if(ss(n)&&!Jl(n))return n;n=hr(n)}return s}let r=gp(e,t);for(;r&&T$(r)&&Jl(r);)r=gp(r,t);return r&&An(r)&&Jl(r)&&!ll(r)?s:r||A$(e)||s}const U$=async function(e){const t=this.getOffsetParent||gv,s=this.getDimensions,r=await s(e.floating);return{reference:V$(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function F$(e){return rs(e).direction==="rtl"}const aa={convertOffsetParentRelativeRectToViewportRelativeRect:I$,getDocumentElement:ws,getClippingRect:B$,getOffsetParent:gv,getElementRects:U$,getClientRects:M$,getDimensions:z$,getScale:pn,isElement:ss,isRTL:F$};function mv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function j$(e,t){let s=null,r;const n=ws(e);function i(){var a;clearTimeout(r),(a=s)==null||a.disconnect(),s=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const c=e.getBoundingClientRect(),{left:h,top:u,width:d,height:f}=c;if(a||t(),!d||!f)return;const p=qo(u),b=qo(n.clientWidth-(h+d)),v=qo(n.clientHeight-(u+f)),x=qo(h),S={rootMargin:-p+"px "+-b+"px "+-v+"px "+-x+"px",threshold:Zt(0,ts(1,l))||1};let k=!0;function A(I){const U=I[0].intersectionRatio;if(U!==l){if(!k)return o();U?o(!1,U):r=setTimeout(()=>{o(!1,1e-7)},1e3)}U===1&&!mv(c,e.getBoundingClientRect())&&o(),k=!1}try{s=new IntersectionObserver(A,{...S,root:n.ownerDocument})}catch{s=new IntersectionObserver(A,S)}s.observe(e)}return o(!0),i}function H$(e,t,s,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=ju(e),h=n||i?[...c?oo(c):[],...oo(t)]:[];h.forEach(x=>{n&&x.addEventListener("scroll",s,{passive:!0}),i&&x.addEventListener("resize",s)});const u=c&&a?j$(c,s):null;let d=-1,f=null;o&&(f=new ResizeObserver(x=>{let[w]=x;w&&w.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var S;(S=f)==null||S.observe(t)})),s()}),c&&!l&&f.observe(c),f.observe(t));let p,b=l?Gr(e):null;l&&v();function v(){const x=Gr(e);b&&!mv(b,x)&&s(),b=x,p=requestAnimationFrame(v)}return s(),()=>{var x;h.forEach(w=>{n&&w.removeEventListener("scroll",s),i&&w.removeEventListener("resize",s)}),u?.(),(x=f)==null||x.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const W$=S$,ZO=v$,Y$=C$,q$=y$,mp=$$,GO=_$,Z$=m$,XO=x$,KO=E$,G$=(e,t,s)=>{const r=new Map,n={platform:aa,...s},i={...n.platform,_c:r};return g$(e,t,{...n,platform:i})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=Vn(class extends Un{constructor(e){if(super(e),e.type!==Ye.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const s=e.element.classList;for(const r of this.st)r in t||(s.remove(r),this.st.delete(r));for(const r in t){const n=!!t[r];n===this.st.has(r)||this.nt?.has(r)||(n?(s.add(r),this.st.add(r)):(s.remove(r),this.st.delete(r)))}return ge}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=e=>e??st;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X$=()=>new K$;class K${}const Ql=new WeakMap,J$=Vn(class extends KS{render(e){return st}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),st}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Ql.get(t);s===void 0&&(s=new WeakMap,Ql.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ql.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q$=Vn(class extends Un{constructor(e){if(super(e),e.type!==Ye.PROPERTY&&e.type!==Ye.ATTRIBUTE&&e.type!==Ye.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sb(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ge||t===st)return t;const s=e.element,r=e.name;if(e.type===Ye.PROPERTY){if(t===s[r])return ge}else if(e.type===Ye.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(r))return ge}else if(e.type===Ye.ATTRIBUTE&&s.getAttribute(r)===t+"")return ge;return rb(e),t}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let th=class extends Un{constructor(t){if(super(t),this.it=st,t.type!==Ye.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===st||t==null)return this._t=void 0,this.it=t;if(t===ge)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};th.directiveName="unsafeHTML",th.resultType=1;const tT=Vn(th);function QO(){customElements.define("editor-host",Zr),customElements.define("gfx-viewport",vs),customElements.define("v-element",_s),customElements.define("v-line",cr),customElements.define("v-text",Lu)}var eT=xt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const eh=new Set,un=new Map;let kr,Wu="ltr",Yu="en";const bv=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(bv){const e=new MutationObserver(yv);Wu=document.documentElement.dir||"ltr",Yu=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function vv(...e){e.map(t=>{const s=t.$code.toLowerCase();un.has(s)?un.set(s,Object.assign(Object.assign({},un.get(s)),t)):un.set(s,t),kr||(kr=t)}),yv()}function yv(){bv&&(Wu=document.documentElement.dir||"ltr",Yu=document.documentElement.lang||navigator.language),[...eh.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let sT=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){eh.add(this.host)}hostDisconnected(){eh.delete(this.host)}dir(){return`${this.host.dir||Wu}`.toLowerCase()}lang(){return`${this.host.lang||Yu}`.toLowerCase()}getTranslationData(t){var s,r;const n=new Intl.Locale(t.replace(/_/g,"-")),i=n?.language.toLowerCase(),o=(r=(s=n?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&r!==void 0?r:"",a=un.get(`${i}-${o}`),l=un.get(i);return{locale:n,language:i,region:o,primary:a,secondary:l}}exists(t,s){var r;const{primary:n,secondary:i}=this.getTranslationData((r=s.lang)!==null&&r!==void 0?r:this.lang());return s=Object.assign({includeFallback:!1},s),!!(n&&n[t]||i&&i[t]||s.includeFallback&&kr&&kr[t])}term(t,...s){const{primary:r,secondary:n}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(n&&n[t])i=n[t];else if(kr&&kr[t])i=kr[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...s):i}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,s)}};var _v={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};vv(_v);var rT=_v,je=class extends sT{};vv(rT);var At=xt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,wv=Object.defineProperty,nT=Object.defineProperties,iT=Object.getOwnPropertyDescriptor,oT=Object.getOwnPropertyDescriptors,bp=Object.getOwnPropertySymbols,aT=Object.prototype.hasOwnProperty,lT=Object.prototype.propertyIsEnumerable,tc=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),qu=e=>{throw TypeError(e)},vp=(e,t,s)=>t in e?wv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Us=(e,t)=>{for(var s in t||(t={}))aT.call(t,s)&&vp(e,s,t[s]);if(bp)for(var s of bp(t))lT.call(t,s)&&vp(e,s,t[s]);return e},ko=(e,t)=>nT(e,oT(t)),m=(e,t,s,r)=>{for(var n=r>1?void 0:r?iT(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(n=(r?o(t,s,n):o(n))||n);return r&&n&&wv(t,s,n),n},xv=(e,t,s)=>t.has(e)||qu("Cannot "+s),cT=(e,t,s)=>(xv(e,t,"read from private field"),t.get(e)),hT=(e,t,s)=>t.has(e)?qu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),uT=(e,t,s,r)=>(xv(e,t,"write to private field"),t.set(e,s),s),dT=function(e,t){this[0]=e,this[1]=t},fT=e=>{var t=e[tc("asyncIterator")],s=!1,r,n={};return t==null?(t=e[tc("iterator")](),r=i=>n[i]=o=>t[i](o)):(t=t.call(e),r=i=>n[i]=o=>{if(s){if(s=!1,i==="throw")throw o;return o}return s=!0,{done:!1,value:new dT(new Promise(a=>{var l=t[i](o);l instanceof Object||qu("Object expected"),a(l)}),1)}}),n[tc("iterator")]=()=>n,r("next"),"throw"in t?r("throw"):n.throw=i=>{throw i},"return"in t&&r("return"),n},la,kt=class extends fs{constructor(){super(),hT(this,la,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Us({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,s)}catch{customElements.define(e,class extends t{},s)}return}let n=" (unknown version)",i=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(n&&i&&n===i)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${i} has already been registered.`)}attributeChangedCallback(e,t,s){cT(this,la)||(this.constructor.elementProperties.forEach((r,n)=>{r.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),uT(this,la,!0)),super.attributeChangedCallback(e,t,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,s)=>{e.has(s)&&this[s]==null&&(this[s]=t)})}};la=new WeakMap;kt.version="2.20.1";kt.dependencies={};m([y()],kt.prototype,"dir",2);m([y()],kt.prototype,"lang",2);var Zu=class extends kt{constructor(){super(...arguments),this.localize=new je(this)}render(){return N`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zu.styles=[At,eT];var ii=new WeakMap,oi=new WeakMap,ai=new WeakMap,ec=new WeakSet,Zo=new WeakMap,hl=class{constructor(e,t){this.handleFormData=s=>{const r=this.options.disabled(this.host),n=this.options.name(this.host),i=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!o&&typeof n=="string"&&n.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{s.formData.append(n,a.toString())}):s.formData.append(n,i.toString()))},this.handleFormSubmit=s=>{var r;const n=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=ii.get(this.form))==null||r.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!n&&!i(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Zo.set(this.host,[])},this.handleInteraction=s=>{const r=Zo.get(this.host);r.includes(s.type)||r.push(s.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const r of s)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const r of s)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Us({form:s=>{const r=s.form;if(r){const i=s.getRootNode().querySelector(`#${r}`);if(i)return i}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var r;return(r=s.disabled)!=null?r:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,r)=>s.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Zo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Zo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ii.has(this.form)?ii.get(this.form).add(this.host):ii.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),oi.has(this.form)||(oi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ai.has(this.form)||(ai.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=ii.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),oi.has(this.form)&&(this.form.reportValidity=oi.get(this.form),oi.delete(this.form)),ai.has(this.form)&&(this.form.checkValidity=ai.get(this.form),ai.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ec.add(e):ec.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&s.setAttribute(r,t.getAttribute(r))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=!!ec.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Gu=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),e2=Object.freeze(ko(Us({},Gu),{valid:!1,valueMissing:!0})),s2=Object.freeze(ko(Us({},Gu),{valid:!1,customError:!0})),pT=xt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,ul=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const r=s.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function gT(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(s+=r.textContent)}),s}var sh="";function yp(e){sh=e}function mT(e=""){if(!sh){const t=[...document.getElementsByTagName("script")],s=t.find(r=>r.hasAttribute("data-shoelace"));if(s)yp(s.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let n="";r&&(n=r.getAttribute("src")),yp(n.split("/").slice(0,-1).join("/"))}}return sh.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var bT={name:"default",resolver:e=>mT(`assets/icons/${e}.svg`)},vT=bT,_p={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},yT={name:"system",resolver:e=>e in _p?`data:image/svg+xml,${encodeURIComponent(_p[e])}`:""},_T=yT,wT=[vT,_T],rh=[];function xT(e){rh.push(e)}function kT(e){rh=rh.filter(t=>t!==e)}function wp(e){return wT.find(t=>t.name===e)}var ST=xt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function mt(e,t){const s=Us({waitUntilFirstUpdate:!1},t);return(r,n)=>{const{update:i}=r,o=Array.isArray(e)?e:[e];r.update=function(a){o.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,u)}}),i.call(this,a)}}}var li=Symbol(),Go=Symbol(),sc,rc=new Map,ae=class extends kt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let r;if(t?.spriteSheet)return this.svg=N`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?li:Go}catch{return Go}try{const n=document.createElement("div");n.innerHTML=await r.text();const i=n.firstElementChild;if(((s=i?.tagName)==null?void 0:s.toLowerCase())!=="svg")return li;sc||(sc=new DOMParser);const a=sc.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):li}catch{return li}}connectedCallback(){super.connectedCallback(),xT(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),kT(this)}getIconSource(){const e=wp(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),r=s?wp(this.library):void 0;if(!t){this.svg=null;return}let n=rc.get(t);if(n||(n=this.resolveIcon(t,r),rc.set(t,n)),!this.initialRender)return;const i=await n;if(i===Go&&rc.delete(t),t===this.getIconSource().url){if(WS(i)){if(this.svg=i,r){await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&o&&r.mutator(o)}return}switch(i){case Go:case li:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ae.styles=[At,ST];m([pt()],ae.prototype,"svg",2);m([y({reflect:!0})],ae.prototype,"name",2);m([y()],ae.prototype,"src",2);m([y()],ae.prototype,"label",2);m([y({reflect:!0})],ae.prototype,"library",2);m([mt("label")],ae.prototype,"handleLabelChange",1);m([mt(["name","src","library"])],ae.prototype,"setIcon",1);var ct=class extends kt{constructor(){super(...arguments),this.formControlController=new hl(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ul(this,"[default]","prefix","suffix"),this.localize=new je(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Gu}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ma`a`:Ma`button`;return cs`
      <${t}
        part="base"
        class=${Tt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${G(e?void 0:this.disabled)}
        type=${G(e?void 0:this.type)}
        title=${this.title}
        name=${G(e?void 0:this.name)}
        value=${G(e?void 0:this.value)}
        href=${G(e&&!this.disabled?this.href:void 0)}
        target=${G(e?this.target:void 0)}
        download=${G(e?this.download:void 0)}
        rel=${G(e?this.rel:void 0)}
        role=${G(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?cs` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?cs`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ct.styles=[At,pT];ct.dependencies={"sl-icon":ae,"sl-spinner":Zu};m([lt(".button")],ct.prototype,"button",2);m([pt()],ct.prototype,"hasFocus",2);m([pt()],ct.prototype,"invalid",2);m([y()],ct.prototype,"title",2);m([y({reflect:!0})],ct.prototype,"variant",2);m([y({reflect:!0})],ct.prototype,"size",2);m([y({type:Boolean,reflect:!0})],ct.prototype,"caret",2);m([y({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);m([y({type:Boolean,reflect:!0})],ct.prototype,"loading",2);m([y({type:Boolean,reflect:!0})],ct.prototype,"outline",2);m([y({type:Boolean,reflect:!0})],ct.prototype,"pill",2);m([y({type:Boolean,reflect:!0})],ct.prototype,"circle",2);m([y()],ct.prototype,"type",2);m([y()],ct.prototype,"name",2);m([y()],ct.prototype,"value",2);m([y()],ct.prototype,"href",2);m([y()],ct.prototype,"target",2);m([y()],ct.prototype,"rel",2);m([y()],ct.prototype,"download",2);m([y()],ct.prototype,"form",2);m([y({attribute:"formaction"})],ct.prototype,"formAction",2);m([y({attribute:"formenctype"})],ct.prototype,"formEnctype",2);m([y({attribute:"formmethod"})],ct.prototype,"formMethod",2);m([y({attribute:"formnovalidate",type:Boolean})],ct.prototype,"formNoValidate",2);m([y({attribute:"formtarget"})],ct.prototype,"formTarget",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],ct.prototype,"handleDisabledChange",1);ct.define("sl-button");var CT=xt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,qn=class extends kt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=ci(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=ci(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=ci(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=ci(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const s=e.indexOf(t),r=ci(t);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",s===0),r.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<e.length-1),r.toggleAttribute("data-sl-button-group__button--last",s===e.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return N`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};qn.styles=[At,CT];m([lt("slot")],qn.prototype,"defaultSlot",2);m([pt()],qn.prototype,"disableRole",2);m([y()],qn.prototype,"label",2);function ci(e){var t;const s="sl-button, sl-radio-button";return(t=e.closest(s))!=null?t:e.querySelector(s)}qn.define("sl-button-group");var ET=xt`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,kv=class extends kt{render(){return N` <slot></slot> `}};kv.styles=[At,ET];var $T=xt`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Sv=(e="value")=>(t,s)=>{const r=t.constructor,n=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,o,a){var l;const c=r.getPropertyOptions(e),h=typeof c.attribute=="string"?c.attribute:e;if(i===h){const u=c.converter||Cn,f=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:Cn.fromAttribute)(a,c.type);this[e]!==f&&(this[s]=f)}n.call(this,i,o,a)}},Cv=xt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Z=class extends kt{constructor(){super(...arguments),this.formControlController=new hl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ul(this,"help-text","label"),this.localize=new je(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,r="preserve"){const n=t??this.input.selectionStart,i=s??this.input.selectionEnd;this.input.setRangeText(e,n,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return N`
      <div
        part="form-control"
        class=${Tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Tt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${G(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${G(this.placeholder)}
              minlength=${G(this.minlength)}
              maxlength=${G(this.maxlength)}
              min=${G(this.min)}
              max=${G(this.max)}
              step=${G(this.step)}
              .value=${Q$(this.value)}
              autocapitalize=${G(this.autocapitalize)}
              autocomplete=${G(this.autocomplete)}
              autocorrect=${G(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${G(this.pattern)}
              enterkeyhint=${G(this.enterkeyhint)}
              inputmode=${G(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?N`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?N`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?N`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:N`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z.styles=[At,Cv,$T];Z.dependencies={"sl-icon":ae};m([lt(".input__control")],Z.prototype,"input",2);m([pt()],Z.prototype,"hasFocus",2);m([y()],Z.prototype,"title",2);m([y({reflect:!0})],Z.prototype,"type",2);m([y()],Z.prototype,"name",2);m([y()],Z.prototype,"value",2);m([Sv()],Z.prototype,"defaultValue",2);m([y({reflect:!0})],Z.prototype,"size",2);m([y({type:Boolean,reflect:!0})],Z.prototype,"filled",2);m([y({type:Boolean,reflect:!0})],Z.prototype,"pill",2);m([y()],Z.prototype,"label",2);m([y({attribute:"help-text"})],Z.prototype,"helpText",2);m([y({type:Boolean})],Z.prototype,"clearable",2);m([y({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);m([y()],Z.prototype,"placeholder",2);m([y({type:Boolean,reflect:!0})],Z.prototype,"readonly",2);m([y({attribute:"password-toggle",type:Boolean})],Z.prototype,"passwordToggle",2);m([y({attribute:"password-visible",type:Boolean})],Z.prototype,"passwordVisible",2);m([y({attribute:"no-spin-buttons",type:Boolean})],Z.prototype,"noSpinButtons",2);m([y({reflect:!0})],Z.prototype,"form",2);m([y({type:Boolean,reflect:!0})],Z.prototype,"required",2);m([y()],Z.prototype,"pattern",2);m([y({type:Number})],Z.prototype,"minlength",2);m([y({type:Number})],Z.prototype,"maxlength",2);m([y()],Z.prototype,"min",2);m([y()],Z.prototype,"max",2);m([y()],Z.prototype,"step",2);m([y()],Z.prototype,"autocapitalize",2);m([y()],Z.prototype,"autocorrect",2);m([y()],Z.prototype,"autocomplete",2);m([y({type:Boolean})],Z.prototype,"autofocus",2);m([y()],Z.prototype,"enterkeyhint",2);m([y({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Z.prototype,"spellcheck",2);m([y()],Z.prototype,"inputmode",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);m([mt("step",{waitUntilFirstUpdate:!0})],Z.prototype,"handleStepChange",1);m([mt("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);function nc(e,t){function s(n){const i=e.getBoundingClientRect(),o=e.ownerDocument.defaultView,a=i.left+o.scrollX,l=i.top+o.scrollY,c=n.pageX-a,h=n.pageY-l;t?.onMove&&t.onMove(c,h)}function r(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",r),t?.onStop&&t.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",r),t?.initialEvent instanceof PointerEvent&&s(t.initialEvent)}var TT=xt`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function*Ev(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*fT(Ev(e.shadowRoot.activeElement))))}function AT(){return[...Ev()].pop()}var xp=new WeakMap;function $v(e){let t=xp.get(e);return t||(t=window.getComputedStyle(e,null),xp.set(e,t)),t}function OT(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=$v(e);return t.visibility!=="hidden"&&t.display!=="none"}function RT(e){const t=$v(e),{overflowY:s,overflowX:r}=t;return s==="scroll"||r==="scroll"?!0:s!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function IT(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const i=e.getRootNode(),o=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=i.querySelector(`${o}:checked`);return a?a===e:i.querySelector(o)===e}return OT(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:RT(e):!1}function MT(e){var t,s;const r=PT(e),n=(t=r[0])!=null?t:null,i=(s=r[r.length-1])!=null?s:null;return{start:n,end:i}}function DT(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function PT(e){const t=new WeakMap,s=[];function r(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!s.includes(n)&&IT(n)&&s.push(n),n instanceof HTMLSlotElement&&DT(n,e)&&n.assignedElements({flatten:!0}).forEach(i=>{r(i)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&r(n.shadowRoot)}for(const i of n.children)r(i)}return r(e),s.sort((n,i)=>{const o=Number(n.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-o})}var LT=xt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;function NT(e){return BT(e)}function ic(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function BT(e){for(let t=e;t;t=ic(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ic(e);t;t=ic(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||ll(s)||t.tagName==="BODY"))return t}return null}function zT(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var ut=class extends kt{constructor(){super(...arguments),this.localize=new je(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let r=0,n=0,i=0,o=0,a=0,l=0,c=0,h=0;s?e.top<t.top?(r=e.left,n=e.bottom,i=e.right,o=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(r=t.left,n=t.bottom,i=t.right,o=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(r=e.right,n=e.top,i=t.left,o=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(r=t.right,n=t.top,i=e.left,o=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||zT(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=H$(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[W$({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(mp({apply:({rects:s})=>{const r=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${s.reference.width}px`:"",this.popup.style.height=n?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(q$({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Y$({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(mp({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Z$({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>aa.getOffsetParent(s,NT):aa.getOffsetParent;G$(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:ko(Us({},aa),{getOffsetParent:t})}).then(({x:s,y:r,middlewareData:n,placement:i})=>{const o=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${s}px`,top:`${r}px`}),this.arrow){const l=n.arrow.x,c=n.arrow.y;let h="",u="",d="",f="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=o?p:"",f=o?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=o?"":p,f=o?p:"",d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:d,left:f,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Tt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Tt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ut.styles=[At,LT];m([lt(".popup")],ut.prototype,"popup",2);m([lt(".popup__arrow")],ut.prototype,"arrowEl",2);m([y()],ut.prototype,"anchor",2);m([y({type:Boolean,reflect:!0})],ut.prototype,"active",2);m([y({reflect:!0})],ut.prototype,"placement",2);m([y({reflect:!0})],ut.prototype,"strategy",2);m([y({type:Number})],ut.prototype,"distance",2);m([y({type:Number})],ut.prototype,"skidding",2);m([y({type:Boolean})],ut.prototype,"arrow",2);m([y({attribute:"arrow-placement"})],ut.prototype,"arrowPlacement",2);m([y({attribute:"arrow-padding",type:Number})],ut.prototype,"arrowPadding",2);m([y({type:Boolean})],ut.prototype,"flip",2);m([y({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ut.prototype,"flipFallbackPlacements",2);m([y({attribute:"flip-fallback-strategy"})],ut.prototype,"flipFallbackStrategy",2);m([y({type:Object})],ut.prototype,"flipBoundary",2);m([y({attribute:"flip-padding",type:Number})],ut.prototype,"flipPadding",2);m([y({type:Boolean})],ut.prototype,"shift",2);m([y({type:Object})],ut.prototype,"shiftBoundary",2);m([y({attribute:"shift-padding",type:Number})],ut.prototype,"shiftPadding",2);m([y({attribute:"auto-size"})],ut.prototype,"autoSize",2);m([y()],ut.prototype,"sync",2);m([y({type:Object})],ut.prototype,"autoSizeBoundary",2);m([y({attribute:"auto-size-padding",type:Number})],ut.prototype,"autoSizePadding",2);m([y({attribute:"hover-bridge",type:Boolean})],ut.prototype,"hoverBridge",2);var Tv=new Map,VT=new WeakMap;function UT(e){return e??{keyframes:[],options:{duration:0}}}function kp(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Zn(e,t){Tv.set(e,UT(t))}function On(e,t,s){const r=VT.get(e);if(r?.[t])return kp(r[t],s.dir);const n=Tv.get(t);return n?kp(n,s.dir):{keyframes:[],options:{duration:0}}}function Rn(e,t){return new Promise(s=>{function r(n){n.target===e&&(e.removeEventListener(t,r),s())}e.addEventListener(t,r)})}function In(e,t,s){return new Promise(r=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,ko(Us({},s),{duration:FT()?0:s.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})})}function Sp(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function FT(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Mn(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{t.cancel(),requestAnimationFrame(s)})))}function r2(e,t){return e.map(s=>ko(Us({},s),{height:s.height==="auto"?`${t}px`:s.height}))}var Ft=class extends kt{constructor(){super(...arguments),this.localize=new je(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(r,n)=>{if(!r)return null;const i=r.closest(n);if(i)return i;const o=r.getRootNode();return o instanceof ShadowRoot?s(o.host,n):null};setTimeout(()=>{var r;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?AT():document.activeElement;(!this.containingElement||s(n,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),r=s[0],n=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>MT(r).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Rn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rn(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Mn(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=On(this,"dropdown.show",{dir:this.localize.dir()});await In(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Mn(this);const{keyframes:e,options:t}=On(this,"dropdown.hide",{dir:this.localize.dir()});await In(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return N`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${G(this.sync?this.sync:void 0)}
        class=${Tt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ft.styles=[At,TT];Ft.dependencies={"sl-popup":ut};m([lt(".dropdown")],Ft.prototype,"popup",2);m([lt(".dropdown__trigger")],Ft.prototype,"trigger",2);m([lt(".dropdown__panel")],Ft.prototype,"panel",2);m([y({type:Boolean,reflect:!0})],Ft.prototype,"open",2);m([y({reflect:!0})],Ft.prototype,"placement",2);m([y({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);m([y({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ft.prototype,"stayOpenOnSelect",2);m([y({attribute:!1})],Ft.prototype,"containingElement",2);m([y({type:Number})],Ft.prototype,"distance",2);m([y({type:Number})],Ft.prototype,"skidding",2);m([y({type:Boolean})],Ft.prototype,"hoist",2);m([y({reflect:!0})],Ft.prototype,"sync",2);m([mt("open",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleOpenChange",1);Zn("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Zn("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var jT=xt`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Me(e,t,s){const r=n=>Object.is(n,-0)?0:n;return e<t?r(t):e>s?r(s):r(e)}function zt(e,t){HT(e)&&(e="100%");const s=WT(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),s&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Xo(e){return Math.min(1,Math.max(0,e))}function HT(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function WT(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Av(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ko(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Tr(e){return e.length===1?"0"+e:String(e)}function YT(e,t,s){return{r:zt(e,255)*255,g:zt(t,255)*255,b:zt(s,255)*255}}function Cp(e,t,s){e=zt(e,255),t=zt(t,255),s=zt(s,255);const r=Math.max(e,t,s),n=Math.min(e,t,s);let i=0,o=0;const a=(r+n)/2;if(r===n)o=0,i=0;else{const l=r-n;switch(o=a>.5?l/(2-r-n):l/(r+n),r){case e:i=(t-s)/l+(t<s?6:0);break;case t:i=(s-e)/l+2;break;case s:i=(e-t)/l+4;break}i/=6}return{h:i,s:o,l:a}}function oc(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*(6*s):s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function qT(e,t,s){let r,n,i;if(e=zt(e,360),t=zt(t,100),s=zt(s,100),t===0)n=s,i=s,r=s;else{const o=s<.5?s*(1+t):s+t-s*t,a=2*s-o;r=oc(a,o,e+1/3),n=oc(a,o,e),i=oc(a,o,e-1/3)}return{r:r*255,g:n*255,b:i*255}}function Ep(e,t,s){e=zt(e,255),t=zt(t,255),s=zt(s,255);const r=Math.max(e,t,s),n=Math.min(e,t,s);let i=0;const o=r,a=r-n,l=r===0?0:a/r;if(r===n)i=0;else{switch(r){case e:i=(t-s)/a+(t<s?6:0);break;case t:i=(s-e)/a+2;break;case s:i=(e-t)/a+4;break}i/=6}return{h:i,s:l,v:o}}function ZT(e,t,s){e=zt(e,360)*6,t=zt(t,100),s=zt(s,100);const r=Math.floor(e),n=e-r,i=s*(1-t),o=s*(1-n*t),a=s*(1-(1-n)*t),l=r%6,c=[s,o,i,i,a,s][l],h=[a,s,s,o,i,i][l],u=[i,i,a,s,s,o][l];return{r:c*255,g:h*255,b:u*255}}function $p(e,t,s,r){const n=[Tr(Math.round(e).toString(16)),Tr(Math.round(t).toString(16)),Tr(Math.round(s).toString(16))];return r&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function GT(e,t,s,r,n){const i=[Tr(Math.round(e).toString(16)),Tr(Math.round(t).toString(16)),Tr(Math.round(s).toString(16)),Tr(KT(r))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function XT(e,t,s,r){const n=e/100,i=t/100,o=s/100,a=r/100,l=255*(1-n)*(1-a),c=255*(1-i)*(1-a),h=255*(1-o)*(1-a);return{r:l,g:c,b:h}}function Tp(e,t,s){let r=1-e/255,n=1-t/255,i=1-s/255,o=Math.min(r,n,i);return o===1?(r=0,n=0,i=0):(r=(r-o)/(1-o)*100,n=(n-o)/(1-o)*100,i=(i-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(n),y:Math.round(i),k:Math.round(o)}}function KT(e){return Math.round(parseFloat(e)*255).toString(16)}function Ap(e){return _e(e)/255}function _e(e){return parseInt(e,16)}function JT(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const nh={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function QT(e){let t={r:0,g:0,b:0},s=1,r=null,n=null,i=null,o=!1,a=!1;return typeof e=="string"&&(e=sA(e)),typeof e=="object"&&(ye(e.r)&&ye(e.g)&&ye(e.b)?(t=YT(e.r,e.g,e.b),o=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):ye(e.h)&&ye(e.s)&&ye(e.v)?(r=Ko(e.s),n=Ko(e.v),t=ZT(e.h,r,n),o=!0,a="hsv"):ye(e.h)&&ye(e.s)&&ye(e.l)?(r=Ko(e.s),i=Ko(e.l),t=qT(e.h,r,i),o=!0,a="hsl"):ye(e.c)&&ye(e.m)&&ye(e.y)&&ye(e.k)&&(t=XT(e.c,e.m,e.y,e.k),o=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(s=e.a)),s=Av(s),{ok:o,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:s}}const tA="[-\\+]?\\d+%?",eA="[-\\+]?\\d*\\.\\d+%?",Xs="(?:"+eA+")|(?:"+tA+")",ac="[\\s|\\(]+("+Xs+")[,|\\s]+("+Xs+")[,|\\s]+("+Xs+")\\s*\\)?",Jo="[\\s|\\(]+("+Xs+")[,|\\s]+("+Xs+")[,|\\s]+("+Xs+")[,|\\s]+("+Xs+")\\s*\\)?",De={CSS_UNIT:new RegExp(Xs),rgb:new RegExp("rgb"+ac),rgba:new RegExp("rgba"+Jo),hsl:new RegExp("hsl"+ac),hsla:new RegExp("hsla"+Jo),hsv:new RegExp("hsv"+ac),hsva:new RegExp("hsva"+Jo),cmyk:new RegExp("cmyk"+Jo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function sA(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(nh[e])e=nh[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=De.rgb.exec(e);return s?{r:s[1],g:s[2],b:s[3]}:(s=De.rgba.exec(e),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=De.hsl.exec(e),s?{h:s[1],s:s[2],l:s[3]}:(s=De.hsla.exec(e),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=De.hsv.exec(e),s?{h:s[1],s:s[2],v:s[3]}:(s=De.hsva.exec(e),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=De.cmyk.exec(e),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=De.hex8.exec(e),s?{r:_e(s[1]),g:_e(s[2]),b:_e(s[3]),a:Ap(s[4]),format:t?"name":"hex8"}:(s=De.hex6.exec(e),s?{r:_e(s[1]),g:_e(s[2]),b:_e(s[3]),format:t?"name":"hex"}:(s=De.hex4.exec(e),s?{r:_e(s[1]+s[1]),g:_e(s[2]+s[2]),b:_e(s[3]+s[3]),a:Ap(s[4]+s[4]),format:t?"name":"hex8"}:(s=De.hex3.exec(e),s?{r:_e(s[1]+s[1]),g:_e(s[2]+s[2]),b:_e(s[3]+s[3]),format:t?"name":"hex"}:!1))))))))))}function ye(e){return typeof e=="number"?!Number.isNaN(e):De.CSS_UNIT.test(e)}class St{constructor(t="",s={}){if(t instanceof St)return t;typeof t=="number"&&(t=JT(t)),this.originalInput=t;const r=QT(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??r.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let s,r,n;const i=t.r/255,o=t.g/255,a=t.b/255;return i<=.03928?s=i/12.92:s=Math.pow((i+.055)/1.055,2.4),o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),a<=.03928?n=a/12.92:n=Math.pow((a+.055)/1.055,2.4),.2126*s+.7152*r+.0722*n}getAlpha(){return this.a}setAlpha(t){return this.a=Av(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=Ep(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Ep(this.r,this.g,this.b),s=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.v*100);return this.a===1?`hsv(${s}, ${r}%, ${n}%)`:`hsva(${s}, ${r}%, ${n}%, ${this.roundA})`}toHsl(){const t=Cp(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Cp(this.r,this.g,this.b),s=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.l*100);return this.a===1?`hsl(${s}, ${r}%, ${n}%)`:`hsla(${s}, ${r}%, ${n}%, ${this.roundA})`}toHex(t=!1){return $p(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return GT(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),s=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${s}, ${r})`:`rgba(${t}, ${s}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=s=>`${Math.round(zt(s,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=s=>Math.round(zt(s,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Tp(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:s,y:r,k:n}=Tp(this.r,this.g,this.b);return`cmyk(${t}, ${s}, ${r}, ${n})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+$p(this.r,this.g,this.b,!1);for(const[s,r]of Object.entries(nh))if(t===r)return s;return!1}toString(t){const s=!!t;t=t??this.format;let r=!1;const n=this.a<1&&this.a>=0;return!s&&n&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new St(this.toString())}lighten(t=10){const s=this.toHsl();return s.l+=t/100,s.l=Xo(s.l),new St(s)}brighten(t=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(t/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(t/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(t/100)))),new St(s)}darken(t=10){const s=this.toHsl();return s.l-=t/100,s.l=Xo(s.l),new St(s)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const s=this.toHsl();return s.s-=t/100,s.s=Xo(s.s),new St(s)}saturate(t=10){const s=this.toHsl();return s.s+=t/100,s.s=Xo(s.s),new St(s)}greyscale(){return this.desaturate(100)}spin(t){const s=this.toHsl(),r=(s.h+t)%360;return s.h=r<0?360+r:r,new St(s)}mix(t,s=50){const r=this.toRgb(),n=new St(t).toRgb(),i=s/100,o={r:(n.r-r.r)*i+r.r,g:(n.g-r.g)*i+r.g,b:(n.b-r.b)*i+r.b,a:(n.a-r.a)*i+r.a};return new St(o)}analogous(t=6,s=30){const r=this.toHsl(),n=360/s,i=[this];for(r.h=(r.h-(n*t>>1)+720)%360;--t;)r.h=(r.h+n)%360,i.push(new St(r));return i}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new St(t)}monochromatic(t=6){const s=this.toHsv(),{h:r}=s,{s:n}=s;let{v:i}=s;const o=[],a=1/t;for(;t--;)o.push(new St({h:r,s:n,v:i})),i=(i+a)%1;return o}splitcomplement(){const t=this.toHsl(),{h:s}=t;return[this,new St({h:(s+72)%360,s:t.s,l:t.l}),new St({h:(s+216)%360,s:t.s,l:t.l})]}onBackground(t){const s=this.toRgb(),r=new St(t).toRgb(),n=s.a+r.a*(1-s.a);return new St({r:(s.r*s.a+r.r*r.a*(1-s.a))/n,g:(s.g*s.a+r.g*r.a*(1-s.a))/n,b:(s.b*s.a+r.b*r.a*(1-s.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const s=this.toHsl(),{h:r}=s,n=[this],i=360/t;for(let o=1;o<t;o++)n.push(new St({h:(r+o*i)%360,s:s.s,l:s.l}));return n}equals(t){const s=new St(t);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var Op="EyeDropper"in window,K=class extends kt{constructor(){super(),this.formControlController=new hl(this),this.isSafeValue=!1,this.localize=new je(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let n=this.value,i=this.value;s.focus(),e.preventDefault(),nc(t,{onMove:o=>{this.alpha=Me(o/r*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let n=this.value,i=this.value;s.focus(),e.preventDefault(),nc(t,{onMove:o=>{this.hue=Me(o/r*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),s=t.querySelector(".color-picker__grid-handle"),{width:r,height:n}=t.getBoundingClientRect();let i=this.value,o=this.value;s.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,nc(t,{onMove:(a,l)=>{this.saturation=Me(a/r*100,0,100),this.brightness=Me(100-l/n*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Me(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Me(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Me(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Me(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Me(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Me(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Me(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Me(this.brightness-t,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,s=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new St(e);if(!t.isValid)return null;const s=t.toHsl(),r={h:s.h,s:s.s*100,l:s.l*100,a:s.a},n=t.toRgb(),i=t.toHexString(),o=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(o)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Op)return;new EyeDropper().open().then(t=>{const s=this.value;this.setColor(t.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,s,r=100){const n=new St(`hsva(${e}, ${t}%, ${s}%, ${r/100})`);return n.isValid?n.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(t);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(n=>n.trim()!==""),r=N`
      <div
        part="base"
        class=${Tt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?N`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${he({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Tt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${he({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${G(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${he({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${G(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?N`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${he({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${he({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${G(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${he({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":N`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Op?N`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?N`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(n=>{const i=this.parseColor(n);return i?N`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${G(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${n}
                      @click=${()=>this.selectSwatch(n)}
                      @keydown=${o=>!this.disabled&&o.key==="Enter"&&this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${he({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${n}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:N`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${Tt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${he({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};K.styles=[At,jT];K.dependencies={"sl-button-group":qn,"sl-button":ct,"sl-dropdown":Ft,"sl-icon":ae,"sl-input":Z,"sl-visually-hidden":kv};m([lt('[part~="base"]')],K.prototype,"base",2);m([lt('[part~="input"]')],K.prototype,"input",2);m([lt(".color-dropdown")],K.prototype,"dropdown",2);m([lt('[part~="preview"]')],K.prototype,"previewButton",2);m([lt('[part~="trigger"]')],K.prototype,"trigger",2);m([pt()],K.prototype,"hasFocus",2);m([pt()],K.prototype,"isDraggingGridHandle",2);m([pt()],K.prototype,"isEmpty",2);m([pt()],K.prototype,"inputValue",2);m([pt()],K.prototype,"hue",2);m([pt()],K.prototype,"saturation",2);m([pt()],K.prototype,"brightness",2);m([pt()],K.prototype,"alpha",2);m([y()],K.prototype,"value",2);m([Sv()],K.prototype,"defaultValue",2);m([y()],K.prototype,"label",2);m([y()],K.prototype,"format",2);m([y({type:Boolean,reflect:!0})],K.prototype,"inline",2);m([y({reflect:!0})],K.prototype,"size",2);m([y({attribute:"no-format-toggle",type:Boolean})],K.prototype,"noFormatToggle",2);m([y()],K.prototype,"name",2);m([y({type:Boolean,reflect:!0})],K.prototype,"disabled",2);m([y({type:Boolean})],K.prototype,"hoist",2);m([y({type:Boolean})],K.prototype,"opacity",2);m([y({type:Boolean})],K.prototype,"uppercase",2);m([y()],K.prototype,"swatches",2);m([y({reflect:!0})],K.prototype,"form",2);m([y({type:Boolean,reflect:!0})],K.prototype,"required",2);m([ob({passive:!1})],K.prototype,"handleTouchMove",1);m([mt("format",{waitUntilFirstUpdate:!0})],K.prototype,"handleFormatChange",1);m([mt("opacity",{waitUntilFirstUpdate:!0})],K.prototype,"handleOpacityChange",1);m([mt("value")],K.prototype,"handleValueChange",1);K.define("sl-color-picker");var rA=xt`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,dl=class extends kt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};dl.styles=[At,rA];m([y({type:Boolean,reflect:!0})],dl.prototype,"vertical",2);m([mt("vertical")],dl.prototype,"handleVerticalChange",1);dl.define("sl-divider");Ft.define("sl-dropdown");ae.define("sl-icon");var nA=xt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,te=class extends kt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ma`a`:Ma`button`;return cs`
      <${t}
        part="base"
        class=${Tt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${G(e?void 0:this.disabled)}
        type=${G(e?void 0:"button")}
        href=${G(e?this.href:void 0)}
        target=${G(e?this.target:void 0)}
        download=${G(e?this.download:void 0)}
        rel=${G(e&&this.target?"noreferrer noopener":void 0)}
        role=${G(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${G(this.name)}
          library=${G(this.library)}
          src=${G(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};te.styles=[At,nA];te.dependencies={"sl-icon":ae};m([lt(".icon-button")],te.prototype,"button",2);m([pt()],te.prototype,"hasFocus",2);m([y()],te.prototype,"name",2);m([y()],te.prototype,"library",2);m([y()],te.prototype,"src",2);m([y()],te.prototype,"href",2);m([y()],te.prototype,"target",2);m([y()],te.prototype,"download",2);m([y()],te.prototype,"label",2);m([y({type:Boolean,reflect:!0})],te.prototype,"disabled",2);te.define("sl-icon-button");var iA=xt`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Xu=class extends kt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),r=s.find(a=>{var l;return t.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!r||s.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const o=r;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let r=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?r++:e.key==="ArrowUp"?r--:e.key==="Home"?r=0:e.key==="End"&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Xu.styles=[At,iA];m([lt("slot")],Xu.prototype,"defaultSlot",2);Xu.define("sl-menu");var oA=xt`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,aA=class{constructor(e,t){this.popupRef=X$(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var r;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(r=s.target.role)!=null&&r.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),r=s?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],n=getComputedStyle(this.host).direction==="rtl";if(!r)return;const{left:i,top:o,width:a,height:l}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?i+a:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?i+a:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const r of t.assignedElements())if(s=r.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let r=1;r!==s.length;++r)s[r].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((n,i)=>{var o;const a=(o=t.get(i))!=null?o:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return n-c.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?N`
      <sl-popup
        ${J$(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:N` <slot name="submenu" hidden></slot> `}},Te=class extends kt{constructor(){super(...arguments),this.localize=new je(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new ul(this,"submenu"),this.submenuController=new aA(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return gT(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return N`
      <div
        id="anchor"
        part="base"
        class=${Tt({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Te.styles=[At,oA];Te.dependencies={"sl-icon":ae,"sl-popup":ut,"sl-spinner":Zu};m([lt("slot:not([name])")],Te.prototype,"defaultSlot",2);m([lt(".menu-item")],Te.prototype,"menuItem",2);m([y()],Te.prototype,"type",2);m([y({type:Boolean,reflect:!0})],Te.prototype,"checked",2);m([y()],Te.prototype,"value",2);m([y({type:Boolean,reflect:!0})],Te.prototype,"loading",2);m([y({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);m([mt("checked")],Te.prototype,"handleCheckedChange",1);m([mt("disabled")],Te.prototype,"handleDisabledChange",1);m([mt("type")],Te.prototype,"handleTypeChange",1);Te.define("sl-menu-item");var lA=xt`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,sn=class extends kt{constructor(){super(...arguments),this.localize=new je(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return N`
      <span
        part="base"
        class=${Tt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?N`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};sn.styles=[At,lA];sn.dependencies={"sl-icon-button":te};m([y({reflect:!0})],sn.prototype,"variant",2);m([y({reflect:!0})],sn.prototype,"size",2);m([y({type:Boolean,reflect:!0})],sn.prototype,"pill",2);m([y({type:Boolean})],sn.prototype,"removable",2);var cA=xt`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function hA(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var ih=new Set;function uA(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function dA(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function n2(e){if(ih.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=uA()+dA();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function i2(e){ih.delete(e),ih.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function oh(e,t,s="vertical",r="smooth"){const n=hA(e,t),i=n.top+t.scrollTop,o=n.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(o<a?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>l&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(s==="vertical"||s==="both")&&(i<c?t.scrollTo({top:i,behavior:r}):i+e.clientHeight>h&&t.scrollTo({top:i-t.offsetHeight+e.clientHeight,behavior:r}))}var J=class extends kt{constructor(){super(...arguments),this.formControlController=new hl(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ul(this,"help-text","label"),this.localize=new je(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>N`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,r=t.closest("sl-icon-button")!==null;if(!(s||r)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const n=this.getAllOptions(),i=n.indexOf(this.currentOption);let o=Math.max(0,i);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(o=i+1,o>n.length-1&&(o=0)):e.key==="ArrowUp"?(o=i-1,o<0&&(o=n.length-1)):e.key==="Home"?o=0:e.key==="End"&&(o=n.length-1),this.setCurrentOption(n[o])}if(e.key&&e.key.length===1||e.key==="Backspace"){const n=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const i of n)if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),r=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(t)?t:[t],r=[];e.forEach(n=>r.push(n.value)),this.setSelectedOptions(e.filter(n=>s.includes(n.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(r=>r.selected=!1),s.length&&s.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s;const r=this.getAllOptions();this.selectedOptions=r.filter(i=>i.selected);const n=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const i=this.selectedOptions[0];this.value=(e=i?.value)!=null?e:"",this.displayLabel=(s=(t=i?.getTextLabel)==null?void 0:t.call(i))!=null?s:""}this.valueHasChanged=n,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return N`<div @sl-remove=${r=>this.handleTagRemove(r,e)}>
          ${typeof s=="string"?tT(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return N`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return N``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),e==="value"){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Mn(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=On(this,"select.show",{dir:this.localize.dir()});await In(this.popup.popup,e,t),this.currentOption&&oh(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Mn(this);const{keyframes:e,options:t}=On(this,"select.hide",{dir:this.localize.dir()});await In(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Rn(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Rn(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&this.value.length>0,i=this.placeholder&&this.value&&this.value.length<=0;return N`
      <div
        part="form-control"
        class=${Tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Tt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":i,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?N`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${n?N`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J.styles=[At,Cv,cA];J.dependencies={"sl-icon":ae,"sl-popup":ut,"sl-tag":sn};m([lt(".select")],J.prototype,"popup",2);m([lt(".select__combobox")],J.prototype,"combobox",2);m([lt(".select__display-input")],J.prototype,"displayInput",2);m([lt(".select__value-input")],J.prototype,"valueInput",2);m([lt(".select__listbox")],J.prototype,"listbox",2);m([pt()],J.prototype,"hasFocus",2);m([pt()],J.prototype,"displayLabel",2);m([pt()],J.prototype,"currentOption",2);m([pt()],J.prototype,"selectedOptions",2);m([pt()],J.prototype,"valueHasChanged",2);m([y()],J.prototype,"name",2);m([pt()],J.prototype,"value",1);m([y({attribute:"value"})],J.prototype,"defaultValue",2);m([y({reflect:!0})],J.prototype,"size",2);m([y()],J.prototype,"placeholder",2);m([y({type:Boolean,reflect:!0})],J.prototype,"multiple",2);m([y({attribute:"max-options-visible",type:Number})],J.prototype,"maxOptionsVisible",2);m([y({type:Boolean,reflect:!0})],J.prototype,"disabled",2);m([y({type:Boolean})],J.prototype,"clearable",2);m([y({type:Boolean,reflect:!0})],J.prototype,"open",2);m([y({type:Boolean})],J.prototype,"hoist",2);m([y({type:Boolean,reflect:!0})],J.prototype,"filled",2);m([y({type:Boolean,reflect:!0})],J.prototype,"pill",2);m([y()],J.prototype,"label",2);m([y({reflect:!0})],J.prototype,"placement",2);m([y({attribute:"help-text"})],J.prototype,"helpText",2);m([y({reflect:!0})],J.prototype,"form",2);m([y({type:Boolean,reflect:!0})],J.prototype,"required",2);m([y()],J.prototype,"getTag",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);m([mt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);m([mt("open",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpenChange",1);Zn("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Zn("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});J.define("sl-select");var fA=xt`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,pA=0,ns=class extends kt{constructor(){super(...arguments),this.localize=new je(this),this.attrId=++pA,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,N`
      <div
        part="base"
        class=${Tt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?N`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ns.styles=[At,fA];ns.dependencies={"sl-icon-button":te};m([lt(".tab")],ns.prototype,"tab",2);m([y({reflect:!0})],ns.prototype,"panel",2);m([y({type:Boolean,reflect:!0})],ns.prototype,"active",2);m([y({type:Boolean,reflect:!0})],ns.prototype,"closable",2);m([y({type:Boolean,reflect:!0})],ns.prototype,"disabled",2);m([y({type:Number,reflect:!0})],ns.prototype,"tabIndex",2);m([mt("active")],ns.prototype,"handleActiveChange",1);m([mt("disabled")],ns.prototype,"handleDisabledChange",1);ns.define("sl-tab");var gA=xt`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,mA=xt`
  :host {
    display: contents;
  }
`,fl=class extends kt{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],t.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};fl.styles=[At,mA];m([y({type:Boolean,reflect:!0})],fl.prototype,"disabled",2);m([mt("disabled",{waitUntilFirstUpdate:!0})],fl.prototype,"handleDisabledChange",1);var jt=class extends kt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new je(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const s=t.filter(({target:r})=>{if(r===this)return!0;if(r.closest("sl-tab-group")!==this)return!1;const n=r.tagName.toLowerCase();return n==="sl-tab"||n==="sl-tab-panel"});if(s.length!==0){if(s.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(r=>r.attributeName==="active")){const n=s.filter(i=>i.attributeName==="active"&&i.target.tagName.toLowerCase()==="sl-tab").map(i=>i.target).find(i=>i.active);n&&this.setActiveTab(n)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((s,r)=>{var n;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),r.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const s=e.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(e){const s=e.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const n=this.tabs.find(a=>a.matches(":focus")),i=this.localize.dir()==="rtl";let o=null;if(n?.tagName.toLowerCase()==="sl-tab"){if(e.key==="Home")o=this.focusableTabs[0];else if(e.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===n);o=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===n);o=this.findNextFocusableTab(a,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===o?0:-1}),["top","bottom"].includes(this.placement)&&oh(o,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Us({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var n;return r.active=r.name===((n=this.activeTab)==null?void 0:n.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&oh(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(s=>s.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,s=e.clientHeight,r=this.localize.dir()==="rtl",n=this.getAllTabs(),o=n.slice(0,n.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let s=null;const r=t==="forward"?1:-1;let n=e+r;for(;e<this.tabs.length;){if(s=this.tabs[n]||null,s===null){t==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;n+=r}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(s=>s.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return N`
      <div
        part="base"
        class=${Tt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Tt({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Tt({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};jt.styles=[At,gA];jt.dependencies={"sl-icon-button":te,"sl-resize-observer":fl};m([lt(".tab-group")],jt.prototype,"tabGroup",2);m([lt(".tab-group__body")],jt.prototype,"body",2);m([lt(".tab-group__nav")],jt.prototype,"nav",2);m([lt(".tab-group__indicator")],jt.prototype,"indicator",2);m([pt()],jt.prototype,"hasScrollControls",2);m([pt()],jt.prototype,"shouldHideScrollStartButton",2);m([pt()],jt.prototype,"shouldHideScrollEndButton",2);m([y()],jt.prototype,"placement",2);m([y()],jt.prototype,"activation",2);m([y({attribute:"no-scroll-controls",type:Boolean})],jt.prototype,"noScrollControls",2);m([y({attribute:"fixed-scroll-controls",type:Boolean})],jt.prototype,"fixedScrollControls",2);m([ob({passive:!0})],jt.prototype,"updateScrollButtons",1);m([mt("noScrollControls",{waitUntilFirstUpdate:!0})],jt.prototype,"updateScrollControls",1);m([mt("placement",{waitUntilFirstUpdate:!0})],jt.prototype,"syncIndicator",1);jt.define("sl-tab-group");var bA=(e,t)=>{let s=0;return function(...r){window.clearTimeout(s),s=window.setTimeout(()=>{e.call(this,...r)},t)}},Rp=(e,t,s)=>{const r=e[t];e[t]=function(...n){r.call(this,...n),s.call(this,r,...n)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,s=new WeakMap,r=i=>{for(const o of i.changedTouches)t.add(o.identifier)},n=i=>{for(const o of i.changedTouches)t.delete(o.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",n,!0),document.addEventListener("touchcancel",n,!0),Rp(EventTarget.prototype,"addEventListener",function(i,o){if(o!=="scrollend")return;const a=bA(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",a,{passive:!0}),s.set(this,a)}),Rp(EventTarget.prototype,"removeEventListener",function(i,o){if(o!=="scrollend")return;const a=s.get(this);a&&i.call(this,"scroll",a,{passive:!0})})}})();var vA=xt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ht=class extends kt{constructor(){super(),this.localize=new je(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Sp(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Sp(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Mn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:r}=On(this,"tooltip.show",{dir:this.localize.dir()});await In(this.popup.popup,s,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Mn(this.body);const{keyframes:s,options:r}=On(this,"tooltip.hide",{dir:this.localize.dir()});await In(this.popup.popup,s,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Rn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rn(this,"sl-after-hide")}render(){return N`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Tt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ht.styles=[At,vA];Ht.dependencies={"sl-popup":ut};m([lt("slot:not([name])")],Ht.prototype,"defaultSlot",2);m([lt(".tooltip__body")],Ht.prototype,"body",2);m([lt("sl-popup")],Ht.prototype,"popup",2);m([y()],Ht.prototype,"content",2);m([y()],Ht.prototype,"placement",2);m([y({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);m([y({type:Number})],Ht.prototype,"distance",2);m([y({type:Boolean,reflect:!0})],Ht.prototype,"open",2);m([y({type:Number})],Ht.prototype,"skidding",2);m([y()],Ht.prototype,"trigger",2);m([y({type:Boolean})],Ht.prototype,"hoist",2);m([mt("open",{waitUntilFirstUpdate:!0})],Ht.prototype,"handleOpenChange",1);m([mt(["content","distance","hoist","placement","skidding"])],Ht.prototype,"handleOptionsChange",1);m([mt("disabled")],Ht.prototype,"handleDisabledChange",1);Zn("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Zn("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ht.define("sl-tooltip");export{te as $,pC as A,Ve as B,Me as C,kv as D,sn as E,hl as F,nc as G,ul as H,fl as I,ob as J,he as K,je as L,tT as M,pT as N,cs as O,qn as P,s2 as Q,e2 as R,B1 as S,zs as T,Gu as U,ut as V,Z as W,AT as X,PT as Y,Ev as Z,m as _,qk as a,Hk as a$,n2 as a0,i2 as a1,Rn as a2,Ht as a3,FT as a4,VO as a5,QO as a6,ur as a7,tr as a8,mo as a9,Mc as aA,rk as aB,Ki as aC,KA as aD,tO as aE,Em as aF,$m as aG,lk as aH,eO as aI,fk as aJ,Ic as aK,xa as aL,wa as aM,Am as aN,ls as aO,Wm as aP,Zk as aQ,lr as aR,fn as aS,Ek as aT,Pp as aU,Lp as aV,Fy as aW,Ip as aX,Mo as aY,Uy as aZ,ah as a_,Nu as aa,Fx as ab,As as ac,st as ad,qO as ae,Nn as af,zO as ag,Qo as ah,tt as ai,Lr as aj,_A as ak,D as al,Wy as am,ke as an,jA as ao,HA as ap,T as aq,R as ar,Vs as as,at,Tm as au,ds as av,ak as aw,QA as ax,JA as ay,Rc as az,b0 as b,ln as b$,vO as b0,sS as b1,Vc as b2,fS as b3,qm as b4,Ta as b5,pS as b6,rS as b7,Yr as b8,wA as b9,Ws as bA,zm as bB,Xm as bC,Gm as bD,Ur as bE,ab as bF,qh as bG,Kh as bH,fs as bI,Of as bJ,pb as bK,bC as bL,vC as bM,gb as bN,bO,mO as bP,pO as bQ,yO as bR,eS as bS,mf as bT,Ho as bU,H1 as bV,sO as bW,fO as bX,iO as bY,ar as bZ,me as b_,cc as ba,J1 as bb,Ym as bc,Hh as bd,Q1 as be,tS as bf,hO as bg,uO as bh,dd as bi,fe as bj,Kt as bk,Vt as bl,Qt as bm,hn as bn,CA as bo,zc as bp,oe as bq,OS as br,zA as bs,BA as bt,wO as bu,xO as bv,gS as bw,cO as bx,wS as by,Uh as bz,g0 as c,wx as c$,Ox as c0,Rx as c1,Sx as c2,tl as c3,Lh as c4,dO as c5,po as c6,OA as c7,qy as c8,lh as c9,Ea as cA,Im as cB,Qi as cC,zh as cD,H$ as cE,G$ as cF,W$ as cG,ZO as cH,Y$ as cI,mp as cJ,jO as cK,XC as cL,yf as cM,Ph as cN,Zi as cO,_t as cP,Fi as cQ,yx as cR,ji as cS,Qe as cT,jh as cU,Dm as cV,Pt as cW,$x as cX,Dl as cY,Bc as cZ,gm as c_,kA as ca,SA as cb,FA as cc,UA as cd,VA as ce,xA as cf,Mx as cg,mm as ch,AA as ci,TA as cj,NA as ck,RA as cl,Mp as cm,$A as cn,HO as co,GC as cp,q_ as cq,KC as cr,Zr as cs,Ex as ct,TE as cu,Px as cv,_f as cw,wC as cx,Pa as cy,Vm as cz,At as d,Z$ as d$,rO as d0,Vn as d1,Un as d2,rb as d3,YO as d4,tC as d5,X$ as d6,J$ as d7,lb as d8,CO as d9,j1 as dA,Tk as dB,Om as dC,Nm as dD,gf as dE,Vh as dF,tk as dG,bm as dH,jx as dI,Bm as dJ,pf as dK,Lc as dL,q1 as dM,Cr as dN,en as dO,nO as dP,Vk as dQ,Lm as dR,Nc as dS,oO as dT,Pr as dU,ge as dV,WS as dW,qS as dX,si as dY,TO as dZ,$O as d_,Xh as da,q$ as db,WA as dc,fC as dd,bo as de,XO as df,Yk as dg,U1 as dh,Dp as di,LA as dj,Yh as dk,Er as dl,FO as dm,AS as dn,yC as dp,bu as dq,Pf as dr,Ma as ds,kn as dt,YA as du,kO as dv,gO as dw,UO as dx,SO as dy,_C as dz,_0 as e,GO as e0,IO as e1,Af as e2,RE as e3,yA as e4,MA as e5,IA as e6,EA as e7,pd as e8,WO as e9,DA as eA,PA as eB,em as eC,xx as eD,Ix as eE,yp as eF,_O as ea,ql as eb,Zl as ec,th as ed,bc as ee,mc as ef,qA as eg,Js as eh,X_ as ei,El as ej,V as ek,Or as el,Dn as em,Le as en,Y as eo,Rr as ep,Xt as eq,kg as er,K0 as es,Z0 as et,Xd as eu,GA as ev,KO as ew,na as ex,px as ey,Ra as ez,Cv as f,Mm as g,ae as h,xt as i,lt as j,y as k,Sv as l,kt as m,Ne as n,Tt as o,G as p,Q$ as q,pt as r,Zu as s,Zn as t,Mn as u,On as v,mt as w,N as x,In as y,r2 as z};
//# sourceMappingURL=chunk.URTPIBTY-BfW3KnjQ.js.map
