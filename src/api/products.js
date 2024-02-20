export const getAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data?.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
