export async function getProducts() {
  try {
    let res = await fetch('https://fakestoreapi.com/products');
    let products = await res.json();
    // filter for clothing items only
    let clothing = products.filter(
      (product) =>
        product.category == "men's clothing" ||
        product.category == "women's clothing"
    );
    return clothing;
  } catch (error) {
    return { message: 'Something went wrong' };
  }
}

export async function getMensProducts() {
  try {
    let res = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    let products = await res.json();
    return products;
  } catch (error) {
    return { message: 'Error fetching products' };
  }
}

export async function getWomensProducts() {
  try {
    let res = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    let products = await res.json();
    return products;
  } catch (error) {
    return { message: 'Error fetching products' };
  }
}

export async function getTopThreeProducts() {
  try {
    let res = await fetch(
      'https://fakestoreapi.com/products?limit=3'
    );
    let products = await res.json();
    // console.log(products);
    let images = products.map((product) => product.image);
    return images;
  } catch (error) {
    return { message: 'Error fetching products' };
  }
}
