function fgc(){}
function Wfc(a,b,c){Lgb.call(this,a,b,c,(mWb(),lWb))}
function ogc(a){var b;if(!a.i){b=new dgc(new fgc);a.i=b}return a.i}
function ngc(a){var b;if(!a.g){b=new Wfc(Ufb(phb(a.b)),ogc(a),mgc(a));kgb((qhb(a.b),b),Bhb(qhb(a.b)));a.g=b}return a.g}
function dgc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A;dhb(this,(a=new FBb,Jub(a,(b=new oxb(Iuc),Jub(b,(c=new AAb,c.b='Project Setup',zAb(c),c.c='basic setup and using custom themes',zAb(c),c)),Jub(b,(d=new IAb,Jub(d,(g=new UAb,TAb(g,(i=new jyb(3),bCb(i.d,Juc),i)),g)),Jub(d,(j=new LAb,Jub(j,new Zyb((k=new onb,k.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new CW(k.b.b)).b)),Jub(j,(n=new hlc,wBb(n,(o=new onb,o.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new CW(o.b.b)).b),ZY(n.ab,Muc,true),n)),j)),d)),Jub(b,(e=new IAb,Jub(e,(p=new UAb,TAb(p,(q=new jyb(3),bCb(q.d,'Bootstrap2 Look-a-like Setup'),q)),p)),Jub(e,(r=new LAb,Jub(r,new Zyb((s=new onb,s.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new CW(s.b.b)).b)),Jub(r,(t=new hlc,wBb(t,(u=new onb,u.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new CW(u.b.b)).b),ZY(t.ab,Muc,true),t)),r)),e)),Jub(b,(f=new IAb,Jub(f,(v=new UAb,TAb(v,(w=new jyb(3),bCb(w.d,'Custom Theme'),w)),v)),Jub(f,(x=new LAb,Jub(x,new Zyb((y=new onb,y.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new CW(y.b.b)).b)),Jub(x,(z=new hlc,wBb(z,(A=new onb,A.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new CW(A.b.b)).b),ZY(z.ab,Muc,true),z)),x)),f)),b)),a))}
yV(1253,516,Yoc,Wfc);yV(1256,521,Zoc,dgc);yV(1257,1,{},fgc);yV(1264,1,Apc);_.wb=function Egc(){Uib(this.c,ngc(this.b.b))};var PR=Mlb(euc,'SetupPresenter',1253),RR=Mlb(euc,'SetupView',1256),QR=Mlb(euc,'SetupView_BinderImpl',1257);Fpc(um)(35);