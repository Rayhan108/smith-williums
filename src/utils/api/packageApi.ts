// export const getPackages = async () => {
//   let packages = [];

//   try {
//     const res = await fetch(`${process.env.SERVER_URL}/package/allPackage`, {
//       next: { revalidate: 3600 }, // ISR to revalidate every 1 hour
//     });

//     // Check if the fetch was successful
//     if (!res.ok) {
//       throw new Error("Failed to fetch experiences");
//     }

//     // Parse the response data
//     const data = await res.json();
//     console.log("data------>", data?.data);
//     packages = data?.data?.result || []; // Default to an empty array if no result
//   } catch (error) {
//     // Log the error if the fetch fails
//     console.error("Error fetching data:", error);
//     // You can set packages to an empty array or handle differently in case of an error
//     packages = []; // Optionally, return fallback data here
//   }
// };;