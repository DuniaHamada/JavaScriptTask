async function getditals() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const data = await response.data;
  const {
    title,
    thumbnail,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
  } = data;

  document.querySelector(".productsDetails").innerHTML = `<h2>${title}</h2>
            <img src="${thumbnail}">
            <p>Price: ${price}</p>
            <p> ${brand}</p>
            <p> ${category}</p>
          
            `;
}
getditals();
