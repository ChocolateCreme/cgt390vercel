import { memo } from "react";

const Filters = memo(({titles, title, name, handleChange, handleSearch, handleClick}) => {
    return(
        <div className="filter-container">
            <div className="filter-dropdown">
                <label htmlFor="title">Select A Title:</label>
                <select id="title" onChange={handleChange} value={title}>
                    <option value="">All</option>
                    {
                        titles.map(title => <option key={title} value={title}>{title}</option>)
                    }
                </select>
            </div>
            <div className="filter-search">
                <label htmlFor="search">Search A Name:</label>
                <input id="search" onChange={handleSearch} value={name}/>
            </div>
            <button onClick={handleClick}>Clear</button>
        </div>
    )
})

export default Filters;