'use client'
import { useTextBuffer, StreamingText } from "nextjs-openai";

export default function Demo() {
  const { buffer, refresh, cancel, done } = useTextBuffer({
    url: "/api/chat"
  });

  return (
    <div>
      <StreamingText buffer={buffer} fade={600} />
      <button onClick={refresh} disabled={!done}>Refresh</button>
      <button onClick={cancel} disabled={done}>Cancel</button>
    </div>
  );
}
