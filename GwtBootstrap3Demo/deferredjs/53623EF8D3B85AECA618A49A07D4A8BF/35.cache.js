function Ogc(){}
function Dgc(a,b,c){rhb.call(this,a,b,c,(VWb(),UWb))}
function Xgc(a){var b;if(!a.i){b=new Mgc(new Ogc);a.i=b}return a.i}
function Wgc(a){var b;if(!a.g){b=new Dgc(Agb(Xhb(a.b)),Xgc(a),Vgc(a));Sgb((Yhb(a.b),b),hib(Yhb(a.b)));a.g=b}return a.g}
function Mgc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A;Lhb(this,(a=new mCb,qvb(a,(b=new Xxb(wvc),qvb(b,(c=new hBb,c.b='Project Setup',gBb(c),c.c='basic setup and using custom themes',gBb(c),c)),qvb(b,(d=new pBb,qvb(d,(g=new BBb,ABb(g,(i=new Syb(3),KCb(i.d,xvc),i)),g)),qvb(d,(j=new sBb,qvb(j,new Gzb((k=new Xnb,k.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new aX(k.b.b)).b)),qvb(j,(n=new Qlc,dCb(n,(o=new Xnb,o.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new aX(o.b.b)).b),xZ(n.ab,Avc,true),n)),j)),d)),qvb(b,(e=new pBb,qvb(e,(p=new BBb,ABb(p,(q=new Syb(3),KCb(q.d,'Bootstrap2 Look-a-like Setup'),q)),p)),qvb(e,(r=new sBb,qvb(r,new Gzb((s=new Xnb,s.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new aX(s.b.b)).b)),qvb(r,(t=new Qlc,dCb(t,(u=new Xnb,u.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new aX(u.b.b)).b),xZ(t.ab,Avc,true),t)),r)),e)),qvb(b,(f=new pBb,qvb(f,(v=new BBb,ABb(v,(w=new Syb(3),KCb(w.d,'Custom Theme'),w)),v)),qvb(f,(x=new sBb,qvb(x,new Gzb((y=new Xnb,y.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new aX(y.b.b)).b)),qvb(x,(z=new Qlc,dCb(z,(A=new Xnb,A.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new aX(A.b.b)).b),xZ(z.ab,Avc,true),z)),x)),f)),b)),a))}
YV(1256,519,Gpc,Dgc);YV(1259,524,Hpc,Mgc);YV(1260,1,{},Ogc);YV(1267,1,iqc);_.Ab=function lhc(){Ajb(this.c,Wgc(this.b.b))};var nS=smb(Uuc,'SetupPresenter',1256),pS=smb(Uuc,'SetupView',1259),oS=smb(Uuc,'SetupView_BinderImpl',1260);nqc(Fm)(35);