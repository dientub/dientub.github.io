           function quad(form) {
s=eval(form.s.value);
e=document.nhap.e.value; 
m=document.nhap.m.value; 

if(s!=0)  s=1;   
if(e[0]==0) xe='0';else xe='1';
for(i=1;i<8;i++)  {if(e[i]==0) xe=xe+'0';else xe=xe+'1';}           
if(m[0]==0) xm='0';else xm='1';
for(i=1;i<23;i++)  {if(m[i]==0) xm=xm+'0';else xm=xm+'1';}    
e=xe;m=xm;
form.xs.value=s;form.xe.value=e;form.xm.value=m;
             
if(s==0) {form.dauX.value="dương";form.dauXa.value="dương";}
else {form.dauX.value="âm";form.dauXa.value="âm";}
xuats=s;
form.xuats.value=xuats; 
xuate=e;
form.xuate.value=xuate; 
  
e10=0;
for(i=0;i<=7;i++)
  {if(e[i]==0) e10+=0;
   else e10+=Math.pow(2,7-i);}
E=e10-127;
form.e10.value=e10;form.e10a.value=e10; form.E.value=E; form.Ea.value=E; 
             
n=23;
for(i=22;i>=0;i--)
  {if(m[i]==0) n--;
  else break;}
//m2=1;             
//for(i=n;i>=0;i--)
//  if(m[i]!=0) m2=m2+Math.pow(10,-i-1);
xuatm=m[0];
for(i=1;i<n;i++)
  xuatm=xuatm+m[i];
form.xuatm.value=xuatm;

xuatm10=1;           
for(i=0;i<23;i++)
 if(m[i]!=0) xuatm10=xuatm10+Math.pow(2,-i-1);
form.xuatm10.value=xuatm10;     
form.xuatm10a.value=xuatm10;             
             
m10=Math.pow(2,E);
for(i=0;i<23;i++)
  {if(m[i]==0) m10+=0;
   else m10+=Math.pow(2,E-1-i);}


form.m10.value=m10;          
X=(Math.pow(-1,s))*m10;
form.X.value=X;
  
form.Xquyuoc.value="X = "+X;             
if(e=="00000000"&&m=="00000000000000000000000") form.Xquyuoc.value="X = 0";             
if(e=="11111111"&&m=="00000000000000000000000"&&s==1) form.Xquyuoc.value="X = -∞"; 
if(e=="11111111"&&m=="00000000000000000000000"&&s==0) form.Xquyuoc.value="X = +∞";              
if(e=="11111111"&&m!="00000000000000000000000") form.Xquyuoc.value="Không tồn tại số thực X";             
             

           }


