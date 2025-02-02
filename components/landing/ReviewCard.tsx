import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewsProps {
  className?: string;
  avatar: string;
  name: string;
  username: string;
  body: string;
}

export const ReviewCard = ({
  avatar,
  name,
  username,
  body,
  className,
}: ReviewsProps) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 hover:bg-gray-950/[.05]",
        className
      )}
    >
      <div className="flex flex-row items-center">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>
              {name ? name.charAt(0).toUpperCase() : ""}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs text-muted-foreground">{username}</p>
          </div>
        </div>
      </div>
      <p className="mt-2 line-clamp-3 overflow-hidden text-ellipsis text-sm">
        {body}
      </p>
    </div>
  );
};
