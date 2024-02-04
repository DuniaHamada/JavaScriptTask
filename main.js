async function getData() {
  const response = await axios.get("https://dummyjson.com/products");
  const data = response.data;
  const product = data.products;
  const result = product
    .map(function (product) {
      return `
      <div class="products">
        <h2> ${product.title}</h2>
        <p> ${product.price}</p>
        <img src= ${product.thumbnail} />
        <a href="details.html?id=${product.id}">DETAILS</a>
      </div>
      `;
    })
    .join("");
  document.querySelector(".product .items ").innerHTML = result;
}

getData();
