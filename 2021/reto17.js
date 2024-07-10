export default function countPackages(carriers, carrierID) {
    const carrier = carriers.find(carrier => carrier[0] === carrierID);

    return carrier[2].reduce(
        (acc, carrier) => (acc += countPackages(carriers, carrier)),
        carrier[1]
    );
}

