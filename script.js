const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.textContent);
  });

  const table = document.querySelector("table");

  // Prevent duplicate total rows
  const oldRow = document.querySelector(".total-row");
  if (oldRow) oldRow.remove();

  const row = document.createElement("tr");
  row.className = "total-row";

  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.textContent = `Total: Rs ${total}`;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
