"use client"
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { Dayjs } from "dayjs"
import getCompanies from "@/libs/getCompanies"


export default function LocationDateReserve({ onDateChange, onCompanyChange }: { onDateChange: Function, onCompanyChange: Function }) {

    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null)
    const [location, setLocation] = useState('CH')

    const companies = getCompanies()

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 justify-center">
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker classNam="bg-white"
                        value={reserveDate}
                        onChange={(value) => {
                            setReserveDate(value);
                            onDateChange(value)
                        }} />
                </LocalizationProvider>
            </div>
            <div className="py-5">
                <Select varient="standard"
                    name="location" id="location" value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                        onCompanyChange(e.target.value)
                    }}
                    className="h-[2em] w-[200px]">
                    {/* MOCK DATA */}
                    <MenuItem value="CH">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="RH">Rajavithi Hospital</MenuItem>
                    <MenuItem value="RUT">Thammasat University Hospital</MenuItem>
                </Select>
            </div>
        </div>
    )
}