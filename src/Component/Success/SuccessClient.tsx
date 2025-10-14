/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { message } from 'antd';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectBooking, resetBooking } from '@/redux/feature/booking/bookingSlice';

type Props = { sessionId: string };

export default function SuccessClient({ sessionId }: Props) {
  const [messageApi, contextHolder] = message.useMessage();
  const booking = useAppSelector(selectBooking);
  const dispatch = useAppDispatch();
  const hasPosted = useRef(false);

  useEffect(() => {
    if (!sessionId || hasPosted.current) return;
    hasPosted.current = true;

    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/create-booking`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...booking,
              stripe_sessionId: sessionId,
              payment_status: 'paid',
            }),
            credentials: 'include',
          }
        );

        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          console.error('Booking creation failed:', data);
          messageApi.error((data as any)?.message || 'Failed to create booking');
          return;
        }

        console.log('Booking created successfully:', data);
        messageApi.success((data as any)?.message || 'Booking created successfully!');
        dispatch(resetBooking());
      } catch (err) {
        console.error('Error creating booking:', err);
        messageApi.error('Something went wrong while creating booking');
      }
    })();
  }, [sessionId, booking, dispatch, messageApi]);

  return (
    <>
      {contextHolder}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>
      </div>
    </>
  );
}
