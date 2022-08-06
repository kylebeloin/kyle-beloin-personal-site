export default function GameFrame({ width, url, show, className, setShow }) {
  return (
    <>
      <button onClick={setShow}>
        {/* Close X */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      {show && (
        <iframe
          id="iframe-game"
          className={className}
          style={{
            height: "100vh",
            width: "100%",
            display: "grid",
            placeContent: "center",
            backgroundColor: "white",
            border: "none",
            transform: "scale(0.8)",
            top: "0",
          }}
          title="Game"
          width={width}
          src={url}
        ></iframe>
      )}
    </>
  );
}
