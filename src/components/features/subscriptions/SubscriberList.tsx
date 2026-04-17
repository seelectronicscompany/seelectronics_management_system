import { getSubscribers } from '@/actions';
import { SearchParams } from '@/types';
import { formatDate } from '@/utils';

import SubscriberActionButtons from './SubscriberActionButtons';
import { CopyButton, StatusBadge } from '@/components/ui';
import ServiceCounter from './ServiceCounter';

export default async function SubscriberList(params: SearchParams) {
  const response = await getSubscribers(params);

  if (!response.success) {
    return <tr>
      <td colSpan={8} className="text-center py-4 text-red-500"><p>{response.message}</p></td>
    </tr>
  }

  if (response.data && response.data.length === 0) {
    return <tr className="border-b">
      <td colSpan={8} className="text-center py-4 text-gray-600">
        <p>No data</p>
      </td>
    </tr>
  }

  const subscribers = response.data!

  return subscribers.map(subscriber =>
    <tr key={subscriber.id} className="border-b">
      <td className="py-4 px-2 whitespace-nowrap">
        <div className="flex items-center">
          <span>{subscriber.subscriptionId}</span>
          <CopyButton content={subscriber.subscriptionId} />
        </div>
      </td>
      <td className="py-4 px-2 whitespace-nowrap">{subscriber.name}</td>
      <td className="py-4 px-2 whitespace-nowrap">{subscriber.phone}</td>
      <td className="py-4 px-2 whitespace-nowrap">{subscriber.district}</td>
      <td className="py-4 px-2 whitespace-nowrap">{formatDate(subscriber.createdAt!)}</td>
      <td className="py-4 px-2 whitespace-nowrap text-center">
        <StatusBadge
          status={
            subscriber.servicesCompleted === subscriber.subscriptionDuration
              ? "completed"
              : "on_going"
          }
        />
      </td>
      <td className="py-4 px-2 whitespace-nowrap text-center">
        <ServiceCounter
          subscriptionId={subscriber.subscriptionId}
          servicesCompleted={subscriber.servicesCompleted}
          total={subscriber.subscriptionDuration}
          isCompleted={subscriber.servicesCompleted === subscriber.subscriptionDuration}
        />
      </td>
      <td className="py-4 px-2 whitespace-nowrap"><SubscriberActionButtons subscriber={subscriber} /></td>
    </tr>
  )
}