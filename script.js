let gallerys = [];

function submitPost() {
    const imageInput = document.getElementById("imageInput");
    const captionInput = document.getElementById("captionInput");

    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
        posts = JSON.parse(storedPosts);
    }

    const newPost = {
        image: imageInput.value,
        caption: captionInput.value,
    };

    gallerys.push(newPost);
    alert("image stored to click view the post button")
  
    localStorage.setItem("gallerys", JSON.stringify(gallerys));

    imageInput.value = "";
    captionInput.value = "";

    printStoredImages();
}

function printStoredImages() {
    const postContainer = document.getElementById("postContainer");

    const storedPosts = localStorage.getItem("gallerys");
    if (storedPosts) {
        const gallerys = JSON.parse(storedPosts);

        postContainer.innerHTML = "";

        gallerys.forEach(post => {
            const postElement = document.createElement("div");
            const imageElement = document.createElement("img");
            const captionElement = document.createElement("p");

            imageElement.src = post.image; 
            captionElement.textContent = post.caption;

            postElement.appendChild(imageElement);
            postElement.appendChild(captionElement);

            postElement.classList.add("post");

            postContainer.appendChild(postElement);
        });
    } else {
        postContainer.innerHTML = "<p>No posts found.</p>";
    }
}

printStoredImages();
