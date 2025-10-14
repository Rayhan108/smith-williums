/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Rate, message } from 'antd';
import { useForm, Controller } from 'react-hook-form';

type FormValues = {
  user_name: string;
  email?: string;
  rating: number;
  message: string;
  agree: boolean;
};

export default function ReviewForm({
  packageId,
  onAdded,
}: {
  packageId: string;
  onAdded?: (r: { user_name: string; rating: number; message: string; createdAt?: string }) => void;
}) {
  const [msg, ctx] = message.useMessage();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onChange',          // <-- errors clear while typing
    defaultValues: {
      user_name: '',
      email: '',
      rating: 0,
      message: '',
      agree: false,
    },
  });

  const onSubmit = async (v: FormValues) => {
    try {
      const payload = {
        user_name: v.user_name.trim(),
        package_id: packageId,
        rating: v.rating,
        message: v.message.trim(),
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/package/addReview`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        msg.error((data as any)?.message || 'Failed to add review');
        return;
      }

      onAdded?.({
        user_name: payload.user_name,
        rating: payload.rating,
        message: payload.message,
        createdAt: new Date().toISOString(),
      });

      reset();
      msg.success((data as any)?.message || 'Review added successfully!');
    } catch (e) {
      msg.error('Something went wrong while adding your review');
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-200">
      {ctx}
      <h4 className="font-medium mb-3">Share Your Experience</h4>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
        {/* Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="Your name"
            {...register('user_name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name is required' },
            })}
          />
          {errors.user_name && <p className="text-xs text-red-500 mt-1">{errors.user_name.message}</p>}
        </div>

        {/* Email (optional) */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email (optional)</label>
          <input
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="you@example.com"
            {...register('email', {
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Your rating</label>
          <Controller
            name="rating"
            control={control}
            rules={{ validate: (v) => (v ?? 0) > 0 || 'Please select a rating' }}
            render={({ field }) => (
              <Rate allowHalf value={field.value} onChange={(v) => field.onChange(v)} />
            )}
          />
          {errors.rating && <p className="text-xs text-red-500 mt-1">{errors.rating.message}</p>}
        </div>

        {/* Review */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Your review</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded text-sm h-20"
            {...register('message', {
              required: 'Please write a short review',
              minLength: { value: 5, message: 'Please write a short review' },
              maxLength: { value: 500, message: 'Max 500 characters' },
            })}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>

        {/* Agree */}
        <div className="flex items-center text-xs">
          <input
            type="checkbox"
            className="mr-2"
            {...register('agree', { validate: (v) => !!v || 'You must agree' })}
          />
          <span>
            I agree that my submitted data is being <span className="text-orange-500">collected and stored</span>.
          </span>
        </div>
        {errors.agree && <p className="text-xs text-red-500 -mt-2">{errors.agree.message}</p>}

        <button
          type="submit"
          disabled={!watch('agree') || isSubmitting}
          className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors disabled:opacity-60"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
