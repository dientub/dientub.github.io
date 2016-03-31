function khoitao(lehoang) {
  
  sothucX=eval(lehoang.sothucX.value);lehoang.stX.value=sothucX; 
  
  
  
if(sothucX!=0){
if(sothucX>0) {lehoang.dns.value=0;lehoang.daucuaX.value="dương";lehoang.xuatdns.value=0;}
else {lehoang.dns.value=1;lehoang.daucuaX.value="âm";lehoang.xuatdns.value=1;}

sothucX=Math.abs(sothucX);lehoang.stXa.value=sothucX;  

pnX=Math.floor(sothucX);lehoang.pnX.value=pnX;
plX=sothucX-pnX;lehoang.plX.value=plX;               
             
             
if(pnX==0)  pnX2='0';  
else             
{
if(pnX%2==0) pnX2='0';
 else pnX2='1';
 theza=Math.floor(pnX/2);
while(theza!=0)
{if(theza%2==0) pnX2='0'+pnX2;
 else pnX2='1'+pnX2;
theza=Math.floor(theza/2);}
} 
lehoang.pnX2.value=pnX2; lehoang.pnX2a.value=pnX2; 
           
             
if(plX==0)  plX2='0'; 
else             
{
if(plX*2<1) plX2='0';
 else plX2='1';
 theza=plX*2-Math.floor(plX*2);
while(theza!=0)
{if(theza*2<1) plX2=plX2+'0';
 else plX2=plX2+'1';
 theza=theza*2-Math.floor(theza*2);}
} 
lehoang.plX2.value=plX2;lehoang.plX2a.value=plX2;


i=0;
while(pnX2[i]==0||pnX2[i]==1)
{i++;} dnE=i-1;
i=0;
while(plX2[i]==0||plX2[i]==1)
{i++;} dnmpl=i;
i=0;
while(plX2[i]==0)
{i++;} dnEpl=i+1;
  
  
 if (dnE>0&&dnE<128)
 { lehoang.somuE.value=dnE;lehoang.somuEa.value=dnE;lehoang.somuEb.value=dnE;
   dne10=dnE+127;lehoang.dne10.value=dne10; 
   if(dne10%2==0) dne2='0';
   else dne2='1';
   theza=Math.floor(dne10/2);
   while(theza!=0)
   {if(theza%2==0) dne2='0'+dne2;
    else dne2='1'+dne2;
    theza=Math.floor(theza/2);} 
   lehoang.dne2.value=dne2; lehoang.xuatdne.value=dne2;
   dnm=pnX2[1]; 
   for(i=2;i<=dnE;i++) dnm=dnm+pnX2[i];  
   for(i=0;i<dnmpl;i++) dnm=dnm+plX2[i];
   lehoang.dnm.value=dnm;lehoang.dnma.value=dnm;  }
  
if (dnE==0&&pnX*plX!=0)
 { lehoang.somuE.value=0;lehoang.somuEa.value=0;lehoang.somuEb.value=0;
   lehoang.dne10.value=127;        
   lehoang.dne2.value='01111111';lehoang.xuatdne.value='01111111';
   dnm=plX2[0];
   for(i=1;i<dnmpl;i++) dnm=dnm+plX2[i];  
  lehoang.dnm.value=dnm;lehoang.dnma.value=dnm;}   
      
if (pnX==0&&plX!=0&&dnEpl<127)         
   { lehoang.somuE.value=-dnEpl;lehoang.somuEa.value=-dnEpl;lehoang.somuEb.value=-dnEpl;
     dne10=127-dnEpl;lehoang.dne10.value=dne10;              
  if(dne10%2==0) dne2='0';
   else dne2='1';
   theza=Math.floor(dne10/2);
   while(theza!=0)
   {if(theza%2==0) dne2='0'+dne2;
    else dne2='1'+dne2;
    theza=Math.floor(theza/2);} 
   lehoang.dne2.value='0'+dne2; lehoang.xuatdne.value='0'+dne2;
   if(dnmpl>dnEpl)
   { dnm=plX2[dnEpl]; 
    for(i=dnEpl+1;i<dnmpl;i++) dnm=dnm+plX2[i];  }
  else dnm='0';
   lehoang.dnm.value=dnm;lehoang.dnma.value=dnm;
   
   }          
   
  
  if(dnm[0]!=0&&dnm[0]!=1) dnM='0';
  if(dnm[0]==1) dnM='1';
  if(dnm[0]==0) dnM='0';
  for(i=1;i<23;i++)
  { if(dnm[i]!=0&&dnm[i]!=1) dnM=dnM+'0';
    if(dnm[i]==1) dnM=dnM+'1';
    if(dnm[i]==0) dnM=dnM+'0';
  }
  lehoang.dnM.value=dnM;  lehoang.dnMa.value=dnM;      
      }    
    
  
 if(sothucX==0) 
 {lehoang.dns.value="0 hoặc 1";
  lehoang.daucuaX.value="0";lehoang.stXa.value="!";
  lehoang.somuEa.value="!";
  lehoang.somuEb.value="!";
  lehoang.dnm.value="!";lehoang.dnma.value="!";
  lehoang.somuE.value="!";
  lehoang.dne10.value="!";
  lehoang.dne2.value="!";
  lehoang.dnM.value="!";
  lehoang.xuatdns.value="s";   
  lehoang.dnMa.value='00000000000000000000000'; 
  lehoang.xuatdne.value='00000000';
  lehoang.pnX.value='!'; lehoang.pnX2.value='!';
  lehoang.pnX2a.value='!';
  lehoang.plX.value='!'; lehoang.plX2.value='!';
  lehoang.plX2a.value="!";
  
 }
  
  
  
  
  
          }