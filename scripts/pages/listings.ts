$("./body") {
  add_class("listings")

  $expired = $("//p[contains(text(), 'Unknown or expired link')]") {
    add_class("expired_message")
  }

  match($expired) {

    with(/0/) {
      @import listings/normal.ts
    }
    else() {
      @import listings/expired.ts      
    }   
  }

}