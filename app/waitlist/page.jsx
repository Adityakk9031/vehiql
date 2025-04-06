"use client";

import React from "react";
import Head from "next/head";

export default function WaitlistPage() {
  return (
    <>
      <Head>
        <title>Waitlist</title>
      </Head>
      <div className="mt-20 fixed w-full">
        <div className="aspect-video w-full">
          <iframe 
            style={{ width: "100%" }}  
            height="569" 
            src="https://vehicil-waitlist.created.app" 
            title="Waiting List Landing Page"
            frameBorder="0"
          />
        </div>
      </div>
    </>
  );
}