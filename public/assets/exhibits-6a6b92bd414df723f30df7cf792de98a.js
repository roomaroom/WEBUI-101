(function(){$(function(){var n,t,r,e;return $.get("/admin/tags.json",function(n){var t;return e(function(){var r,e,i;for(i=[],r=0,e=n.length;e>r;r++)t=n[r],i.push(t.name);return i}())}),e=function(n){return $("#exhibit_tags_string").select2({tags:n,maximumInputLength:10,tokenSeparators:[","]})},$.get("/admin/biographies.json",function(n){var t;return r(function(){var r,e,i;for(i=[],r=0,e=n.length;e>r;r++)t=n[r],i.push(t.name);return i}())}),r=function(n){return $("#exhibit_biographies_string").select2({tags:n,maximumInputLength:30,tokenSeparators:[","]})},n=Markdown.getSanitizingConverter(),t=new Markdown.Editor(n),t.run()})}).call(this);