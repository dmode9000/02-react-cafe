// types
import type { VoteType } from "../../types/votes";
// styles
import css from "./VoteOptions.module.css";

/** Props for the VoteOptions component.*/
interface IVoteOptionsProps {
  /**
   * Function to call when a vote button is clicked.
   * @param {VoteType} voteType - The type of vote cast.
   */
  onVote: (voteType: VoteType) => void;
  /**
   * Function to call when the reset button is clicked.
   */
  onReset: () => void;
  /**
   * Determines whether the reset button should be displayed.
   */
  canReset: boolean;
}

/**
 * A component that displays voting options and a reset button.
 * @param {IVoteOptionsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered VoteOptions component.
 */
export default function VoteOptions({ onVote, onReset, canReset }: IVoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
