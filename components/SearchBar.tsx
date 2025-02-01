import React from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className='mb-8 w-full relative'>
      <input type="text" className='px-2 h-10 bg-gray-100 border-b-2 focus:outline-none border-b-primary w-full pl-10' placeholder={placeholder} />
      <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 text-primary' />
    </div>
  )
}

export default SearchBar;
