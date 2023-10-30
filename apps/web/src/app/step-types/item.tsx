"use client";

import { css } from "@flows/styled-system/css";
import { startFlow } from "@rbnd/flows";
import { useFlowsContext } from "components/flows";
import { ArrowRight16 } from "icons";
import { type FC, type ReactNode } from "react";
import { Button, Dialog, DialogActions, DialogClose, DialogContent, DialogTitle, Text } from "ui";

export type ItemType = {
  title: string;
  description: string;
  visual: React.ReactNode;
  preview?: {
    flowId: string;
    content: ReactNode;
  };
};

export const Item: FC<{ item: ItemType }> = ({ item }) => {
  const { runningFlowIds } = useFlowsContext();
  const isRunning = runningFlowIds.includes(item.preview?.flowId ?? "");
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "space24",
        padding: "space24",
        borderRadius: "radius24",
        borderColor: "border.strong",
        borderWidth: "1px",
        borderStyle: "solid",
        shadow: "l2",
        backgroundColor: "bg.card",

        "& > img": {
          borderRadius: "radius12",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border.strong",
          backgroundColor: "bg.muted",
        },
      })}
      key={item.title}
    >
      {item.visual}
      <div>
        <Text className={css({ marginBottom: "space4" })} variant="titleXs">
          {item.title}
        </Text>
        <Text color="muted">{item.description}</Text>
        {item.preview ? (
          <Dialog
            maxWidth={400}
            trigger={
              <button
                className={css({
                  textStyle: "subtitleL",
                  color: "text.primary",
                  display: "flex",
                  alignItems: "center",
                  gap: "space4",
                  marginTop: "space8",
                  cursor: "pointer",
                  _hover: {
                    "& svg": {
                      transform: "translateX(4px)",
                    },
                  },
                  "& svg": {
                    transition: "transform 120ms ease-out",
                  },
                })}
                type="button"
              >
                View demo
                <ArrowRight16 />
              </button>
            }
          >
            <DialogTitle>{item.title}</DialogTitle>
            <DialogContent>
              <Text className={css({ mb: "space12" })}>{item.description}</Text>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                  backgroundColor: "bg.subtle",
                  borderRadius: "radius12",
                  ...(!isRunning ? { pointerEvents: "none", opacity: 0.5 } : {}),
                })}
              >
                {item.preview.content}
              </div>
            </DialogContent>
            <DialogActions>
              <DialogClose asChild>
                <Button size="small" variant="black">
                  Close
                </Button>
              </DialogClose>
              <Button onClick={() => item.preview && startFlow(item.preview.flowId)} size="small">
                Run
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <Text className={css({ mt: "space8" })} color="disabled" variant="bodyM">
            Preview coming soon
          </Text>
        )}
      </div>
    </div>
  );
};
