import { useState } from "react";

// ´:[boolean, () => void]´ 'guarantees' that toggleIsLoggedIn is always returned as a function
export function useGlobalState(): [boolean, () => void] {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	function toggleIsLoggedIn() {
		setIsLoggedIn((prev) => !prev);
	}

	return [isLoggedIn, toggleIsLoggedIn];
}
