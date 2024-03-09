function myFun()
{
    let z12 = document.getElementById("html");
    let z11 = document.querySelector(".form");
    if(z12.checked)
    {
        document.getElementById("cv1").style.display = "block";
        z11.style.display = "none";
    }
    else{
        document.getElementById("cv2").style.display = "flex";
        z11.style.display = "none";
    }
    let a = document.getElementById('fname');
    a1 = a.value;
    let a2 = document.getElementById('name');
    a2.innerHTML = a1;
    let a3 = document.getElementById('name1');
    a3.innerHTML = a1;
    let b = document.getElementById('faddress');
    b1 = b.value;
    let b2 = document.getElementById('address');
    b2.innerHTML = b1;
    let b3 = document.getElementById('address1');
    b3.innerHTML = b1;
    let c = document.getElementById('fnumber');
    c1 = c.value;
    let c2 = document.getElementById('number');
    c2.innerHTML = c1;
    let c3 = document.getElementById('number1');
    c3.innerHTML = c1;
    let d = document.getElementById('femail');
    d1 = d.value;
    let d2 = document.getElementById('email');
    d2.innerHTML = d1;
    let d3 = document.getElementById('email1');
    d3.innerHTML = d1;
    d2.setAttribute("href", "mailto:"+d1);
    d3.setAttribute("href", "mailto:"+d1);
    let e = document.getElementById('fLinkedIn');
    e1 = e.value;
    let e2 = document.getElementById('LinkedIn');
    e2.innerHTML = e1;
    let e3 = document.getElementById('LinkedIn1');
    e3.innerHTML = e1;
    let f = document.getElementById('fGithub');
    f1 = f.value;
    let f2 = document.getElementById('Github');
    f2.innerHTML = f1;
    let f3 = document.getElementById('Github1');
    f3.innerHTML = f1;
    let g = document.getElementById('fhobby');
    g1 = g.value;
    let g2 = document.getElementById('hobby');
    g2.innerHTML = g1;
    let g3 = document.getElementById('hobby1');
    g3.innerHTML = g1;
    let h = document.getElementById('fstrength');
    h1 = h.value;
    let h2 = document.getElementById('strength');
    h2.innerHTML = h1;
    let h3 = document.getElementById('strength1');
    h3.innerHTML = h1;
    let i = document.getElementById('fLang');
    i1 = i.value;
    let i2 = document.getElementById('Lang');
    i2.innerHTML =i1;
    let i3 = document.getElementById('Lang1');
    i3.innerHTML =i1;
    let j = document.getElementById('fdob');
    j1 = j.value;
    let j2 = document.getElementById('dob');
    j2.innerHTML =j1;
    let j3 = document.getElementById('dob1');
    j3.innerHTML =j1;
    let k = document.getElementById('fcollege');
    k1 = k.value;
    let k2 = document.getElementById('college');
    k2.innerHTML =k1;
    let k3 = document.getElementById('college1');
    k3.innerHTML =k1;
    let l = document.getElementById('fyear');
    l1 = l.value;
    let l2 = document.getElementById('year');
    l2.innerHTML =l1;
    let l3 = document.getElementById('year1');
    l3.innerHTML =l1;
    let m = document.getElementById('fgrade');
    m1 = m.value;
    let m2 = document.getElementById('grade');
    m2.innerHTML =m1;
    let m3 = document.getElementById('grade11');
    m3.innerHTML =m1;
    let n = document.getElementById('fsubject');
    n1 = n.value;
    let n2 = document.getElementById('subject');
    n2.innerHTML =n1;
    let n3 = document.getElementById('subject1');
    n3.innerHTML =n1;
    let z = document.getElementById('fdegree');
    z1 = z.value;
    let z2 = document.getElementById('degree1');
    z2.innerHTML =z1;
    let o = document.getElementById('fschool1');
    o1 = o.value;
    let o2 = document.getElementById('school1');
    o2.innerHTML =o1;
    let o3 = document.getElementById('school11');
    o3.innerHTML =o1;
    let p = document.getElementById('fgrade1');
    p1 = p.value;
    let p2 = document.getElementById('grade1');
    p2.innerHTML =p1;
    let q = document.getElementById('fyear2');
    q1 = q.value;
    let q2 = document.getElementById('year2');
    q2.innerHTML =q1;
    let q3 = document.getElementById('year12');
    q3.innerHTML =q1;
    let r = document.getElementById('fschool2');
    r1 = r.value;
    let r2 = document.getElementById('school2');
    r2.innerHTML =r1;
    let r3 = document.getElementById('school12');
    r3.innerHTML =r1;
    let s = document.getElementById('fyear3');
    s1 = s.value;
    let s2 = document.getElementById('year3');
    s2.innerHTML =s1;
    let s3 = document.getElementById('year13');
    s3.innerHTML =s1;
    let t = document.getElementById('fgrade2');
    t1 = t.value;
    let t2 = document.getElementById('grade2');
    t2.innerHTML =t1;
    let u = document.getElementById('ffather');
    u1 = u.value;
    let u2 = document.getElementById('father');
    u2.innerHTML =u1;
    let u3 = document.getElementById('father1');
    u3.innerHTML =u1;

    let apple = document.getElementById('fprogskills')
    var selected = "";
    for (var option of apple.options)
    {
        if (option.selected) {
            selected = selected + option.value + ", ";
        }
    }
    apple1 = document.getElementById("cv1prog");
    apple1.innerHTML = "Programming Skills "+selected;
    apple1 = document.getElementById("progskill");
    apple1.innerHTML = "Programming Skills: "+selected;


    let banana = document.getElementById('fdataskills')
    var selected = "";
    for (var option of banana.options)
    {
        if (option.selected) {
            selected = selected + option.value + ", ";
        }
    }
    banana1 = document.getElementById("cv1data");
    banana1.innerHTML = "Database Skills "+selected;
    banana1 = document.getElementById("dataskill");
    banana1.innerHTML = "Database Skills: "+selected;


    let pinepapple = document.getElementById('fotherskills')
    var selected = "";
    for (var option of pinepapple.options)
    {
        if (option.selected) {
            selected = selected + option.value + ", ";
        }
    }
    pinepapple1 = document.getElementById("cv1other");
    pinepapple1.innerHTML = "Other Skills "+selected;
    pinepapple1 = document.getElementById("otherskill");
    pinepapple1.innerHTML = "Other Skills: "+selected;


    let mango = document.getElementById('fframeskills')
    var selected = "";
    for (var option of mango.options)
    {
        if (option.selected) {
            selected = selected + option.value + ", ";
        }
    }
    mango1 = document.getElementById("cv1frame");
    mango1.innerHTML = "FrameWorks: "+selected ;
    mango1 = document.getElementById("frameskill");
    mango1.innerHTML = "Frameworks: "+selected ;
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