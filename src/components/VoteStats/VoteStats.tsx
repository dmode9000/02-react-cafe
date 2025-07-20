// types
import type { Votes } from "../../types/votes";
// styles
import styles from "./VoteStats.module.css";

/** Props for the VoteStats component.*/
interface VoteStatsProps {
  votes: Votes; // An object containing the counts for each vote type.
  totalVotes: number; // The total number of votes.
  positiveRate: number; // The percentage of positive votes.
}

/**
 * A component that displays the statistics of the votes.
 * @param {VoteStatsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered VoteStats component.
 */
export default function VoteStats({ votes, totalVotes = 0, positiveRate = 0 }: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
