import { cva, cx } from "@flows/styled-system/css";
import { styled } from "@flows/styled-system/jsx";
import { Slot, Slottable } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * @defaultValue "medium"
   */
  size?: (typeof button.variantMap.size)[number];
  /**
   * @defaultValue "primary"
   */
  variant?: (typeof button.variantMap.variant)[number];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  asChild?: boolean;
  loading?: boolean;
};

export function Button({
  size = "medium",
  variant = "primary",
  children,
  startIcon,
  endIcon,
  asChild,
  disabled,
  loading,
  ...props
}: Props): JSX.Element {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      type={!asChild ? "button" : undefined}
      {...props}
      className={cx(button({ size, variant }), props.className)}
      disabled={disabled || loading}
    >
      {startIcon ? <Icon position="start">{startIcon}</Icon> : null}
      <Slottable>{children}</Slottable>
      {endIcon ? <Icon position="end">{endIcon}</Icon> : null}
    </Component>
  );
}

const Icon = styled("span", {
  base: {
    display: "inline-flex",
  },
  variants: {
    position: {
      start: {
        marginRight: 8,
      },
      end: {
        marginLeft: 8,
      },
    },
  },
});

const button = cva({
  base: {
    display: "inline-flex",
    cursor: "pointer",
    borderRadius: 8,
    transition: "80ms ease-in-out",
    boxShadow: "l1",
  },
  variants: {
    size: {
      small: {
        textStyle: "subtitleS",
        padding: "5px 11px",
      },
      medium: {
        textStyle: "subtitleL",
        padding: "11px 23px",
      },
    },
    variant: {
      primary: {
        backgroundColor: "bg.primary",
        color: "text.onPrimary",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "bg.primary",
        _hover: {
          borderColor: "bg.primaryHover",
          backgroundColor: "bg.primaryHover",
        },
        _disabled: {
          backgroundColor: "bg.subtle",
          borderColor: "bg.subtle",
          color: "text.subtle",
          pointerEvents: "none",
          boxShadow: "none",
        },
      },
      secondary: {
        color: "text",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "border.primary",
        _hover: {
          backgroundColor: "bg.hover",
        },
      },
      black: {
        backgroundColor: "bg.black",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "bg.black",
        color: "text.white",
        _hover: {
          borderColor: "bg.blackHover",
          backgroundColor: "bg.blackHover",
        },
      },
    },
  },
});
