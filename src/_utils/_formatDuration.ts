const _formatDuration = (value: string) => {
    const withoutAffix = value.split(" ")[0]

    return withoutAffix + "m"
}

export default _formatDuration