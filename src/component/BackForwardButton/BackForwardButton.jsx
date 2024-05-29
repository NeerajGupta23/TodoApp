import "./BackForwardButton.css";

export default function BackForwardButton({ children, onSelect }) {
  return (
    <>
      <div id="back-forward">
        <button onClick={onSelect}>{children}</button>
      </div>
    </>
  );
}
