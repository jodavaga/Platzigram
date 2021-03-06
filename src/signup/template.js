var landing = require('../landing');

var signupForm = `<div class="col s12 m7">
<div class="row">
  <div class="signup-box">
    <h1 class="platzigram"><a href="/">Platzigram</a></h1>
    <form class="signup-form">
      <h2>Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
      <div class="section">
        <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
        <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
      </div>
      <div class="divider"></div>
      <div class="section">
        <input type="email" name="email" placeholder="Correo electrónico"></input>
        <input type="text" name="name" placeholder="Nombre completo"></input>
        <input type="text" name="username" placeholder="Nombre de usuario"></input>
        <input type="password" name="password" placeholder="Contraseña"></input>
        <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
      </div>
    </form>
  </div>
</div>
<div class="row">
  <div class="login-box">
    ¿Tienes una cuenta? <a href="/signin">Entrar</a>
  </div>
</div>
</div>
`;

module.exports = landing(signupForm);