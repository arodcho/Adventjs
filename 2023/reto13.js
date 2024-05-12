function calculateTime(deliveries) {
    let count = -25200;

    for (const delivery of deliveries) {
        const [hours, minutes, seconds] = delivery.split(':');
        count += (+hours * 3600) + (+minutes * 60) + (+seconds);
    }

    const sign = count < 0 ? '-' : '';

    count = Math.abs(count);

    const hours = Math.floor(count / 3600).toString().padStart(2, '0');

    count %= 3600;

    const minutes = Math.floor(count / 60).toString().padStart(2, '0');

    count %= 60;

    const seconds = count.toString().padStart(2, '0');

    return `${sign}${hours}:${minutes}:${seconds}`;
}