function myFun()
{
    let a = document.getElementById('fname');
    a1 = a.value;
    let a2 = document.getElementById('name');
    a2.innerHTML = a1;
    let b = document.getElementById('faddress');
    b1 = b.value;
    let b2 = document.getElementById('address');
    b2.innerHTML = b1;
    let c = document.getElementById('fnumber');
    c1 = c.value;
    let c2 = document.getElementById('number');
    c2.innerHTML = c1;
    let d = document.getElementById('femail');
    d1 = d.value;
    let d2 = document.getElementById('emaila');
    d2.innerHTML = d1;
    d2.setAttribute("href", "mailto:"+d1);
    let e = document.getElementById('fLinkedIn');
    e1 = e.value;
    let e2 = document.getElementById('LinkedIn');
    e2.innerHTML = e1;
    let f = document.getElementById('fGithub');
    f1 = f.value;
    let f2 = document.getElementById('Github');
    f2.innerHTML = f1;
    let g = document.getElementById('fhobby');
    g1 = g.value;
    let g2 = document.getElementById('hobby');
    g2.innerHTML = g1;
    let h = document.getElementById('fstrength');
    h1 = h.value;
    let h2 = document.getElementById('strength');
    h2.innerHTML = h1;
    let i = document.getElementById('fLang');
    i1 = i.value;
    let i2 = document.getElementById('Lang');
    i2.innerHTML =i1;
    let j = document.getElementById('fdob');
    j1 = j.value;
    let j2 = document.getElementById('dob');
    j2.innerHTML =j1;
    let k = document.getElementById('fcollege');
    k1 = k.value;
    let k2 = document.getElementById('college');
    k2.innerHTML =k1;
    let l = document.getElementById('fyear');
    l1 = l.value;
    let l2 = document.getElementById('year');
    l2.innerHTML =l1;
    let m = document.getElementById('fgrade');
    m1 = m.value;
    let m2 = document.getElementById('grade');
    m2.innerHTML =m1;
    let n = document.getElementById('fsubject');
    n1 = n.value;
    let n2 = document.getElementById('subject');
    n2.innerHTML =n1;
    let o = document.getElementById('fschool1');
    o1 = o.value;
    let o2 = document.getElementById('school1');
    o2.innerHTML =o1;
    let p = document.getElementById('fgrade1');
    p1 = p.value;
    let p2 = document.getElementById('grade1');
    p2.innerHTML =p1;
    let q = document.getElementById('fyear2');
    q1 = q.value;
    let q2 = document.getElementById('year2');
    q2.innerHTML =q1;
    let r = document.getElementById('fschool2');
    r1 = r.value;
    let r2 = document.getElementById('school2');
    r2.innerHTML =r1;
    let s = document.getElementById('fyear3');
    s1 = s.value;
    let s2 = document.getElementById('year3');
    s2.innerHTML =s1;
    let t = document.getElementById('fgrade2');
    t1 = t.value;
    let t2 = document.getElementById('grade2');
    t2.innerHTML =t1;
    let u = document.getElementById('ffather');
    u1 = u.value;
    let u2 = document.getElementById('father');
    u2.innerHTML =u1;

    let apple = document.getElementById('progsskills')
    var selected = [];
    for (var option of apple.options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    console.log(selected);
}
let count = 0;
function AddC()
{
    const div = document.getElementById('')
    const cloneDiv = div.cloneNode(true);
    cloneDiv.id = "tutpoint"+count;
    document.body.appendChild(cloneDiv);
    count++;
}