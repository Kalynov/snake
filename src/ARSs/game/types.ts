import { TTimer } from "../../globalTypes";

export interface InitialState {
  play: boolean;
  pause: boolean;
  score: number;
  speed: number;
  timerId?: TTimer;
  crash: boolean;
  classic: boolean;
}