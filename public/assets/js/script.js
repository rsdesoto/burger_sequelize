$(".devour-form").on("submit", function(event) {
  event.preventDefault();

  id = this.elements[0].value;

  //   alert($(this).id);
  $.post("burgers/update/" + id, {
    id: id
  }).then(function(data) {
    window.location.replace(data);
  });
});
