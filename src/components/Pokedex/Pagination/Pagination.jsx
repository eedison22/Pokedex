import './Pagination.css'

const Pagination = ({ totalPages, onNextPage, onBackPage, onChangePage }) => {

    const pagesArray = Array(totalPages).fill().map((_, i)=> i+1)


  return (
    <div className='pagination'>
        <button className='back' onClick={()=> onBackPage()}>Back</button>
        { pagesArray.map((page) => (
        <button className='pages' key={page} onClick={() => onChangePage(page)}>{page}</button>)) }
        <button className='next' onClick={()=> onNextPage()}>Next</button>
    </div>
  )
}

export default Pagination