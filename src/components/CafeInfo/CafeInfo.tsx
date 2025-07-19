import css from "./CafeInfo.module.css";

/**
 * A component that displays information about the café.
 * @returns {JSX.Element} The rendered CafeInfo component.
 */
export default function CafeInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>Please rate our service by selecting one of the options below.</p>
    </div>
  );
}
