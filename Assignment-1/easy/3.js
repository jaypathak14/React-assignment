console.log("E Q3");

function replacement(str){      
    for (var position = 0; position < str.length; position++) 
    {
       if (str.charAt(position) == 'a') 
         {
            str = str.substring(0, position) + '1' + str.substring(position + 1);
         
         }

         if (str.charAt(position) == 'e') 
         {
            str = str.substring(0, position) + '2' + str.substring(position + 1);
         
         }
         if (str.charAt(position) == 'i') 
         {
            str = str.substring(0, position) + '3' + str.substring(position + 1);
         
         }
         if (str.charAt(position) == '0') 
         {
            str = str.substring(0, position) + '4' + str.substring(position + 1);
         
         }
         if (str.charAt(position) == 'u') 
         {
            str = str.substring(0, position) + '5' + str.substring(position + 1);
         
         }
     }
      return str;
}
console.log(replacement('karachi'));
console.log(replacement('kanpur'));
console.log(replacement('india'));