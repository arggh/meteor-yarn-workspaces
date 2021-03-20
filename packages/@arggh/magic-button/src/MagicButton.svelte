<script>
  import { secret } from "secrets";
  import { getSignBunnyMsg } from "@arggh/bunny-messages";
  import { Box } from "ui";

  let text = "??";

  function reveal() {
    text = getSignBunnyMsg(secret.toString());
  }
</script>

<button type="button" on:click={reveal}>Reveal secrets</button>

<Box>
  <pre>
    {text}
  </pre>
</Box>
