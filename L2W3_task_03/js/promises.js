const url1 = 'https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?auto=compress&cs=tinysrgb&h=350'

const loadImage = (url) => {
    setTimeout(() =>{
        const img = new Image();
        img.width = 400;
        img.src = url;
        document.body.append(img);
        img.addEventListener('load');
    // замість 10сек поставив 2, щоб швидше продемонструвати результат:    
    }, 2000)              
}

loadImage(url1);