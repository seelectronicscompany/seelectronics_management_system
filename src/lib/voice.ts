export type MramCampaignStatus =
  | "pending"
  | "processing"
  | "complete"
  | "failed";

export interface SendVoiceBroadcastParams {
  title: string;
  broadcast_id: number;
  sender?: string;
  numbers: string[];
}

export interface SendVoiceBroadcastResponse {
  campaign_id: number;
  status: string;
  total_calls: number;
}

export interface VoiceCampaignDetails {
  campaign: {
    id: number;
    title: string;
    status: MramCampaignStatus;
    total: number;
    failed_reason: string | null;
  };
  stats: {
    total_calls: number;
    new_calls: number;
    answered_calls: number;
    no_answer_calls: number;
    rejected_calls: number;
    failed_calls: number;
    timeout_calls: number;
    unknown_calls: number;
  };
  calls?: Array<{
    phone_number: string;
    status: string;
    failed_reason: string | null;
    duration: number | null;
    charge: number | null;
  }>;
}

export const BROADCAST_IDS: Record<string, number> = {
  customer_add: 2796,
  electrician_assigned: 2927,
  technician_assigned: 2926,
  service_requested: 2795,
  installation_complete: 2556,
  customer_due: 1525,
  customer_dashboard_disabled: 1976,
  admin_add_virtual_balance: 2928,
  service_complete: 1523,
  battery_health_check: 3486,
};

/**
 * Helper to get the specific broadcast ID from the hardcoded dictionary.
 */
export function getBroadcastId(key: string): number {
  return BROADCAST_IDS[key] || 0;
}

/**
 * Helper to trigger a voice call without blocking the main thread.
 * Wraps sendVoiceBroadcast in a try...catch block.
 */
export function triggerVoiceCall(type: string, phone: string, title?: string) {
  // Fire and forget, don't block
  setTimeout(async () => {
    try {
      const broadcast_id = getBroadcastId(type);
      if (!broadcast_id) {
        console.warn(`No broadcast ID found for type: ${type}`);
        return;
      }

      const cleanPhone = phone.replace(/\+/g, "");
      const numbers = [
        cleanPhone.startsWith("880")
          ? cleanPhone
          : cleanPhone.startsWith("0")
            ? `88${cleanPhone}`
            : cleanPhone,
      ];

      const rawTitle = title || `Automated call ${type}`;
      const safeTitle = rawTitle
        .replace(/[^a-zA-Z0-9\s\u0980-\u09FF-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      await sendVoiceBroadcast({
        title: safeTitle,
        broadcast_id,
        numbers,
      });
      console.log(`Successfully triggered voice call: ${type} to ${phone}`);
    } catch (e) {
      console.error(`Failed to trigger voice call: ${type} to ${phone}`, e);
    }
  }, 0);
}

/**
 * Sends a voice broadcast campaign using the MRAM API.
 */
export async function sendVoiceBroadcast(
  params: SendVoiceBroadcastParams,
): Promise<SendVoiceBroadcastResponse> {
  const apiKey = process.env.MRAM_VOICE_API_KEY;
  const baseUrl =
    process.env.MRAM_VOICE_API_BASE_URL || "https://call.mram.com.bd";
  const defaultSenderId = process.env.MRAM_VOICE_SENDER_ID;
  const isDev = process.env.NODE_ENV !== "production";
  const sendInDev = process.env.MRAM_VOICE_SEND_IN_DEV === "true";

  if (!apiKey) {
    throw new Error(
      "MRAM_VOICE_API_KEY is not configured in environment variables",
    );
  }

  const sender = params.sender || defaultSenderId;
  if (!sender) {
    throw new Error(
      "Sender ID must be provided or configured in MRAM_VOICE_SENDER_ID",
    );
  }

  // Prevent sending real voice calls in dev if not explicitly enabled
  if (isDev && !sendInDev) {
    console.log("[DEV MODE] Voice broadcast simulated:");
    console.dir({
      title: params.title,
      broadcast_id: params.broadcast_id,
      sender: sender,
      numbers: params.numbers,
    });
    return {
      campaign_id: Math.floor(Math.random() * 100000),
      status: "simulated",
      total_calls: params.numbers.length,
    };
  }

  const url = `${baseUrl}/api/send-broadcast-campaign`;
  const body = {
    title: params.title,
    broadcast_id: params.broadcast_id,
    sender: sender,
    numbers: params.numbers,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    if (response.status === 422 && data?.detail === "duplicate request") {
      console.warn(`[MRAM API] Ignored duplicate request for: ${params.title}`);
      return {
        campaign_id: data?.campaign_id || 0,
        status: "duplicate_ignored",
        total_calls: params.numbers.length,
      };
    }
    const errorDetails = data ? JSON.stringify(data) : response.statusText;
    throw new Error(
      `Failed to send voice broadcast (Status: ${response.status}): ${errorDetails}`,
    );
  }

  return data as SendVoiceBroadcastResponse;
}

/**
 * Gets detailed information about a specific voice campaign.
 */
export async function getVoiceCampaignDetails(
  campaignId: number,
): Promise<VoiceCampaignDetails> {
  const apiKey = process.env.MRAM_VOICE_API_KEY;
  const baseUrl =
    process.env.MRAM_VOICE_API_BASE_URL || "https://call.mram.com.bd";

  if (!apiKey) {
    throw new Error(
      "MRAM_VOICE_API_KEY is not configured in environment variables",
    );
  }

  const url = `${baseUrl}/api/campaign/${campaignId}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorDetails = data ? JSON.stringify(data) : response.statusText;
    throw new Error(
      `Failed to get campaign details (Status: ${response.status}): ${errorDetails}`,
    );
  }

  return data as VoiceCampaignDetails;
}
