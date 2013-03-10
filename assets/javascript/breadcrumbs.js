

function getMaxIndex(callback) {
  var url = addQuery(window.location, "json=true");

  function parseResponse(response) {
    console.log(this);
    var data = JSON.parse(this.response);

    callback(data['last_item_index']);
  }

  x$().xhr(url, parseResponse);
}


x$("body.listings").each(
  function() {
    console.log("Current Depth:" + localStorage.depth);

    console.log(x$("body.listings.expired"));

    function updateMaxIndex(maxIndex) {
      localStorage['maxIndex'] = maxIndex;
    }

    getMaxIndex(updateMaxIndex);

  }
);