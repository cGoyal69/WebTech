const base64table = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','+','/'];
function myFun()
{
    let a = document.getElementById('k');
    if(a.value == 'Base 64')
        convert(6);

    if(a.value == 'Base 32')
        convert(5);
}
function dec2bin(dec)
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
            if(n<8)
            {
                for(let i=n;i<8;i++)
                {
                    abdt[i]=0;
                }
            }
            for(let i=0;i<8;i++)
            {
                abd+=abdt[8-i-1];
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
function convert(x)
{
    let b = document.getElementById('pokemon');
    let ab = b.value.split('');
    console.log(ab);
    console.log(ab[0].charCodeAt(0))
    console.log(dec2bin(ab[0].charCodeAt(0)))
    let ascii = [];
    for(let i =0;i<ab.length;i++)
    {
                ascii[i] = dec2bin(ab[i].charCodeAt(0));
                console.log(ascii[i]);
    }
    console.log(ascii);
    let as = array2str(ascii);
    let n = as.length;
    console.log(n);
    if((n)%x != 0)
    {
        let m = x-(n)%x;
        console.log(m);
        for(i=m;i>0;i--)
        {
            
            as = as+'0';
        }
    }
    console.log(as);
    let ans = as.match(/.{1,6}/g);
    console.log(ans);
    let ans1 =[];
    let ans2 =[];
    for(let i =0;i<ans.length;i++)
    {
        ans1[i] =  bin2dec(ans[i]);
        console.log(ans1[i]);
        ans2[i] = base64table[ans1[i]];
    }
    console.log(ans2);
    let ans3 = array2str(ans2);
    b.value = ans3;
}