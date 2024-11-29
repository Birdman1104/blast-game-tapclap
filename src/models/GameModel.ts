import { GAME_CONFIG } from '../configs/GameConfig';
import { ObservableModel } from './ObservableModel';

export enum GameState {
    Unknown,
    Playing,
    Win,
    Lose,
}

export class GameModel extends ObservableModel {
    private _state: GameState;
    private _moves = 0;
    private _score = 0;
    private _targetScore = 0;

    constructor() {
        super('GameModel');

        this._state = GameState.Unknown;
        this.makeObservable();
    }

    get state(): GameState {
        return this._state;
    }

    set state(value: GameState) {
        this._state = value;
    }

    get moves(): number {
        return this._moves;
    }

    set moves(value: number) {
        this._moves = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get targetScore(): number {
        return this._targetScore;
    }

    set targetScore(value: number) {
        this._targetScore = value;
    }

    public setState(state: GameState): void {
        this._state = state;
    }

    public init(): void {
        const { moves, targetScore } = GAME_CONFIG;
        this._moves = moves;
        this._targetScore = targetScore;
        this.setState(GameState.Playing);
    }
}
