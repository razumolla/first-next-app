function Time({ data }) {
    return (
        <div>
            <h2> {data} </h2>
        </div>
    );
}

export async function getStaticProps(ctx) {


    return {
        props: {
            data: new Date().toISOString(),
        },
        revalidate: 1, //after every 1 sec, page will be automatic rebuild 
    }
}

export default Time;