module.exports = function landing(box){
  return  `
    <div class="container m-top">
        <div class="row">
            <div class="col s10 push-s1">
                <div class="row">
                    <div class="col m5 hide-on-small-only">
                        <img class="iphone" src="iphone.png" />
                    </div>
                    ${box}
                </div>
            </div>
        </div>
    </div>
    `;
} 