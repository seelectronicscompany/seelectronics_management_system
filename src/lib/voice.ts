export interface SendVoiceBroadcastOptions {
  title: string;
  broadcast_id: number;
  numbers: string[];
}

/**
 * Sends a voice broadcast campaign using the MRAM Voice API.
 * Ensures numbers are properly formatted.
 */
export const sendVoiceBroadcast = async ({
  title,
  broadcast_id,
  numbers,
}: SendVoiceBroadcastOptions): Promise<{
  success: boolean;
  campaign_id?: number;
  message?: string;
}> => {
  // If in development and sending is disabled, skip sending.
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.MRAM_VOICE_SEND_IN_DEV !== "true"
  ) {
    console.log(
      `[DEV] Skipping Voice Broadcast: ${title} (Broadcast ID: ${broadcast_id}) to ${numbers.join(", ")}`,
    );
    return { success: true, message: "Skipped in development mode" };
  }

  try {
    const apiKey = process.env.MRAM_VOICE_API_KEY;
    const sender = process.env.MRAM_VOICE_SENDER_ID || "9610990671";
    const baseUrl =
      process.env.MRAM_VOICE_API_BASE_URL || "https://call.mram.com.bd";

    if (!apiKey) {
      console.warn(
        "MRAM_VOICE_API_KEY is not defined in environment variables. Voice broadcast skipped.",
      );
      return { success: false, message: "Missing API Key" };
    }

    // Format numbers: ensure they have country code if missing. MRAM usually expects '880' for BD numbers.
    const formattedNumbers = numbers
      .map((num) => {
        let cleaned = num.replace(/\D/g, ""); // Remove non-digits
        if (cleaned.startsWith("880")) {
          return cleaned;
        }
        if (cleaned.startsWith("01") && cleaned.length === 11) {
          return "88" + cleaned;
        }
        if (cleaned.length === 10) {
          return "880" + cleaned;
        }
        if (!cleaned.startsWith("88") && cleaned.length > 8) {
          return "88" + cleaned;
        }
        return cleaned;
      })
      .filter((num) => num.length >= 11);

    if (formattedNumbers.length === 0) {
      console.warn("No valid phone numbers provided for voice broadcast.");
      return { success: false, message: "No valid numbers" };
    }

    // MRAM API sometimes rejects identical requests as 'duplicate request'.
    // We append a timestamp to the title to ensure uniqueness.
    let safeTitle = title.replace(/[^a-zA-Z0-9\s]/g, " ").trim();
    safeTitle = `${safeTitle} ${Date.now()}`;

    const payload = {
      title: safeTitle,
      broadcast_id,
      sender,
      numbers: formattedNumbers,
    };

    const response = await fetch(`${baseUrl}/api/send-broadcast-campaign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("MRAM Voice API Error:", data);
      return {
        success: false,
        message: data.message || "Failed to send broadcast",
      };
    }

    console.log(
      `Voice broadcast '${title}' successfully created. Campaign ID:`,
      data.campaign_id,
    );
    return { success: true, campaign_id: data.campaign_id };
  } catch (error) {
    console.error("Exception during sendVoiceBroadcast:", error);
    return { success: false, message: "Internal error occurred" };
  }
};
