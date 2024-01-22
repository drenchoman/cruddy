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
