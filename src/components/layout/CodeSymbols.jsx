/**
 * @fileoverview Decorative code symbols background
 * @description Renders strategic SVG programming symbols behind content.
 * Colors adapt to current theme. Purely decorative — aria-hidden.
 * @module components/layout/CodeSymbols
 */

import { useThemeContext } from "../../store/ThemeContext";

/**
 * Symbol definitions with strategic positions
 * @type {Array<{id: string, symbol: string, x: string, y: string, size: number, rotate: number, opacity: number}>}
 */
const SYMBOLS = [
  {
    id: "s1",
    symbol: "</>",
    x: "5%",
    y: "12%",
    size: 22,
    rotate: -15,
    opacity: 0.16,
  },
  {
    id: "s2",
    symbol: "{ }",
    x: "88%",
    y: "8%",
    size: 18,
    rotate: 12,
    opacity: 0.16,
  },
  {
    id: "s3",
    symbol: "=>",
    x: "92%",
    y: "35%",
    size: 16,
    rotate: -8,
    opacity: 0.16,
  },
  {
    id: "s4",
    symbol: "const",
    x: "3%",
    y: "55%",
    size: 14,
    rotate: 10,
    opacity: 0.16,
  },
  {
    id: "s5",
    symbol: "async",
    x: "85%",
    y: "68%",
    size: 15,
    rotate: -12,
    opacity: 0.16,
  },
  {
    id: "s6",
    symbol: "[ ]",
    x: "7%",
    y: "82%",
    size: 18,
    rotate: 8,
    opacity: 0.16,
  },
];

/**
 * CodeSymbols component
 * @returns {JSX.Element}
 */

const CodeSymbols = () => {
  const { isDark } = useThemeContext();

  const color = isDark ? "#A78BFA" : "#5B52E8";

  return (
    <div aria_hidden="true" className="code-symbols">
      {SYMBOLS.map((s) => (
        <span
          key={s.id}
          className="code-symbols__item"
          style={{
            left: s.x,
            top: s.y,
            fontSize: `${s.size}px`,
            transform: `rotate(${s.rotate}deg)`,
            opacity: s.opacity,
            color,
          }}
        >
          {s.symbol}
        </span>
      ))}
    </div>
  );
};

export default CodeSymbols;
