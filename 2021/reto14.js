export default function missingReindeer(ids) {
    ids.sort((a, b) => a - b)
  
    let lostReindeer
  
    for (let i = 0; i < ids.length; i++) {
      if (!lostReindeer && ids[i] !== i) lostReindeer = i
    }
  
    return lostReindeer !== undefined ? lostReindeer : Math.max(...ids) + 1
}