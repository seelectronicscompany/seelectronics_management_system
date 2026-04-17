'use client'

import { updateServiceCounter } from "@/actions"
import { Loader2, Minus, Plus } from "lucide-react"
import { useTransition } from "react"
import { toast } from "react-toastify"

interface ServiceCounterProps {
    subscriptionId: string
    servicesCompleted: number
    total: number
    isCompleted: boolean
}

export default function ServiceCounter({ subscriptionId, servicesCompleted, total, isCompleted }: ServiceCounterProps) {
    const [isIncreamentPending, startIncreamentTransition] = useTransition()
    const [isDecreamentPending, startDecreamentTransition] = useTransition()

    const handleUpdate = (action: 'increment' | 'decrement') => {
        const message = action === 'increment'
            ? 'আপনি কি এই মাসের সার্ভিস সম্পন্ন হিসেবে চিহ্নিত করতে চান?'
            : 'আপনি কি শেষ সার্ভিসটি বাতিল করতে চান?'

        if (!window.confirm(message)) return

        if (action === 'increment') {
            startIncreamentTransition(async () => {
                const res = await updateServiceCounter(subscriptionId, action)
                toast(res.message, { type: res.success ? 'success' : 'error', autoClose: 1500 })
            })
        } else {
            startDecreamentTransition(async () => {
                const res = await updateServiceCounter(subscriptionId, action)
                toast(res.message, { type: res.success ? 'success' : 'error', autoClose: 1500 })
            })
        }
    }

    const done = servicesCompleted
    const isPlusDisabled = isCompleted || done >= total || isIncreamentPending
    const isMinusDisabled = done <= 0 || isDecreamentPending

    return (
        <div className="flex items-center justify-center gap-3">
            <button
                title="কমান"
                disabled={isMinusDisabled}
                onClick={() => handleUpdate('decrement')}
                className="p-2 __btn bg-white border disabled:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isDecreamentPending ? <Loader2 className="size-4 animate-spin" color="black" /> : <Minus className="size-4" color="black" />}
            </button>
            <span className={done < total ? 'text-blue-600 font-medium' : 'text-green-600 font-medium'}>
                {done} / {total}
            </span>
            <button
                title="বাড়ান"
                disabled={isPlusDisabled}
                onClick={() => handleUpdate('increment')}
                className="p-2 __btn bg-white border disabled:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isIncreamentPending ? <Loader2 className="size-4 animate-spin" color="black" /> : <Plus className="size-4" color="black" />}
            </button>
        </div>
    )
}