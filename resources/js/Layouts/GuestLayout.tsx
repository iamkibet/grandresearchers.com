import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Nav/Navbar";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <div className="flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-neutral-900">
                <Navbar />
                <div className="w-full mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}
