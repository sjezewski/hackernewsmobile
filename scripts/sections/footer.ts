$("./body") {
   insert_bottom("footer") {
     move_here("//span[contains(@class,'yclinks')]") {
       remove("./text()")
     }
   }

   # Cleanup lower part of main table

   remove(".//*[@bgcolor='#ff6600']/ancestor::table[1]/ancestor::tr[1]")


}
