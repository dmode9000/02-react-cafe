// react
import { useState } from "react";
// components
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
// types
import type { IVotes, TVoteType } from "../../types/votes";
// styles
import css from "./App.module.css";

/** initial state for the votes. */
const initialVotes: IVotes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

/**
 * The main application component.
 * It manages the state of the votes and renders the other components.
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  const [votes, setVotes] = useState<IVotes>(initialVotes);

  /**
   * Handles a vote by updating the state.
   * @param {TVoteType} voteType - The type of vote to handle.
   */
  function handleVote(voteType: TVoteType) {
    setVotes((prevVotes) => {
      const currVotes = { ...prevVotes };
      currVotes[voteType]++;
      return currVotes;
    });
  }

  /**
   * Resets the votes to their initial state.
   */
  function resetVotes() {
    setVotes(initialVotes);
  }

  const totalVotes = votes.bad + votes.good + votes.neutral;

  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
      {totalVotes ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification />}
    </div>
  );
}
