import css from "./Notification.module.css";

/**
 * A component that displays a message when there is no feedback.
 * @returns {JSX.Element} The rendered Notification component.
 */
export default function Notification() {
  return <p className={css.message}>No feedback yet</p>;
}
