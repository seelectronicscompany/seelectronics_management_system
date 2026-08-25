# Elit Call API Documentation

## Introduction
The Elit Call API allows you to create and manage voice broadcast campaigns. You can send voice messages to multiple phone numbers simultaneously using our platform.

**Base URL:**
```
https://call.mram.com.bd
```

## Authentication
All API requests require authentication using your API key.

**Header Format:**
```
Authorization: Bearer YOUR_API_KEY
```

---

## API Endpoints

### 1. Create a Voice Broadcast Campaign
Create and queue a voice broadcast campaign.

**Endpoint:** `POST /api/send-broadcast-campaign`

#### Request Parameters (Body)

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | string | Yes | Campaign title (alphanumeric, spaces, Bengali characters) |
| `broadcast_id` | number | Yes | ID of the approved voice broadcast to send |
| `sender` | string | Yes | Sender number (digits only) |
| `numbers` | array | Yes | Phone numbers in format `8801XXXXXXXXX` (1-1000 numbers) |

#### Example Request
```javascript
const response = await fetch('https://call.mram.com.bd/api/send-broadcast-campaign', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    title: 'Monthly Newsletter Campaign',
    broadcast_id: 12345,
    sender: '1234567890',
    numbers: [
      '8801712345678',
      '8801787654321'
    ]
  })
});

const data = await response.json();
console.log('Campaign created:', data.campaign_id);
```

#### Response Fields

| Field | Type | Description |
| :--- | :--- | :--- |
| `campaign_id` | number | Unique identifier for the created campaign |
| `status` | string | Current campaign status (always "processing" for new campaigns) |
| `total_calls` | number | Total number of calls scheduled for this campaign |

---

### 2. Get Campaign Details
Get detailed information about a specific campaign.

**Endpoint:** `GET /api/campaign/{campaign_id}`

#### URL Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaign_id` | number | Yes | Unique identifier of the campaign to retrieve |

#### Response Structure

**Campaign Object:**

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | number | Unique campaign identifier |
| `title` | string | Campaign title |
| `status` | string | Campaign status: "pending", "processing", "complete", or "failed" |
| `total` | number | Total number of calls in the campaign |
| `failed_reason` | string \| null | Reason why campaign failed (if status is "failed") |

**Stats Object:**

| Field | Type | Description |
| :--- | :--- | :--- |
| `total_calls` | number | Total number of calls processed |
| `new_calls` | number | Number of calls not yet processed |
| `answered_calls` | number | Number of calls that were answered |
| `no_answer_calls` | number | Number of calls with no answer |
| `rejected_calls` | number | Number of calls that were rejected |
| `failed_calls` | number | Number of calls that failed |
| `timeout_calls` | number | Number of calls that timed out |
| `unknown_calls` | number | Number of calls with unknown status |

**Calls Array:**
> **Note:** Individual call details are only included for completed campaigns with less than 2000 calls. For campaigns with 2000+ calls, a message will be provided directing you to use the paginated API endpoint.

| Field | Type | Description |
| :--- | :--- | :--- |
| `phone_number` | string | Phone number that was called |
| `status` | string | Call status: "answered", "no_answer", "rejected", "failed", "timeout", "unknown" |
| `failed_reason` | string \| null | Reason why call failed (if status is "failed") |
| `duration` | number \| null | Call duration in seconds (for answered calls) |
| `charge` | number \| null | Call charge amount |

---

## Error Codes

| Status Code | Error Title | Description | Example Message |
| :--- | :--- | :--- | :--- |
| **401** | Unauthorized | Authentication failed or API key is invalid. | `"invalid api_key"` |
| **402** | Payment Required | Insufficient account balance to process the campaign. | `"insufficient account balance"` |
| **404** | Not Found | Requested resource not found or not accessible to your account. | `"sender not found"`, `"voice not found"`, `"voice not approved"` |
| **409** | Conflict | Account configuration issue preventing campaign creation. | `"account configuration issue"` |
| **422** | Unprocessable Entity | Request data is invalid or violates business rules. | `"duplicate request"` |
| **503** | Service Unavailable | Temporary server issue. Please retry your request after a short delay. | `"server encountered a problem, please try again later"` |
