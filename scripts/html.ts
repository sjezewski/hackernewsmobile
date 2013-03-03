# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  remove(".//@style")  

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

