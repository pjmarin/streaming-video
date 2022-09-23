const fs = require("fs");
module.exports.streamAudio = (req, res) => {
  const range = req.headers.range;
  const audioId = req.params.audioId;
  if (!range) {
    res.status(400).send("Range not provided");
  }
  const audioPath = `./videos/${audioId}.mp3`;
  const audioSize = fs.statSync(audioPath).size;
  const chunkSize = 10 ** 6; // 1 mb
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + chunkSize, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${audioSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "audio/mpeg",
  };
  res.writeHead(206, headers);
  const audioStream = fs.createReadStream(audioPath, { start, end });
  audioStream.pipe(res);
};