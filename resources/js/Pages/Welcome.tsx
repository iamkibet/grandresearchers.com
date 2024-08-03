import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { GiGraduateCap } from "react-icons/gi";
import IconWrapper from "@/Components/IconWrapper";
import { MdCastForEducation } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

interface PageProps<T> {
    auth: any;
    laravelVersion: string;
    phpVersion: string;
}

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Grand Researchers" />
            <GuestLayout>
                <div className="text-black/50">
                    <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
                        <h1 className="font-semibold text-white text-5xl md:text-6xl">
                            <span className="text-[#ff0]">
                                Grand Researchers:
                            </span>{" "}
                            Best Academic Tutoring and Writing Services
                        </h1>
                        <div className="max-w-4xl">
                            <p className="mt-5 text-neutral-400 text-lg">
                                It is a creative hub where imagination meets
                                craftsmanship to transform ideas into tangible
                                realities. At Preline Agency, we specialize in
                                turning conceptual visions into concrete forms,
                                whether it be through design, artistry, or
                                technological innovation.
                            </p>
                        </div>
                    </div>
                    <div className="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
                        <div className="max-w-5xl px-4 xl:px-0 py-8 mx-auto">
                            <div className="max-w-3xl mb-10 lg:mb-14">
                                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                                    Get Started
                                </h2>
                                <p className="mt-1 text-neutral-400">
                                    Our customers agree: we are the best in the
                                    business. Every paper we produce is crafted
                                    from scratch, ensuring originality and
                                    quality, unless otherwise requested by you.
                                    Since our inception in 2016, we have proudly
                                    served over 1,000 students, delivering
                                    exceptional academic support and earning
                                    their trust.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
                                <a
                                    className="group card-content"
                                    href="https://grandresearchers.com/orders/stud/new"
                                >
                                    <div className="mb-5">
                                        <div className="flex items-center text-[#ff0]">
                                            <IconWrapper
                                                icon={GiGraduateCap}
                                                className="h-12 w-12"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <p className="font-semibold text-5xl text-white">
                                                99%
                                            </p>
                                            <h3 className="mt-5 font-medium text-lg text-white">
                                                Our Returning Customers
                                            </h3>
                                            <p className="mt-1 text-neutral-400">
                                                At GrandResearchers.com, our
                                                exceptional service quality
                                                speaks for itself. An impressive
                                                99% of our customers return,
                                                highlighting their trust and
                                                satisfaction. Join our community
                                                of happy clients and experience
                                                top-notch, reliable, and
                                                personalized research services
                                                tailored to your needs.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-auto">
                                        <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                                            Get Started
                                        </span>
                                    </p>
                                </a>

                                <a
                                    className="group card-content"
                                    href="https://grandresearchers.com/orders/stud/new"
                                >
                                    <div className="mb-5">
                                        <div className="flex items-center text-[#ff0]">
                                            <IconWrapper
                                                icon={MdCastForEducation}
                                                className="h-12 w-12"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <p className="font-semibold text-5xl text-white">
                                                98%
                                            </p>
                                            <h3 className="mt-5 font-medium text-lg text-white">
                                                Success Rate
                                            </h3>
                                            <p className="mt-1 text-neutral-400">
                                                At GrandResearchers.com, we
                                                proudly maintain a 98% customer
                                                success rate, demonstrating our
                                                dedication to excellence. Our
                                                clients trust us for reliable,
                                                top-notch research services
                                                tailored to their needs.
                                                Satisfaction and success await
                                                you.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-auto">
                                        <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                                            Join Us
                                        </span>
                                    </p>
                                </a>
                                <a
                                    className="group card-content"
                                    href="https://grandresearchers.com/orders/stud/new"
                                >
                                    <div className="mb-5">
                                        <div className="flex items-center text-[#ff0]">
                                            <IconWrapper
                                                icon={FaUniversity}
                                                className="h-12 w-12"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <p className="font-semibold text-5xl text-white">
                                                100%
                                            </p>
                                            <h3 className="mt-5 font-medium text-lg text-white">
                                                Pricing
                                            </h3>
                                            <p className="mt-1 text-neutral-400">
                                                At GrandResearchers.com, we
                                                offer competitive prices without
                                                compromising quality. Our
                                                clients benefit from top-notch
                                                research services tailored to
                                                their needs at affordable rates.
                                                Quality and value await you
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-auto">
                                        <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] transition focus:outline-none group-focus:border-[#ff0]">
                                            Order Now
                                        </span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-900">
                        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                            <div className="max-w-3xl mb-10 lg:mb-14">
                                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                                    Grand Researchers Reviews
                                </h2>
                                <p className="mt-1 text-neutral-400">
                                    We take pride in our commitment to student
                                    success. Here's what our clients have to say
                                    about our tutoring and assignment help
                                    services.
                                </p>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
                                <div>
                                    <blockquote>
                                        <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                                            Grand Researchers has been a
                                            game-changer for my academic
                                            performance. Their support has been
                                            invaluable.
                                        </p>

                                        <footer className="mt-6">
                                            <div className="flex items-center">
                                                <div className="md:hidden flex-shrink-0">
                                                    <img
                                                        className="size-12 rounded-full"
                                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Student Testimonial"
                                                    />
                                                </div>
                                                <div className="ms-4 md:ms-0">
                                                    <div className="text-base font-semibold text-white">
                                                        Alex Johnson
                                                    </div>
                                                    <div className="text-xs text-neutral-400">
                                                        Computer Science Student
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className="hidden md:block mb-24 md:mb-0">
                                    <img
                                        className="rounded-xl"
                                        src="https://raw.githubusercontent.com/iamkibet/assets/main/grandresearchers/testimonials.avif"
                                        alt="Student Testimonial"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-900">
                        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
                            <div className="border border-neutral-800 rounded-xl">
                                <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                                        <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                                            <svg
                                                className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                                                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                                                <path d="m21 3 1 11h-2" />
                                                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                                                <path d="M3 4h8" />
                                            </svg>
                                            <div className="mt-3 sm:mt-5">
                                                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                                                    1,000+
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                                    Students tutored
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                                            <div className="flex justify-center items-center -space-x-5">
                                                <img
                                                    className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                                                    src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                    alt="Student Image 1"
                                                />
                                                <img
                                                    className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7"
                                                    src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                    alt="Student Image 2"
                                                />
                                                <img
                                                    className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                                                    src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80"
                                                    alt="Student Image 3"
                                                />
                                            </div>
                                            <div className="mt-3 sm:mt-5">
                                                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                                                    99%
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                                    Satisfied clients
                                                </p>
                                            </div>
                                        </div>
                                        {/* End Stats */}

                                        {/* Stats */}
                                        <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                                            <svg
                                                className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                                <path d="m2 16 6 6" />
                                                <circle
                                                    cx="16"
                                                    cy="9"
                                                    r="2.9"
                                                />
                                                <circle cx="6" cy="5" r="3" />
                                            </svg>
                                            <div className="mt-3 sm:mt-5">
                                                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                                                    3,000+
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                                    Assignments completed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-900">
                        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
                            <div className="max-w-3xl mb-10 lg:mb-14">
                                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                                    Our Approach
                                </h2>
                                <p className="mt-1 text-neutral-400">
                                    Our dedicated methodology drives our
                                    detailed strategy — from thorough research
                                    and strategic planning to the flawless
                                    execution of our projects and initiatives.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                                <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                                    <img
                                        className="w-full object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Image Description"
                                    />
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <h3 className="text-xs font-medium uppercase text-[#ff0]">
                                            Steps
                                        </h3>
                                    </div>
                                    <div className="flex gap-x-5 ms-1">
                                        <div className="approach-numbers">
                                            <div className="relative z-10 size-8 flex justify-center items-center">
                                                <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                                    1
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                                            <p className="text-sm lg:text-base text-neutral-400">
                                                <span className="text-white">
                                                    Initial Research and
                                                    Insights:
                                                </span>
                                                Delve deep into understanding
                                                the context, history, and
                                                current state of the field.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5 ms-1">
                                        <div className="approach-numbers">
                                            <div className="relative z-10 size-8 flex justify-center items-center">
                                                <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                                    2
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                                            <p className="text-sm lg:text-base text-neutral-400">
                                                <span className="text-white">
                                                    Strategic Planning:
                                                </span>
                                                Develop a well-informed plan of
                                                action tailored to achieving
                                                specific research goals.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5 ms-1">
                                        <div className="approach-numbers">
                                            <div className="relative z-10 size-8 flex justify-center items-center">
                                                <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                                    3
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                                            <p className="text-sm md:text-base text-neutral-400">
                                                <span className="text-white">
                                                    Implementation and
                                                    Development:
                                                </span>
                                                Execute the research plan,
                                                gathering data and developing
                                                findings with precision.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5 ms-1">
                                        <div className="approach-numbers">
                                            <div className="relative z-10 size-8 flex justify-center items-center">
                                                <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                                    4
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grow pt-0.5 pb-8 sm:pb-12">
                                            <p className="text-sm md:text-base text-neutral-400">
                                                <span className="text-white">
                                                    Analysis and Reporting:
                                                </span>
                                                Analyze the collected data and
                                                report the findings, providing
                                                actionable insights and
                                                recommendations.
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                                        href="https://grandresearchers.com/orders/stud/new"
                                    >
                                        <svg
                                            className="flex-shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            <path
                                                className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                                                d="M14.05 2a9 9 0 0 1 8 7.94"
                                            ></path>
                                            <path
                                                className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                                                d="M14.05 6A5 5 0 0 1 18 10"
                                            ></path>
                                        </svg>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-900">
                        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                            <div className="max-w-3xl mb-10 lg:mb-14">
                                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                                    Contact us
                                </h2>
                                <p className="mt-1 text-neutral-400">
                                    Whatever your goal - we will get you there.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                                <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                                    <form>
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="hs-tac-input-name"
                                                    className="contact-textarea"
                                                    placeholder="Name"
                                                />
                                                <label
                                                    htmlFor="hs-tac-input-name"
                                                    className="contact-label"
                                                >
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="hs-tac-input-email"
                                                    className="contact-textarea"
                                                    placeholder="Email"
                                                />
                                                <label
                                                    htmlFor="hs-tac-input-email"
                                                    className="contact-label"
                                                >
                                                    Email
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <textarea
                                                    id="hs-tac-message"
                                                    className="peer contact-textarea"
                                                    placeholder="This is a textarea placeholder"
                                                ></textarea>
                                                <label
                                                    htmlFor="hs-tac-message"
                                                    className="contact-label"
                                                >
                                                    Talk to us
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <p className="text-xs text-neutral-500">
                                                All fields are required
                                            </p>

                                            <p className="mt-5">
                                                <a
                                                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                                                    href="#"
                                                >
                                                    Submit
                                                    <svg
                                                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5  group-focus:translate-x-0.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="m12 5 7 7-7 7" />
                                                    </svg>
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>

                                <div className="space-y-14">
                                    <div className="flex gap-x-5">
                                        <svg
                                            className="flex-shrink-0 size-6 text-neutral-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Our Location
                                            </h3>
                                            <p className="text-neutral-400">
                                                27 W 24th St, New York, <br />{" "}
                                                NY 10010, USA
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <svg
                                            className="flex-shrink-0 size-6 text-neutral-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m22 12-4-2v4ZM2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm8 5 4-2-4-2Z" />
                                        </svg>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Email us
                                            </h3>
                                            <p className="text-neutral-400">
                                                info@grandresearchers.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <svg
                                            className="flex-shrink-0 size-6 text-neutral-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.88 19.88 0 0 1-8.63-3.13 19.4 19.4 0 0 1-6-6A19.88 19.88 0 0 1 2 6.18 2 2 0 0 1 4 4h3a2 2 0 0 1 2 1.72 12.47 12.47 0 0 0 .73 2.82 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.47 12.47 0 0 0 2.82.73A2 2 0 0 1 22 16.92Z" />
                                        </svg>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Call us
                                            </h3>
                                            <p className="text-neutral-400">
                                                + (1) 601-843-0499
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
