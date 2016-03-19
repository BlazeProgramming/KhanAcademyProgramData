var programs = [];
if(!$){
  console.log("HAI");
}else{
  $(document).ready(function(){
    $("#add").hide();
    $("#crunch").hide();

    $("#add-new").on("click", function(){
      $("#add").slideDown();
    });

    $("#submit-new-program").on("click", function(){
      var PROGRAM_NAME = $("#program-num").val();
      console.log($("#add-new").prop("disabled"));
      $("#add").slideUp();
      $("#crunch").fadeIn();
      $('#add-new').fadeOut();
      var API_CALL_URL_1 = "https://www.khanacademy.org/api/labs/scratchpads/";
      $.getJSON(API_CALL_URL_1 + PROGRAM_NAME + "", function(data){
        document.getElementById("program-output").innerHTML = "";
        programs.push(data);
        console.log(programs);
        $("#add-new").fadeIn();
        for(var i = 0; i < programs.length; i++){
          var p = programs[i];
          document.getElementById("program-output").innerHTML += "<div class='panel panel-default'><div class='panel-heading'><h3>" + p.title + " " + ((p.flags.length!==0)?"<span class='label label-as-badge label-warning blaze-small'>FLAGGED</span>":"") + " " + ((p.hideFromHotList===true)?"<span class='label label-as-badge label-danger blaze-small'>HIDDEN</span>":"")+ " " + ((p.definitelyNotSpam===true)?"<span class='label label-as-badge label-info blaze-small'>UNFLAGGABLE</span>":"") + "</h3><br>" + p.sumVotesIncremented + " Votes \u2022 " + p.spinoffCount + " Spin-Offs \u2022 " + (p.userAuthoredContentType.toUpperCase()) + "</div><div class='panel-body'>" + p.flags.toString().replace(/,/g, "<br>") + "</div></div>";
        }
        $("#crunch").fadeOut();
      });
    });
  });
}
