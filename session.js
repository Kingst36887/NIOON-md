//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VnWEJlQ3hxaWhCQnprOEthcmRpOWhsL3g1TjVQZkxEWXJnUnJwMm0zWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTl6Q212N2ZHNHVMK0U4MWF0TElKRWhoTkIvTGlnOStSc3c2YzNZRVRGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SHNDVzFDRWprYkN3Vm1ncTNSYXVDRFN1ODVxejlCOEt2ZnRpYjNLZGtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTXhuYkNqSXc0WkhhbEhuMHVxWWlSVllUbEFXNnUrdVBoVnVQS3ZsK0RFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCQVFYODF0aGUrSDdnYjNUbXVFRXZ1b0FiYjZRRTh2RVdsWHZWd0c3WFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZNaitKeVNqNk0reXVXNk1MY2plcUVhZEM3ZVd4Vk5xSHVsUjVTbnJlaWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NWSXZTUFI0WlhUZmh0bFkySmkwU040a3RSWnVOaDh2ZWV5eXZCV0Ixcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVdDS0FZdCsrZitueER4VGxDVTRIbGRXVUszbzZUTkJRUnM2OTlwVlBBYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjErSlQ4cEhob3VHVUhHSjgwdjlIalUxS0FpVnhZdFE2Mmgra0NNQXU4RTFZNTdZa0VIMVBZZjhBSElDMGFyRTdaMXMrdUVaeG9FVUZOdVQyb1Q1SWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IlZ6TmQ4b0F0U2NqbVZialJadzRML0FkZmpCcjk1bDU5MFZPN2crKzE4czA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Mjk0Nzg1MTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEE4OUI0QkM2RDE3NEQzRTM0N0E4QTc5NkQ0NzU0QzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM0MjU5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWUx4MS1mcVRSNDJUT2xNZHJRU0N0dyIsInBob25lSWQiOiI3OTFkYzNjMy1lMGQ5LTQzYWItOGMzMS04MDkxZDdjNDBjMDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3BBOWczZ1kvMHJrN015WjRaNG9TRHNyRE1BPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd5a0c0d045bTZ6aURPSHZwaERnV0NtUjV1WT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1N0VaSzdTNiIsIm1lIjp7ImlkIjoiOTQ3Mjk0Nzg1MTM6MThAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMzAxNjM4OTk2Mjk2NDk6MThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL0QzT2dFRVBITmdjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEc2xIVk1DZXpYQWI5RFYraFVuWFdhY25lR21EMWEwcnJPbytqMzQzdlQ0PSIsImFjY291bnRTaWduYXR1cmUiOiI5MmlHLzg2T0J5NTMxeVdzdGhHbkV2dnlLdFRWbjZ0Q1EzU1k5b3NjSnJ1WVF5eEhBbWlGWkVOaEQwNDhnS3VXdVAxU0Q4ZjgwUWYxY0dMcTZuendBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiekJaVllod0U4aWF4RTNWU2JaWisrQ0tMeWIyUjkvNHRaYTB3SzhrblNrYlYrSTE3N05VRjNKd1hCVGtSSG4zZjY5VEV5L3Zwa0VpUzMvZWJ1a1V3anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTQ3ODUxMzoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRN0pSMVRBbnMxd0cvUTFmb1ZKMTFtbkozaHBnOVd0SzZ6cVBvOStONzArIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNDI1OTEsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHcmQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0753400536",
  PASSWORD: 
    process.env.PASSWORD || "Star pay 8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94729478513", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
