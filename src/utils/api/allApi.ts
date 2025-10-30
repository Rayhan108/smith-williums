/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/api.js

export const fetchData = async (url:any, options:any) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    const data = await res.json();
    return data?.data?.result || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;  // Rethrow so the caller can handle itt
  }
};
