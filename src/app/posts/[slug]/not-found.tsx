import Link from 'next/link';
import { Frown } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import PageHeading from '@/components/PageHeading';

export default function NotFound() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-2">
            <Frown size={48} />
            <PageHeading>404 Not Found</PageHeading>
            <p className='mb-16' data-test="not-found-message">Our bad.  We could not find the post you were looking for.</p>
            <Link
                href="/"
                className={buttonVariants()}
            >
                Go Back Home
            </Link>
        </div>
    );
}