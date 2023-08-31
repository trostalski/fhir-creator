import Layout from "@/components/Layout";
import { TextDisplay } from "@/components/annotator/TextDisplay";
import { TextInput } from "@/components/annotator/TextInput";
import { Outline } from "@/types";
import React from "react";
import { useState } from "react";

const Annotator = () => {
  const [text, setText] = useState("");
  const [outline, setOutline] = React.useState<Outline>();
  return (
    <Layout>
      <div className="App">
        <TextInput text={text} setText={setText} setOutline={setOutline} />
        <TextDisplay text={text} setText={setText} outline={outline} />
      </div>
    </Layout>
  );
};

export default Annotator;
