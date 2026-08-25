import { Button, Card, CloseButton } from "@heroui/react";
import Link from "next/link";
import { LuMoveUpRight } from "react-icons/lu";

const CardPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const data = await res.json();
    // console.log(data);



    return (

        <div className=" grid grid-cols-2 gap-5 py-5">
            {data.map(des =>
                <Card key={des._id} className="flex  w-full items-stretch">
                    <div className="relative  shrink-0 overflow-hidden rounded-2xl ">
                        <img
                            alt="Cherries"
                            className="pointer-events-none h-[300px] w-full scale-125 object-cover select-none"
                            loading="lazy"
                            src={des.imageUrl}
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                        <Card.Header className="gap-1">
                            <Card.Title className="pe-8">{`${des.destinationName} || ${des.country}`}</Card.Title>
                            <Card.Description>
                                {des.description}
                            </Card.Description>
                            <CloseButton aria-label="Close banner" className="absolute end-3 top-3" />
                        </Card.Header>
                        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">{des.duration}</span>
                                <span className="text-xs text-muted">Submission Data {des.departureDate}</span>
                            </div>
                            <Link href={`cards/${des._id}`}>
                                <Button className="w-full btn text-cyan-500 btn-outline sm:w-auto">Book Now <LuMoveUpRight />
                                </Button>
                            </Link>
                        </Card.Footer>
                    </div>
                </Card>)}
        </div>

    );

};

export default CardPage;