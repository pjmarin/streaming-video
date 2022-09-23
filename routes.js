const router = require("express").Router();
//const videoController = require("./controllers/videoController");
const audioController = require("./controllers/audioController");

//router.get("/:videoId", videoController.streamVideo);
router.get("/:audioId", audioController.streamAudio);

module.exports = router;