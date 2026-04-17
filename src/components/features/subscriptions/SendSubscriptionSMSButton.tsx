'use client'

import { sendSubscriptionServiceSMS } from "@/actions"
import { Loader2, Send } from "lucide-react"
import { useTransition } from "react"
import { toast } from "react-toastify"

interface SendSubscriptionSMSButtonProps {
    subscriptionId: string
    phone: string
    name: string
    subscriptionType: string
    servicesCompleted: number
}

const SubscriptionTypeLabels: Record<string, string> = {
    battery_maintenance: 'ব্যাটারি সাবস্ক্রিপশন',
    ips_and_battery_maintenance: 'আইপি এস ও ব্যাটারি রক্ষণাবেক্ষণ',
    full_maintenance: 'সম্পূর্ণ রক্ষণাবেক্ষণ সাবস্ক্রিপশন',
}

export default function SendSubscriptionSMSButton({ phone, name, subscriptionType, servicesCompleted }: SendSubscriptionSMSButtonProps) {
    const [isPending, startTransition] = useTransition()
    const typeLabel = SubscriptionTypeLabels[subscriptionType] || subscriptionType

    const handleSend = () => {
        const confirmed = window.confirm(`"${typeLabel}" SMS পাঠাতে চান?`)
        if (!confirmed) return

        startTransition(async () => {
            const res = await sendSubscriptionServiceSMS(phone, name, subscriptionType, servicesCompleted)
            toast(res.message, { type: res.success ? 'success' : 'error', autoClose: 1500 })
        })
    }

    return (
        <button title={`${typeLabel} SMS পাঠান`} onClick={handleSend} disabled={isPending} className="disabled:opacity-50">
            {isPending
                ? <Loader2 className="size-6 animate-spin" />
                : <Send className="size-6" color="#3d3b3b" />
            }
        </button>
    )
}