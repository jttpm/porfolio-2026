export async function downloadResume(url: string, filename: string) {
  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.status}`);
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = objectUrl;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    console.error(
      "Resume download failed, falling back to direct link.",
      error,
    );

    const fallbackLink = document.createElement("a");
    fallbackLink.href = url;
    fallbackLink.download = filename;
    fallbackLink.rel = "noopener";
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
}
