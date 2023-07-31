browser.action.onClicked.addListener((_tab) => {
	browser.tabs.query({ active: true, currentWindow: true })
		.then(async tabs => {
			let tab = tabs[0];
			
			// Quit if theres no YouTube url
			if (!tab.url.includes("youtube.com/watch?v=") && !tab.url.includes("youtu.be/")) {
				return;
			}

			// Passing the URL to the content script
			let newUrl = `https://9xbud.com/${tab.url}/`;
			await browser.tabs.sendMessage(tab.id, newUrl);
		})
});
