// const postImg = document.getElementById('image-upload').value;
const postTitle = document.getElementById('postTitle').value;
const textArea = document.getElementById('textArea').value;


// const blogTitleField = document.querySelector('.title');
//const articleFeild = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;


// post image
const postImg = document.getElementById('image-upload');

// Adding eventListeners to imgage uploads

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})


postImg.addEventListener('change', () => {
    uploadImage(postImg, "image");

});

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if (file && file.type.includes("image")) {
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
            .then(data => {
                if (uploadType == "image") {
                    addImage(data, file.name);
                } else {
                    bannerPath = `${location.origin}/${data}`;
                    banner.style.backgroundImage = `url("${bannerPath}")`;
                }
            })
    } else {
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = textArea.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    textArea = textArea.slice(0, curPos) + textToInsert + textArea.value.slice(curPos);
}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
publishPost.addEventListener('click', () => {
    if (textArea.length && postTitle.length) {

        // generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = postTitle.split(" ").join("-");
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // setting up docName
        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // for published at info

        //access firstore with db variable;
        db.collection("blogs").doc(docName).set({
            title: postTitle,
            article: textArea,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
            .then(() => {
                location.href = `/${docName}`;
            })
            .catch((err) => {
                console.error(err);
            })

    }
});