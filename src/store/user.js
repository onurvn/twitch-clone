import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        username: "Mande",
        title: "They would never understand the pew of the mage   ",
        game: "Apex Legends",
        tag: "Chatting",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-apex.jpg",
        viewers: "17.1K",
      },
      {
        username: "Mariachi",
        title: "Сhallenge c 11600 до top 100 | day 13/60",
        game: "Dota 2",
        tag: "Turkish",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-dota.jpg",
        viewers: "395",
      },
      {
        username: "Harstrem",
        title: "WarCraft III. Night elf Gameplay. KSR Sc2 Cup tonight.",
        game: "Warcraft III",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-warcraft.jpg",
        viewers: "5.4K",
      },
      {
        username: "xNaveCS",
        title: "im just fartin you havent seen shit yet //",
        game: "Valorant",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-valorant.jpg",
        viewers: "117",
      },
      {
        username: "Grimmmmz",
        title: "Live Bitcoin Trading Infos 24/7",
        game: "New World: Aeternum",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-neworld.jpg",
        viewers: "88",
      },
      {
        username: "Japonbu",
        title: "(JP/TR) EFETE !dc !yt",
        game: "Escape From Tarkov",
        tag: "Turkish",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-tarkov.jpg",
        viewers: "733",
      },
      {
        username: "HIBAKO",
        title: "PGS 5 WatchParty 14:00 !Gcoin CРОЧНО ЗАХОДИ!",
        game: "PUBG: BATTLEGROUNDS",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-pubg",
        viewers: "231",
      },
      {
        username: "CDawgVA",
        title: "JAPAN RV Stream - THE LAST DAY w/ CHRIS, PETE & LUDWIG",
        game: "Elder Ring",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-chatting.jpg",
        viewers: "3.7K",
      },
    ],
  },
});

export default user.reducer;
