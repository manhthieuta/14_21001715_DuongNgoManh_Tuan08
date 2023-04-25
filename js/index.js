$(document).ready(function () {
  $("#book-btn").click(function () {
    var serial = $("tr").length;
    var id = $("#patientId").val();
    var password = $("#password").val();
    var date = $("#pickDate").val();
    var numService = $('input[type="checkbox"]:checked');
    var specialist = $("#specialist").val();
    if (validId(id) && validPass(password) && validDate(date)) {
      var newPatient =
        "<tr><td>" +
        serial +
        "</td><td>" +
        id +
        "</td><td>" +
        password +
        "</td><td>" +
        date +
        "</td><td>" +
        numService.length * 500000 +
        "</td><td>" +
        specialist +
        "</td></tr>";
      $(".table").innerHTML += newPatient;
      $("#modal").modal("hide");
    }
  });

  $("#modal").on("hidden.bs.modal", function () {
    $(this).find("form").trigger("reset");
  });

  function validId(id) {
    if (/^BN-\d{5}$/.test(id)) {
      return true;
    }
    $("#patientId").focus();
    return false;
  }

  function validPass(password) {
    if (/^.{6}$/.test(password)) {
      return true;
    }
    $("#password").focus();
    return false;
  }

  function validDate(date) {
    if (date > new Date().toISOString().substring(0, 10)) {
      return true;
    }
    $("#pickDate").focus();
    return false;
  }
});
