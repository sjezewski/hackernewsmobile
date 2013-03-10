# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  remove(".//@style")  

  add_assets()
  insert_mobile_meta_tags()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}
