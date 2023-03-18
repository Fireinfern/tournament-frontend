import { Player } from "./player"

export interface Round {
    players: Player[];
    winners: Player[];
}