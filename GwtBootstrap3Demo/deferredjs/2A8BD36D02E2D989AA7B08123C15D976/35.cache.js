function vkc(){}
function kkc(a,b,c){akb.call(this,a,b,c,(NZb(),MZb))}
function Ekc(a){var b;if(!a.g){b=new tkc(new vkc);a.g=b}return a.g}
function Dkc(a){var b;if(!a.f){b=new kkc(jjb(Gkb(a.a)),Ekc(a),Ckc(a));Bjb((Hkb(a.a),b),Skb(Hkb(a.a)));a.f=b}return a.f}
function tkc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;ukb(this,(a=new YEb,_xb(a,(b=new GAb(RAc),_xb(b,(c=new TDb,c.a='Project Setup',SDb(c),c.b='basic setup and using custom themes',SDb(c),c)),_xb(b,(d=new _Db,_xb(d,(i=new lEb,kEb(i,(j=new CBb(3),uFb(j.c,SAc),j)),i)),_xb(d,(k=new cEb,_xb(k,new pCb((n=new Pqb,Yn(n.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new yZ(bo(n.a))).a)),_xb(k,(o=new jqc,PEb(o,(p=new Pqb,Yn(p.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new yZ(bo(p.a))).a),X_(o._,VAc,true),o)),k)),d)),_xb(b,(e=new _Db,_xb(e,(q=new lEb,kEb(q,(r=new CBb(3),uFb(r.c,'Bootstrap2 Look-a-like Setup'),r)),q)),_xb(e,(s=new cEb,_xb(s,new pCb((t=new Pqb,Yn(t.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new yZ(bo(t.a))).a)),_xb(s,(u=new jqc,PEb(u,(v=new Pqb,Yn(v.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new yZ(bo(v.a))).a),X_(u._,VAc,true),u)),s)),e)),_xb(b,(f=new _Db,_xb(f,(w=new lEb,kEb(w,(x=new CBb(3),uFb(x.c,'Custom Theme'),x)),w)),_xb(f,(y=new cEb,_xb(y,new pCb((z=new Pqb,Yn(z.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new yZ(bo(z.a))).a)),_xb(y,(A=new jqc,PEb(A,(B=new Pqb,Yn(B.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new yZ(bo(B.a))).a),X_(A._,VAc,true),A)),y)),f)),_xb(b,(g=new _Db,_xb(g,(C=new lEb,kEb(C,(D=new CBb(3),uFb(D.c,'Support for IE8'),D)),C)),_xb(g,(E=new cEb,_xb(E,new pCb((F=new Pqb,Yn(F.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new yZ(bo(F.a))).a)),_xb(E,(G=new jqc,PEb(G,(H=new Pqb,Yn(H.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new yZ(bo(H.a))).a),X_(G._,VAc,true),G)),E)),g)),b)),a))}
pY(1286,535,dvc,kkc);pY(1289,540,evc,tkc);pY(1290,1,{},vkc);pY(1297,1,Fvc);_.vb=function Ukc(){jmb(this.b,Dkc(this.a.a))};var UT=dpb(nAc,'SetupPresenter',1286),WT=dpb(nAc,'SetupView',1289),VT=dpb(nAc,'SetupView_BinderImpl',1290);Mvc(Em)(35);