import { Player } from "./player";
import { Round } from "./round";

export interface Tournament {
    _id?: string;
    displayName?: string;
    maxPlayerAmount?: number;
    rounds?: Round[];
    winner?: Player[];
}