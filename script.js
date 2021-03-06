var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
    };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "f0d2be67b35d43b3a8d236e764cc0ce4");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
        }

      $('#searchResults').html(results);
        $('#searchResults').dialog({minHeight: 'auto', width: 'auto'});
    })
    .fail(function () {
      alert("error");
    });
}

function onSearchClick() {
    document.getElementById('searchResults').style.visibility = 'visible';
    apiSearch();
}

function changeBackground() {
    console.log(document.getElementById("body").style.backgroundImage)
    if (document.getElementById("body").style.backgroundImage == 'url("https://images.unsplash.com/photo-1642753176692-ddac25863ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")') {
        console.log('if')
        document.getElementById("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1642970047663-3010fe472192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
    }
    else {
        console.log('else')
        document.getElementById("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1642753176692-ddac25863ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
    }
}

function time() {
    const htmlID = document.getElementById('time');
    var dt = new Date();
    var time = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    htmlID.innerHTML = `<p>${time}<p>`;
    showDialog();
}

function showDialog() {
    document.getElementById('time').style.visibility = "visible";
    $("#time").dialog();
}