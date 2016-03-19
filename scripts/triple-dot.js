var tripleDotInstances = [];
if(!$){
  var ns = document.createElement("noscript");
  ns.innerHTML = "No jQuery available! Please reload!";
}else{
  setInterval(function(){
    $("triple-dot").each(function(){
      $(this).text($(this).text() + ".");
      if($(this).text() === "...."){
        $(this).text("");
      }
    })
  }, 500)

}
