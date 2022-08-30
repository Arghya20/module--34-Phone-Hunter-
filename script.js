const loadPhone = async (inputFildValue, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputFildValue}`;
  const res = await fetch(url);
  const data = await res.json();
  phoneData(data.data, dataLimit);
};

const phoneData = (getPhone, dataLimit) => {
  const showMore = document.getElementById("show-more");
  if (dataLimit && getPhone.length > 5) {
    getPhone = getPhone.slice(0, 5);
    showMore.classList.remove("d-none");
  } else {
    showMore.classList.add("d-none");
  }
  const showPhone = document.getElementById("show-phone");
  showPhone.innerHTML = ``;
  showPhone.classList.add("col");

  // No Phone Found -------
  const noFound = document.getElementById("no-found");

  if (getPhone.length === 0) {
    noFound.classList.remove("d-none");
  } else {
    noFound.classList.add("d-none");
  }

  getPhone.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                            <img src="${element.image}" class="card-img-top shadow-sm p-3 mb-5 bg-body rounded " alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.brand}</h5>
                                <p class="card-text">${element.phone_name} </p>
                                <button  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-info text-white" onclick="loadPhoneDetails('${element.slug}')" >Show Detail</button>
                            </div>
         </div>
        
    `;
    showPhone.appendChild(div);
  });
  toggleSpinner(false);
};

const prossesSearch = (dataLimit) => {
  toggleSpinner(true);
  const inputFild = document.getElementById("input-fild");
  const inputFildValue = inputFild.value;
  loadPhone(inputFildValue, dataLimit);
};

document.getElementById("search-btn").addEventListener("click", function () {
  prossesSearch(5);
});

//Enter Button Function ------
document
  .getElementById("input-fild")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      // Do work
      prossesSearch(5);
    }
  });

const toggleSpinner = (isLoading) => {
  const spinner = document.getElementById("spanner");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

document.getElementById("btn-show-all").addEventListener("click", function () {
  prossesSearch();
});

const loadPhoneDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDitels(data.data);
};

const displayDitels = (phoneData) => {
  console.log(phoneData);
  const modalTitle = document.getElementById("modal-title");
  modalTitle.innerText = phoneData.name;
  const modalDec = document.getElementById("modal-dec");
  modalDec.innerHTML = `
  <p>Storage : ${phoneData.mainFeatures.storage}</p>
  <p>Display Size : ${phoneData.mainFeatures.displaySize}</p>
  <p> Chipset : ${phoneData.mainFeatures.chipSet}</p>
  <p> Memory : ${phoneData.mainFeatures.memory}</p>
  `;
};
