function decorateTree(base) {
    const dict = {
        PP: 'P',
        PR: 'B',
        PB: 'R',
        RR: 'R',
        RP: 'B',
        RB: 'P',
        BB: 'B',
        BP: 'R',
        BR: 'P',
    };

    const tree = base.split(' ');
    const result = [tree[0]];

    for (let i = 1; i < tree.length; i++) {
        const topTree = tree[i].split(' ');
        const top = topTree.slice(0, -1).map((letter, j) => {
            const key = letter + topTree[j + 1];
            return dict[key];
        });

        result.push(top.join(' '));
    }

    return result;
}
