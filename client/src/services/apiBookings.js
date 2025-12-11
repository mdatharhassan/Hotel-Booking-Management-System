import api from "../libs/api";

export async function getBookings({ filter, sortBy, page }) {
  console.log(filter, sortBy, page);

  const response = await api.get("/bookings/", {
    params: {
      filter: JSON.stringify(filter),
      sortBy: JSON.stringify(sortBy),
      page,
    },
  });
  return response.data;

  // let query = {};

  // // FILTER
  // if (filter) {
  //   // Example: { field: "status", method: "eq", value: "unconfirmed" }
  //   if (filter.method === "eq") {
  //     query[filter.field] = filter.value;
  //   }

  //   // Add more methods if needed
  //   if (filter.method === "gte") {
  //     query[filter.field] = { $gte: filter.value };
  //   }
  //   if (filter.method === "lte") {
  //     query[filter.field] = { $lte: filter.value };
  //   }
  // }

  // // BASE QUERY
  // let mongoQuery = Booking.find(query)
  //   .select(
  //     "id created_at startDate endDate numNights isPaid numGuests status totalPrice"
  //   )
  //   .populate("cabins", "name") // cabins(name)
  //   .populate("guests", "fullName email"); // guests(fullName, email)

  // // SORT
  // if (sortBy) {
  //   const direction = sortBy.direction === "asc" ? 1 : -1;
  //   mongoQuery = mongoQuery.sort({ [sortBy.field]: direction });
  // }

  // // PAGINATION
  // if (page) {
  //   const skip = (page - 1) * PAGE_SIZE;
  //   mongoQuery = mongoQuery.skip(skip).limit(PAGE_SIZE);
  // }

  // // RUN BOTH QUERY + COUNT
  // const [data, count] = await Promise.all([
  //   mongoQuery.exec(),
  //   Booking.countDocuments(query),
  // ]);

  // return { data, count };
}

export async function getBooking(id) {
  const response = await api.get(`/bookings/${id}`);
  return response.data;
  // try {
  //   const data = await Booking.findById(id)
  //     .populate("cabins") // cabins(*)
  //     .populate("guests"); // guests(*)

  //   if (!data) {
  //     throw new Error("Booking not found");
  //   }

  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Booking not found");
  // }
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
// date: ISOString

export async function getBookingsAfterDate(date) {
  const response = await api.get(`bookings/after-date/${date}`);
  return response.data;
  // try {
  //   const data = await Booking.find(
  //     {
  //       created_at: {
  //         $gte: new Date(date),
  //         $lte: new Date(getToday({ end: true })),
  //       },
  //     },
  //     "created_at totalPrice extrasPrice" // select fields
  //   );

  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Bookings could not be loaded");
  // }
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const response = await api.get(`/bookings/stays-after-date/${date}`);
  return response.data;
  // try {
  //   const data = await Booking.find({
  //     startDate: {
  //       $gte: new Date(date),
  //       $lte: new Date(getToday({ end: true })),
  //     },
  //   }).populate("guests", "fullName"); // guests(fullName)

  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Bookings could not be loaded");
  // }
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const response = await api.get("/bookings/booking/stays-today");
  return response.data;
  // try {
  //   const todayStart = new Date(getToday());
  //   const todayEnd = new Date(getToday({ end: true }));

  //   const data = await Booking.find({
  //     $or: [
  //       // 1️⃣ Arrivals today
  //       {
  //         status: "unconfirmed",
  //         startDate: { $gte: todayStart, $lte: todayEnd },
  //       },

  //       // 2️⃣ Departures today
  //       {
  //         status: "checked-in",
  //         endDate: { $gte: todayStart, $lte: todayEnd },
  //       },
  //     ],
  //   })
  //     .populate("guests", "fullName nationality countryFlag")
  //     .sort({ created_at: 1 }); // order("created_at")

  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Bookings could not be loaded");
  // }
}

export async function updateBooking(id, obj) {
  const response = await api.put(`/bookings/${id}`, obj);
  return response.data;
  // try {
  //   const updatedBooking = await Booking.findByIdAndUpdate(
  //     id,
  //     obj,
  //     { new: true, runValidators: true } // return updated doc
  //   )
  //     .populate("cabins")
  //     .populate("guests");

  //   if (!updatedBooking) {
  //     throw new Error("Booking could not be updated");
  //   }

  //   return updatedBooking;
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Booking could not be updated");
  // }
}

export async function deleteBooking(id) {
  const response = await api.delete(`/bookings/${id}`);
  return response.data;
  // try {
  //   const deletedBooking = await Booking.findByIdAndDelete(id);

  //   if (!deletedBooking) {
  //     throw new Error("Booking could not be deleted");
  //   }

  //   return deletedBooking;
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Booking could not be deleted");
  // }
}
