import { Video } from "@/types/videos";

const STATIC_VIDEOS: Video[] = [
  {
    id: "v1",
    url: "/portfoliovideos/elevations/statement chair final.mp4",
    title: "Statement Chair",
    description: "A showcase of our statement chair design process.",
  },
  {
    id: "v2", 
    url: "/portfoliovideos/elevations/weekly planner2.mp4",
    title: "Weekly Planner",
    description: "Organize your life with our custom weekly planner.",
  },
   {
    id: "v3",
    url: "/portfoliovideos/HiFuture/HiFuture Ultra 3 Pro v3.mp4",
    title: "HiFuture Ultra 3 Pro",
    description: "Product showcase for HiFuture Ultra 3 Pro.",
  },
  {
    id: "v4",
    url: "/portfoliovideos/memomama/the locals.mp4",
    title: "The Locals",
    description: "Community feedback and local interactions.",
  },
  {
    id: "v5",
    url: "/portfoliovideos/Zuleika/zuleika_by_gahanagriha_1765804717_3788166807468467768_2219775734.mp4",
    title: "Zuleika Showcase",
    description: "Fashion and lifestyle showcase.",
  },
  {
    id: "v6",
    url: "/portfoliovideos/Zuleika/ribbon ring.mp4",
    title: "Ribbon Ring",
    description: "Detailed look at the Ribbon Ring design.",
  },
];

export const useVideos = () => {
  return {
    data: STATIC_VIDEOS,
    isLoading: false,
    error: null,
  };
};
