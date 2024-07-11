export default function fixFiles(files) {
    const count = {};

    return files.map(file => {
        const nameCount = count[file];
        let name = file;

        if (nameCount) name += `(${nameCount})`;
        count[file] = nameCount + 1 || 1;

        return name;
    });
}