const start = Date.now();
count = 0;
for (i = 0; i<10000000000; i++)
{
  // for (j = 0; j <1000; j++)
  // {
    count++;
  // }
  
}
const end = Date.now();

console.log((end - start)/1000);
