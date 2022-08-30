const loadPhone = async (inputFildValue) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputFildValue}`;
  const res = await fetch(url);
  const data = await res.json();
  phoneData(data.data);
};

const phoneData = (getPhone) => {
  const showPhone = document.getElementById("show-phone");
  showPhone.innerHTML = ``;
  showPhone.classList.add("col");
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
};

document.getElementById("search-btn").addEventListener("click", function () {
  const inputFild = document.getElementById("input-fild");
  const inputFildValue = inputFild.value;
  loadPhone(inputFildValue);
  inputFild.value = "";
});

loadPhone();
