/** Represents the structure of the votes object. */
export interface Votes {
  good: number; // number of 'good' votes.
  neutral: number; // number of 'neutral' votes.
  bad: number; // number of 'bad' votes.
}

/** Represents the possible types of votes. */
export type VoteType = "good" | "neutral" | "bad";
