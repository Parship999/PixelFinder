const imageWrap = document.querySelector(".images");
const showMoreBtn = document.querySelector(".show-more");
const searchImg = document.querySelector(".search-box input");

const apikey = "mTOKbE9r3112J7VaHSsXdEL0KJfuOb6uWJH31jy0QEmcqaRoFAuuBaKk";
const perPage = 10;
let currentPage = 1;
let searchImg1 = null;

const downloadImg = (imgURL) => {
  console.log(imgURL);
  fetch(imgURL)
    .then((res) => res.blob())
    .then((file) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = new Date().getTime();
      a.click();
    })
    .catch(() => alert("Failed to download the image"));
};

const generateHTML = (images) => {
  imageWrap.innerHTML += images
    .map(
      (img) =>
        `<li class="card">
                <img src="${img.src.large2x}" alt="">
                <div class="details">
                <div class="photographer">
                    <span class="material-symbols-outlined">photo_camera</span>
                    <span>${img.photographer}</span>
                </div>
                    <button onclick="downloadImg('${img.src.large2x}')">
                    <span class="material-symbols-outlined">download</span>
                    </button>
                </div>
        </li>`
    )
    .join("");
};

const getImages = (apiURL) => {
  showMoreBtn.innerText = "Loading...";
  showMoreBtn.classList.add("disabled");
  fetch(apiURL, {
    headers: { Authorization: apikey },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      generateHTML(data.photos);
      showMoreBtn.innerText = "Show More";
      showMoreBtn.classList.remove("disabled");
    })
    .catch(() => alert("Failed to load the images"));
};

const showMoreImages = () => {
  currentPage++;
  let apiURL = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
  apiURL = searchImg1
    ? `https://api.pexels.com/v1/search?query=${searchImg1}&page=${currentPage}&per_page=${perPage}`
    : apiURL;
  getImages(apiURL);
};

const SearchImages = (e) => {
  if (e.target.value === "") return (searchImg1 = null);
  if (e.key === "Enter") {
    currentPage = 1;
    searchImg1 = e.target.value;
    imageWrap.innerHTML = "";
    getImages(
      `https://api.pexels.com/v1/search?query=${searchImg1}&page=${currentPage}&per_page=${perPage}`
    );
  }
};

getImages(
  `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`
);

showMoreBtn.addEventListener("click", showMoreImages);
searchImg.addEventListener("keyup", SearchImages);
