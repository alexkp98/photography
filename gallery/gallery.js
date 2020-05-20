$(document).ready(function () {
    $('#get-data').click(function () {
      var showData = $('#show-data');
  
      $.getJSON('gallery.json', function (data) {
        console.log(data);
  
        var items = data.items.map(function (item) {
          return item.key + ': ' + item.value;
        });
  
        showData.empty();
  
        if (items.length) {
          var content = '<li>' + items.join('</li><li>') + '</li>';
          var list = $('<ul />').html(content);
          showData.append(list);
        }
      });
  
      showData.text('Loading the JSON file.');
    });
  });

  $('#get-data').click(function () {
    $.getJSON('gallery.json', function (data) {
      console.log(data);
    });
  });

  function openForm() {
    alert("open form");
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }