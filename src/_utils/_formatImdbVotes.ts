const _formatImdbVotes = (value: string) => {
    const removedComma = value.replace(/,/g, "")

    if (+removedComma > 1000000) {
        return { number: (Number(removedComma) / 1000000).toFixed(1), prefix: "M" }
    } else if (+removedComma > 1000) {
        return { number: (Number(removedComma) / 1000).toFixed(1), prefix: "K" }
    } else {
        return { number: Number(removedComma), prefix: "" }
    }
}

export default _formatImdbVotes