$('./body') {

  $("//a[@href='news']") {
    $("ancestor::table[1]") {

      # Make it shine

      move_to("//body", "top")
      remove("./@*")
      add_class("header")

      # Convert from a table

      name("div")
      $(".//tr") {
        name("div")
      }
      $(".//td") {
        name("span")
      }

      # Setup Logo

      insert_top("div", class:"logo") {
        move_here("(..//span//img)[1]/ancestor::span[1]") {
          remove("./@*")
          add_class("icon")
        }
        move_here("..//a[@href='news']")
      }

      $(".//span[contains(@class, 'pagetop')]/ancestor::div[1]") {
        add_class("links")


        wrap("div", class: "navigation") {
           insert_top("div", class:"button")
           ur_toggler(".//div[contains(@class,'button')]", ".//div[contains(@class, 'links')]")
            
        }
      }

    }
  }


}
