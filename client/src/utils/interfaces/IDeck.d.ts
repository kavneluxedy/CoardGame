import ICard from "./ICard";

export default interface IDeck {
    name: string;
    content: Array<Partial<ICard>>;
    stats: {
        nbCards: number;
        manaAvg: number;
        playRate?: number;
    };
}