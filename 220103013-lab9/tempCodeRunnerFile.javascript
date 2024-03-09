function array2str(arr)
{
    let a =''
    for(i=0;i<arr.length;i++)
    {
        a = a + arr[i];
    }
    console.log(a) ;
}
arr = ['0111','1010'];
array2str(arr);