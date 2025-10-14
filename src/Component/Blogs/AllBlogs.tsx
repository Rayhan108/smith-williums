/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'antd';

import camel from '@/assests/dumba.png';
import hillCar from '@/assests/hill-car.jpg';
import camping from '@/assests/camping.png';
import sandRide from '@/assests/sand-ride.jpg';
import bikeRide from '@/assests/bike-ride.jpg';

type ApiMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

type ApiBlog = {
  _id: string;
  title: string;
  image?: string;     // remote URL (may be "undefined" in your sample)
  article?: string;   // blog body/summary
};

type ApiResponse = {
  success: boolean;
  data: { meta: ApiMeta; result: ApiBlog[] };
};

type BlogItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string | any; // string for remote URL, imported image for fallback
};

export default function AllBlogs() {
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<ApiMeta | null>(null);
  const [rows, setRows] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fallbacks = useMemo(() => [camel, hillCar, camping, sandRide, bikeRide], []);

  const mapToRows = (list: ApiBlog[]): BlogItem[] =>
    list.map((b, idx) => {
      const id = b._id;
      const title = b.title || 'Untitled';

      const raw = (b.article ?? '').toString().trim();
      const description =
        raw.length > 260 ? raw.slice(0, 257).trimEnd() + '…' : raw;

      // remote image may be "…/undefined" -> treat as empty
      const remote = (b.image || '').trim();
      const validRemote =
        remote && !/\/undefined$/.test(remote) && !/^undefined$/i.test(remote)
          ? remote
          : '';

      const imageSrc = validRemote || fallbacks[idx % fallbacks.length];

      return { id, title, description, imageSrc };
    });

  const fetchPage = async (p: number) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/allBlogs?page=${p}`,
        { headers: { 'Content-Type': 'application/json' } }
      );
      const json: ApiResponse = await res.json();
      if (!res.ok || !json?.success) throw new Error('Failed to load blogs');

      const m = json.data?.meta;
      const list = json.data?.result ?? [];
      setMeta(m);
      setRows(mapToRows(list));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setMeta({ page: p, limit: 10, total: 0, totalPage: 0 });
      setRows([]);
      // console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePageChange = (p: number) => setPage(p);

  return (
    <div className="container mx-auto px-4 py-8 font-nunito">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rows.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* If imageSrc is a remote string, Next/Image needs the domain in next.config.js */}
            {typeof blog.imageSrc === 'string' ? (
              <Image
                src={blog.imageSrc}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            ) : (
              <Image
                src={blog.imageSrc}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
                placeholder="blur"
              />
            )}

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <Link href={`/blogs/${blog.id}`} className="text-orange-500 mt-4 block">
                Read More
              </Link>
            </div>
          </div>
        ))}

        {!loading && rows.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No blogs found.</div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          current={meta?.page}
          total={meta?.total}
          pageSize={meta?.limit}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
