export const countPack = (cards: Definitions.Cards[]) => {
    const map = new Map();
    cards.forEach(ele => {
        const key = `${ele.suit}-${ele.value}`;
        const currCount = map.get(key) || 0;
        map.set(key, currCount + 1);
    });
    const values = map.values() as any as number[];
    if (map.size < 4 * 13) return 0;
    return Math.min(...values);
};

export const countBribes = (q: number[]) => {
    const bribes = q.map((item, i) => {
        const diff = Math.abs(i - (item - 1));
        console.log(diff); 
        if (diff > 2) throw new Error("Too chaotic");
        return diff;
    });

    const bribesSum = bribes.reduce((pre, current, index) => (pre + current), 0);
    return bribesSum / 2;
};