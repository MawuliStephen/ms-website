const postImg = document.getElementsByClassName("img-responsive");
const postTitle = document.getElementsByClassName("prod-title");
const postDate = document.getElementsByClassName("post_date");
const blogpost = document.getElementsByClassName("post");
const readMore = document.getElementById("readMore");


// const previewPost = document.getElementById("previewPost");
// const publishPost = document.getElementById("publishPost");

// Preview before publishing Blog post
 previewPost.addEventListener("click", (e) => {

    var postTitle = document.getElementById("postTitle").value;
    var textArea = document.getElementById("textarea").value;
    var postImg = document.getElementById("myFile").value;
    // const seLect = document.getElementById("seclect");

    let newDiv = document.createElement("myLI").parentElement;

    // let newDiv = document.createElement("div");

    let headLine = document.createElement("h3");
    let blgPost = document.createElement("p");
    let postPicture = document.createElement("img");
    // parentElement.classList.add() = ""


    // Create new post div assign class
    newDiv.className = "fh5co-blog";
    let mainDiv = document.parentElement;

    mainDiv.appendChild(newDiv);

    headLine.className = "prod-title";
    headLine.append(postTitle);
    blgPost.append(textArea);

    // Create a post picture and assign class
    postPicture.className ="img-responsive"
    postPicture.append(postImg);


    if (postTitle, textArea === "") {

        alert(" You can not preview empty post");
        // console.log(postTitle, textArea);

    }
    else {
        // alert(postTitle, textArea, seLect);
        console.log(mainDiv, postPicture,headLine,  blgPost,);

    };


});


// Publish before publishing Blog post

// publishPost.addEventListener("click", (e) => {

//     var postTitle = document.getElementById("postTitle").value;
//     var textArea = document.getElementById("textarea").value;
//     // const seLect = document.getElementById("seclect");


//     let headLine = document.createElement("h3");
//     let blgPost = document.createElement("p");
//     // parentElement.classList.add() = ""
//     headLine.className = "prod-title";
//     headLine.append(postTitle);

//     blgPost.append(textArea);

//     if (postTitle, textArea === "") {
//         document.getElementById("myFile").style.outlineColor = "red";

//         alert(" Sorry!  You can not publish an empty blog post.");
//         // console.log(postTitle, textArea);

//     }
//     else {
//         // postTitle, textArea
//         // ev.preventDefault();

//         // window.open(console.log(postTitle, textArea));
//         console.log(headLine, blgPost,);


//     };

//     // document.getElementById("myInput").value = "";

//     // var span = document.createElement("SPAN");
//     // var txt = document.createTextNode("\u00D7");
//     // span.className = "close";
//     // span.appendChild(txt);
//     // li.appendChild(span);

//     // for (i = 0; i < close.length; i++) {
//     //     close[i].onclick = function () {
//     //         var div = this.parentElement;
//     //         div.style.display = "none";
//     //     }
//     // }




// });





