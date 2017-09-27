
module.exports = function (content){
    return `
<nav class="header">
<div class="nav-wrapper">
    <div class="container">
        
        <div class="row">
            <div class="col s7 m7">
                <a href="/" class="brand-logo platzigram">Platzigram</a>
            </div>
            <div class="col s3 offset-s2 m2 offset-m3">
                <ul id="nav-mobile" class="right">
                    <li><a class="dropdown-button" href="#" data-activates="drop-user">
                            <i class="material-icons">person</i>
                        </a></li>
                    <ul id="drop-user" class="dropdown-content">
                        <li><a href="#">Salir</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</div>
</nav>

<div class="content">
    ${content}
</div>`;}
