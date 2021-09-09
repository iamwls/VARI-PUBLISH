const button = document.querySelector(".dropbtn");

button.addEventListener("click", () => {
  const dropdown = document.querySelector(".drop-content");
  dropdown.style.display = "flex";
});

button.addEventListener("blur", () => {
  const dropdown = document.querySelector(".drop-content");
  // 0.2초 뒤에 실행
  setTimeout(() => {
    dropdown.style.display = "none";
  }, 200);
});

$(function () {
  $(".addfilebtn").click(function (e) {
    e.preventDefault();
    $(".af").click();
  });
});
