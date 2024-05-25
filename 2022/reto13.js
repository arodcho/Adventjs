function getFilesToBackup(lastBackup, changes) {
    const ids = changes.filter(([_, time]) => time > lastBackup).map(([id]) => id);
    const uniqueIds = [...new Set(ids)];

    return uniqueIds.sort((a, b) => a - b);
}
