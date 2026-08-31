"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDelete } from "react-icons/md";

export function DeleteAlert({id,data}) {

    const delData=async()=>{
        const res= await fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            }
        })
        const data=await res.json();
        redirect("/home")

    }
    return (
        <AlertDialog>
            <Button className=" rounded-none text-red-500 font-bold" variant="outline"><MdDelete></MdDelete> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={delData} slot="close" variant="danger">
                                Delete 
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}