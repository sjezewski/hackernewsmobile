$("//body") {

  $("center") {
    add_class("content")
  }

  # Setup More button

  $("//*[text()='More']") {
    wrap("div") {    
      add_class("more")
      move_to("//center[contains(@class, 'content')]", "after")
    }
  }
  
  # Setup links

  $("(//a[contains(@href, 'vote')])[1]/ancestor::table[1]") {
    move_to("//center[contains(@class, 'content')]")
    add_class("listings")

    insert_top("tr") # Account for one more empty wrapper for the first article

    $("//td") {
      name("span")

      $(".//a[contains(@href, 'vote')]/ancestor::center[1]") { 
        add_class("external_link")
      }

    }
    $("//tr") {
      name("div")

      $count = $("./*")

      $("preceding-sibling::div[not(@class) and not(node())][1]") {
        add_class("article")
      }

      match($count, /[^0]/) {
        move_to("preceding-sibling::div[contains(@class,'article')]")
      }
   
    }
    name("div")

    # Clean up empty rows

    remove(".//div[contains(@class, 'article') and not(node())]")

    remove(".//div[contains(@class, 'article') and position()=last()]")
    
  }

  $("//table//div") {
    add_class("old_table")
  }

}  

match($path, /json=true/) {
  $more_url = fetch("//div[contains(@class,'more')]//@href")
  $json = "{\"next\" : \"" + $more_url + "\"}"
}