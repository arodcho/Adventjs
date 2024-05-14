function distributeGifts(packOfGifts, reindeers) {
    const reindeersWight = reindeers.join('').length * 2;
    const packWeight = packOfGifts.join('').length;
  
    return Math.floor(reindeersWight / packWeight);
}