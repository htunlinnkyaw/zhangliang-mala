"use client";

import {useProfileStore} from "@/stores/useProfileStore";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function ProfileInformationSection() {

    const {profile} = useProfileStore();

    return (
        <section className="container mx-auto py-3 flex flex-col gap-4">
            <div className="">
                <h3 className="text-xl font-semibold mb-1">Profile Information</h3>
                <p className="text-xs text-muted-foreground"> All the essential details about this customer in one
                    place
                </p>
            </div>
            <Image
                src={profile?.photo || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                alt="profile-image" width={80} height={80} className="size-20"/>
            <div>
                <h4 className="mb-1">Name</h4>
                <p className="text-sm text-muted-foreground">{profile?.name}</p>
            </div>
            <div>
                <h4 className="mb-1">Email</h4>
                <p className="text-sm text-muted-foreground">{profile?.email}</p>
            </div>
            <div className="flex gap-1">
                <Link href={"/dashboard/profile-information/change-password"}>
                    <Button size={"sm"} variant={"secondary"}>Change Password</Button>
                </Link>
                <Link href={"/dashboard/profile-information/edit-profile"}>
                    <Button size={"sm"} variant={"outline"}>Edit Profile</Button>
                </Link>
            </div>
        </section>
    )
}
