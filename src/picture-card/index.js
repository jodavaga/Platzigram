module.exports = function(pic){
   return `<div class="card">
    <div class="card-image">
        <img class="activator" src="${pic.url}">
    </div>
    <div class="card-content">
        <small class="right time"> Hace 1 dia</small>
        <a href="/user/${pic.user.username}" class="card-title">
            <img class="avatar" src="${pic.user.avatar}"/>
            <span class="username"> ${pic.user.username} </span>
        </a>
        
        <p>
            <a href="#" class="left"><i class="material-icons">favorite_border</i></a>
            <span class="left likes">${pic.likes} me gusta </span>
        </p>
    </div>  
</div>`;
}