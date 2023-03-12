import { Box, Button, Modal, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Feedback from "../../components/Feedback";
import { THEME } from "../../constants";
import "./indexPage.css";

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={THEME}>
        <Button
          onClick={handleOpen}
          variant="outlined"
          size="large"
          color="info"
        >
          Открыть форму
        </Button>
      </ThemeProvider>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.blockMain}>
          <Feedback />
          <div className="block-close-modal">
            <Button onClick={handleClose} color="error">Закрыть форму</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default IndexPage;

const style = {
  blockMain: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    padding: 0,
  },
};
