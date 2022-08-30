const loadPhone = async (inputFildValue) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputFildValue}`;
  const res = await fetch(url);
  const data = await res.json();
  phoneData(data.data);
};

const phoneData = (getPhone) => {
  getPhone = getPhone.slice(0, 3);
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
                            </div>
         </div>
        
    `;
    showPhone.appendChild(div);
  });
  toggleSpinner(false);
};

document.getElementById("search-btn").addEventListener("click", function () {
  toggleSpinner(true);
  const inputFild = document.getElementById("input-fild");
  const inputFildValue = inputFild.value;
  loadPhone(inputFildValue);
  inputFild.value = "";
});

const toggleSpinner = (isLoading) => {
  const spinner = document.getElementById("spanner");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

// loadPhone();
