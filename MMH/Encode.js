var a ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'   // '', ' ' = 0,-1
var b ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function roundCodeCreate(myS,k){  // TẠO MÃ DỊCH VÒNG
                         
    let i=0;
    let myCode = '';
    let e=[], e0=[],j=0;
                     
    for( i in myS){
        e0[i]=a.indexOf(myS[i]) ;
        if( a.indexOf(myS[i]) == -1)
        {
            e[j++] = -1;
        }else{

            e[j++]= (a.indexOf(myS[i]) + k)%26;
        }

    }
    console.log(e0);  // day so dang mang
    console.log(e);  // day so dang mang
    for(i of e){
        if(i == -1){
            myCode = myCode +' ';
        }else{
            myCode = myCode + a[i];
        }
        
    }
    console.log(myCode);
    

}

function roundCodeDecryption(mySCode,k){   // GIẢI MÃ DỊCH VÒNG
    let i =0  , j=0;
    let D0=[] ,D =[];
    let myString = ''
    for (i in mySCode){
        D0[i] = a.indexOf(mySCode[i]);
        if (a.indexOf(mySCode[i])==-1){
            D[j++] = -1;
        }
        else{
            D[j++] = (a.indexOf(mySCode[i]) - k +26)%26 ;

        }
    }
    console.log(D0);
    console.log(D);

    for (i of D){
        if(i == -1){
            myString = myString + ' ';
        }else{
            myString = myString + a[i];
        }
    }

    console.log(myString);

}
function roundCodeDecryption2(mySCode,k){   // GIẢI MÃ DỊCH VÒNG
    let i =0  , j=0;
    let D0=[] ,D =[];
    let myString = ''
    for (i in mySCode){
        D0[i] = b.indexOf(mySCode[i]);
        if (b.indexOf(mySCode[i])==-1){
            D[j++] = -1;
        }
        else{
            D[j++] = ((b.indexOf(mySCode[i]) - k +62)%62) ;

        }
    }
    // console.log(D0);
    // console.log(D);

    for (i of D){
        if(i == -1){
            myString = myString + ' ';
        }else{
            myString = myString + b[i];
        }
    }

    console.log(myString);

}
function affineCreate(myS,ax,b){   // TẠO MÃ AFFINE
   let i=0 ,j=0;
   let E0= [] ,E =[];
   let myCode ='';
   for( i in myS) {
       E0[i] = a.indexOf(myS[i]);
       if (a.indexOf(myS[i])==-1){
           E[j++] = -1; 
       }else{
           E[j++] = (a.indexOf(myS[i])*ax+b)%26 ;
       }
   }
   console.log(E0);
   console.log(E);

   for(i of E){
       if(i == -1){
           myCode += ' ' ;
       }else{
           myCode += a[i];
       }

   }
   console.log(myCode)


}

function affineDecryption(mySCode,ax,b){ // GIẢI MÃ AFFINE(UCLN (a,26)=1 =>a= 1,3,5,7..số lẻ, NL =13)

    let i=0 , j=0 ,A=0;
    let D0=[] , D= [];
    let myString = '';
    for (i=0 ; i<=ax; i++){
        if(Number.isInteger(((26*i)+1)/ax)){
            A = ((26*i)+1)/ax;
            break;

        }
    }

    for (i in mySCode){
        D0[i] = a.indexOf(mySCode[i]);
        if(a.indexOf(mySCode[i])==-1){
            D[j++] = -1;
        }else{
            D[j++] = ((a.indexOf(mySCode[i])-b)*A +26*A)%26;
        }
    }
    
    for (i of D){
        if(i == -1){
            myString += ' ';
        }else{
            myString += a[i];
        }
    }
    // console.log(mySCode);
    console.log(D0);
    console.log(D);
    console.log(myString);
}

function vigenereCreate(myS,myK){
    let i=0 ,j=0 ;
    let E0 =[] , E =[], codeK0 =[], codeK =[];
    let myCode='' ;
    
    // Tranform myK String to Number type
    j =0;
    for (i in myK){
        codeK0[i] = a.indexOf(myK[i]);
    }
// Create codeK have the length is equal myS2
    codeK.length = myS.length ;
    for(i=0, j=0 ; i< myS.length ; i++ ){
        if (j >= myK.length){
            j=0 ;
            --i;
            continue;
        }
        if (a.indexOf(myS[i])==-1){
            codeK[i] = -1 ;
            
        }else{
            codeK[i] = codeK0 [j++] ;

        }
    }
    
// Tranform myS String to Number type and result
    j=0;
    for (i in myS){
        E0[i] = a.indexOf(myS[i]);
        if(a.lastIndexOf(myS[i]) == -1){
            E[j++] =-1;
        }else{
            E[j++] = (a.indexOf(myS[i]) + codeK[i])%26;
        }
    }
    
    for (i of E){
        if(i == -1){
            myCode += ' ';
        }else{
            myCode += a[i];
        }
    }
    console.log(E0);
    console.log(codeK);
    console.log(E);
    console.log(myCode);

}

function vigenereDecryption(mySCode,myK){
    let i=0 , j=0;
    let D0=[] ,D=[];
    let myString ='', codeK =[];

    for (i in myK){
        codeK[i] = a.indexOf(myK[i]);

    }

    for(i=0 ,j=0 ; i<mySCode.length; i++ ){

        D0[i] = a.indexOf(mySCode[i]);

        if(a.indexOf(mySCode[i]) ==-1 ){
            D[i] = -1;
        }else{
            if(j>=codeK.length){
                j=0;
                --i;
                continue;
            }
            D[i] = (a.indexOf(mySCode[i]) - codeK[j++] +26 )%26 ;
        }
    }

    for(i of D){
        if(i == -1){
            myString += ' ';
        }else{
            myString += a[i] ;
        }
    }
    console.log(mySCode)
    console.log(D0);
    console.log(codeK);
    console.log(D);
    console.log(myString);
}

function hillEncrypt(myS,MT2x2){  // |DET k| > 0 , (det,26) =1  
    let i=0 ,j=0 , throwup =0 ;
    let E0 =[],E01 =[] , E =[];
    let myEncrypt = '' ;
    for (i in myS){
        if(a.indexOf(myS[i]) == -1){
            ++ throwup ; 
        }
        E0[i] = a.indexOf(myS[i]) ;

    }

    if((myS.length-throwup) %2 == 1){
        E0.push(25);
        
    }
    console.log(E0);   // Luc dau khi co -1
    for (i in E0){
        if(E0[i] !== -1){
            E01[j++] = E0 [i];    // bo di -1
        }
    }
   
    for (i=0,j=0 ; j<E01.length ;){  // nhan 2 MT
        E[j++] = (E01[i++]*MT2x2[0] +E01[i++]*MT2x2[2])%26 ;
        i-=2 ;
        E[j++] = (E01[i++]*MT2x2[1] +E01[i++]*MT2x2[3])%26 ;
    }
    for (i=0,j=0; i<E0.length ; i++){   // khoi phuc -1 trong E
        if(E0[i] ==-1){
            E0[i++] = -1;               // Bien E0 thanh E
        }
        E0[i] = E[j++];
    }
   
    E = E0 ;                           // Gan tro lai E
    
    console.log(MT2x2);
    console.log(E);
    for(i of E0){
        if(i == -1){
            myEncrypt += ' ';
        }else{

            myEncrypt += a[i];
        }

    }
   

    console.log(myEncrypt);
    
        
}

function hillDecryption(myEncrypt,MT2x2){
    let i=0 ,j=0, det =0, det_2=0  ,throwup=0  ;
    let D0=[], D=[],D01= [],K =[] ;
    let myText ='';
    
   
    // tinh det nghich dao det_2
    det = (MT2x2[0]*MT2x2[3] - MT2x2[1]*MT2x2[2]) %26 +26; 
    
    
    for (i=0 ; i< det ; i++){
        if((26*i+1)%det == 0){
            det_2 = ((26*i+1)/det)%26 ;
        }

    }
    
    console.log('K-1:',det_2);                          
// Tim MT K2x2 = det_2*MT2x2nghich dao 

    K[0] = (det_2*MT2x2[3])%26;
    K[1] = (-det_2*MT2x2[1])%26 ;
    K[2] = (-det_2*MT2x2[2])%26 ;
    K[3] = (det_2*MT2x2[0])%26 ;
   
    console.log('K :' ,K);                              

//Giai max x = y1x2*K2x2
    for (i in myEncrypt){
        if(a.indexOf(myEncrypt[i]) == -1){
            ++ throwup ; 
        }
        D0[i] = a.indexOf(myEncrypt[i]) ;

    }

    if((myEncrypt.length-throwup) %2 == 1){
        D0.push(25);
       
    }
   console.log('Y:' ,D0);   // Luc dau khi co -1                    
    for (i in D0){
        if(D0[i] !== -1){
            D01[j++] = D0 [i];    // bo di -1
        }
    }
    

    for (i=0,j=0 ; j<D01.length ;){  // nhan 2 MT
        D[j++] = ((D01[i++]*K[0] +D01[i++]*K[2])%26 +26)%26 ;
        i-=2 ;
        D[j++] = ((D01[i++]*K[1] +D01[i++]*K[3])%26 +26)%26  ;
    }
    
    for (i=0,j=0; i<D0.length ; i++){   // khoi phuc -1 trong D
        if(D0[i] ==-1){
            D0[i++] = -1;               // Bien D0 thanh D
        }
        D0[i] = D[j++]
    }
    
    D = D0 ;                           // Gan tro lai D

   
    console.log('X:',D);               
    for(i of D0){
        if(i == -1){
            myText += ' ';
        }else{

            myText += a[i];
        }

    }

    
   console.log(myText);

}


// roundCodeCreate('HELLO',5);

// roundCodeDecryption('PSZI QIERW RIZIV LEZMRK XS WEC CSY EVI WSVVC',m);

//  roundCodeDecryption2('PSZI QIERW RIZIV LEZMRK XS WEC CSY EVI WSVVC',m)

// affineCreate('MAT MA KHO QUA',7,2);

        
//  affineDecryption('CRWWZ',i,j)
    
    
// vigenereCreate('SQUIDG','SUNSQU');

// vigenereDecryption('ZI CVT WQNGKZEIIG ASXS TSLVVWLA','DECEPTIVEWEAREDISCOVEREDSAV');

// hillEncrypt('FIRDAY',[23,10,5,11]);


// hillDecryption ('ADDHOM',[3,8,19,7]);
