function Trc(){}
function Rrc(){fnb(this,Vrc(new Wrc))}
function Irc(a,b,c){Nmb.call(this,a,b,c,(_0b(),$0b))}
function hsc(a){var b;if(!a.g){b=new Rrc(new Trc);a.g=b}return a.g}
function Xrc(a){var b;b=new Etb;Io(b.a,UKc);ytb(b,k0(a));Io(b.a,VKc);return new R_(b.a.a)}
function Yrc(a){var b;b=new Etb;Io(b.a,UKc);ytb(b,k0(a));Io(b.a,VKc);return new R_(b.a.a)}
function Zrc(a){var b;b=new Etb;Io(b.a,UKc);ytb(b,k0(a));Io(b.a,VKc);return new R_(b.a.a)}
function $rc(a){var b;b=new Etb;Io(b.a,UKc);ytb(b,k0(a));Io(b.a,VKc);return new R_(b.a.a)}
function gsc(a){var b;if(!a.f){b=new Irc(Wlb(snb(a.a)),hsc(a),fsc(a));mmb((tnb(a.a),b),Enb(tnb(a.a)));a.f=b}return a.f}
function Wrc(){this.a=Jr($doc);this.c=Jr($doc);this.e=Jr($doc);this.g=Jr($doc);this.b=new P1(this.a);this.d=new P1(this.c);this.f=new P1(this.e);this.i=new P1(this.g)}
function Vrc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q;b=new kIb;UAb(b,(c=new HDb(NKc),UAb(c,(d=new XGb,d.a='Project Setup',WGb(d),d.b='basic setup and using custom themes',WGb(d),d)),UAb(c,(e=new nHb,UAb(e,(j=new zHb(Xrc(a.a).a),k=R1((Oab(),j.cb)),O1(a.b),k.b?Fq(k.b,k.a,k.c):U1(k.a),yHb(j,(n=new EEb(3),n.b=OKc,CEb(n),n),O1(a.b)),j)),UAb(e,(o=new qHb,UAb(o,new sFb((p=new Etb,Io(p.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new R_(p.a.a)).a)),UAb(o,(q=new iyc,bIb(q,(r=new Etb,Io(r.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new R_(r.a.a)).a),r2(q.cb,RKc,true),q)),o)),e)),UAb(c,(f=new nHb,UAb(f,(s=new zHb(Zrc(a.c).a),t=R1(s.cb),O1(a.d),t.b?Fq(t.b,t.a,t.c):U1(t.a),yHb(s,(u=new EEb(3),u.b='Bootstrap2 Look-a-like Setup',CEb(u),u),O1(a.d)),s)),UAb(f,(v=new qHb,UAb(v,new sFb((w=new Etb,Io(w.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new R_(w.a.a)).a)),UAb(v,(A=new iyc,bIb(A,(B=new Etb,Io(B.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new R_(B.a.a)).a),r2(A.cb,RKc,true),A)),v)),f)),UAb(c,(g=new nHb,UAb(g,(C=new zHb($rc(a.e).a),D=R1(C.cb),O1(a.f),D.b?Fq(D.b,D.a,D.c):U1(D.a),yHb(C,(F=new EEb(3),F.b='Custom Theme',CEb(F),F),O1(a.f)),C)),UAb(g,(G=new qHb,UAb(G,new sFb((H=new Etb,Io(H.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new R_(H.a.a)).a)),UAb(G,(I=new iyc,bIb(I,(J=new Etb,Io(J.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new R_(J.a.a)).a),r2(I.cb,RKc,true),I)),G)),g)),UAb(c,(i=new nHb,UAb(i,(K=new zHb(Yrc(a.g).a),L=R1(K.cb),O1(a.i),L.b?Fq(L.b,L.a,L.c):U1(L.a),yHb(K,(M=new EEb(3),M.b='Support for IE8',CEb(M),M),O1(a.i)),K)),UAb(i,(N=new qHb,UAb(N,new sFb((O=new Etb,Io(O.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new R_(O.a.a)).a)),UAb(N,(P=new iyc,bIb(P,(Q=new Etb,Io(Q.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new R_(Q.a.a)).a),r2(P.cb,RKc,true),P)),N)),i)),c));return b}
H$(1309,531,UEc,Irc);H$(1312,536,VEc,Rrc);H$(1313,1,{},Trc);H$(1314,1,{},Wrc);H$(1320,1,uFc);_.Ab=function xsc(){Xob(this.b,gsc(this.a.a))};var YV=Rrb(hKc,'SetupPresenter',1309),_V=Rrb(hKc,'SetupView',1312),$V=Rrb(hKc,'SetupView_BinderImpl',1313),ZV=Rrb(hKc,'SetupView_BinderImpl$Widgets',1314);BFc(dn)(37);