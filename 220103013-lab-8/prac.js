function compareString(s1, s2)
{
    let s1b = 0, s2b = 0, s1n = [], s2n = [], s1a = "", s2a = "";
    for (let i = 0; i < s1.length; i++)
    {
        if(s1[i] == "#")
        {
            s1n.pop();
        }
        else
        {
            s1n.push(s1[i]);
        }
    }
    for (let i = 0; i < s2.length; i++)
    {
        if(s2[i] == "#")
        {
            s2n.pop();
        }
        else
        {
            s2n.push(s2[i]);
        }
    }
    for(let i = 0; i < s1n.length; i++)
    {
        s1a = s1a + s1n[i];
    }
    for(let i = 0; i < s2n.length; i++)
    {
        s2a = s2a + s2n[i];
    }
    if(s2a == s1a)
        return 1;
    else
        return 0;
}
console.log(compareString("yf#c#", "yy#k#pp##"));
console.log(compareString("hacc#kk#", "hb##ack##"))