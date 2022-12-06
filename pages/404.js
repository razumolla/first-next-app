import Link from 'next/link';

function Error() {
    return (
        <div>
            <h3>This is error page </h3>
            <h4>Go to Home page</h4>

            <Link href="/">
                Home
            </Link>
        </div>
    );
}

export default Error;