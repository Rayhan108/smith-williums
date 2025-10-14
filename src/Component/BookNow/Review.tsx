/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { Empty, Rate, Avatar, Typography } from 'antd';
import ReviewForm from './ReviewForm';

const { Paragraph, Text } = Typography;

type ReviewItem = {
  user_name: string;
  rating: number;
  message: string;
  createdAt?: string;
};

export default function Review({
  review,
  packageId,
}: {
  review?: ReviewItem[];
  packageId: string;
}) {
  const [list, setList] = useState<ReviewItem[]>(Array.isArray(review) ? review : []);

  const handleAdded = (r: ReviewItem) => {
    setList((prev) => [r, ...prev]); // optimistic prepend
  };

  // show the form first
  return (
    <div className='max-w-7xl mx-auto'>
      <ReviewForm packageId={packageId} onAdded={handleAdded} />

      {list.length === 0 ? (
        <Empty className='mb-5' description="No reviews yet" />
      ) : (
        (() => {
          const first = list[0];
          return (
            <div className="border border-gray-200 rounded-xl p-4 bg-white/70 shadow-sm mb-5">
              <div className="flex items-center gap-3 mb-2">
                <Avatar style={{ background: '#f59e0b' }}>
                  {first.user_name?.split(' ').map((s) => s[0]).slice(0, 2).join('').toUpperCase()}
                </Avatar>
                <div>
                  <div className="font-medium">{first.user_name}</div>
                  <div className="text-xs text-gray-500">
                    {first.createdAt ? new Date(first.createdAt).toLocaleDateString() : null}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Rate allowHalf defaultValue={first.rating} disabled />
                <Text className="text-xs text-gray-500">{first.rating}/5</Text>
              </div>

              <Paragraph className="!mb-0 text-gray-700">{first.message}</Paragraph>
            </div>
          );
        })()
      )}
    </div>
  );
}
