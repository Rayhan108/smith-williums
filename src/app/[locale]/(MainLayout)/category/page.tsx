/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(MainLayout)/category/page.tsx
"use client";

import Packages from "@/Component/Category/Pakages";
import { getAllPackage } from "@/utils/api/api";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [packages, setPackages] = useState<any>({});
  const [filters, setFilters] = useState({
    activity: "",
    availability: "",
    child_min_age: "",
    max_adult: "",
    page: 1,
  });

  // Fetch packages whenever filters change
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPackage(filters);
      setPackages(res);
    };
    fetchData();
  }, [filters]);

  return (
    <div>
      <Packages packages={packages} setFilters={setFilters} />
    </div>
  );
};

export default Category;
