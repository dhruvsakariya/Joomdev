import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatBubbleIconProps {
  className?: string;
}

export function ChatBubbleIcon({ className }: ChatBubbleIconProps) {
  return <MessageCircle className={cn("h-4 w-4", className)} />;
}
