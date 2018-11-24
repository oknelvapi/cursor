
const url1 = 'https://images.pexels.com/photos/462086/pexels-photo-462086.jpeg?auto=compress&cs=tinysrgb&h=350'
const url2 = 'https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?auto=compress&cs=tinysrgb&h=350'
const url3 = 'https://images.pexels.com/photos/371496/pexels-photo-371496.jpeg?auto=compress&cs=tinysrgb&h=350'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   FIRST VARIANT based by Promises only 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const loadImage = (url, ms) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             const img = new Image();
//             img.width = 400;
//             img.src = url;
//             document.body.append(img);
//             img.addEventListener('load', () => {
//                 resolve();
//             });
//             img.addEventListener('error', () =>{
//                 reject();
//             });
//         }, ms)       
//     });       
// }
// loadImage(url1, 500)
//     .then(() => loadImage(url2, 2000))
//     .then(() => loadImage(url3, 1000))
//     .catch(() => {
//         console.log('Download failed')
//     })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   SECOND VARIANT based by async/await
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const loadImage = (url, ms) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            const img = new Image();
            img.width = 400;
            img.src = url;
            document.body.append(img);
            img.addEventListener('load', () => {
                resolve();
            });
        }, ms)      
    });       
}

const main = async () => {
    try {
        await loadImage(url1, 500);
        await loadImage(url2, 2000);
        await loadImage(url3, 1000);
    } catch (e) {
        console.log('Unknown error')
    }
}

main();