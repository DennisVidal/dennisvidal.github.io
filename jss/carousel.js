const carouselButtonPrev = document.querySelector(".carousel-button.prev");
const carouselButtonNext = document.querySelector(".carousel-button.next");
const carouselContent = document.querySelector(".carousel-content");
const carouselDots = document.querySelector(".carousel-dots");
let currentCarouselPageIndex = 0;



carouselButtonPrev.setAttribute("carouselPageAdvance", -1);
carouselButtonNext.setAttribute("carouselPageAdvance", 1);
carouselButtonPrev.addEventListener("click", handleCarouselButtonClicked);
carouselButtonNext.addEventListener("click", handleCarouselButtonClicked);

showCarouselPage(0);



window.addEventListener("resize", function () {
  showCarouselPage(0);
});

function advanceCarouselPage(n)
{
  let newIndex = currentCarouselPageIndex + n;
  let carouselPageCount = Math.ceil((carouselContent.scrollWidth / carouselContent.offsetWidth) - 0.01); //floating point error?
  if (-1 < newIndex && newIndex < carouselPageCount)
  {
    showCarouselPage(newIndex);
  }
}

function showCarouselPage(n)
{
  currentCarouselPageIndex = Number(n);
  carouselContent.classList.add(currentCarouselPageIndex);
  setCarouselOffset(-currentCarouselPageIndex * carouselContent.offsetWidth);
}

function setCarouselOffset(offset)
{
  carouselContent.style.transform = "translateX(" + offset + "px)";
  updateCarouselDots();
  updateCarouselButtons();
}




function updateCarouselDots()
{
  let carouselPageCount = Math.ceil((carouselContent.scrollWidth / carouselContent.offsetWidth) - 0.01);

  let carouselDotArray = carouselDots.getElementsByClassName("carousel-dot");
  let carouselDotCount = carouselDotArray.length;


  let difference = carouselPageCount - carouselDotCount;

  if(difference > 0)
  {
    carouselContent.classList.add(carouselPageCount);
    addCarouselDots(difference);
  }
  else if (difference < 0)
  {
    removeCarouselDots(-difference);
  }



  carouselDotArray = carouselDots.getElementsByClassName("carousel-dot");

  for (j = 0; j < carouselDotArray.length; j++)
  {
    carouselDotArray[j].classList.remove("active");
    carouselDotArray[j].setAttribute("carouselPageIndex", j);
  }

  carouselDotArray[currentCarouselPageIndex].classList.add("active");
}



function addCarouselDots(n)
{
  for (i = 0; i < n; i++)
  {
    const dot = document.createElement('button');
    dot.classList.add("carousel-dot");
    dot.addEventListener("click", handleCarouselDotClick);
    carouselDots.appendChild(dot);
  }
}

function removeCarouselDots(n)
{
  currentCarouselPageIndex = 0;
  let carouselDotArray = carouselDots.getElementsByClassName("carousel-dot");
  let dotsCount = carouselDotArray.length;

  for (i = 1; i < (n + 1); i++)
  {
    carouselDotArray[dotsCount - i].removeEventListener("click", handleCarouselDotClick);
    carouselDotArray[dotsCount - i].remove();
  }
}


function handleCarouselButtonClicked(event)
{
  let advanceCount = event.currentTarget.attributes.carouselPageAdvance.value;
  advanceCarouselPage(Number(advanceCount));
}

function handleCarouselDotClick(event)
{
  let selectedPageIndex = event.currentTarget.attributes.carouselPageIndex.value;
  showCarouselPage(Number(selectedPageIndex));
}


function updateCarouselButtons()
{
  let carouselPageCount = Math.ceil((carouselContent.scrollWidth / carouselContent.offsetWidth) - 0.01); //floating point error?

  carouselButtonPrev.classList.remove("hidden");
  if(currentCarouselPageIndex === 0)
  {
    carouselButtonPrev.classList.add("hidden");
  }

  carouselButtonNext.classList.remove("hidden");
  if(currentCarouselPageIndex === (carouselPageCount - 1))
  {
    carouselButtonNext.classList.add("hidden");
  }
}

/*
let entryIndex = 1;
showCarouselEntry(entryIndex);

// Next/previous controls
function advanceCarouselEntry(n)
{
    showCarouselEntry(entryIndex += n);
}

// Thumbnail image controls
function setCurrentCarouselEntry(n)
{
    showCarouselEntry(entryIndex = n);
}

function showCarouselEntry(n)
{
  let i;
  let carouselEntries = document.getElementsByClassName("carousel-entry");
  let carouselDots = document.getElementsByClassName("carousel-dot");
  if (n > carouselEntries.length)
  {
    entryIndex = 1
  }

  if (n < 1)
  {
    entryIndex = carouselEntries.length
  }

  for (i = 0; i < carouselEntries.length; i++)
  {
    carouselEntries[i].style.display = "none";
  }

  for (i = 0; i < carouselDots.length; i++)
  {
    carouselDots[i].className = carouselDots[i].className.replace(" active", "");
  }

  carouselEntries[entryIndex-1].style.display = "block";
  carouselDots[entryIndex-1].className += " active";
}
*/