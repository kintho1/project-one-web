/**
 * Warning: Opening too many live preview tabs will slow down performance.
 * We recommend closing them after you're done.
 */
import React from "react";
import "../global.css";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../../components/Sidebar.tsx";


const ExpertTips = () => {
  const pageId = "experttips";
    return (
      <>
        <Sidebar pageId={pageId} />
        <div className="flex flex-col grow pt-12 pr-12 pb-12 pl-12 rounded-2xl border-slate-100 border-t border-b border-l border-r border-solid border h-[864px] bg-slate-50">

 <p>Proudly sponsored by:</p>

        <Link href="https://www.betfair.com.au/hub/category/expert-tips/">
          <img width="400px" height="400px" src="/assets/betfair_hub.png" alt="BFHUB"></img>
  </Link>
        </div>
      </>
  )
};

export default ExpertTips;