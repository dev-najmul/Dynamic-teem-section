document.title = "Teem Section Dynamic Design";

//get main div of teem post
const teemGrid = document.querySelector(".teem-grid");

// empty variable for get valu from loop
let teemGcontent = "";
//get value from data
teem.forEach((item, index) => {
  teemGcontent += `
  <div class="teem_wrapper border rounded-2 m-2 text-center">
  <img
    class="member-pro w-100 rounded-1"
    src="${item.photo}"
    alt=""
  />
  <h4 class="auth-name">${item.name}</h4>
  <p class="auth-dic">${item.text}</p>
</div>`;
});

//show post data
teemGrid.innerHTML = teemGcontent;
