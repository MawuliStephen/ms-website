window.addEventListener('load', () => {

    // Via Query parameters - GET
    // const params = (new URL(document.location)).searchParams;
    // const postImg = params.get('myFile');
    // const postTitle = params.get('postTitle');
    // const textArea = params.get('textArea');

    // Via local Storage
    // const postImg = localStorage.getItem("POSTIMG");
    // const postTitle  = localStorage.getItem('POSTTILE');
    // const textArea = localStorage.getItem('BLOGPOST');


    const postImg = sessionStorage.getItem("POSTIMG");
    const postTitle  = sessionStorage.getItem('POSTTILE');
    const textArea = sessionStorage.getItem('BLOGPOST');

    document.getElementById('img-responsive').innerHTML= postImg;
    document.getElementById('main-headline').innerHTML = postTitle;
    document.getElementById('main-post').innerHTML = textArea;

});



// makepost js

// function handleSubmit() {
//     const postImg = document.getElementById('myFile').value;
//     const postTitle = document.getElementById('postTitle').value;
//     const textArea = document.getElementById('textArea').value;

//     // to set into local storage
//     // localStorage.setItem("POSTIMG", postImg);
//     // localStorage.setItem("POSTTILE", postTitle);
//     // localStorage.setItem("BLOGPOST", textArea); 

//     sessionStorage.setItem("POSTIMG", postImg);
//     sessionStorage.setItem("POSTTILE", postTitle);
//     sessionStorage.setItem("BLOGPOST", textArea);

//     return;
// }
