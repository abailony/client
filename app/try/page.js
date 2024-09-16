"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import ItemLists from "@/components/itemLists";

export default function AnimatedPinDemo() {

  let list = [{title : "accternity",h3:"Hello",description: "hello to our"

  },{title : "accternity2",h3:"Hello2",description: "hello to our 2"},{title : "accternity2",h3:"Hello2",description: "hello to our 2"},{title : "accternity2",h3:"Hello2",description: "hello to our 2"},{title : "accternity2",h3:"Hello2",description: "hello to our 2"},{title : "accternity2",h3:"Hello2",description: "hello to our 2"},{title : "accternity2",h3:"Hello2",description: "hello to our 2"},{title : "accternity2",h3:"Hello2",description: "hello to our 2"},{title : "accternity2",h3:"Hello2",description: "hello to our 2"}
  
]

  return (
    (
      <ItemLists items={list} />
    )
  );
}
