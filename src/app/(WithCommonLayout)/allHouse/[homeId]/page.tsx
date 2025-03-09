

const homeDetailsPage =async ({ params}: {params: Promise<{ homeId: string }>;}) => {
    const {homeId } = await params;
    console.log('updated page',homeId);
    return (
        <div>
            <h2>id is {homeId}</h2>
        </div>
    );
};

export default homeDetailsPage;