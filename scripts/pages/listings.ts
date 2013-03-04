log("WAWAWEEWA")

$("./body") {
  add_class("listings")

  $("center") {
    add_class("content")
  }

  # Setup More button

  $("//*[contains(text(), 'More')]") {
    wrap("div") {    
      add_class("more")
      move_to("//center[contains(@class, 'content')]", "after")
    }
  }
  
  # Setup links

  
  
}
