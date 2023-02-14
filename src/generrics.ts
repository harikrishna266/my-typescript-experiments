const state = <H>(arg: H): H => {
    return arg;
}

state(1).toFixed();

state('hari').toLowerCase();


interface Rank<RankItem> {
    RankItem: RankItem;
    rank: number;
}


const ranker = <RankItem>(items: RankItem[], getRank: (a: RankItem) => number ) => {
    const itemsWithRank: Rank<RankItem>[] = items.map((RankItem: RankItem): Rank<RankItem> => ({RankItem, rank: getRank(RankItem)}));
}
