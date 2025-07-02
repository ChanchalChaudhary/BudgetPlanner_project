function addBudget() {
  const category = document.getElementById('b-cat').value;
  const amount = document.getElementById('b-amt').value;

  fetch('/budget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category, amount })
  }).then(res => res.text()).then(alert);
}

function addExpense() {
  const category = document.getElementById('e-cat').value;
  const amount = document.getElementById('e-amt').value;
  const note = document.getElementById('e-note').value;

  fetch('/expense', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category, amount, note })
  }).then(res => res.text()).then(alert);
}

function loadReport() {
  fetch('/report').then(res => res.json()).then(data => {
    const list = document.getElementById('report');
    list.innerHTML = '';
    data.forEach(row => {
      const li = document.createElement('li');
      li.innerText = `${row.category}: Budget ₹${row.budget}, Spent ₹${row.spent}`;
      list.appendChild(li);
    });
  });
}
