const _subStringHandler = (value: string, length: number) => {
    if (value.length > length) {
        return value.substring(0, length - 2) + "..."
    } else {
        return value
    }
}

export default _subStringHandler
