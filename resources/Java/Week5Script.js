//background

const randomColor = Math.floor(Math.random()*16777215).toString(16);

document.body.style.backgroundColor = "#" + randomColor;

//counter

const totalcount = document.getElementById("totalCount");

var count = 0;

totalcount.innerHTML = count;

const handleIncrement = () => {
    count++;
    totalcount.innerHTML = count;
}

const handleDecrement = () => {
    count--;
    totalcount.innerHTML = count;
}

const incrementCount = document.getElementById("increment count");
const decrementCount = document.getElementById("decrement count");

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

//reviews

const reviews = [];
var whichreview = 0;

reviews[0] = "Very nice, I like.";
reviews[1] = "terrible, hate it.";
reviews[2] = "so skrungly, I love him";
reviews[3] = "I'VE COME TO MAKE AN ANNOUNCEMENT";

document.getElementById("reviews").innerHTML = reviews[whichreview];

const handleIncrease = () => {
    whichreview++;
    document.getElementById("reviews").innerHTML = reviews[whichreview];

}

const handleDecrease = () => {
    whichreview--;
    document.getElementById("reviews").innerHTML = reviews[whichreview];
}

const randomreview = () => {
    whichreview = Math.floor(Math.random() * 4);
    document.getElementById("reviews").innerHTML = reviews[whichreview];
}

const incrementReview = document.getElementById("nextReview");
const decrementReview = document.getElementById("prevReview");
const randomReview = document.getElementById("randomReview");


incrementReview.addEventListener("click", handleIncrease);
decrementReview.addEventListener("click", handleDecrease);
randomReview.addEventListener("click", randomreview);


