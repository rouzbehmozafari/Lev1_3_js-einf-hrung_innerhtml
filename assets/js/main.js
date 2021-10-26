let sec = document.getElementById("gallery");

function addImage(srcc ,cap) {
    sec.innerHTML += '<figure style="display:inline-block;width:25%;" ><img style="width:90%" src=' + srcc + '>' + '<figcaption>' + cap + '</figcaption></figure>'
};

addImage('https://lanxess.com/-/media/Project/Lanxess/Corporate-Internet/Celum/2019/10/02/13/00/TheGlobalGoals_Logo_and_Icons-Sitecore-Internet-Image.jpg', 'caption1')
addImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oekIIZlGnGrgq6GrcIVfoC0__eNS7ejUFiAo90upZQdGdhhjkbSQ3ICjKZ-lWGwe1-0&usqp=CAU', 'caption2')
addImage('https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true', 'caption3')
