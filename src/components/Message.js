/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const styles = {
  container: css`
    display: flex;
    flex-direction: row-reverse;
  `,
  bubble: css`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: goldenrod;
  `,
  text: css`
    background-color: lightblue;
    padding: 5em 1em;
    border-radius: 7px;
    border-bottom-left-radius: 0;
  `,
}

export default function Message({ text }) {
  return (
    <div css={styles.container}>
      <div css={styles.bubble}></div>
      <div css={styles.text}>{text}</div>
    </div>
  )
}
