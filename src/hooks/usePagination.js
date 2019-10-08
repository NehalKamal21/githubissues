import {useState, useEffect} from 'react';

function usePagination() {
    

const [currentPage, setCurrentPage] = useState(+document.location.pathname.slice(1));

useEffect(() => {
    document.location.replace(currentPage)
}, [currentPage])

return [currentPage, setCurrentPage]

}


export default usePagination;