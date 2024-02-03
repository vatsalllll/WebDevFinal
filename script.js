const input = document.querySelector(".mbox1 input");
const button = document.querySelector(".mbox1-button");

const mbox2 = document.querySelector(".mbox2");
mbox2.style.display = "flex";
mbox2.style.flexDirection = "column";

button.addEventListener("click", () => {
  const comment = input.value;

  const div = document.createElement("div");
  div.style.height = "150px";
  div.style.width = "400px";
  div.style.border = "2px solid black";
  div.style.borderRadius = "14px";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="Delete Icon">`;
  deleteButton.style.borderWidth = "0";

  div.innerText = comment;
  div.appendChild(deleteButton);

  mbox2.appendChild(div);

  input.value = "";

  deleteButton.addEventListener("click", () => {
    mbox2.removeChild(div);
  });
});
