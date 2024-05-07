import { auth } from '@/lib/auth';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from '@/actions';

export default async function AuthButton({ className }: React.HTMLAttributes<HTMLElement>) {
    const session = await auth();
    if (session?.user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild className={className}>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={session.user?.image ?? ""} alt={session.user?.name ?? ""} />
                            <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {session.user?.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <form action={signOut}>
                        <DropdownMenuItem className='hover:bg-accent' asChild>
                            <Button className="p-0 w-full justify-start hover:cursor-pointer" type="submit" variant="ghost">Log out</Button>
                        </DropdownMenuItem>
                    </form>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    } else {
        return <div className='w-8'></div>
    }
}