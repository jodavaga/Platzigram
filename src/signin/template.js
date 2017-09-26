var landing = require('../landing');

var signinForm = `<div class="col s12 m7">
<div class="row">
    <div class="signup-box">
        <h1 class="platzigram">Platzigram</h1>
        <form class="signup-form"> 
            <div class="section">
                <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
            </div>
             <div class="divider"></div>
            <div class="section">
                <input type="text" name="username" placeholder="Nombre de usuario"></input>
                <input type="password" name="password" placeholder="Contraseña"></input>
                <button class="btn waves-effect waves-light btn-signup" type="submit">Iniciar Sesión</button>
            </div>
        </form>
    </div>
        
</div>
<div class="row">
    <div class="login-box">
        ¿No Tienes una cuenta? <a href="/signup">Registrarse</a>
    </div>
</div>
`;

module.exports = landing(signinForm);