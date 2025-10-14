const BallPen = {
    Available: true,
    productMRP: 2000,
    actualPrice: 1500,
    discount: 500,
    rating: 4.5
}
if (BallPen.Available) {
    console.log("Product is Here -> ");
    console.log("MRP is ->",BallPen.productMRP);
    console.log("we have a discount also of %d",BallPen.discount);
    console.log("Final Price is -> ",BallPen.actualPrice);
}