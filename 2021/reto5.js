export default function daysToXmas(date) {
    const getDays = (time) => Math.floor(time / 1000 / 60 / 60 / 24);
  
    const xmasDays = getDays(new Date('Dec 25, 2021').getTime());
    const dateDays = getDays((date.setHours(0), date.getTime()));
  
    return xmasDays - dateDays;
}