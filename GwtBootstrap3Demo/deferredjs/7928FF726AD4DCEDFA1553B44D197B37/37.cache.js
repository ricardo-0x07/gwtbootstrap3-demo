function Pmc(){}
function Emc(a,b,c){Rkb.call(this,a,b,c,(P$b(),O$b))}
function Ymc(a){var b;if(!a.i){b=new Nmc(new Pmc);a.i=b}return a.i}
function Xmc(a){var b;if(!a.g){b=new Emc($jb(vlb(a.b)),Ymc(a),Wmc(a));qkb((wlb(a.b),b),Hlb(wlb(a.b)));a.g=b}return a.g}
function Nmc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;jlb(this,(a=new XFb,Syb(a,(b=new EBb(qEc),Syb(b,(c=new SEb,c.b='Project Setup',REb(c),c.c='basic setup and using custom themes',REb(c),c)),Syb(b,(d=new $Eb,Syb(d,(i=new kFb,jFb(i,(j=new BCb(3),j.c=rEc,zCb(j),j)),i)),Syb(d,(k=new bFb,Syb(k,new oDb((n=new Erb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new p$(n.b.b)).b)),Syb(k,(o=new Gsc,OFb(o,(p=new Erb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new p$(p.b.b)).b),O0(o.ab,uEc,true),o)),k)),d)),Syb(b,(e=new $Eb,Syb(e,(q=new kFb,jFb(q,(r=new BCb(3),r.c='Bootstrap2 Look-a-like Setup',zCb(r),r)),q)),Syb(e,(s=new bFb,Syb(s,new oDb((t=new Erb,t.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new p$(t.b.b)).b)),Syb(s,(u=new Gsc,OFb(u,(v=new Erb,v.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new p$(v.b.b)).b),O0(u.ab,uEc,true),u)),s)),e)),Syb(b,(f=new $Eb,Syb(f,(w=new kFb,jFb(w,(x=new BCb(3),x.c='Custom Theme',zCb(x),x)),w)),Syb(f,(y=new bFb,Syb(y,new oDb((z=new Erb,z.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new p$(z.b.b)).b)),Syb(y,(A=new Gsc,OFb(A,(B=new Erb,B.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new p$(B.b.b)).b),O0(A.ab,uEc,true),A)),y)),f)),Syb(b,(g=new $Eb,Syb(g,(C=new kFb,jFb(C,(D=new BCb(3),D.c='Support for IE8',zCb(D),D)),C)),Syb(g,(E=new bFb,Syb(E,new oDb((F=new Erb,F.b.b+='For support for IE8 you need to inherit the Respond module into your *.gwt.xml.',new p$(F.b.b)).b)),Syb(E,(G=new Gsc,OFb(G,(H=new Erb,H.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n',new p$(H.b.b)).b),O0(G.ab,uEc,true),G)),E)),g)),b)),a))}
lZ(1305,529,tyc,Emc);lZ(1308,534,uyc,Nmc);lZ(1309,1,{},Pmc);lZ(1316,1,Vyc);_.Ab=function mnc(){$mb(this.c,Xmc(this.b.b))};var IU=Upb(MDc,'SetupPresenter',1305),KU=Upb(MDc,'SetupView',1308),JU=Upb(MDc,'SetupView_BinderImpl',1309);azc(Pm)(37);