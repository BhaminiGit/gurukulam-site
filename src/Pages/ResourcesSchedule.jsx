import React from 'react'
import dayjs from "dayjs";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";


const ResourcesSchedule = () => {

  const start = dayjs("2025-09-01");
  const end = dayjs("2025-12-21");

  const sundays = [];
  let current = start;

  // move to first Sunday if start date isn't Sunday
  if (current.day() !== 0) {
    current = current.add(7 - current.day(), "day");
  }

  while (current.isBefore(end) || current.isSame(end, "day")) {
    sundays.push(current);
    current = current.add(7, "day");
  }
  return (
    <div className='w-[100%]'>
      <h2 className='flex font-belanosima text-4xl font-semibold italic text-purple mt-7 justify-center'>Spring 2025 Class Schedule</h2>
      <div className='flex w-[75%] min-h-50  items-center mx-auto my-10'>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Has Class</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sundays.map((date) => (
                <TableRow key={date.format("YYYY-MM-DD")}>
                  <TableCell>{date.format("dddd, MMMM D, YYYY")}</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </div>
  )
}

export default ResourcesSchedule