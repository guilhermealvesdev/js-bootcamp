const ps = document.querySelectorAll('p');

ps.forEach(function(item){
    if (item.textContent.includes('the')){
        item.remove();
    };
});