import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { ReactElement } from "react";
import React from "react";
import { Button, Text } from "ui";

export const CtaBanner = (): ReactElement => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "space24",
        alignItems: "center",
        paddingY: "120px",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border",
      })}
    >
      <Image alt="Logo" height={28} src="/images/logo/logo.svg" width={72} />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "space8",
          alignItems: "center",
        })}
      >
        <Text variant="titleM">Join Flows waitlist today</Text>
        <Text variant="bodyM">Be the first one to know about our beta launch.</Text>
      </div>
      <div
        className={css({
          display: "flex",
          gap: "space8",
          alignItems: "center",
        })}
      >
        {/* TODO: make this work */}
        <input placeholder="Enter your email" />
        <Button>Join waitlist</Button>
      </div>
    </div>
  );
};
