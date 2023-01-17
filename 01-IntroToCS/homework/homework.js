'use strict';

function BinarioADecimal(num) {
   let largo = num.length
   let decimal = 0
   let j = 0
   for (let i = largo-1; i>=0; i--){
      if(num[i] == 1){
         decimal += Math.pow(2, j)
      } j++
   }
   return decimal
}

function DecimalABinario(num) {
   let binario = [];

   while(num !== 0){
    binario.unshift(num % 2);
    num = Math.floor(num / 2);
   } 
 
   return binario.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
