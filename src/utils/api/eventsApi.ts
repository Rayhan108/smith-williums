//       const res = await fetch(`${process.env.SERVER_URL}/package/allPackage`, {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch experiences");
//   }

//   const data = await res.json();
//   console.log("data------>",data?.data);
//   const packages = data?.data?.result