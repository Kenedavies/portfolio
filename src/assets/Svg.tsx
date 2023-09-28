export const CalendarIcon = ({ color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M6.5625 1.25V4.4375M21.4375 1.25V4.4375M1.25 23.5625V7.625C1.25 6.77962 1.58582 5.96887 2.1836 5.3711C2.78137 4.77333 3.59212 4.4375 4.4375 4.4375H23.5625C24.4079 4.4375 25.2186 4.77333 25.8164 5.3711C26.4142 5.96887 26.75 6.77962 26.75 7.625V23.5625M1.25 23.5625C1.25 24.4079 1.58582 25.2186 2.1836 25.8164C2.78137 26.4142 3.59212 26.75 4.4375 26.75H23.5625C24.4079 26.75 25.2186 26.4142 25.8164 25.8164C26.4142 25.2186 26.75 24.4079 26.75 23.5625M1.25 23.5625V12.9375C1.25 12.0921 1.58582 11.2814 2.1836 10.6836C2.78137 10.0858 3.59212 9.75 4.4375 9.75H23.5625C24.4079 9.75 25.2186 10.0858 25.8164 10.6836C26.4142 11.2814 26.75 12.0921 26.75 12.9375V23.5625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export function MenuIcon({ color = "currentColor" }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      font-size="25px"
      color="#111010"
      style={{ color: color }}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path>
    </svg>
  );
}
