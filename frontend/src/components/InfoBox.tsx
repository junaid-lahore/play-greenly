import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  text: string;
}

const InfoBox: React.FC<Props> = ({ title, text }) => {
  return (
    <Card className="my-6 bg-green-100 dark:bg-green-900/50 border-green-200 dark:border-green-800">
      <CardContent className="p-6">
        <h4 className="font-bold text-lg mb-2 text-green-900 dark:text-green-100">{title}</h4>
        <div
          className="prose dark:prose-invert max-w-none text-green-800 dark:text-green-200 [&_a]:text-green-900 dark:[&_a]:text-green-100 [&_a:hover]:underline"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </CardContent>
    </Card>
  );
};

export default InfoBox;
