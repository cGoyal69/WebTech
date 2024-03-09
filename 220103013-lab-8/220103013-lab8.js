        function insert0()
        {
            let a = document.getElementById("pokemon");
            a.value = a.value + 0;
        }
        function insert1()
        {
            let a = document.getElementById("pokemon");
            a.value = a.value + 1;
        }
        function inserteq(breaker)
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value = a.value + ' = ' ;
            }
        }
        function insertband()
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value = a.value + ' & ';
            }
        }
        function insertbor()
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value = a.value + ' | ';
            }
        }
        function insertbxor()
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value = a.value + ' ^ ';
            }
        }
        function insertbnot()
        {
            let a = document.getElementById("pokemon");
            a.value = a.value + ' ~ ';

        }
        function clearV()
        {
            let a = document.getElementById("pokemon");
            let ab = a.value;
            let n = ab.length;
            let s = "";
            if(ab[n-1] == ' ')
            {
                for (let i = 0; i < n-2; i++)
                {
                    s+=ab[i];
                }
            }
            else
            {
                for (let i = 0; i < n-1; i++)
                {
                    s+=ab[i];
                }
            }
            a.value = s;
        }
        function reset()
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value='';
            }
        }
        function rshift()
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value = a.value + ' >> ';
            }
        }
        function lshift()
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value = a.value + ' << ';
            }
        }
        function urshift()
        {
            let a = document.getElementById("pokemon");
            if(a.value != '')
            {
                a.value = a.value + ' >>> ';
            }
        }
        function bin2dec(bin)
        {
            let d = 0;
            let n = bin.length;
            for(let i=1;i<n;i++)
            {
                d = d + (bin[i] * (2 ** (n-1-i)));
            }
            if(bin[0]==1)
            {
                d = d * -1;
            }
            return d;
        }
        
        function dec2bin(dec)
        {
            let abdt = [];
            let abd = "";
            if(dec<0)
            {
                dec = dec * -1;
                let p = 0;
                for(let i=dec;i>0;i=Math.floor(i/2))
                {
                    abdt[p] = i%2;
                    p++;
                }
                abdt[p]=1;
            }
            else
            {
                let p=0;
                for(let i=dec;i>0;i=Math.floor(i/2))
                {
                    abdt[p] = i%2;
                    p++;
                }
                abdt[p] = 0;
            }
            let n = abdt.length;
            for(let i=0;i<n;i++)
            {
                abd+=abdt[n-i-1];
            }
            return abd;
        }
        function oct2dec(oct)
        {
            let d = 0;
            let n = oct.length;
            for(let i=1;i<n;i++)
            {
                d = d + (oct[i] * (8 ** (n-1-i)));
            }
            if(oct[0]==1)
            {
                d = d * -1;
            }
            return d;
        }
        function oct2bin(oct)
        {
            let m = oct2dec(oct);
            return (dec2bin(m));
        }
        function dec2oct(dec)
        {
            {
                let abdt = [];
                let abd = "";
                if(dec<0)
                {
                    dec = dec * -1;
                    let p = 0;
                    for(let i=dec;i>0;i=Math.floor(i/8))
                    {
                        abdt[p] = i%8;
                        p++;
                    }
                    abdt[p]=1;
                }
                else
                {
                    let p=0;
                    for(let i=dec;i>0;i=Math.floor(i/8))
                    {
                        abdt[p] = i%8;
                        p++;
                    }
                    abdt[p] = 0;
                }
                let n = abdt.length;
                for(let i=0;i<n;i++)
                {
                    abd+=abdt[n-i-1];
                }
                return abd;
            }
        }
        function bin2oct(bin)
        {
            let m = bin2dec(bin);
            return(dec2oct(m)); 
        }
        function hex2dec(hex)
        {
            let d = 0;
            let n = hex.length;
            for(let i=1;i<n;i++)
            {
                if(hex[i].charCodeAt(0) > 64)
                    d = d + ((hex[i].charCodeAt(0)-55) * (16 ** (n-1-i)));
                else
                    d = d + ((hex[i].charCodeAt(0)-48) * (16 ** (n-1-i)));
            }
            if(hex[0]==1)
            {
                d = d * -1;
            }
            return d;
        }
        function hex2bin(hex)
        {
            let m = hex2dec(hex);
            return(dec2bin(m));
        }
        function hex2oct(hex)
        {
            let m = hex2dec(hex);
            return(dec2oct(m));
        }
        function dec2hex(dec)
        {
            {
                let abdt = [];
                let abd = "";
                if(dec<0)
                {
                    dec = dec * -1;
                    let p = 0;
                    for(let i=dec;i>0;i=Math.floor(i/16))
                    {
                        abdt[p] = i%16;
                        if (abdt[p]>9)
                        {
                            abdt[p]= String.fromCharCode(abdt[p]+55)
                        }
                        p++;
                    }
                    abdt[p]=1;
                }
                else
                {
                    let p=0;
                    for(let i=dec;i>0;i=Math.floor(i/16))
                    {
                        abdt[p] = i%16;
                        if (abdt[p]>9)
                        {
                            abdt[p]= String.fromCharCode(abdt[p]+55)
                        }
                        p++;
                    }
                    abdt[p] = 0;
                }
                let n = abdt.length;
                for(let i=0;i<n;i++)
                {
                    abd+=abdt[n-i-1];
                }
                return abd;
            }
        }
        function oct2hex(oct)
        {
            let m = oct2dec(oct);
            return(dec2hex(m));
        }
        function bin2hex(bin)
        {
            let m = bin2dec(bin);
            return(dec2hex(m));
        }
        function dispdec()
        {
            let a = document.getElementById("pokemon");
            if (type == 'b')
            {
                ans = bin2dec(a.value);
            }
            if (type == 'o')
            {
                ans = oct2dec(a.value);
            }
            if (type == 'h')
            {
                ans = hex2dec(a.value);
            }
            a.value = ans;
            type = 'd';
        }
        function dispbin()
        {
            let a = document.getElementById("pokemon");
            if (type == 'd')
            {
                ans = dec2bin(a.value);
            }
            if (type == 'o')
            {
                ans = oct2bin(a.value);
            }
            if (type == 'h')
            {
                ans = hex2bin(a.value);
            }
            a.value = ans;
            type = 'b';
        }
        function dispoct()
        {
            let a = document.getElementById("pokemon");
            if (type == 'd')
            {
                ans = dec2oct(a.value);
            }
            if (type == 'b')
            {
                ans = bin2oct(a.value);
            }
            if (type == 'h')
            {
                ans = hex2oct(a.value);
            }
            a.value = ans;
            type = 'o';
        }
        function disphex()
        {
            let a = document.getElementById("pokemon");
            if (type == 'd')
            {
                ans = dec2hex(a.value);
            }
            if (type == 'b')
            {
                ans = bin2hex(a.value);
            }
            if (type == 'o')
            {
                ans = oct2hex(a.value);
            }
            a.value = ans;
            type = 'h';
        }
        var type;
        function breaker()
        {
            let a = document.getElementById("pokemon");
            let ab = a.value.split(" ");
            let history = ab;
            let ans = ''
            type = 'b';
            let i =0;
            for(i=0;i<ab.length;i++)
            {   
                if(ab[i]=='&')
                { 
                    ans = bin2dec(ab[i-1]) & bin2dec(ab[i+1]);
                    break;
                }
                if(ab[i]=='|')
                {
                    ans = (bin2dec(ab[i-1]) | bin2dec(ab[i+1]));
                    break;
                }
                if(ab[i]=='~')
                {
                    ab[i-1] = 'Not Applicable';
                    ans = ~(bin2dec(ab[i+1]));
                    break;
                }
                if(ab[i]=='^')
                {
                    ans = (bin2dec(ab[i-1]) ^ bin2dec(ab[i+1]));
                    break;
                }
                if(ab[i]=='>>')
                {
                    ans = (bin2dec(ab[i-1]) >> bin2dec(ab[i+1]));
                    break;
                }
                if(ab[i]=='<<')
                {
                    ans = (bin2dec(ab[i-1]) << bin2dec(ab[i+1]));
                    break;
                }
                if(ab[i]=='>>>')
                {
                    ans = (bin2dec(ab[i-1]) >>> bin2dec(ab[i+1]));
                    break;
                }
                
            }
            a.value = dec2bin(ans);
            ab[i+2] = a.value;
            let p = document.querySelector(".firstOp");
            p.innerHTML = ab[i-1];
            console.log(bin2dec(ab[i-1]));
            let q = document.querySelector(".firstOpdec");
            q.innerHTML = '('+bin2dec(ab[i-1])+')';
            let r = document.querySelector(".secOp");
            r.innerHTML = ab[i+1];
            let s = document.querySelector(".secOpdec");
            s.innerHTML = '('+bin2dec(ab[i+1])+')';
            let t = document.querySelector(".Op");
            t.innerHTML = ab[i];
            console.log('1')
            let u = document.querySelector(".ans");
            u.innerHTML = ab[i+2];
            console.log(u)
            let v = document.querySelector(".ansdec");
            v.innerHTML = ans;
            let w = document.querySelector(".ansoct");
            w.innerHTML = dec2oct(ans); 
            let x = document.querySelector(".anshex");
            x.innerHTML = dec2hex(ans);
            myMove();
        }
        function myMove() {
            let id = null;
            const elem = document.getElementsByClassName("container3");  
            console.log(elem); 
            let pos = 0, pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5 = 0;
            clearInterval(id);
            id = setInterval(frame, 0);
            function frame() {
                setTimeout(()=>{
                    if (pos1 > 290) {
                        clearInterval(id);
                      } else {
                        pos1+=5; 
                        elem[1].style.left = pos1 + "px";
                        elem[1].style.opacity = (pos1 / 290)+'';
                      }
                }, 2000)
                setTimeout(()=>{
                    if (pos2 > 290) {
                        clearInterval(id);
                      } else {
                        pos2+=5; 
                        elem[2].style.left = pos2 + "px"; 
                        elem[2].style.opacity = (pos2 / 290)+'';
                      }
                }, 4000)
                setTimeout(()=>{
                    if (pos3 > 290) {
                        clearInterval(id);
                      } else {
                        pos3+=5; 
                        elem[3].style.left = pos3 + "px";
                        elem[3].style.opacity = (pos3 / 290)+''; 
                      }
                }, 6000)
                setTimeout(()=>{
                    if (pos4 > 290) {
                        clearInterval(id);
                      } else {
                        pos4+=5; 
                        elem[4].style.left = pos4 + "px";
                        elem[4].style.opacity = (pos4 / 290)+''; 
                      }
                }, 6000)
                setTimeout(()=>{
                    if (pos5 > 290) {
                        clearInterval(id);
                      } else {
                        pos5+=5; 
                        elem[5].style.left = pos5 + "px";
                        elem[5].style.opacity = (pos5 / 290)+''; 
                      }
                }, 6000)
              if (pos > 290) {
                clearInterval(id);
              } else {
                pos+=5; 
                elem[0].style.left = pos + "px"; 
                elem[0].style.opacity = (pos / 290)+'';
              }
            }
          }

