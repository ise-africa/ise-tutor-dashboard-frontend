import classes from "./Error.module.css";

type ErrorProps = {
  children: React.ReactNode;
  type: "success" | "error" | "processing" | "approved";
  notShowIndicator?: boolean;
  borderRadius?: string;
};

const Error = ({ children, type, notShowIndicator, borderRadius }: ErrorProps) => {
  return (
    <div
      className={classes.container}
      style={{
        border: type === "success" ? "none" : type === "processing" ? "1px solid #FDC500" : type === "approved" ? "1px solid #4A820B" : "1px solid #dc362e",
        background: type === "success" ? "#DFF7F3" : type === "processing" ? "#FFFDF5" : type === "approved" ? "#EEFCDE" : "#f8d7d5",
        borderRadius: borderRadius ? borderRadius : "5px"
      }}
    >
      {!notShowIndicator && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8.66667 10.6667H8V8H7.33333M8 5.33333H8.00667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
            stroke="#2E2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span>{children}</span>
    </div>
  );
};

export default Error;
