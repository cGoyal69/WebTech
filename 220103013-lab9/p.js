

function maxProfit(costPerCut, salePrice, lengths) {
   let profits = [];
   
   const max = lengths.reduce((a,b) => Math.max(a,b),-Infinity);
   for (let i =1; i<max+1;i++)
   {
       for(let j =0;j<lengths.length;j++)
       {
           let x = Math.floor(lengths[j]/i)*salePrice*i;
           if(Math.floor(lengths[j]/i) > 0)
           {
               let y =0;
               if(lengths[j] % i > 0)
               {
                    y = 1;
                   
               }
               let z = x -1 + y;
               let cost = z * costPerCut;
               let revenues = Math.floor(lengths[j]/i) * salePrice;
               
               if (revenues > cost)
               {
                   profits[i] += revenues - cost;
               }
           }
       }
   }
   const max1 = profits.reduce((a,b) => Math.max(a,b),-Infinity);
   return (max1);

}