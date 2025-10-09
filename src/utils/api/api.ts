// // utils/api.js

// export const getAllPackage = async () => {
//   try {
//     const res = await fetch(`${process.env.SERVER_URL}/package/allPackage`, {
//       next: { revalidate: 3600 }, 
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch packages');
//     }

//     const data = await res.json();
//     return data?.data?.result || [];
//   } catch (error) {
//     console.error("Error fetching packages:", error);
//     return []; // Return an empty array if there is an error
//   }
// };

// export const getAllEvents = async () => {
//   try {
//     const res = await fetch(`${process.env.SERVER_URL}/event/allEvents`, {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch events');
//     }

//     const data = await res.json();
//     return data?.data?.result || [];
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return []; // Return an empty array if there is an error
//   }
// };

// export const getAllFaq = async () => {
//   try {
//     const res = await fetch(`${process.env.SERVER_URL}/faq/allFaq`, {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch FAQ');
//     }

//     const data = await res.json();
//     return data?.data?.result || [];
//   } catch (error) {
//     console.error("Error fetching FAQ:", error);
//     return []; // Return an empty array if there is an error
//   }
// };


// utils/api.js

export const getAllPackage = async () => {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/package/allPackage`, {
      next: { revalidate: 3600 }, 
    });

    if (!res.ok) {
      throw new Error('Failed to fetch packages');
    }

    const data = await res.json();
    // Return both the meta and result data
    return {
      meta: data?.data?.meta || {},
      result: data?.data?.result || [],
    };
  } catch (error) {
    console.error("Error fetching packages:", error);
    return { meta: {}, result: [] }; // Return empty meta and result in case of error
  }
};

export const getAllEvents = async () => {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/event/allEvents`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch events');
    }

    const data = await res.json();
    // Return both the meta and result data
    return {
      meta: data?.data?.meta || {},
      result: data?.data?.result || [],
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { meta: {}, result: [] }; // Return empty meta and result in case of error
  }
};

export const getAllFaq = async () => {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/faq/allFaq`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch FAQ');
    }

    const data = await res.json();
    // Return both the meta and result data
    return {
      meta: data?.data?.meta || {},
      result: data?.data?.result || [],
    };
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    return { meta: {}, result: [] }; // Return empty meta and result in case of error
  }
};
