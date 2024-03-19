// 4.write a class to calculate the Uber price.


class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerkm) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerkm = costPerkm;
    }
  
    calculatePrice(distanceInkm, timeInMinutes) {
      const distanceCost = distanceInkm * this.costPerkm;
      const timeCost = timeInMinutes * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost;
      return totalPrice;
    }
  }
  
  // sample to check the problem:

  const calculator = new UberPriceCalculator(5, 0.2, 5); 
  const distance = 10; 
  const time = 20; 
  const totalPrice = calculator.calculatePrice(distance, time);
  console.log("Total Price:", totalPrice);
  