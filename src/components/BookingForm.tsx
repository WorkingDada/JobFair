"use client";
import { Dayjs } from "dayjs";
import { useState } from "react";
import LocationDateReserve from "./LocationDateReserve";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interfaces";
import { addReservation } from "@/redux/features/bookSlice";
import { useRouter } from "next/navigation";
import TopMenu from "./TopMenu";
import getCompanies from "@/libs/getCompanies";

export default function BookingForm() {
  const [bookDate, setReserveDate] = useState<Dayjs | null>(null);
  const [companyName, setCompany] = useState("");

  const makeReservation = () => {
  };

  const companies = getCompanies()

  return (
    <div className="pt-40 bg-white h-screen">
      <TopMenu />
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          makeReservation();
        }}
      >
        <div className="p-10 flex flex-row grid justify-items-center">
          <div></div>
          <div className="p-10 grid justify-items-center bg-gray-100 rounded-3xl">
            
            <div className="text-3xl font-extrabold items-center justify">
              Create A Booking!
            </div>
            <LocationDateReserve
              onDateChange={(value: Dayjs) => setReserveDate(value)}
              onCompanyChange={(value: string) => setCompany(value)}
            />
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Book
            </button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}