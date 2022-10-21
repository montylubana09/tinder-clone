import { IconButton } from "@mui/material";
import React from "react";
import "./SwipeButtons.css";
import {
  Replay,
  Close,
  StarRate,
  Favorite,
  FlashAuto,
} from "@mui/icons-material";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <FlashAuto fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
