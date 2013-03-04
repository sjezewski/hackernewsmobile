$('./body') {

  $("//a[@href='news']") {
    $("ancestor::table[1]") {

      # Make it shine

      move_to("//body", "top")
      remove("./@*")

      # Convert from a table

      name("div")
      $(".//tr") {
        name("div")
      }
      $(".//td") {
        name("span")
      }

      name("header")

      # Setup Logo

      insert_top("div", class:"logo") {
        move_here("(..//span//img)[1]/ancestor::span[1]") {
          remove("./@*")
          add_class("icon")
          name("div")
        }
        move_here("..//a[@href='news']")
      }

      # Setup Navigation

      $(".//span[contains(@class, 'pagetop')]/ancestor::div[1]") {
        add_class("links")

        $(".//a") {
          add_class("link")
          $("..") {
            remove("./text()")
          }
          $("../b|../img") {
            remove()
          }
        }

        $("(.//span[contains(@class, 'pagetop')])[2]//a") {
          move_to("ancestor::div[contains(@class, 'links')]//a[contains(@class, 'link')][last()]")
        }

        wrap("div", class: "navigation") {
           insert_top("div", class:"button")
           ur_toggler(".//div[contains(@class,'button')]", ".//div[contains(@class, 'links')]")
            
        }
      }                 

    }
  }

  # Setup Search

  $(".//form[contains(@action, 'search')]") {
    add_class("search")
    insert_top("div", class: "button")
    $(".//input") {
      wrap("div", class: "field")
    }

    ur_toggler(".//div[@class='button']", ".//div[@class='field']")
    remove("./text()")
    move_to("//header")
  }



}
