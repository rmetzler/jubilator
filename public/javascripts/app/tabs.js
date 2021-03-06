Jubilator = Jubilator || {};

Jubilator.Tab = function(project, sha) {
  this.project = project;
  this.tree_sha = sha;
};

Jubilator.Tab.prototype = $.extend({}, {
  render: function(blob) {
    var raw_html = Mustache.to_html("{{raw}}", {raw: blob.data})
    var tab = $("<li>");
    tab.data("html", raw_html).text(blob.name).click(function() {
      $("#tabs li.selected").removeClass("selected");
      $("#contents").html($(this).data("html"));
      tab.addClass("selected");
      prettyPrint();
    });

    tab.append($("<span>").attr("class", "close").text("x").click(function() {
      if (tab.hasClass("selected")) {
        var neighbor = tab.siblings();
        (neighbor.length > 0) ? $(neighbor[0]).click() : $("#contents").html("");
      }
      tab.remove();
    }));

    $("#tabs > ul").append(tab);
    tab.click();
  }
});
