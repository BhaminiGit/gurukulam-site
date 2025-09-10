import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
const ResourcesFiles = () => {

  // Dummy files for each class
  const classFiles = {
    dharma: ["Link 1", "Link 2", "Link 3"],
    gita: ["Link 1", "Link 2"],
    bhajans: ["Link 1", "Link 2", "Link 3", "Link 4"],
    fineArts: ["Link 1"],
  };

  return (
    <div>

      <div className='w-[100%]'>
        <h2 className='flex font-belanosima text-4xl font-semibold italic text-purple mt-7 justify-center'>Spring 2025 Class Files</h2>
        <div className='flex w-[75%] min-h-50  items-center mx-auto my-10'>

       <Box
      sx={{
        width: "100%",        // full width
        p: 2,
      }}
    >
      {Object.entries(classFiles).map(([className, files]) => (
        <Accordion key={className} sx={{ mb: 2, width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {className.charAt(0).toUpperCase() + className.slice(1)} Class Files
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {files.map((file, idx) => (
                <ListItem
                  key={idx}
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemIcon>
                    <InsertDriveFileIcon />
                  </ListItemIcon>
                  <ListItemText primary={file} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>

        </div>
      </div>
    </div>
  )
}

export default ResourcesFiles