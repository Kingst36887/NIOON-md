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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tOekhTdkRiTnRHREt2QUR0L2lJcVM5Y1JZZkp1WVU0aUtlMkU4QlFYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlVCZjJ3WGVXU21Gck5uNEphTzhvV04yNS8rOEVyeXM1aE51R1pYUlpraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4THFoN1o4MlhZTnhRaHF4MUprYnFxa0I0dzNZbndXOXU4UDR4aEE0SEUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4eXhqTG10Y2Q3eEZ6QVg2RmVsZnJJT1laVE50Mm9uTTJlRFJrbXRkWkE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9PL0JzYUlWelBMZmJBdHZHek5uQnhXTkkrbUp3TWFFUHpVNm0rZmpTbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFTa1ZhMURzckpiQk9IbHBuUS9oM3k2TlRoNXpDS0laakZHVUo3MkYvaFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0N5eWpkYkFablY3aUUrT2VjZld3b2libWV1ZEtHVHBFMmQ5RTh0MFgxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVVTZEVYMUtJOHlEY0pPakRWZGdQSmxoSDNSWkp4WXUyWEV5eWM0UnBFaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt1aitsYWZucVVtcGVwVGxCSXVlNkhNS05SR05xL00rMy9LVUljZEMrSzlua29pdmxvMlFHK3BpY1ByeFJTM2NZNlZEMVVzaXduQTdVMitIQS9qdGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6InRvaTlZbE5MUWNQMjJQRnJ4ZzkyNVV3TDdQc2FUZDBobXRNRkg3SGZhWVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlcxVmF6MHNuVFNDRjUtU2xBR1ljOHciLCJwaG9uZUlkIjoiNDdjNDQyMjktYzViMi00ZmM4LTkyOWQtZTg5MzdjMTBmNmVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InplcTZqR0lpdytRU1pSd3lWSHN0Vml3amU4UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoK3dMV2pOL3lXWXMvcUZua3FVVG8yVlg1SjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkJYSDlUTEYiLCJtZSI6eyJpZCI6Ijk0NzUzNDAwNTM2Ojc2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU4NjYxMDQxMjI5ODU5Ojc2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWJzdkpnSEVPdTNnY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNzVuRGVQZTN2ZFNLWkFZTTg5bFZibUsxczFYbjhRQUZlUVJkVExuNnBCTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmxrM0w1aitLTEhzMHBQVE41VkxjV1N0d1lSN0JrZGZRL3I1WHN0dUJtOHZlZVQxRThsN3J0cTAralo0Z3FtZHdxcVc1VzRvWHp2bTZEaGpxWHg5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlBYMlI3MDNFSXFnTlc3bWRVQUpab3lPWC9xdjMxd1JybkIwcGRURHhpc3NPbm1CVW1Vc0gxbG5YSEMwT1RCNFpjTmw0T2dWckptQlNLZFdBOTlGSGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTM0MDA1MzY6NzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZStadzNqM3Q3M1VpbVFHRFBQWlZXNWl0Yk5WNS9FQUJYa0VYVXk1K3FRVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzM5NzY5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
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
