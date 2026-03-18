
const pages = [
    {
        src: "imagens/pagina01.jpg", 
        text: "Resumo ou texto base da página 1 do capítulo 1.",
        chapter: "Capítulo 1: Nome"
    },
    {
        src: "imagens/pagina02.jpg", 
        text: "Resumo ou texto base da página 2 do capítulo 1.",
        chapter: "Capítulo 1: Nome"
    }
   
];

let currentPage = 0;
const totalPages = pages.length;

const imgElement = document.getElementById("manga-page");
const textElement = document.getElementById("page-text");
const chapterElement = document.getElementById("chapter-title");
const currentDisplay = document.getElementById("current-page-display");
const totalDisplay = document.getElementById("total-pages-display");
const badgeDisplay = document.getElementById("page-badge");
const progressBar = document.getElementById("progress-bar");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const toggleThumbBtn = document.getElementById("toggle-thumbnails");
const sidebar = document.getElementById("thumbnails-sidebar");
const thumbContainer = document.getElementById("thumbnails-container");

function init() {
    totalDisplay.innerText = totalPages;
    generateThumbnails();
    updatePage();
}

function updatePage() {
    const pageData = pages[currentPage];
    imgElement.src = pageData.src;
    textElement.innerText = pageData.text;
    chapterElement.innerText = pageData.chapter;
    
    const pageNum = String(currentPage + 1).padStart(2, '0');
    currentDisplay.innerText = pageNum;
    badgeDisplay.innerText = `${pageNum} / ${totalPages}`;
    
    const progress = ((currentPage + 1) / totalPages) * 100;
    progressBar.style.width = `${progress}%`;

    document.querySelectorAll('.thumb-item').forEach((item, index) => {
        if(index === currentPage) {
            item.classList.add('active');
           
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            item.classList.remove('active');
        }
    });
}

function goNext() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePage();
    }
}

function goPrev() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

function generateThumbnails() {
    pages.forEach((page, index) => {
        const thumbDiv = document.createElement("div");
        thumbDiv.className = "thumb-item";
        thumbDiv.innerHTML = `
            <img src="${page.src}" alt="Página ${index + 1}">
            <div class="thumb-title">Pág. ${index + 1}</div>
        `;
        thumbDiv.addEventListener("click", () => {
            currentPage = index;
            updatePage();
           
            if (window.innerWidth < 768) {
                sidebar.classList.remove("open");
            }
        });
        thumbContainer.appendChild(thumbDiv);
    });
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);
toggleThumbBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goNext();
    else if (e.key === "ArrowLeft") goPrev();
});

init(); 
