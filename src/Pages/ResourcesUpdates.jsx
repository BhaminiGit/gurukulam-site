import React from "react";
import dayjs from "dayjs";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  Paper,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ResourcesUpdates = () => {
  const start = dayjs("2025-09-01");
  const end = dayjs();

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

  // Dummy updates for each class
  const classUpdates = {
    dharma: ["Learned about compassion", "Discussion on duties"],
    gita: ["Chapter 2 overview", "Key verses explained"],
    bhajans: ["Sang Hari Bhajans", "Practice for melody"],
    fineArts: ["Drawing session", "Music rhythm practice"],
  };

  return (
    <div className='w-[100%]'>
      <h2 className='flex font-belanosima text-4xl font-semibold italic text-purple mt-7 justify-center'>Spring 2025 Class Updates</h2>
      <div className='flex w-[75%] min-h-50  items-center mx-auto my-10'>

        <Container maxWidth="md" sx={{ mt: 4 }}>
          {sundays.map((date) => (
            <Accordion key={date.format("YYYY-MM-DD")}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  {date.format("dddd, MMMM D, YYYY")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper sx={{ p: 2, mb: 2 }} elevation={1}>
                  <Typography variant="subtitle1">Dharma Class</Typography>
                  <List dense>
                    {classUpdates.dharma.map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                  </List>
                </Paper>

                <Paper sx={{ p: 2, mb: 2 }} elevation={1}>
                  <Typography variant="subtitle1">Gita Class</Typography>
                  <List dense>
                    {classUpdates.gita.map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                  </List>
                </Paper>

                <Paper sx={{ p: 2, mb: 2 }} elevation={1}>
                  <Typography variant="subtitle1">Bhajans</Typography>
                  <List dense>
                    {classUpdates.bhajans.map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                  </List>
                </Paper>

                <Paper sx={{ p: 2, mb: 2 }} elevation={1}>
                  <Typography variant="subtitle1">Other Fine Arts</Typography>
                  <List dense>
                    {classUpdates.fineArts.map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                  </List>
                </Paper>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>

      </div>
    </div>
  );
};

export default ResourcesUpdates;
