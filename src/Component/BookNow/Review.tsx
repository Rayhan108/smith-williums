/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useMemo, useState } from 'react';
import { Empty, Rate, Avatar, Typography, Modal, List, Button, Tag, Divider } from 'antd';
import { EyeOutlined, StarFilled } from '@ant-design/icons';
import ReviewForm from './ReviewForm';

const { Paragraph, Text } = Typography;

type ReviewItem = { user_name: string; rating: number; message: string; createdAt?: string };

export default function Review({ review, packageId }: { review?: ReviewItem[]; packageId: string }) {
  const [list, setList] = useState<ReviewItem[]>(Array.isArray(review) ? review : []);
  const [open, setOpen] = useState(false);

  const count = list.length;
  const first = list[0];

  const handleAdded = (r: ReviewItem) => setList(prev => [r, ...prev]);

  const avg = useMemo(() => {
    if (!count) return 0;
    const sum = list.reduce((a, r) => a + (Number(r.rating) || 0), 0);
    return Math.round((sum / count) * 10) / 10;
  }, [list, count]);

  const initials = (name: string) =>
    name?.split(' ').filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase();

  const formatDate = (d?: string) =>
    d ? new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '';

  return (
    <div className="max-w-7xl mx-auto">
      {/* Top row: title + ALWAYS show 'View all' button */}


      <ReviewForm packageId={packageId} onAdded={handleAdded} />

      {count === 0 ? (
        <Empty className="mb-5" description="No reviews yet" />
      ) : (
        <>
              <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Reviews</h3>
        <Button
          size="middle"
          icon={<EyeOutlined />}
          onClick={() => setOpen(true)}
          disabled={count === 0}
          className={`!rounded-full ${count === 0 ? '!bg-gray-200 !text-gray-400 !border-none' : ''}`}
          title={count === 0 ? 'No reviews yet' : 'View all reviews'}
        >
          View all ({count})
        </Button>
      </div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white/70 shadow-sm mb-4"> 
          <div className="flex items-center gap-3 mb-2">
            <Avatar style={{ background: '#f59e0b' }}>{initials(first.user_name)}</Avatar>
            <div>
              <div className="font-medium">{first.user_name}</div>
              <div className="text-xs text-gray-500">{formatDate(first.createdAt)}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Rate allowHalf defaultValue={first.rating} disabled />
            <Text className="text-xs text-gray-500">{first.rating}/5</Text>
          </div>
          <Paragraph className="!mb-0 text-gray-700">{first.message}</Paragraph>
        </div>
        </>
      )}

      {/* Centered modal */}
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={720}
        styles={{ header: { padding: 0, borderBottom: 'none' }, body: { paddingTop: 0 } }}
        title={
          <div className="relative overflow-hidden rounded-t-xl">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-5">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <div className="text-sm opacity-90">Customer Reviews</div>
                  <div className="text-2xl font-semibold flex items-center gap-2">
                    <StarFilled /> {avg || '—'} <span className="text-base opacity-90">/ 5</span>
                  </div>
                </div>
                <Tag color="gold" className="rounded-full bg-white/20 text-white border-white/30">
                  {count} total
                </Tag>
              </div>
            </div>
          </div>
        }
      >
        <div className="-mt-3">
          <Divider className="!my-4" />
          {count ? (
            <List
              itemLayout="vertical"
              dataSource={list}
              renderItem={(r) => (
                <List.Item>
                  <div className="rounded-xl border border-gray-100 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar style={{ background: '#f59e0b' }}>{initials(r.user_name)}</Avatar>
                      <div>
                        <div className="font-medium">{r.user_name}</div>
                        <div className="text-xs text-gray-500">{formatDate(r.createdAt)}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Rate allowHalf disabled defaultValue={r.rating} />
                      <Text className="text-xs text-gray-500">{r.rating}/5</Text>
                    </div>
                    <Paragraph className="!mb-0 text-gray-700">{r.message}</Paragraph>
                  </div>
                </List.Item>
              )}
            />
          ) : (
            <Empty description="No reviews yet" />
          )}
        </div>
      </Modal>
    </div>
  );
}
