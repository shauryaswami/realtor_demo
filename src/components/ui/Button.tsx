import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
    size?: "sm" | "md" | "lg" | "xl";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-brand-blue text-white hover:bg-brand-blue/90 border border-white/10",
            secondary: "bg-white text-brand-blue hover:bg-white/90",
            outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue",
            ghost: "text-white/80 hover:text-white hover:bg-white/5",
            gold: "bg-brand-gold text-brand-blue hover:bg-brand-gold/90 font-bold shadow-[0_0_20px_rgba(212,160,23,0.3)]",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-5 py-2.5 text-sm",
            lg: "px-8 py-3.5 text-base",
            xl: "px-10 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-poppins font-medium transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
