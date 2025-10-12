'use client';

import { useEffect, useRef } from 'react';
import { redirect } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { message } from 'antd';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectBooking, resetBooking } from '@/redux/feature/booking/bookingSlice';

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}) {
  const [messageApi, contextHolder] = message.useMessage();
  const sessionId = searchParams.session_id;
  const booking = useAppSelector(selectBooking);
  const dispatch = useAppDispatch();

  const hasPosted = useRef(false); // <--  run-once flag

  useEffect(() => {
    if (!sessionId || hasPosted.current) return; // prevent duplicate
    hasPosted.current = true;

    const createBooking = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/create-booking`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...booking,
            stripe_sessionId:sessionId,
            payment_status:"paid"
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          console.error('Booking creation failed:', data);
          messageApi.error(data.message || 'Failed to create booking');
        } else {
          console.log('Booking created successfully:', data);
          messageApi.success(data.message || 'Booking created successfully!');
          dispatch(resetBooking()); // Clear Redux booking state
        }
      } catch (error) {
        console.error('Error creating booking:', error);
        messageApi.error('Something went wrong while creating booking');
      }
    };

    createBooking();
  }, [sessionId, booking, dispatch, messageApi]);

  if (!sessionId) {
    redirect('/');
  }

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
