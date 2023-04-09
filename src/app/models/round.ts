import { Player } from "./player"

export interface Round {
    _id?: string;
    players: Player[];
    winners: Player[];
}