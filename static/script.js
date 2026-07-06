document
  .getElementById("summarization-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const dialogueInput = document.getElementById("dialogue-input");
    const summaryText = document.getElementById("summary-text");
    const submitButton = e.target.querySelector("button");

    const dialogue = dialogueInput.value.trim();
    if (!dialogue) {
      alert("Please enter some text to summarize.");
      return;
    }

    summaryText.innerText = "Summarizing...";
    submitButton.disabled = true;

    try {
      const response = await fetch("/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dialogue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      summaryText.innerText = data.summary || "No summary available.";
    } catch (error) {
      summaryText.innerText = `Error :${error.message}`;
    } finally {
      submitButton.disabled = false;
    }
  });
