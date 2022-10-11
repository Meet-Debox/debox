import React from "react";
import Head from "next/head";

function HeadHTML({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default HeadHTML;
