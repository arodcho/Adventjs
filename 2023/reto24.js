function getStaircasePaths(steps, maxJump) {
    function generatePaths(remainingSteps, currentPath) {
        const paths = [];

        if (remainingSteps === 0) {
            paths.push(currentPath);
            return paths;
        }

        for (let jump = 1; jump <= Math.min(remainingSteps, maxJump); jump++) {
            const newPath = [...currentPath, jump];
            paths.push(...generatePaths(remainingSteps - jump, newPath));
        }

        return paths;
    }

    const staircasePaths = generatePaths(steps, []);

    return staircasePaths;
}