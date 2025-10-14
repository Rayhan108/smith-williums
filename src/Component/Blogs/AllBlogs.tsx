/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'antd';
import DOMPurify from 'isomorphic-dompurify'; // ⬅️ add this

import camel from '@/assests/dumba.png';
import hillCar from '@/assests/hill-car.jpg';
import camping from '@/assests/camping.png';
import sandRide from '@/assests/sand-ride.jpg';
import bikeRide from '@/assests/bike-ride.jpg';

type ApiMeta = { page: number; limit: number; total: number; totalPage: number };
type ApiBlog = { _id: string; title: string; image?: string; article?: string };
type ApiResponse = { success: boolean; data: { meta: ApiMeta; result: ApiBlog[] } };

type BlogItem = {
  id: string;
  title: string;
  description: string;      // plain text excerpt
  imageSrc: string | any;   // remote URL or local fallback
};

export default function AllBlogs() {
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<ApiMeta | null>(null);
  const [rows, setRows] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fallbacks = useMemo(() => [camel, hillCar, camping, sandRide, bikeRide], []);

  const stripHtmlToText = (html?: string) => {
    if (!html) return '';
    // Remove all tags/attrs → returns only text content
    const textOnly = DOMPurify.sanitize(html, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    return textOnly.replace(/\s+/g, ' ').trim(); // normalize spaces
  };

  const truncate = (s: string, n = 260) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);

  const mapToRows = (list: ApiBlog[]): BlogItem[] =>
    list.map((b, idx) => {
      const id = b._id;
      const title = b.title || 'Untitled';

      const clean = stripHtmlToText(b.article);
      const description = truncate(clean, 260);

      const remote = (b.image || '').trim();
      const validRemote = remote && !/\/undefined$/.test(remote) && !/^undefined$/i.test(remote) ? remote : '';
      const imageSrc = validRemote || fallbacks[idx % fallbacks.length];

      return { id, title, description, imageSrc };
    });

  const fetchPage = async (p: number) => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog/allBlogs?page=${p}`);
      const json: ApiResponse = await res.json();
      if (!res.ok || !json?.success) throw new Error('Failed to load blogs');

      setMeta(json.data.meta);
      setRows(mapToRows(json.data.result || []));
    } catch {
      setMeta({ page: p, limit: 10, total: 0, totalPage: 0 });
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPage(page); }, [page]);

  return (
    <div className="container mx-auto px-4 py-8 font-nunito">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rows.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {typeof blog.imageSrc === 'string' ? (
              <Image src={blog.imageSrc} alt={blog.title} width={500} height={300} className="w-full h-48 object-cover" />
            ) : (
              <Image src={blog.imageSrc} alt={blog.title} width={500} height={300} className="w-full h-48 object-cover" placeholder="blur" />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <Link href={`/blogs/${blog.id}`} className="text-orange-500 mt-4 block">Read More</Link>
            </div>
          </div>
        ))}
        {!loading && rows.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No blogs found.</div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          current={meta?.page ?? 1}
          total={meta?.total ?? 0}
          pageSize={meta?.limit ?? 10}
          onChange={setPage}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
