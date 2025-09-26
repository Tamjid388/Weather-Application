import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
export default function SearchBar({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) {
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & { city: { value: string } };
    onSearch(target.city.value);
    target.city.value = "";
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-3xl mx-auto p-2
     "
    >
      <div
        className="
      text-white relative flex-1 "
      >
        <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          className="text-white pl-10 w-full"
          type="text"
          name="city"
          placeholder="Search for a place..."
        />
      </div>

      <Button type="submit" variant="toggle" className=" w-full sm:w-[120px]">
        Search
      </Button>
    </form>
  );
}
