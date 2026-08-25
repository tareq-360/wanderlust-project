import Link from 'next/link';
import { Button, Card, CloseButton } from "@heroui/react";
import React from 'react';
import { LuMoveLeft, LuMoveUpRight } from 'react-icons/lu';
import { MdOutlineDownloadDone } from 'react-icons/md';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log("id = ",id);
    const res = await fetch(`http://localhost:5000/details/${id}`);
    const data = await res.json();

    // console.log(data);

    return (
        <div className=' font-extrabold text-red-600'>
            {/* <Link href={`/cards`}>
                <button className=' btn btn-primary'> <LuMoveLeft />
                    Back</button>
            </Link> */}
            <Card key={data._id} className="flex  w-full items-stretch">
                <div className="relative  shrink-0 overflow-hidden rounded-2xl ">
                    <img
                        alt="Cherries"
                        className="pointer-events-none h-[400px] w-full scale-125 object-cover select-none"
                        loading="lazy"
                        src={data.imageUrl}
                    />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pe-8">{`${data.destinationName} || ${data.country}`}</Card.Title>
                        <Card.Description>
                            {data.description}
                        </Card.Description>
                        <CloseButton aria-label="Close banner" className="absolute end-3 top-3" />
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">{data.duration}</span>
                            <span className="text-xs text-muted">Submission Data {data.departureDate}</span>
                        </div>
                        <Link href={"/"}>
                            <button className="btn btn-outline btn-primary">
                                Book Now <MdOutlineDownloadDone />
                            </button>

                        </Link>
                    </Card.Footer>
                </div>
            </Card >
        </div >
    );
};

export default DestinationDetailsPage;