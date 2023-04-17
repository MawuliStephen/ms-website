
const form = document.getElementById("form");
const previewPost = document.getElementById("previewPost");
const publishPost = document.getElementById("publishPost");

// Preview your article before publishing
previewPost.addEventListener("click", (e) => {
    e.preventDefault();

        const postImg = document.getElementById('myFile').value;
        const postTitle = document.getElementById('postTitle').value;
        const textArea = document.getElementById('textArea').value;

        // to set into local storage
        // localStorage.setItem("POSTIMG", postImg);
        // localStorage.setItem("POSTTILE", postTitle);
        // localStorage.setItem("BLOGPOST", textArea); 

        sessionStorage.setItem("POSTIMG", postImg);
        sessionStorage.setItem("POSTTILE", postTitle);
        sessionStorage.setItem("BLOGPOST", textArea);


    if (textArea, postTitle === "") {
        alert("empty blog post is not allowed");

    } else {

        // alert(" congrates you have made a new post")

        // window.location.href = "preview.html"
        window.open("preview.html");
    }
});



// publish your article straight away
publishPost.addEventListener("click", (e) => {
    e.preventDefault();

        const postImg = document.getElementById('myFile').value;
        const postTitle = document.getElementById('postTitle').value;
        const textArea = document.getElementById('textArea').value;

        // to set into local storage
        // localStorage.setItem("POSTIMG", postImg);
        // localStorage.setItem("POSTTILE", postTitle);
        // localStorage.setItem("BLOGPOST", textArea); 

        sessionStorage.setItem("POSTIMG", postImg);
        sessionStorage.setItem("POSTTILE", postTitle);
        sessionStorage.setItem("BLOGPOST", textArea);


    if (textArea, postTitle === "") {
        alert("This post is Empty, you can't publish this");

    } else {
         alert(" congrates you have made a new post")

        // window.location.href = "preview.html"
        window.open("blog.html");
    }
});