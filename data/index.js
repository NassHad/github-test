const array = ['Paris', 'Lyon', 'Lille', 'Montreal'];
const array2 = ['Paris', 33, ['Montreal', 'Lille'], true];

for(let i = 0; i < array2.length; i++){
    console.log(typeof array2[i]);
}

array.sort();

// **************************************************

const input = document.getElementById('input');
const video = document.getElementById('video');
let link = "";

input.addEventListener('input', (e) => {
    changeLink(e.target.value);
    if(link){
        video.innerHTML = `<iframe width="1903" height="797" src="${link}" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`;
    }
})

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', "embed/");
    link = embed.split('&')[0];
}