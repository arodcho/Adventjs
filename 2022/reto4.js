function fitsInOneBox(boxes) {
    return boxes
        .sort((a, b) => a.l - b.l)
        .every((box, i) => {
            const next = boxes[i - 1];
            return i < 1 || (box.h > next.h && box.w > next.w);
        });
}


