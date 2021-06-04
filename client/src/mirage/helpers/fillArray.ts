export const fillArray = (data: Array<string>, count: number) => {
    return Array.from(
        new Set(
            new Array(Math.floor(Math.random() * count) + 1)
                .fill(null)
                .map(() => {
                    return data[Math.floor(Math.random() * data.length)];
                })
        )
    );
};
