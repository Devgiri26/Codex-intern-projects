async function downloadSong() {
  const link = document.getElementById("spotifyLink").value;
  const resultDiv = document.getElementById("result");

  if (!link.includes("spotify.com/track")) {
    alert("Please enter a valid Spotify track link.");
    return;
  }

  resultDiv.innerHTML = "Processing...";

  try {
    const response = await fetch("https://spotify-downloader3.p.rapidapi.com/download", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
        "X-RapidAPI-Host": "spotify-downloader3.p.rapidapi.com"
      },
      body: JSON.stringify({
        url: link
      })
    });

    const data = await response.json();

    if (data && data.link) {
      resultDiv.innerHTML = `
        <p>Download ready:</p>
        <a href="${data.link}" target="_blank" download>Click to Download</a>
      `;
    } else {
      resultDiv.innerHTML = "Song not found or API error.";
    }

  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "Error fetching download link.";
  }
}
