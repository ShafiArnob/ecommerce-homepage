export function calculateDiscountedPrice(price, discountPercentage) {
  const discountedPrice = price - price * (discountPercentage / 100);
  const roundedDiscountedPrice = Math.round(discountedPrice * 100) / 100;
  return roundedDiscountedPrice;
}
