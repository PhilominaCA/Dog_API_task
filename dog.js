document.getElementById("subm").addEventListener("click", getImg);

function getImg() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            document.getElementById("imageid").src = data.message;
        })
        .catch((err) => {
            console.log(err, "Data can not be fetched");
        });
}