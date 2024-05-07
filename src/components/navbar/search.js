'use client'

import { AiOutlineSearch } from "react-icons/ai"

export default function Search({ pathName,
    router,
    searchQuery,
    setSearchQuery,
    setPageLoader,
    setShowSearchBar }) {
    return <div className="hidden md:flex justify-center items-center text-center">
        <div className="bg-[rgba(0,0,0,0.75)] border border-[hsla(0,0%,100%,0.85)] px-4 items-center flex">
            <input
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Movies, TV and more"
                className="bg-transparent text-[14px] font-medium h-[34px] px-2 py-2 placeholder:text-[14px] font-md text-white outline-none w-[210px]"
            />

        </div>
        <button className="px-2.5">
            <AiOutlineSearch onClick={() => setShowSearchBar(false)}
                className="hidden sm:inline sm:w-6 sm:h-6 cursor-pointer"
            />

        </button>
    </div>
}