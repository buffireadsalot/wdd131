const products = [
  { id: 'p1', name: 'SuperWidget' },
  { id: 'p2', name: 'MegaWidget' },
  { id: 'p3', name: 'UltraWidget' }
];

const selectElement = document.getElementById("productName");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
