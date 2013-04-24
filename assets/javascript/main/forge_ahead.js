var articles_per_page = 30;

var pages = [
  "news",
  "news2"
];

function parseLink(link_or_path) {  
  var a = document.createElement("a");
  a.href = link_or_path;
  return a;
}

function absolutizeLink(link_or_path) {
  var a = parseLink(link_or_path);
  return a.href;
}

function addQuery(url, query) {
  var a = parseLink(url);

  if (a.search.length != 0) {
    query = "&" + query;
  }

  a.search += query;

  return a.href;
}


function getLink(url, callback) {
  var url = addQuery(url, "json=true");

  function parseResponse(response) {
    console.log(this);
    var data = JSON.parse(this.response);

    callback(data);
  }

  x$().xhr(url, parseResponse);
}

function getNextLink(url, remainingDepth, successCallback) {

  if (remainingDepth == 0) {
    successCallback(absolutizeLink(url));
    return
  }

  function progress(data) {
    p.bump();
    getNextLink(data['next'], remainingDepth-1, successCallback);
  }

  getLink(url, progress);
}


function getLinkAtDepth(depth, callback) {
  if(depth < 3) {
    return pages[depth-1];
  } 

  return getNextLink(pages[1], depth-2, callback)
}


function navigateToDepth(depth) {
  window.p = new progressBar(
    ".progress", 
    {
      'ticks':depth,
      'number' : true
    }
  );

  function forgeAhead(url) {
    window.location = url;
  }

  p.bump();
  p.bump();

  getLinkAtDepth(depth, forgeAhead);
}

window.navigateToDepth = navigateToDepth;

window.addEventListener(
  'load',
  function(e) {

    x$("body.listings").each(
      function() {

        var forgeAheadDepth = localStorage.maxIndex;

        if (forgeAheadDepth !== undefined) {
          x$(".option.forge_ahead").removeClass("disabled");

          x$(".option.forge_ahead").on(
            'click',
            function(e){
	      x$(".progress").removeClass("disabled");
              navigateToDepth(forgeAheadDepth/articles_per_page+1);
            }
          );
        }

      }
    );


  }
);



