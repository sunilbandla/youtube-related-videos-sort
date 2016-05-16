/**
 * Get related videos, sort them in descending order of views count and
 * replace the list in the page with the sorted list
 */

"use strict";
var container = document.querySelector('#watch-related');
if (container) {
    process(container);
}

function process(container) {
    var videos = container.querySelectorAll('.video-list-item');
    videos = Array.prototype.slice.call(videos);
    if (!videos || videos.length <= 1) {
        return;
    }
    // Sort
    videos.sort(function sortByViewCount(a, b) {
        var countElemA = a.querySelector('.view-count');
        var countElemB = b.querySelector('.view-count');
        if (!countElemA) {
            return -1;
        } else if (!countElemB) {
            return 1;
        }
        // Get text in the view count element
        var countA = countElemA.innerText;
        var countB = countElemB.innerText;
        // Get view count number
        countA = parseInt(countA.split(' ')[0].replace(/,/g, ''));
        countB = parseInt(countB.split(' ')[0].replace(/,/g, ''));
        if (isNaN(countA)) {
            return -1;
        } else if (isNaN(countB)) {
            return 1;
        }
        // Sort in descending order
        return -(countA - countB);
    });
    // Add sorted children
    var lastElement = container.querySelector('#watch-more-related');
    videos.forEach(function (item) {
        container.insertBefore(item, lastElement);
    });
}
