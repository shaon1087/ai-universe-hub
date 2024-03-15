const loadCard = async (isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const cards = data.data.tools;
  displayCards(cards, isShowAll);
  showModal(cards);
};
const displayCards = (cards, isShowAll) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";
  const seeMore = document.getElementById("see-more");
  if (cards.length > 6 && !isShowAll) {
    seeMore.classList.remove("hidden");
  } else {
    seeMore.classList.add("hidden");
  }
  if (!isShowAll) {
    cards = cards.slice(0, 6);
  }

  cards.forEach((card) => {
    console.log(card);
    const cardItem = document.createElement("div");
    cardItem.classList = `card card-compact w-96 bg-base-100 shadow-xl`;
    cardItem.innerHTML = `
  <div class="card-body">
  <figure><img class="" src="${card.image}" alt=""/></figure>
    <h2 class="card-title text-2xl">features</h2>
 <ol class="" >
  <li>1.  ${card.features[0]}</li>
  <li>2.  ${card.features[1]}</li>
  <li>3.  ${card.features[2]}</li>
</ol>
    <hr>
    
    <h2 class="card-title text-2xl">${card.name}</h2>
    <p class="text-sm"><i class="fa-regular fa-calendar-days"></i>${card.published_in}
    <div class="card-actions justify-end">
      <button onclick="my_modal.showModal()" class="btn btn-error"><i class="fa-solid fa-arrow-right text-white"></i></button>
      
    </div>
  </div>
        `;
    cardContainer.appendChild(cardItem);
  });
};
const showModal = (cards) => {
  const modalShow = document.getElementById("modal-container");
  modalShow.innerHTML = `
    <div class="grid grid-cols-2 gap-2">
  <div class="card  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div class="card bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
  `;    
  console.log(cards);

};
const showMore = (isShowAll) => {
  loadCard(isShowAll);
};
const handleShowMore = () => {
  showMore(true);
};
loadCard();
