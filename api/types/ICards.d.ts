import { Document, WithId } from "mongodb";
import { ICard } from "./ICard";

interface ICards extends ICard {
    allCards: ICard[];
}