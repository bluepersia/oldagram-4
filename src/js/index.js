import { getMainFeed } from "./api/feed.js";
import MainFeed from "./components/MainFeed/MainFeed.js";

const data = await getMainFeed();
MainFeed(document.getElementById("main-feed-list"), data);
