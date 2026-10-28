import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "ZORO-MD Bot",
        body: "ZORO-MD",
        thumbnail: fs.readFileSync("./database/menu.jpg"),
        sourceUrl: "https://whatsapp.com/channel/0029Vb9dwzrHQbRzkgGPVP3L",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
