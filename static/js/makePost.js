
const form = document.getElementById("form");
const previewPost = document.getElementById("previewPost");
const publishPost = document.getElementById("publishPost");


// Preview your article before publishing
previewPost.addEventListener("click", (e) => {
    e.preventDefault();

    let postImg = document.getElementById('image-upload').value;
    let postTitle = document.getElementById('postTitle').value;
    let textArea = document.getElementById('textArea').value;
    let threeDots = document.getElementById("dots");

    // to set into local storage
    // localStorage.setItem("POSTIMG", postImg);
    // localStorage.setItem("POSTTILE", postTitle);
    // localStorage.setItem("BLOGPOST", textArea); 
    // localStorage.setItem("THREEDOTS", threeDots);

    sessionStorage.setItem("POSTIMG", postImg);
    sessionStorage.setItem("POSTTILE", postTitle);
    sessionStorage.setItem("BLOGPOST", textArea);
    sessionStorage.setItem("THREEDOTS", threeDots);


    if (textArea, postTitle === "") {
        alert("empty blog post is not allowed");

    } else {

        alert(" congrates you have made a new post")

        // window.location.href = "preview.html"
        window.open("preview.html");
    }
});



// publish your article straight away
// publishPost.addEventListener("click", (e) => {
//     e.preventDefault();

//     const postImg = document.getElementById('image-upload').value;
//     const postTitle = document.getElementById('postTitle').value;
//     const textArea = document.getElementById('textArea').value;


//     // id="dots"

//     // create elements

//     let headLine = document.createElement("h3");
//     let blgPost = document.createElement("p");
//     let postPicture = document.createElement("img");
//     // let  threeDots = document.createElement(span)[0];
//     // let  readplenty = document.createElement(span)[1];




//     // Create  assign class to elements created
//     postPicture.className = "img-responsive";
//     headLine.className = "prod-title";

//     // Let new Elements append()
//     postPicture.append(postImg);
//     headLine.append(postTitle);
//     blgPost.append(textArea);

//     // to set into local storage
//     // localStorage.setItem("POSTIMG", postImg);
//     // localStorage.setItem("POSTTILE", postTitle);
//     // localStorage.setItem("BLOGPOST", textArea); 

//     sessionStorage.setItem("POSTIMG", postImg);
//     sessionStorage.setItem("POSTTILE", postTitle);
//     sessionStorage.setItem("BLOGPOST", textArea);


//     if (textArea, postTitle === "") {
//         alert("This post is Empty, you can't publish this");

//     } else {
//         alert(" congrates you have made a new post")

//         // window.location.href = "preview.html"
//         window.open("blog.html");
//     }
// });

