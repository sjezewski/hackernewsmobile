# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  remove(".//@style")  

  # Some pages are headless ... correct this

  $head = $("//head")
  match($head, /0/) {
    $("./body") {
      insert_before("head")
    }
  }

  add_assets()
  insert_mobile_meta_tags()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}
