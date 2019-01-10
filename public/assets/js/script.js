$(".devour-form").on("submit", function(event) {
  event.preventDefault();
  //   //   alert(this:input.val());
  //   var elements = this.elements;
  //   console.log(elements);
  //   //   alert(this.burger_id);
  //   console.log(elements[0].value);
  //   console.log(elements.input);
  id = this.elements[0].value;
  alert(id);
  //   alert($(this).id);
  $.post("burgers/update/" + id, {
    id: id
  }).then(function(data) {
    window.location.replace(data);
  });
});
