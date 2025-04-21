import styles from "./Status.module.scss";

const Failed = () => {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 119 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M116.6 60C116.6 91.8306 91.0166 117.6 59.5 117.6C27.9834 117.6 2.4 91.8306 2.4 60C2.4 28.1694 27.9834 2.4 59.5 2.4C91.0166 2.4 116.6 28.1694 116.6 60Z"
        stroke="#D02121"
        strokeWidth="4.8"
      />
      <rect
        width="4.53966"
        height="60.1505"
        rx="2.26983"
        transform="matrix(0.706769 0.707444 -0.706769 0.707444 79.791 37)"
        fill="#D02121"
      />
      <rect
        width="4.53966"
        height="60.1505"
        rx="2.26983"
        transform="matrix(0.706769 -0.707444 0.706769 0.707444 37 40.4468)"
        fill="#D02121"
      />
    </svg>
  );
};

export default Failed;
