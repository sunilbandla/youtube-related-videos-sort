// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  if (tab.url && tab.url.match(/youtube\.com\/watch\?v=/)) {
    chrome.tabs.executeScript(null, {
      file: 'content_script_sort.js'
    });
  }
});
