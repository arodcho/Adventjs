function findNaughtyStep(original, modified) {
    if (original.length === modified.length) return ""
      const count = Math.max(original.length, modified.length)
    
    for (let i = 0; i < count; i++) {
            if (original[i] !== modified[i]) {
                return modified.length > original.length ? modified[i] : original[i]
        }
    }
}
    