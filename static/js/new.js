
const previewPost = document.getElementById("previewPost");
var postImg = document.getElementById("myFile");


postImg.addEventListener("change", function () {
    Array.prototype.forEach.call(postImg.files, function (file) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            console.log("File", file.name, "starts with",
                reader.result.slice(0, 20));
        });
        reader.readAsText(file);
    });
});

function readFile(file) {
    return new Promise(function (succeed, fail) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            succeed(reader.result);
        });
        reader.addEventListener("error", function () {
            fail(reader.error);
        });
        reader.readAsText(file);
    });
}

// Handling select element and assigning post to categories.
var select = document.querySelector("select");
var output = document.querySelector("#output");
select.addEventListener("change", function () {
    var number = 0;
    for (var i = 0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.selected)
            number += Number(option.value);
    }
    output.textContent = number;
});

//  i want to create a new post elements and pass data throught it.
const newblogPost = [
    { postImg: "", postTitle: "", textArea: "", postCategory: "", postDate: "" },
]



console.log(newblogPost);



// function handleSubmit () {
//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;

//     // to set into local storage
//     // localStorage.setItem("NAME", name);
//     // localStorage.setItem("SURNAME", surname); 
    
//     sessionStorage.setItem("NAME", name);
//     sessionStorage.setItem("SURNAME", surname);

//     return;
// }
