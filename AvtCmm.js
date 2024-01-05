!function(randomImages) {
document.addEventListener("DOMContentLoaded", function() {
  var commentItems = document.querySelectorAll("#cmHolder li");
  if (commentItems.length === 0) return;
  for (var $i = 0; $i < commentItems.length; $i++) {
    var commentItem = commentItems[$i];
    var commentAvatar = commentItem.querySelector(".cmAv [data-style]");
    var dataStyle = commentAvatar.getAttribute("data-style");
    var isAnonymous = dataStyle && dataStyle.indexOf("//resources.blogblog.com/img/blank.gif") !== -1;
    if (isAnonymous) {
      if (randomImages.length !== 0) {
        commentAvatar.setAttribute("data-style", "background-image: url(" + Pu.rdm(randomImages).replace(/"/g, "&quot;") + ")");
      } else {
        var nameElem = commentItem.querySelector(".cmHr .n [itemprop='name']");
        var placeholder = "Unknown";
        var $name = nameElem ? (nameElem.textContent||"").trim() || placeholder : placeholder;
        var $chars = $name.split(" ").reduce(function(a, e) {
          if (a.length < 2) {
            var $char = e.trim().charAt(0).toUpperCase();
            if ($char) a.push($char);
          }
          return a;
        }, []);
        commentAvatar.setAttribute("data-full", $name);
        commentAvatar.setAttribute("data-short", $chars.join(""));
      }
    }
  }
});
} ([
  // Keep it blank to use Characters from names
  // i.e, A for Anonymous
  // Add random images
  
]);
