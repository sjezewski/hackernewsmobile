# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

