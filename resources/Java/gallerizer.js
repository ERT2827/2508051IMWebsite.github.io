const portfolioIMG = [
    {
        id: 1,
        img: "./resources/images/Portfolio/2508051_Finals.jpg",
        desc: `My first character design sheet. I could do a lot better these days, but I still like it. `,
    },{
        id: 2,
        img: "./resources/images/Portfolio/VictoryDance.png",
        desc: `The victory screen from my final game for Second year GD. `,
    },
    {
        id: 3,
        img: "./resources/images/Portfolio/Fingers.png",
        desc: `I condsider this art, in a way. `,
    },{
        id: 4,
        img: "./resources/images/Portfolio/Jesser.png",
        desc: `Here's a Jesse Pinkman I drew for the aforementioned breaking good game. `,
    },{
        id: 5,
        img: "./resources/images/Portfolio/Kiteman.jpg",
        desc: `Stiltman is better than Kite Man. I'll fight you on it. `,
    },{
        id: 6,
        img: "./resources/images/Portfolio/Cave.png",
        desc: `I love microsoft paint. It imposes a set of limitations that really make you push yourself as an artist. `,
    },{
        id: 7,
        img: "./resources/images/Portfolio/BenjFight.jpg",
        desc: `A picture I drew of two of my friends fighting. Not based off true events. `,
    },{
        id: 8,
        img: "./resources/images/Portfolio/Potionseller2.PNG",
        desc: `The shopkeeper in one of my Game Design games from last year. He's a reocurring character in my games now. `,
    },{
        id: 9,
        img: "./resources/images/Portfolio/Korsika.jpg",
        desc: `I was inspired to draw this after playing the excellent HIFI rush. `,
    },{
        id: 10,
        img: "./resources/images/Portfolio/MHClub.jpg",
        desc: `A lineup of characters who I used to practice character design. `,
    },{
        id: 11,
        img: "./resources/images/Portfolio/AmityNBuri.jpg",
        desc: `A piece of art I did for my current DnD campaign. Honestly I impressed myself with it.`,
    },{
        id: 12,
        img: "./resources/images/Portfolio/THe worst thing I've ever done.jpg",
        desc: `This... Don't even ask about this. `,
    },
    {
        id: 13,
        img: "./resources/images/Portfolio/NeckGuy.png",
        desc: `Here's something I did just for this portfolio. `,
    },{
        id: 14,
        img: "./resources/images/Portfolio/20508051_Bruce_WSOA2023Assignment2.png",
        desc: `Another classic from the first DAP game, this time the ideal screenshot. `,
    },{
        id: 125,
        img: "./resources/images/Portfolio/THe worst thing I've e.jpg",
        desc: `This... Don't even ask about this. `,
    },
]

const designIMG = [
    {
        id: 1,
        img: "./resources/images/Design/Homescreen.jpg",
        desc: `The rough design for the homescreen. `,
    },{
        id: 2,
        img: "./resources/images/Design/Portfolio.jpg",
        desc: `The rough design for my portfolio. Notice the lack of gallery, since that came from the design page.`,
    },{
        id: 3,
        img: "./resources/images/Design/Blog.jpg",
        desc: `The design for the blog. `,
    },{
        id: 4,
        img: "./resources/images/Design/Essays.jpg",
        desc: `While the page is still a place holder, I decided to do my final design now for when I implement it. `,
    },{
        id: 5,
        img: "./resources/images/Design/DesignMockup.jpg",
        desc: `The design page's basic layout. This was where I had the idea for image galleries at the bottom of certain pages. `,
    },{
        id: 6,
        img: "./resources/images/Design/Music.jpg",
        desc: `I originally wanted to do a music page instead of a profile page. He's the basic idea for how that would have looked. `,
    },{
        id: 7,
        img: "./resources/images/Design/Profile.jpg",
        desc: `A more finalized version of the profile page, with more detail and a better idea of how to integrate the music. `,
    },
]

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

const sectionCenter = document.querySelector(".gallery");

if(filename == "design.html"){
    displayGallery(designIMG);
}else{
    displayGallery(portfolioIMG)
}


function displayGallery(galleryItems){
    let displayGallery = galleryItems.map(function (galleryItem){
      return `<div class="galleryitem">
      <a target="_blank" href="${galleryItem.img}">
        <img src="${galleryItem.img}" alt="Gallery Item">
    </a>
    <div class="desc font italic">${galleryItem.desc}</div></div>`;
    }).join("");
  
    sectionCenter.innerHTML = displayGallery;
  }