"use client";
import { useState, useEffect } from "react";

const Notice = () => {
	const [notice, setNotice] = useState(null);

	// Fetch notice from the backend API
	useEffect(() => {
		const fetchNotice = async () => {
			try {
				const response = await fetch(
					"https://designskillsbd-backend.onrender.com/api/v1/notices"
				);
				const data = await response.json();
				setNotice(data);
			} catch (error) {
				console.error("Failed to fetch notice:", error);
			}
		};

		fetchNotice();
	}, []);

	// If notice is not yet loaded, show a loading message
	if (!notice) {
		return <p>Loading notice...</p>;
	}

	return (
		<div className="bg-green-300 py-2 overflow-hidden">
			<div className="whitespace-nowrap animate-marquee">
				<p className="text-center text-md font-normal text-gray-900 inline-block">
					{notice.content}
				</p>
			</div>
		</div>
	);
};

export default Notice;
