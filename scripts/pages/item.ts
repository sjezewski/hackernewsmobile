$("./body") {
  add_class("item")

  remove("//table/@*")
  remove("//td/@bgcolor")

  # For now remove img widths to flatten all comments
  remove("//@width")


}