var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function (pictures){
var el = `
<div class="container timeline">
    <div class="row">
        <div class="col s12 m7 offset-m2 l6 offset-l3">
            ${pictures.map(function(pic){
                return picture(pic);
            })}
        </div>
    </div>
</div>`;

 return layout(el);
}