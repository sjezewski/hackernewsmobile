$("//body") {
  add_class("expired")

  $("//p[contains(@class,'expired_message')]") {
    name("div")
    insert_after("div", class: 'options') {
      inner(read('expired_prompt.html'))
    }
  }
  
  
}