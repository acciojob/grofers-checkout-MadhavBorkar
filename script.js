const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const ans = document.createElement("div");
ans.id = "ans";
document.body.appendChild(ans);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.textContent);
  });

  ans.textContent = total;
};

getSumBtn.addEventListener("click", getSum);
