const base64table = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','+','/'];
const base32table = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','2','3','4','5','6','7'];
const asciitable = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';                               
function myFun()
{
    let a = document.getElementById('edbase');
    let c = document.getElementById('edscheme');
    if(a.value == 'Base 64' && c.value == 'Encoder')
        encode(6,base64table);

    if(a.value == 'Base 32' && c.value == 'Encoder')
        encode(5,base32table);

    
    if(a.value == 'Base 64' && c.value == 'Decoder')
        decode(base64table);

    if(a.value == 'Base 32' && c.value == 'Decoder')
        decode(base32table);
}
function dec2bin(dec,f)
        {
            let abdt = [];
            let abd = "";
                let p=0;
                for(let i=dec;i>0;i=Math.floor(i/2))
                {
                    abdt[p] = i%2;
                    p++;
                }
            let n = abdt.length;
            if(n<f)
            {
                for(let i=n;i<f;i++)
                {
                    abdt[i]=0;
                }
            }
            for(let i=0;i<f;i++)
            {
                abd+=abdt[f-i-1];
            }
            return abd;
        }
        function bin2dec(bin)
        {
            let d = 0;
            let n = bin.length;
            for(let i=0;i<n;i++)
            {
                d = d + (bin[i] * (2 ** (n-1-i)));
            }
            return d;
        }
     
function array2str(arr)
{
    let a =''
    for(i=0;i<arr.length;i++)
    {
        a = a + arr[i];
    }
    return a;
}
function encode(x , y)
{
    let b = document.getElementById('pokemon');
    let ab = b.value.split('');
    let ascii = [];
    for(let i =0;i<ab.length;i++)
    {
                ascii[i] = dec2bin(ab[i].charCodeAt(0),8);
                console.log(ascii[i]);
    }
    console.log(ascii);
    let as = array2str(ascii);
    let n = as.length;
    console.log(n);
    let m;
    if((n)%x != 0)
    {
        m = x-(n)%x;
        console.log(m);
        for(i=m;i>0;i--)
        {
            as = as+'0';
        }
    }
    console.log(as);
    let as1 ='';
    let k =0;
    let ans=[];
    for(let i =0;i<(as.length);i++)
    {
        as1 = as1 + as[i];
        k++;
        if(k == x)
        {
            ans.push(as1);
            k=0;
            as1 = '';
        }
    }
    console.log(ans);
    let ans1 =[];
    let ans2 =[];
    n1 = ans.length;
    for(let i =0;i<n1;i++)
    {
        ans1[i] =  bin2dec(ans[i]);
        console.log(ans1[i]);
        ans2[i] = y[ans1[i]];
    }
    for(let i = 0; i<(m/2);i++)
    {
        ans2[n1+i] = '=';
    }
    console.log(ans2);
    let ans3 = array2str(ans2);
    b.value = ans3;
}
function decode(y)
{
    let b = document.getElementById('pokemon');
    let ab = b.value.split('');
    console.log(ab);
    let ans = [];
    let ans2 = [];
    let ans3 ='';
    let count = 0;
    for(let i=0;i<ab.length;i++)
    {
        console.log(ab[i]);
        if(ab[i] == '=')
            count++;
        else
        {
            for(let j =0;j<y.length;j++)
            {
                console.log('1')
                if(ab[i]==y[j])
                {
                    ans[i] = j;
                }
            }
        }
        console.log(count);
        console.log(ans);
    }
    for(let i =0;i<ans.length;i++)
        ans2[i] = dec2bin(ans[i],6);
    
    console.log(ans2)
    for(let i =0;i<ans2.length-1;i++)
    {
        ans3 = ans3 + ans2[i]
    }
    console.log(ans3);
    console.log(ans2[ans2.length-1]);
    for(let i =0;i<ans2[ans2.length-1].length-(count*2);i++)
    {
        ans3 = ans3 + ans2[ans2.length-1][i];
    }
    console.log(ans3);
    let as1 ='';
    let ans4 = [];
    for(let i =0;i<(ans3.length);i++)
    {
        as1 = as1 + ans3[i];
        k++;
        if(k == 8)
        {
            ans4.push(as1);
            k=0;
            as1 = '';
        }
    }
    let ans5 = [];
    let ans6 = [];
    for(let i =0;i<ans4.length;i++)
    {
        ans5[i] = bin2dec(ans4[i]);
        ans6[i] = asciitable[ans5[i]];
    }
    console.log(ans6);
    b.value = ans6;
}