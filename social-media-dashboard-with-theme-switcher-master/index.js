var darkMode = document.getElementById('toggleButton');
var lightMode = document.getElementById('darkButton')

darkMode.addEventListener('click',function () {
     document.getElementById('dash').style.backgroundColor = 'hsl(232, 19%, 15%)';
     document.getElementById('dash').style.color = 'hsl(228, 34%, 66%)';
     document.getElementById('media').style.color = 'hsl(0, 0%, 100%)';
     var followerCard = document.querySelectorAll('.follower-card');
     var overviewCard = document.querySelectorAll('.overview-card');
     var activity = document.querySelectorAll('.activity');

        document.querySelector('body').style.backgroundColor = 'hsl(230, 17%, 14%';
        darkMode.style.display = 'none';
        lightMode.style.display = 'block';

        followerCard.forEach(function(div) {
            div.style.backgroundColor = 'hsl(228, 28%, 20%)';
        });

        overviewCard.forEach(function(div) {
            div.style.backgroundColor = 'hsl(228, 28%, 20%)';
        });

        activity.forEach(function(h1) {
             h1.style.color = 'white';
        });

        document.querySelector('.attribution').style.color = 'white';
});

lightMode.addEventListener('click',function () {
    document.getElementById('dash').style.backgroundColor = 'hsl(225, 100%, 98%)';
    document.getElementById('dash').style.color = 'hsl(228, 12%, 44%)';
    document.getElementById('media').style.color = 'hsl(230, 17%, 14%)';
    var followerCard = document.querySelectorAll('.follower-card');
    var overviewCard = document.querySelectorAll('.overview-card');
    var activity = document.querySelectorAll('.activity');

       document.querySelector('body').style.backgroundColor = 'white';
       darkMode.style.display - 'block';
       darkMode.style.display = 'flex';
       lightMode.style.display = 'none';

       followerCard.forEach(function(div) {
           div.style.backgroundColor = 'hsl(227, 47%, 96%)';
       });

       overviewCard.forEach(function(div) {
           div.style.backgroundColor = 'hsl(227, 47%, 96%)';
       });

       activity.forEach(function(h1) {
            h1.style.color = 'hsl(230, 17%, 14%)';
       });

       document.querySelector('.attribution').style.color = 'black';
});

