$(function () {

  $.ajax({
    url: 'https://www.codeschool.com/users/jonatanpedrosa.json',
    dataType: 'jsonp',
    success: function (response) {
      response.courses.completed.forEach(function (element) {
        console.log(element);
        var item = $('<div class="course"></div>');
        item.append('<h3>' + element.title + '</h3>')
          .append('<img src="' + element["badge"] + '"/>')
          .append('<a class="btn btn-primary" target="_blank" href="' + element["url"] + '">' +
            'See Course' +
            '</a>');
        $("#badges").append(item);
      });
    }
  });

});
