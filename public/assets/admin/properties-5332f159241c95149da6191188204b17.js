(function(){var n;$.get("/admin/tags.json",function(t){var a;return n(function(){var n,e,r;for(r=[],n=0,e=t.length;e>n;n++)a=t[n],r.push(a.name);return r}())}),n=function(n){return $(".special").select2({tags:n,maximumInputLength:10,tokenSeparators:[","]})}}).call(this);