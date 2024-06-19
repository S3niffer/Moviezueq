const _formatDuration = (value: string) => {
    const withoutAffix = value.split(" ")[0]

    if (+withoutAffix < 60) {
        return withoutAffix + "m"
    } else {
        if (+withoutAffix == 60) return Math.trunc(+withoutAffix / 60) + "h"

        return Math.trunc(+withoutAffix / 60) + "h " + (+withoutAffix % 60).toFixed(0) + "m"
    }
}

export default _formatDuration
