import React from 'react';

const page = async ({params}) => {
    const {id} = await params
    return (
        <div>
            I am dynamic product {id}
        </div>
    );
};

export default page;