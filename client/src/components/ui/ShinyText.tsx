import { cn } from "@/lib/utils";

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

export default function ShinyText({
    text,
    disabled = false,
    speed = 5,
    className,
}: ShinyTextProps) {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={cn(
                "text-transparent bg-clip-text inline-block font-semibold",
                disabled ? "" : "animate-shine",
                className
            )}
            style={{
                backgroundImage:
                    "linear-gradient(120deg, hsl(222.2, 47.4%, 11.2%) 40%, hsl(24.6, 95%, 53.1%) 50%, hsl(222.2, 47.4%, 11.2%) 60%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
}
