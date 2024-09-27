import React, { useState, useEffect } from "react";
import './table.css'

interface Header {
	key: string;
	label: string;
}

interface DataItem {
	[key: string]: string | number; // Assuming data is either string or number
}

interface TableComponentProps {
	data: DataItem[];
	headers: Header[];
	title: String;
	hideIconClass:String;
	textClass:String
}

interface SortConfig {
	key: string | null;
	direction: "ascending" | "descending" | "";
}



const TableComponent: React.FC<TableComponentProps> = ({ data, headers, title = "Transaction", hideIconClass = '', textClass = '' }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: "" });
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [itemsPerPage] = useState<number>(10);

	// Searching data
	const filteredData = data.filter((row) =>
		headers.some((header) =>
			row[header.key]
				.toString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		)
	);

	// Sorting data
	const sortedData = [...filteredData].sort((a, b) => {
		if (!sortConfig.key) return 0;

		const valA = a[sortConfig.key!];
		const valB = b[sortConfig.key!];

		if (typeof valA === "number" && typeof valB === "number") {
			// Numeric sorting for the SN column (and any other numeric fields)
			if (sortConfig.direction === "ascending") {
				return valA - valB;
			} else {
				return valB - valA;
			}
		} else {
			// String sorting for all other columns
			const stringA = valA.toString().toLowerCase();
			const stringB = valB.toString().toLowerCase();

			if (sortConfig.direction === "ascending") {
				return stringA > stringB ? 1 : -1;
			} else {
				return stringA < stringB ? 1 : -1;
			}
		}
	});


	// Pagination logic
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(sortedData.length / itemsPerPage);

	const requestSort = (key: string) => {
		let direction: "ascending" | "descending" = "ascending";
		if (sortConfig.key === key && sortConfig.direction === "ascending") {
			direction = "descending";
		}
		setSortConfig({ key, direction });
	};

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	// Generate page numbers array (showing max 5 pages at a time)
	const getPageNumbers = () => {
		const pageNumbers = [];
		const maxVisiblePages = 5;

		let startPage = Math.max(1, currentPage - 2);
		let endPage = Math.min(totalPages, currentPage + 2);

		if (endPage - startPage < maxVisiblePages - 1) {
			startPage = Math.max(1, endPage - (maxVisiblePages - 1));
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}

		return pageNumbers;
	};

	const tokensColorClass = (data:any, key:any) => {
		console.log(data,"datat",key);
		if(key === 'Tokens' && data.includes('+123854')){
			return "positive";
		} else if (key === 'Tokens' && data.includes('+5854')){
			return "negative"
		}
		return 0
	}

	return (
		<div className="container mx-auto p-4 parent-table table-wrapper">
			<div className="mb-4 flex justify-between items-center">
				<div className="text-white">
					<span className="table-title">{title}</span>
				</div>
				<div className="w-96 search-input-width relative">
					<svg
						width="18"
						height="18"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute search-logo-position transform -translate-y-1/2 text-gray-400"
					>
						<path
							d="M6.43951 12.8742C7.86961 12.8742 9.25881 12.397 10.3871 11.5181L14.6436 15.7753C14.9616 16.0824 15.4682 16.0736 15.7753 15.7556C16.0749 15.4454 16.0749 14.9536 15.7753 14.6434L11.5188 10.3862C13.6994 7.57875 13.1916 3.53486 10.3846 1.35393C7.57756 -0.827011 3.53433 -0.319146 1.35372 2.48831C-0.826885 5.29577 -0.319097 9.33965 2.48793 11.5206C3.61802 12.3986 5.00846 12.8749 6.43951 12.8742ZM3.01943 3.01743C4.90831 1.12824 7.97077 1.1282 9.85968 3.01736C11.7486 4.90652 11.7486 7.96945 9.85975 9.85865C7.97088 11.7478 4.90841 11.7479 3.0195 9.85872C3.01947 9.85868 3.01947 9.85868 3.01943 9.85865C1.13056 7.98325 1.11943 4.93149 2.99454 3.04233C3.00283 3.034 3.01111 3.02572 3.01943 3.01743Z"
							fill="#9197A4"
						/>
					</svg>

					<input
						type="text"
						placeholder="Search here"
						className="pl-10 border rounded w-full text-white search-input-box"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

			</div>
			<table className="min-w-full table-auto border-collapse">
				<thead>
					<tr>
						{headers.map((header) => (
							<th
								key={header.key}
								onClick={() => requestSort(header.key)}
								className={`cursor-pointer px-4 py-4 text-white table-border-bottom table-header ${textClass}`}
							>
								<div className="flex gap-2 justify-center items-center">
									{header.label}{" "}
									<div className={`${hideIconClass}`}>
										<svg width="8" height="8" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 3.88099V2.94766L1.97867 0.968994L3.95733 2.94766V3.88099H0Z"
												fill={sortConfig.key === header.key ? (
													sortConfig.direction === "ascending" ? "#5367FE" : "#C1C6CD"
												) : "#C1C6CD"} fill-opacity="0.5" />
										</svg>
										<svg width="8" height="8" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.95733 0.588135V1.52147L1.97867 3.50013L0 1.52147V0.588135H3.95733Z"
												fill={sortConfig.key === header.key ? (
													sortConfig.direction === "descending" ? "#5367FE" : "#C1C6CD"
												) : "#C1C6CD"} fill-opacity="0.5" />
										</svg>
									</div>
								</div>

							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentItems.length > 0 ? (
						currentItems.map((row, index) => (
							<tr key={index} className="border-t">
								{headers.map((header) => (
									<td
										key={header.key}
										className="px-5 py-5 text-center text-white table-border-bottom "
									>
										<span className={`${header.key} ${row[header.key]} ${tokensColorClass(row[header.key],header.key)}`}>
											{row[header.key]}
										</span>
									</td>
								))}
							</tr>
						))
					) : (
						<tr>
							<td colSpan={headers.length} className="px-4 py-2 text-center text-white">
								No results found
							</td>
						</tr>
					)}
				</tbody>
			</table>

			{/* Pagination */}
			<div className="mt-7 flex justify-between items-center space-x-2">
				<div>
					<span className="text-[#9197A4] letter-spacing-1px">1-10 of {data.length} pairs</span>
				</div>
				
				<div>
					{/* Previous button */}
					<button
						className="px-3 py-1 rounded disabled:opacity-80"
						disabled={currentPage === 1}
						onClick={() => handlePageChange(currentPage - 1)}
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0_2_359" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
								<rect width="20" height="20" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_2_359)">
								<path d="M12 15L7 10L12 5L13.0625 6.0625L9.125 10L13.0625 13.9375L12 15Z" fill="#9197A4" />
							</g>
						</svg>

					</button>

					{/* Page numbers */}
					{getPageNumbers().map((pageNumber) => (
						<button
							key={pageNumber}
							className={`px-3 py-1 rounded ${pageNumber === currentPage
								? "pagination-bg-active"
								: "pagination-non-active"
								}`}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</button>
					))}

					{/* Ellipsis for last pages */}
					{currentPage + 2 < totalPages && (
						<>
							<button
								className="px-3 py-1 pagination-non-active"
								onClick={() => handlePageChange(totalPages)}
							>
								{totalPages}
							</button>
						</>
					)}

					{/* Next button */}
					<button
						className="px-3 py-1 rounded disabled:opacity-80"
						disabled={currentPage === totalPages}
						onClick={() => handlePageChange(currentPage + 1)}
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0_2_362" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
								<rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_2_362)">
								<path d="M8 15L13 10L8 5L6.9375 6.0625L10.875 10L6.9375 13.9375L8 15Z" fill="white" />
							</g>
						</svg>

					</button>
				</div>
			</div>
		</div>
	);
};

export default TableComponent;
